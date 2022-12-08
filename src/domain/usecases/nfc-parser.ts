import { NFCe } from '../models/NFCe'
import { formatNFCeBusinessInfo, formatNFCeFooter, formatNFCeHeaders, formatNFCeItems } from '../../utils/html-formatters'

export interface NfcParser {
  parse: (document: any) => NfcParser.Result
}
export namespace NfcParser {
  export type Result = {
    nf: NFCe
  }
}
