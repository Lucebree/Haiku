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
  "data": {
    "adresse": "ADRESSE"
  },
  "content": [
    {
      "type": "REPEATER"
      "tag": "div",
      "properties" : { "id": "adresseDestinataire" }
      "data": {
        "lignes": adresse
      }
      "content": [
        {
          "type": "HTML_ELEMENT",  
          "properties": {},
          "tag": "p"
          "content": [
            {
              "type": "TEXT_NODE",
              "content": "${lignes.value}"
            },
          ]
        }
      ]
}`
