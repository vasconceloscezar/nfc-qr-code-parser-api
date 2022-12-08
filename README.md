# QRCode NFC URL Parser

This api was made with the intention to parse a URL that is gotten when the user scans a QRCode on NFC recipts in Brazil.

    > At the moment it was only possible to test with RS recipts.

## TODO

- [ ] Create docker file
- [ ] Find server to host container
- [ ] Add Git Actions for CI/CD
- [ ] Add Jest and tests

## How to run the project.

You will need at least the version 12.x.x of Node.JS installed.

Clone the repo, and run the following commands:

```shell
 ~ yarn install
 ~ yarn start
 or

 ~ npm install
 ~ npm start
```

The server listens by default on port `:8080`.

With the server running, you can send an `POST` request with the body like this example:

```json
{
  "qrCodeURL": "https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx?p=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|2|1|1|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```

The result should be something like the following:

```json
{
  "nf": {
    "nfNumber": "222222",
    "nfSerie": "1",
    "nfKey": "1231312312312312312321321312321312",
    "nfDate": "08/12/2022 14:28:38",
    "businessInfo": {
      "name": "Business Name",
      "address": "Address, street, city, state",
      "cnpj": "XXXXXXXXXX",
      "ie": "XXXXXXXXXX"
    },
    "idClient": "XXXXXXXXXXX",
    "nfItems": [
      {
        "code": "111111",
        "description": "Description item 1",
        "quantity": 2,
        "unitType": "UN",
        "valuePerUnit": 5.0,
        "totalItemValue": 10.0
      },
      {
        "code": "222222",
        "description": "Description item 2",
        "quantity": 1.0,
        "unitType": "KG",
        "valuePerUnit": 2.0,
        "totalItemValue": 2.0
      }
    ],
    "totalItems": 12.0,
    "discount": 2.0,
    "totalPaid": 10.0
  }
}
```
