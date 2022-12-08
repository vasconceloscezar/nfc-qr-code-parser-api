import axios from "axios";
import { NFcDocumentParser } from "../../data/usecases/nfc-document-parser";
import { NfcParser } from "../../domain/usecases/nfc-parser";

export const makeNfcDocumentParser = (): NfcParser => {
	const nfcParser = new NFcDocumentParser();
	return nfcParser
}