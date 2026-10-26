// Descrizioni dei progetti, mostrate in progetto.html sotto titolo e brand.
// Scritte a partire da ricerche online (26 ottobre 2026).
// Chiave = ID del progetto. Campi (tutti facoltativi):
//   testo   paragrafi separati da una riga vuota
//   press   articoli sul progetto, mostrati sotto "Press" e usati come fonti del testo:
//           [{t: "Testata", u: "url"}]   oppure con titolo: {t: "Vogue", a: "Titolo articolo", u: "url"}
//           Si puo avere solo press senza testo (es. making of con articoli ma senza descrizione).
//   nomi    nomi delle varianti quando il nome file non basta: { C: "Charlie D'Amelio" }
//   crediti facoltativo, [["Ruolo", "Nome"], ...]
//   canali  facoltativo, testo libero
// Un progetto senza voce qui mostra la pagina senza descrizione.

const descrizioni = {

  "THIS26-024": {
    testo: `Guest films from the Prada Spring/Summer 2027 womenswear show, presented by Miuccia Prada and Raf Simons on 22 September 2026 at Fondazione Prada, as the opening show of Milan Fashion Week.

The collection was built entirely around the skirt: sixty-three looks, no trousers, from high-slit wraps and sheer pleated pastels to raw-edged wool kilts, worn with bras, bandeaux and colour-blocked shirting under a fluorescent-lit set.

The series follows twelve guests, one film each, among them Emilia Clarke, Naomi Watts, Maya Hawke, Alexa Chung, Bo Bragason, Naomi Ackie, Benedetta Porcaroli, Yang Mi and Win Metawin, with Gabrielle Union and Dwyane Wade filmed together.`,
    nomi: { C: "Charlie D'Amelio", E: "Alexa Chung", G: "Gabrielle Union & Dwyane Wade" },
    press: [
      { t: "W Magazine", a: "Prada Spring 2027", u: "https://www.wmagazine.com/fashion/prada-spring-2027-runway-photos" },
      { t: "Dazed", a: "Skirting around: Prada says trousers are out for SS27", u: "https://www.dazeddigital.com/fashion/article/71026/1/prada-skirt-milan-fashion-week-mfw-ss27-trend-report" },
      { t: "Vogue Korea", a: "Prada SS27 womenswear fashion show", u: "https://www.vogue.co.kr/2026/09/22/__trashed-5/" },
      { t: "Oman Observer", a: "Prada's skirts take centre stage as Milan Fashion Week begins", u: "https://www.omanobserver.om/article/1196722/features/fashion/pradas-skirts-take-centre-stage-as-milan-fashion-week-begins" },
      { t: "The Zoe Report", a: "Prada Spring 2027 front row", u: "https://www.thezoereport.com/culture/prada-spring-2027-front-row-celebs" },
      { t: "Coveteur", a: "Best celebrity style, Milan Fashion Week SS27", u: "https://coveteur.com/best-celebrity-style-milan-fashion-week-ss27" }
    ]
  },

  "THIS26-018": {
    testo: `Content for the opening of Prada Galleria, the eight-floor complex Prada created inside Milan's Galleria Vittorio Emanuele II, the nineteenth-century arcade where the house opened its first store in 1913.

The project brings together the renewed Prada Donna and Prada Uomo stores, joined by a new underground passage, Marchesi 1824, an outpost of Fondazione Prada and Pradasphere, the first permanent exhibition on the history of the brand. The films follow guests through the spaces, among them Sana, Jaehyun, Lee Do-hyun and Benedetta Porcaroli.`,
    press: [
      { t: "FashionUnited", u: "https://fashionunited.com/press/retail/prada-opens-multi-floor-prada-galleria-in-milans-historic-shopping-arcade/2026091774688" },
      { t: "The Impression", u: "https://theimpression.com/prada-creates-an-immersive-brand-destination-in-milans-historic-galleria/" },
      { t: "Cultured", u: "https://culturedmag.com/article/2026/09/22/fashion-prada-galleria-milan-2026/" }
    ]
  },

  "THIS26-015": {
    testo: `Social and e-commerce content around Miu Miu Women's Tales at the 83rd Venice International Film Festival.

The 32nd chapter of the series, Avec Kim, was directed by Claire Denis and stars Suzanne Lindon and Kim Gordon, performing without dialogue. It premiered on 5 September 2026 at the Giornate degli Autori. Created in 2011, Women's Tales commissions short films exclusively from women directors.

The set includes a long-form edit for YouTube, three vertical edits for TikTok and three short pieces for e-commerce.`,
    press: [
      { t: "The Impression", u: "https://theimpression.com/miu-miu-womens-tales-claire-denis-avec-kim-venice-2026/" },
      { t: "FashionUnited", u: "https://fashionunited.com/news/culture/new-miu-miu-womens-tales-chapter-entrusted-to-director-claire-denis/2026082774299" }
    ]
  },

  "THIS25-013": {
    testo: `Red carpet content for Miu Miu at the 2025 Met Gala in New York, held on 5 May 2025 for the Costume Institute exhibition Superfine: Tailoring Black Style.

Miu Miu dressed, among others, Gigi Hadid in a custom liquid-gold gown and Joey King, at her first Met Gala, in a custom look.`,
    press: [
      { t: "Marie Claire", u: "https://www.marieclaire.com/fashion/gigi-hadid-met-gala-2025-red-carpet-look-photos/" },
      { t: "Just Jared", u: "https://www.justjared.com/2025/05/05/joey-king-makes-her-met-gala-debut-in-custom-miu-miu/" }
    ]
  },

  "THIS25-007": {
    testo: `Films for In Transit, the 2025 edition of Prada Frames, the multidisciplinary symposium on design and the environment curated by Formafantasma.

From 6 to 8 April 2025, during Milan Design Week, the talks moved through Milano Centrale: the Padiglione Reale, the station hall once reserved for the royal family, and the Arlecchino, the train designed by Gio Ponti and Giulio Minoletti in 1950. Speakers from architecture, research, design, film and astrophysics, Kate Crawford among them, discussed the infrastructures that move people, goods, data and power.`,
    press: [
      { t: "The Impression", u: "https://theimpression.com/prada-frames-2025-to-highlight-discussions-on-mobility/" },
      { t: "Domus", u: "https://www.domusweb.it/en/news/gallery/2025/03/26/gio-ponti-arlecchino-train-prada-frames.html" },
      { t: "Designboom", u: "https://www.designboom.com/design/gio-ponti-arlecchino-train-prada-frames-symposium-formafantasma-milan-design-week-04-16-2025/" }
    ],
    crediti: [["Direction", "Sophie P."], ["Post production", "Sophie P."], ["Production", "Prada in-house"]],
    canali: "Instagram, TikTok"
  }

};
