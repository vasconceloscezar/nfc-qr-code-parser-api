import { NFCeItem } from '../../domain/models/NFCe'

export function formatNFCeItems (document: any): NFCeItem[] {
  let index = 1
  const nfceItems = []
  while (index > 0) {
    const item = document.getElementById(`Item + ${index}`)
    if (!item) {
      index = -1
      continue
    }
    nfceItems.push(parseNFCeItem(item.childNodes))
    index++
  }
  return nfceItems
}

function parseNFCeItem (nodes: any[]): NFCeItem {
  const parsedItem = {
    code: '',
    description: '',
    quantity: 0,
    unitType: '',
    valuePerUnit: 0,
    totalItemValue: 0
  }
  nodes.forEach((el, index) => {
    if (el.classList == 'NFCDetalhe_Item') {
      const value = el.childNodes[0]
      switch (index) {
        case 1:
          parsedItem.code = value._rawText
          break
        case 3:
          parsedItem.description = value._rawText
          break
        case 5:
          parsedItem.quantity = parseFloat(value._rawText.replace(',', '.'))
          break
        case 7:
          parsedItem.unitType = value._rawText
          break
        case 9:
          parsedItem.valuePerUnit = parseFloat(value._rawText.replace(',', '.'))
          break
        case 11:
          parsedItem.totalItemValue = parseFloat(value._rawText.replace(',', '.'))
          break
        default:
          break
      }
    }
  })

  return parsedItem
}
