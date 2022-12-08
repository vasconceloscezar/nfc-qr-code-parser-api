import { HTMLDownloader } from "../../domain/usecases/html-downloader";
import { UrlQRCodeConverter } from "../../domain/usecases/url-qr-code-converter";

export class ConvertURLQRCode implements UrlQRCodeConverter{
	 convert (urlQRCode: string): string{
		const key = urlQRCode.slice(urlQRCode.indexOf("?p="), urlQRCode.length - 1).split("=")[1];
		const urlIFrame = "https://www.sefaz.rs.gov.br/ASP/AAE_ROOT/NFE/SAT-WEB-NFE-NFC_QRCODE_1.asp?p=" + key;
		return urlIFrame
	}
}