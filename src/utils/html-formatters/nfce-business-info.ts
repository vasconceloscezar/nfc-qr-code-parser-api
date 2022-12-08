type BusinessInfo = {
  idBusiness: string
  ieBusiness: string
  address: string
}

export function formatNFCeBusinessInfo (document: any): BusinessInfo {
  const queriedBusinessInfo = document.querySelectorAll('.NFCCabecalho_SubTitulo1')
  const businessInfo = {
    idBusiness: '',
    ieBusiness: '',
    address: ''
  }
  queriedBusinessInfo.forEach((el: any, index: number) => {
    const value = el.childNodes[0].text
    switch (index) {
      case 0:
        const values = value.split(':')
        const idBusiness = values[1].split('\n').map((el: any) => el.trim())[1]
        const ieBusiness = values[2].trim()
        businessInfo.idBusiness = idBusiness
        businessInfo.ieBusiness = ieBusiness
        break
      case 1:
        businessInfo.address = value
          .split('\n')
          .map((el: any) => el.trim())
          .join(' ')
        break
      default:
        break
    }
  })
  return businessInfo
}
