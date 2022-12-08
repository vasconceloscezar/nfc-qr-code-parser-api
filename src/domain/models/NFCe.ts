export interface NFCe {
	nfNumber:     string;
	nfSerie:      string;
	nfKey:        string;
	nfDate:       string;
	businessInfo: BusinessInfo;
	idClient:     string;
	nfItems:      NFCeItem[];
	totalItems:   number;
	discount:     number;
	totalPaid:    number;
}

export interface BusinessInfo {
	name:    string;
	address: string;
	cnpj:    string;
	ie:      string;
}

export interface NFCeItem {
	code:           string;
	description:    string;
	quantity:       number;
	unitType:       string;
	valuePerUnit:   number;
	totalItemValue: number;
}