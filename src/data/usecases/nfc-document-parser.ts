import { NFCe } from "../../domain/models";
import { NfcParser } from "../../domain/usecases/nfc-parser";
import { formatNFCeBusinessInfo, formatNFCeFooter, formatNFCeHeaders, formatNFCeItems } from "../../utils/html-formatters";

export class NFcDocumentParser implements NfcParser{
	// constructor (formatHeader, formatInfo, formatFooter, formatItems){}
	parse(document: any): NfcParser.Result{
		const header = formatNFCeHeaders(document);
  const businessInfo = formatNFCeBusinessInfo(document);
  const items = formatNFCeItems(document);
  const totals =   formatNFCeFooter(document)

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
