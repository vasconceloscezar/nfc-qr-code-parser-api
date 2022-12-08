import axios from "axios";
import { DownloaderHTML } from "../../data/usecases/download-html";
import { HTMLDownloader } from "../../domain/usecases/html-downloader";

export const makeHtmlDownloader = (): HTMLDownloader => {
	const htmlDownloader = new DownloaderHTML(axios.get);
	return htmlDownloader
}