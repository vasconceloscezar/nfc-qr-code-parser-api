export interface NFCe {
	businessName: string;
	idBusiness:  string;
	ieBusiness:  string;
	number:      string;
	serie:       string;
	date:        string;
	key:         string;
	idClient:    string;
	address:     string;
	items:       NFCeItem[];
}

export interface NFCeItem {
	code:           string;
	description:    string;
	quantity:       number;
	unitType:       string;
	valuePerUnit:   number;
	totalItemValue: number;
}
