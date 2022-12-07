type NFCeTotal = {
  totalValue: number
  totalDiscount: number
  totalPaid: number
}
export function formatNFCeFooter(document: any): NFCeTotal {
  const footer = document.querySelectorAll('td.borda-pontilhada-botton > table.NFCCabecalho')
  const totals = footer[4].childNodes
  const totalValue = totals[1].childNodes[3].firstChild._rawText
  const discountValue = totals[3].childNodes[3].firstChild._rawText
  const totalWithDiscount = totals[7].childNodes[3].firstChild._rawText
  
  return { 
    totalValue: parseFloat(totalValue.replace(',','.')),
		totalDiscount: parseFloat(discountValue.replace(',','.')),
		totalPaid: parseFloat(totalWithDiscount.replace(',','.'))
  }
}