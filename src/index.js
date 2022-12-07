const HTMLParser = require("node-html-parser");
const axios = require("axios");
const { saveObjToJsonFile } = require("./utils/save-obj-to-json-file");
const moment = require("moment");

const nfceElemMapping = {
  0: {
    id: "CompanyName",
  },
  2: {
    id: "Number_Serie_Data",
  },
  5: {
    id: "Key",
  },
  8: {
    id: "ID_Client",
  },
};

function formatNFCeHeaders(queriedHeaders) {
  const formatedHeaders = {};
  queriedHeaders.forEach((el, index) => {
    let value = el.childNodes[0].text;
    switch (nfceElemMapping[index]?.id) {
      case "CompanyName":
        formatedHeaders["companyName"] = value;
        break;
      case "ID_Client":
        formatedHeaders["idClient"] = value.split(":")[1].trim();
        break;
      case "Key":
        formatedHeaders["key"] = value.split(" ").join("");
        break;
      case "Number_Serie_Data":
        const splittedStuff = value.split(":");
        let number = splittedStuff[1].slice(0, splittedStuff[1].indexOf("\n")).trim();
        let serie = splittedStuff[2].slice(0, splittedStuff[2].indexOf("\n")).trim();
        let date = splittedStuff[3].split(" ")[1];
        let hour = splittedStuff[3].split(" ")[2];
        let min = splittedStuff[4];
        let sec = splittedStuff[5];
        let time = `${hour}:${min}:${sec}`;
        let dateTime = moment(`${date} ${time}`, "DD/MM/YYYY HH:mm:ss");
        formatedHeaders["number"] = number;
        formatedHeaders["serie"] = serie;
        formatedHeaders["date"] = dateTime.format("DD/MM/YYYY HH:mm:ss");
        break;
      default:
        break;
    }
  });
  return formatedHeaders;
}
function parseNFCeHTML(html) {
  const root = HTMLParser.parse(html);

  const headersNfce = root.querySelectorAll(".NFCCabecalho_SubTitulo");
  const formatedHeaders = formatNFCeHeaders(headersNfce);

  console.log(formatedHeaders);
  saveObjToJsonFile(formatedHeaders);
  return root.toString();
}

async function downloadHTML(url) {
  try {
    const response = await axios.get(url);

    const parsedHTML = parseNFCeHTML(response.data);
  } catch (error) {
    console.error(error);
  }
}
function main() {
  console.log("running...");
  const url_QRCode =
    // "https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx?p=43221298589096000331650060004431151006167657|2|1|1|33d78eb857cb197f0659d0f41018ace801705be3";
    "https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx?p=43221292665611047483651000002335611168656227|2|1|1|338124ddf168d98e1f1b5907e9db91acefff9449";
  let NFCeKey = url_QRCode.slice(url_QRCode.indexOf("aspx?p="), url_QRCode.length - 1).split("=")[1];

  const url_IFrame = "https://www.sefaz.rs.gov.br/ASP/AAE_ROOT/NFE/SAT-WEB-NFE-NFC_QRCODE_1.asp?p=" + NFCeKey;
  downloadHTML(url_IFrame);
}
setTimeout(() => main(), 200);
