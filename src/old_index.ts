import axios from 'axios'
import HTMLParser from 'node-html-parser'
import { saveObjToJsonFile } from './utils'

async function downloadHTML (url: string): Promise<any> {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

function convertSefazURLFromQRCode (urlQRCode: string): string {
  const key = urlQRCode.slice(urlQRCode.indexOf('aspx?p='), urlQRCode.length - 1).split('=')[1]
  const urlIFrame = 'https://www.sefaz.rs.gov.br/ASP/AAE_ROOT/NFE/SAT-WEB-NFE-NFC_QRCODE_1.asp?p=' + key
  return urlIFrame
}

async function main () {
  console.log('running...')

  const url_QRCode =
    // "https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx?p=43221298589096000331650060004431151006167657|2|1|1|33d78eb857cb197f0659d0f41018ace801705be3";
    // "https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx?p=43221292665611047483651000002335611168656227|2|1|1|338124ddf168d98e1f1b5907e9db91acefff9449";
    'https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx?p=43221209149277002018650010000219641577246468|2|1|2|3C5EDD33AAC1503A47100CEAE4664BFF27B5AE23'

  const nfceHtml = await downloadHTML(convertSefazURLFromQRCode(url_QRCode))
  const document = HTMLParser.parse(nfceHtml)
  // const nfParsed = parseNfcHTML(document);

  //  console.log(nfParsed);
  // saveObjToJsonFile(nfParsed, "nfce.json")
}
setTimeout(async () => main(), 200)
