import { NFCe } from "../models/NFCe";
import { formatNFCeBusinessInfo, formatNFCeFooter, formatNFCeHeaders, formatNFCeItems } from "../utils/html-formatters";

export function parseNFCeHTML(document: any): NFCe{
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
  return nfceData;
 }