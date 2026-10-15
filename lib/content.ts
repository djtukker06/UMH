/* ------------------------------------------------------------------
   Alle aanpasbare inhoud op één plek.
   Pas hier de gegevens van het eerstvolgende moment en de ambassadeurs aan.
   ------------------------------------------------------------------ */

export const nextMoment = {
  activity: "Workshop yoga",
  speaker: "Stijn Kalen",
  date: { nl: "18 december", en: "18 December" },
  weekday: { nl: "donderdag", en: "Thursday" },
  time: "17:30 - 21:00",
  location: "Laan van Oosten 150",
  duration: { nl: "3,5 uur", en: "3.5 hours" },
  spots: "10/20",
  signupEmail: "utrechtmobilityhealth@uu.nl",
};

export const contact = {
  email: "utrechtmobilityhealth@uu.nl",
};

/* Labels in de hero: wie er meedoet en waar het gebeurt.
   c = kleur uit de Utrecht Science Park-strook (zie globals.css), icon = Phosphor-icoon. */
export const pills = [
  { nl: "Promovendi", en: "PhD candidates", c: "--usp-16", icon: "student", left: 4, top: 22, rot: -6 },
  { nl: "Senior onderzoekers", en: "Senior researchers", c: "--usp-7", icon: "flask", left: 30, top: 14, rot: 4 },
  { nl: "Zorgmedewerkers", en: "Healthcare professionals", c: "--usp-1", icon: "heartbeat", left: 68, top: 18, rot: -8 },
  { nl: "Onderwijsprofessionals", en: "Education professionals", c: "--usp-11", icon: "chalkboard", left: 52, top: 40, rot: 7 },
  { nl: "Orthopedie", en: "Orthopaedics", c: "--usp-22", icon: "bone", left: 10, top: 50, rot: 10 },
  { nl: "Fysiotherapie", en: "Physiotherapy", c: "--usp-4", icon: "walk", left: 36, top: 62, rot: -3 },
  { nl: "Sportgeneeskunde", en: "Sports medicine", c: "--usp-19", icon: "barbell", left: 78, top: 48, rot: 12 },
  { nl: "Revalidatie", en: "Rehabilitation", c: "--usp-3", icon: "wheelchair", left: 58, top: 76, rot: -5 },
  { nl: "Diergeneeskunde", en: "Veterinary medicine", c: "--usp-14", icon: "paw", left: 2, top: 80, rot: -12 },
  { nl: "Science Park", en: "Science Park", c: "--usp-9", icon: "city", left: 22, top: 36, rot: 3 },
  { nl: "UMC Utrecht", en: "UMC Utrecht", c: "--usp-20", icon: "hospital", left: 84, top: 74, rot: 6 },
  { nl: "Universiteit Utrecht", en: "Utrecht University", c: "--usp-18", icon: "graduation", left: 30, top: 86, rot: 8 },
] as const;

export const partners = [
  { name: "Hogeschool Utrecht", nl: "o.a. Institute of Movement Studies", en: "incl. Institute of Movement Studies", c: "--usp-3" },
  { name: "UMC Utrecht", nl: "Revalidatie, Fysiotherapiewetenschap & Sport, Orthopedie, Mobility Clinic", en: "Rehabilitation, Physiotherapy Science & Sport, Orthopaedics, Mobility Clinic", c: "--usp-7" },
  { name: "Utrecht University", nl: "Diergeneeskunde", en: "Veterinary Medicine", c: "--usp-16" },
  { name: "Hubrecht Institute", nl: "", en: "", c: "--usp-11" },
  { name: "Data and Knowledge Hub Healthy Urban Living", nl: "", en: "", c: "--usp-20" },
  { name: "Utrecht Bike Community", nl: "", en: "", c: "--usp-1" },
];

/* Vervang role door de echte functie en zet een portret in /public/img (zie components/Ambassadors.tsx). */
export const ambassadors = [
  { name: "Stefan Elbers", role: "[ROL / AFDELING]", c: "--usp-1" },
  { name: "Eva Bax", role: "[ROL / AFDELING]", c: "--usp-4" },
  { name: "Karin Valkenet", role: "[ROL / AFDELING]", c: "--usp-9" },
  { name: "Rosalie Hegeman", role: "[ROL / AFDELING]", c: "--usp-15" },
  { name: "Roel Custers", role: "[ROL / AFDELING]", c: "--usp-19" },
  { name: "Thomas Hoogeboom", role: "[ROL / AFDELING]", c: "--usp-22" },
];

/* Beeld: placeholders (picsum) tot de stills uit de Science Park-video's in /public/img staan.
   Zet een bestand neer en vervang de src, bijvoorbeeld "/img/umh-1.jpg". */
export const images = {
  // Voor de sectie "Wat is UMH" staan nu lege fotovakken (components/Umh.tsx). Paden voor later:
  umhMain: "/img/umh-1.jpg",
  umhSmall: "/img/umh-2.jpg",
  conceptPoster: "https://picsum.photos/seed/science-park-evening/1600/900",
};

/* Video: zet concept.mp4 in /public/videos. Ontbreekt het bestand, dan blijft de poster staan. */
export const videos = {
  concept: "/videos/concept.mp4",
};

/* Kleurenstrook Utrecht Science Park (gesampled uit de huisstijlbalk) */
export const uspColors = [
  "#f6c640", "#f4b029", "#ec7b53", "#cf0149", "#ce0064", "#ea7ca1", "#d7448a", "#c7237c",
  "#a04b8f", "#9973ae", "#826aa8", "#7e7db9", "#7f87c5", "#7290d0", "#6799de", "#1f9df1",
  "#40abf9", "#64b6de", "#80c1a3", "#c7dc41", "#aacf41", "#8dc21c",
];
