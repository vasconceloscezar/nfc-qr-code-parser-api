import { NFcDocumentParser } from '../../data/usecases/nfc-document-parser'
import { NfcParser } from '../../domain/usecases/nfc-parser'
import HTMLParser from 'node-html-parser'

export const makeNfcDocumentParser = (): NfcParser => {
  const htmlParser = HTMLParser.parse
  const nfcParser = new NFcDocumentParser(htmlParser)
  return nfcParser
}
