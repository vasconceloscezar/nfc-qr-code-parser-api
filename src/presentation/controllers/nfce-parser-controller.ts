import { HTMLDownloader } from "../../domain/usecases/html-downloader";
import { NfcParser } from "../../domain/usecases/nfc-parser";
import { UrlQRCodeConverter } from "../../domain/usecases/url-qr-code-converter";
import { ok, serverError } from "../helpers/http-helper";
import { Controller, HttpResponse } from "../protocols";

export class NfcParserController implements Controller{
	constructor (
		private readonly urlQRCodeConverter: UrlQRCodeConverter,
		private readonly htmlDownloader: HTMLDownloader,
		private readonly nfcParser: NfcParser,
	){}

	async handle (request: any): Promise<HttpResponse> {
		try {
			const { qrCodeURL } = request
			const urlConverted = this.urlQRCodeConverter.convert(qrCodeURL)
			const nfcDocument = this.htmlDownloader.download(urlConverted)
			const nfc = this.nfcParser.parse(nfcDocument)

			const result = { 
				message: 'deu bom',
				nf: nfc
			}
			return ok(result)
		}catch(err: any){
			return serverError(err)
		}
	}
}

export namespace NfceParseController {
	export type Request = {
		qrCodeURL: string
	}
}