const structAdresse = `{
    "id": "ADRESSE",
    "data": {
      "ligne1": {
        "type": "STRING"
      },
      "ligne2": {
        "type": "STRING"
      },
      "ligne3": {
        "type": "STRING"
      },
      "ligne4": {
        "type": "STRING"
      },
      "ligne5": {
        "type": "STRING"
      },
      "ligne6": {
        "type": "STRING"
      },
      "ligne7": {
        "type": "STRING"
      },
    }
}`

const stuctDestinataire = `{
    "id": "DESTINATAIRE",
    "data": {
        "nom": {
          "type": "STRING"
        },
        "prenom": {
          "type": "STRING"
        },
        "dateDeNaissance": {
          "type": "DATE"
          "format":
        }
        "age": {
          "type": "NUMBER"
        }
        "adresse" {
          "type": "STRUCT",
          "id": "ADRESSE"
        }
    }
}`

const adresse = `{
    "ligne1" : "Jerome Biringer",
    "ligne2": "6 impasse des grands bois",
    "ligne3": "79000 SCIECQ"
}`

const destinataire = ` {
  "nom": "BIRINGER",
  "prenom": "Jerome",
  "dateDeNaissance": "26/10/1979",
  "age": 43,
  "adresse": {
    "ligne1" : "Jerome Biringer",
    "ligne2": "6 impasse des grands bois",
    "ligne3": "79000 SCIECQ"
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
