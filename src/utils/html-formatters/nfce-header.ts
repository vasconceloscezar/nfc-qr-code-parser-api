import moment from "moment";
type NFCeHeader = {
  businessName: string
  nfceNumber: string
  serie: string
  key: string
  idClient: string
  date: string
}
export function formatNFCeHeaders(document: any):NFCeHeader {
  const headers = document.querySelectorAll(".NFCCabecalho_SubTitulo");
  const formatedHeaders = {
    businessName: '',
    nfceNumber:     '',
    serie:       '',
    date:        '',
    key:         '',
    idClient:    '',
  };
  headers.forEach((el: any, index: number) => {
    let value = el.childNodes[0].text;
    switch (index) {
      case 0:
        formatedHeaders.businessName = value;
        break;
      case 5:
        formatedHeaders.key = value.split(" ").join("");
        break;
      case 2:
        const splittedStuff = value.split(":");
        let nfceNumber = splittedStuff[1].slice(0, splittedStuff[1].indexOf("\n")).trim();
        let serie = splittedStuff[2].slice(0, splittedStuff[2].indexOf("\n")).trim();
        let date = splittedStuff[3].split(" ")[1];
        let hour = splittedStuff[3].split(" ")[2];
        let min = splittedStuff[4];
        let sec = splittedStuff[5];
        let time = `${hour}:${min}:${sec}`;
        let dateTime = moment(`${date} ${time}`, "DD/MM/YYYY HH:mm:ss");
        formatedHeaders.nfceNumber = nfceNumber;
        formatedHeaders.serie = serie;
        formatedHeaders.date = dateTime.format("DD/MM/YYYY HH:mm:ss");
        break;
      case 8:
        formatedHeaders.idClient = value.split(":")[1].trim();
        break;
      default:
        break;
    }
  });
  return formatedHeaders;
}