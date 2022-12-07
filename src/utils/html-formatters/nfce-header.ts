import moment from "moment";

export function formatNFCeHeaders(document: any) {
  const headers = document.querySelectorAll(".NFCCabecalho_SubTitulo");
  const formatedHeaders = {
    businessName: '',
    idBusiness:  '',
    ieBusiness:  '',
    number:      '',
    serie:       '',
    date:        '',
    key:         '',
    idClient:    '',
    address:     '',
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
        let number = splittedStuff[1].slice(0, splittedStuff[1].indexOf("\n")).trim();
        let serie = splittedStuff[2].slice(0, splittedStuff[2].indexOf("\n")).trim();
        let date = splittedStuff[3].split(" ")[1];
        let hour = splittedStuff[3].split(" ")[2];
        let min = splittedStuff[4];
        let sec = splittedStuff[5];
        let time = `${hour}:${min}:${sec}`;
        let dateTime = moment(`${date} ${time}`, "DD/MM/YYYY HH:mm:ss");
        formatedHeaders.number = number;
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