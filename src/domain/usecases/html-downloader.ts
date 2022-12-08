export interface HTMLDownloader {
	download: (url: string) => Promise<HTMLDownloader.Result>
}

export namespace HTMLDownloader {
	export type Result = {
		document: any
	}
}