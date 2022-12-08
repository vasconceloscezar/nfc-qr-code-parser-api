import { NFCe } from "../../domain/models";
import { NfcParser } from "../../domain/usecases/nfc-parser";
import { formatNFCeBusinessInfo, formatNFCeFooter, formatNFCeHeaders, formatNFCeItems } from "../../utils/html-formatters";

export class NFcDocumentParser implements NfcParser{
	// constructor (formatHeader, formatInfo, formatFooter, formatItems){}
	constructor (private readonly htmlParser: (data: string) => any){}
	parse(document: any): NfcParser.Result{
		const domHTML = this.htmlParser(document)
		const header = formatNFCeHeaders(domHTML);
  const businessInfo = formatNFCeBusinessInfo(domHTML);
  const items = formatNFCeItems(domHTML);
  const totals =   formatNFCeFooter(domHTML)

		const nfceData = {
				nfNumber: header.nfceNumber,
				nfSerie: header.serie,
				nfKey: header.key,
				nfDate: header.date,
				businessInfo: {
					name: header.businessName,
					address: businessInfo.address,
					cnpj: businessInfo.idBusiness,
					ie: businessInfo.ieBusiness
				},
				idClient: header.idClient,
				nfItems: items,
				totalItems: totals.totalValue,
				discount: totals.totalDiscount,
				totalPaid: totals.totalPaid
			};

  return {nf: nfceData};
	}


}
