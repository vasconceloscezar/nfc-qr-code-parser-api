import { HTMLDownloader } from "../../domain/usecases/html-downloader";

export class DownloaderHTML implements HTMLDownloader{
	constructor (private readonly getResource: (url: string) => Promise<any>){}

	async download (url: string): Promise<HTMLDownloader.Result>{
		const response = await this.getResource(url);
		const document = response.data
		return document
	}
}