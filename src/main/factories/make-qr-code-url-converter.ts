import axios from 'axios'
import { ConvertURLQRCode } from '../../data/usecases/convert-url-qr-code'
import { UrlQRCodeConverter } from '../../domain/usecases/url-qr-code-converter'

export const makeUrlQRCodeConverter = (): UrlQRCodeConverter => {
  const urlConverter = new ConvertURLQRCode()
  return urlConverter
}
