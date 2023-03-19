const structAdresse = `{
    "id": ADRESSE,
    "lignes": [string, string, string, string, string, string, string]
}`

const stuctDestinataire = `{
    "id": DESTINATAIRE,
    "nom": string,
    "prenom": string,
    "dateDeNaissance": date
    "age": number
    "adresse": ADRESSE
}`

const adresse = `{
    "lignes" : ["Jerome Biringer", "6 impasse des grands bois", "79000 SCIECQ", "", "", "", ""]
}`

const destinataire = `{
  "nom": "BIRINGER",
  "prenom": "Jerome",
  "dateDeNaissance": "1979-10-26",
  "age": 43,
  "adresse": {
    "lignes" : ["Jerome Biringer", "6 impasse des grands bois", "79000 SCIECQ", "", "", "", ""]
  }
}
`

const blocAdresse = `{
  "id": "ADRESSE_DEST",
  "type": CONTENT_BLOCK
  "dataInId": "ADRESSE",
  "childs": [
    {
      "tag": "div",
      "htmlId": "adresseDestinataire",
      "classes": []
      "childs": [
        {
          "type": "HTML_ELEMENT",  
          "tag": "p",
          "properties": {},
          "childs": [
            {
              "type": "DATA_MAPPER",
              "dataMapped": "ligne1"
            },
          ]
        },
        {
          "type": "HTML_ELEMENT",  
          "tag": "p",
          "properties": {},
          "childs": [
            {
              "type": "DataMapper",
              "dataMapped": "ligne2"
            },
          ]
        },
        {
          "type": "HTML_ELEMENT",  
          "tag": "p",
          "htmlId": undefined,
          "classes": []
          "childs": [
            {
              "type": "DataMapper",
              "dataMapped": "ligne3"
            },
          ]
        },
        {
          "type": "HTML_ELEMENT",  
          "tag": "p",
          "htmlId": undefined,
          "classes": []
          "childs": [
            {
              "type": "DataMapper",
              "dataMapped": "ligne4"
            },
          ]
        },
        {
          "type": "HTML_ELEMENT",  
          "tag": "p",
          "htmlId": undefined,
          "classes": []
          "childs": [
            {
              "type": "DataMapper",
              "dataMapped": "ligne5"
            },
          ]
        },
        {
          "type": "HTML_ELEMENT",  
          "tag": "p",
          "htmlId": undefined,
          "classes": []
          "childs": [
            {
              "type": "DataMapper",
              "dataMapped": "ligne6"
            },
          ]
        },
        {
          "type": "HTML_ELEMENT",  
          "tag": "p",
          "htmlId": undefined,
          "classes": []
          "childs": [
            {
              "type": "DataMapper",
              "dataMapped": "ligne7"
            },
          ]
        }
      ]
    }
  ]
}`
