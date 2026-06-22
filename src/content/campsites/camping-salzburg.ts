import type { CampsiteConfig } from "../types";

/**
 * Campingplatz Huberbauer — Koppl bei Salzburg.
 * Quelle: raw/digest (restaurant-camp24 + anfahrt-kontakt). Die Website dokumentiert
 * vor allem das hauseigene Pub "Camp24" (Pizzeria, Bar, Gastgarten); zu Stellplätzen,
 * Ausstattung und Campingpreisen macht die Quelle keine Angaben. Inhalte daher ehrlich
 * auf das Belegte gestützt; Campingpreise sind offengelegte Richtpreise.
 */
const IMG = "/campsites/camping-salzburg";

const campingSalzburg: CampsiteConfig = {
  name: "Campingplatz Huberbauer",
  shortName: "Huberbauer",
  slug: "camping-salzburg",
  ort: "Koppl",
  region: "Salzburger Land",
  brandKind: "Camping & Pub",
  regionLong: "Koppl · bei Salzburg · Salzburger Land · Österreich",

  heroVariant: "center",

  claim: "Camping mit eigenem Pub — vor den Toren Salzburgs",
  claimEmphasis: "eigenem Pub",
  intro:
    "Ein familiärer Campingplatz im Grünen bei Koppl, nur wenige Minuten von Salzburg. Sein Herzstück ist das Camp24 — Pub, Pizzeria und sonniger Gastgarten direkt am Platz.",

  logo: { src: `${IMG}/gallery-4824c305ff.webp`, alt: "Campingplatz Huberbauer Logo" },

  statement: {
    text: "Abends ein paar Schritte vom Wohnwagen zum Camp24 — Pizza, Stiegl und Gastgarten inklusive.",
    emphasis: "ein paar Schritte",
  },

  pillars: [
    {
      title: "Im Grünen bei Salzburg",
      text: "Ruhige Lage in Koppl mit Blick ins Salzburger Umland — die Stadt liegt nur wenige Autominuten entfernt.",
      image: { src: `${IMG}/gallery-6457f1f36d.webp`, alt: "Gastgarten mit Blick auf die Wiesen rund um Koppl" },
    },
    {
      title: "Camp24 — Pub am Platz",
      text: "Das hauseigene Pub mit Gastgarten liegt direkt am Campingplatz — Treffpunkt für Gäste nach einem langen Tag.",
      image: { src: `${IMG}/gallery-0fb99b6ad6.webp`, alt: "Gastgarten mit Stiegl-Sonnenschirm am Camp24" },
    },
    {
      title: "Hausgemachte Pizza",
      text: "Frisch aus dem Ofen: hausgemachte Pizza in vielen Sorten — auch zum Mitnehmen, jede 11. Pizza gratis.",
      image: { src: `${IMG}/gallery-55c01d4b63.webp`, alt: "Hausgemachte Pizza aus dem Camp24" },
    },
  ],

  usps: [
    "Eigenes Pub am Platz",
    "Hausgemachte Pizza",
    "Sonniger Gastgarten",
    "Stiegl frisch gezapft",
    "Minuten bis Salzburg",
    "Saison Mai–Oktober",
  ],

  trust: {
    heading: "Warum Gäste gerne bleiben",
    headingEmphasis: "gerne bleiben",
    intro:
      "Ein kleiner, familiär geführter Platz von Andreas und Michaela Hell — mit kurzem Weg zum Camp24, herzhafter Küche und der Stadt Salzburg gleich um die Ecke.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-6f60ef2f8c.webp`, alt: "Eingang und Gastgarten des Campingplatz Huberbauer mit dem Camp24" },
  },

  camping: {
    heading: "Camp24 — das Pub am Campingplatz",
    intro:
      "Das Camp24 ist das Herz des Platzes: Pizzeria, Bar und Gastgarten unter freiem Himmel. Hier triffst du dich auf eine Pizza, einen Salat oder ein kühles Stiegl.",
    features: [
      {
        title: "Mit Liebe dekoriert",
        text: "Blumen, Holz und das Camp24-Eck — der Gastgarten ist liebevoll gestaltet und lädt zum Verweilen unter freiem Himmel ein.",
        image: { src: `${IMG}/gallery-517916cde2.webp`, alt: "Dekorierte Camp24-Ecke mit Blumen im Gastgarten" },
      },
      {
        title: "Knusprige Calzone",
        text: "Gefüllte Pizzateigtaschen frisch aus dem Ofen — eine der Spezialitäten aus der Camp24-Küche.",
        image: { src: `${IMG}/gallery-1791e53e99.webp`, alt: "Aufgeschnittene Calzone aus dem Camp24" },
      },
      {
        title: "Camp Burger & Co.",
        text: "Herzhafte Burger mit Salatgarnitur und knusprigen Beilagen — deftige Hausmannskost aus dem Camp24.",
        image: { src: `${IMG}/gallery-51757cb21e.webp`, alt: "Camp Burger mit Salatgarnitur aus dem Camp24" },
      },
      {
        title: "Frische Salate",
        text: "Große Salatteller wie der Thunfisch- oder Griechische Salat — leicht und frisch zubereitet.",
        image: { src: `${IMG}/gallery-adfb8748f0.webp`, alt: "Thunfischsalat mit Ei aus dem Camp24" },
      },
      {
        title: "Überbackene Toasts",
        text: "Knusprige Toasts mit Schinken, Käse und Salatgarnitur — schnell, warm und herzhaft auf die Hand.",
        image: { src: `${IMG}/gallery-142a0bf24a.webp`, alt: "Überbackener Toast mit Salat aus dem Camp24" },
      },
      {
        title: "Süßer Abschluss",
        text: "Schokosoufflé mit flüssigem Kern, Topfenknödel oder Eispalatschinken — die süße Seite der Karte.",
        image: { src: `${IMG}/gallery-b9de04014e.webp`, alt: "Schokosoufflé mit Beeren aus dem Camp24" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Koppl",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A1 Westautobahn bis Salzburg, dann Richtung Koppl — die Jakobistraße liegt am Ortsrand. Anreise nach 17 Uhr bitte vorab ankündigen.",
      },
      {
        title: "Mit der Bahn",
        text: "Salzburg Hauptbahnhof ist rund 15 Fahrminuten entfernt; Regionalbusse verbinden Koppl mit der Stadt.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Salzburg W. A. Mozart liegt etwa 25 Autominuten vom Platz entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke aus dem Camp24",
    headingEmphasis: "Camp24",
    intro: "Ein paar Eindrücke vom Gastgarten und aus der Küche des Camp24.",
    tag: "Saison Mai – Oktober",
    images: [
      { src: `${IMG}/gallery-bd2ce2f36a.webp`, alt: "Bosna aus dem Camp24" },
      { src: `${IMG}/gallery-8fedbf00ae.webp`, alt: "Schweizer Wurstsalat aus dem Camp24" },
      { src: `${IMG}/gallery-4443582b68.webp`, alt: "Goldgelbe Calzone aus dem Camp24" },
      { src: `${IMG}/gallery-acd70c6e1b.webp`, alt: "Sonniger Gastgarten des Camp24 mit Stiegl-Schirm und Holzmöbeln" },
    ],
  },

  booking: {
    heading: "Dein Stellplatz bei Salzburg",
    headingEmphasis: "bei Salzburg",
    intro:
      "Wähle Zeitraum und Personenzahl — Familie Hell meldet sich persönlich zurück. Bitte beachte: Anreisen nach 17 Uhr vorab ankündigen.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Campingpreise angegeben. Bitte mit Familie Hell bestätigen. Zahlung vor Ort nur in bar.",
    highlight: { title: "Camp24 am Platz", text: "Pub, Pizzeria und Gastgarten direkt auf dem Campingplatz." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 32, perExtraGuest: 8 },
      { id: "zelt", label: "Zeltplatz", perNight: 24, perExtraGuest: 7 },
    ],
  },

  kontakt: {
    coords: { lat: 47.815652, lng: 13.159382 },
    tel: "+43 6221 8477",
    telHref: "tel:+4362218477",
    mail: "camping_huberbauer@hotmail.com",
    adresse: "Jakobistraße 30 · 5321 Koppl · Salzburger Land",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camp24",
      href: "#camping",
      children: [
        { label: "Pub & Küche", href: "#camping" },
        { label: "Gastgarten", href: "#camping" },
      ],
    },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default campingSalzburg;
