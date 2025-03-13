let respecConfig = {
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Informatiemodel Water (IMWA) Basis",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "WV",               // Werkversie
  // specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                   // Standaard
  specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                 // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice

  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "IMWA-Basis",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  license: "cc-by",                 // Attribution, met bronvermelding
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "IMWA-Basis",
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  publishDate: "2024-06-13",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2024-04-08",
  previousMaturity: "wv",
  
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Aquo-standaard/IMWA-basis",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/Aquo-standaard/IMWA-basis/issues",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://github.com/Aquo-standaard/IMWA-basis",
  //-- license: voor de geldende gebruiksvoorwaarden

  //-- Optionele parameters:
  emailComments: "servicedesk@ihw.nl",         // reactie mailadres, alleen bij CV!
  subtitle: "Versie 0.8",                         // Subtitel van het document
  //maxTocLevel: 4,                           // Aantal niveau's ToC, default is 0

  // Create PDF and link to file in header (optional):
  // alternateFormats: [
  //     {
  //         label: "pdf",
  //         uri: "template.pdf",
  //     },
  // ],

  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  //editors:
  //[
  //  {
  //    name:       "Wijnand van Riel",
  //    company:    "IHW",
  //    companyURL: "https://www.ihw.nl"
  //  },
  //],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
  [
    {
      name:       "Informatiehuis water",
      company:    "IHW",
      companyURL: "https://www.ihw.nl"
    },
  ],

// Tijdelijk opnemen: localBiblio, nog uitzoeken op welke plek dit uiteindelijk moet landen
  localBiblio: {
    "NEN3610":
    {
      title: "NEN-3610 Basismodel geo-informatie",
      href: "https://www.nen.nl/nen-3610-2022-nl-296137",
      status: "BG-FINAL",
      publisher: "Nederlandse Norm (NEN)",
    },
  },
};
