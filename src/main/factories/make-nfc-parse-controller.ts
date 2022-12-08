import { NfcParserController } from '../../presentation/controllers/nfce-parser-controller'
import { Controller } from '../../presentation/protocols'
import { makeHtmlDownloader } from './make-html-downloader'
import { makeNfcDocumentParser } from './make-nfc-document-parser'
import { makeUrlQRCodeConverter } from './make-qr-code-url-converter'

export const makeNfcParseController = (): Controller => {
  const controller = new NfcParserController(makeUrlQRCodeConverter(), makeHtmlDownloader(), makeNfcDocumentParser())
  return controller
}
