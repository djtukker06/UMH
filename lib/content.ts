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

/* Partners. logo = pad in /public (leeg laten als er geen officieel logo is: dan verschijnt de naam als woordmerk). */
export const partners = [
  { name: "Hogeschool Utrecht", logo: "/img/partners/hogeschool-utrecht.svg", nl: "o.a. Institute of Movement Studies", en: "incl. Institute of Movement Studies", c: "--usp-3" },
  { name: "UMC Utrecht", logo: "/img/partners/umc-utrecht.svg", nl: "Revalidatie, Fysiotherapiewetenschap & Sport, Orthopedie, Mobility Clinic", en: "Rehabilitation, Physiotherapy Science & Sport, Orthopaedics, Mobility Clinic", c: "--usp-7" },
  { name: "Utrecht University", logo: "/img/partners/universiteit-utrecht.svg", nl: "Diergeneeskunde", en: "Veterinary Medicine", c: "--usp-16" },
  { name: "Hubrecht Institute", logo: "/img/partners/hubrecht-institute.svg", nl: "", en: "", c: "--usp-11" },
  { name: "Data and Knowledge Hub Healthy Urban Living", logo: "", nl: "", en: "", c: "--usp-20" },
  { name: "Utrecht Bike Community", logo: "", nl: "", en: "", c: "--usp-1" },
];

/* Vakgebieden die je bij Kennis met plezier tegenkomt (zelfde bron als de hero-labels en partner-afdelingen).
   c = accentkleur uit de Science Park-strook. */
/* De zes onderzoeksthema's van UMH (uit de briefing). Namen zijn Engelstalige vaktermen, in NL en EN gelijk. */
export const themes = [
  { nl: "Cell & Tissue Modeling", en: "Cell & Tissue Modeling", c: "--usp-16" },
  { nl: "Biofabrication & Artificial Organs", en: "Biofabrication & Artificial Organs", c: "--usp-7" },
  { nl: "Quality of Life", en: "Quality of Life", c: "--usp-1" },
  { nl: "Data & AI Models", en: "Data & AI Models", c: "--usp-11" },
  { nl: "Environmental Resilience", en: "Environmental Resilience", c: "--usp-22" },
  { nl: "Imaging & Image-Guided Interventions", en: "Imaging & Image-Guided Interventions", c: "--usp-4" },
];

/* role = functie en afdeling volgens de officiële profielpagina (NL en EN). photo = portret in /public/img/ambassadors (leeg = initialen),
   pos = object-position voor de ronde uitsnede. Bronnen staan in public/img/CREDITS.md. */
export const ambassadors = [
  { name: "Stefan Elbers", role: { nl: "Onderzoeker, Lectoraat Innovatie van Beweegzorg, Hogeschool Utrecht", en: "Researcher, Innovation of Movement Care research group, HU University of Applied Sciences Utrecht" }, c: "--usp-1", photo: "/img/ambassadors/stefan-elbers-hu.jpg", pos: "center 35%" },
  { name: "Eva Bax", role: { nl: "Postdoc, Orthopedie, UMC Utrecht", en: "Postdoctoral researcher, Orthopaedics, UMC Utrecht" }, c: "--usp-4", photo: "/img/ambassadors/eva-bax.jpg", pos: "center 30%" },
  { name: "Karin Valkenet", role: { nl: "Senior onderzoeker, Lectoraat Innovatie van Beweegzorg, Hogeschool Utrecht", en: "Senior researcher, Innovation of Movement Care research group, HU University of Applied Sciences Utrecht" }, c: "--usp-9", photo: "/img/ambassadors/karin-valkenet.jpg", pos: "center 35%" },
  { name: "Rosalie Hegeman", role: { nl: "Living Lab Manager, UMC Utrecht en Universiteit Utrecht", en: "Living Lab Manager, UMC Utrecht and Utrecht University" }, c: "--usp-15", photo: "/img/ambassadors/rosalie-hegeman.jpg", pos: "center" },
  { name: "Roel Custers", role: { nl: "Orthopedisch chirurg en onderzoeker, UMC Utrecht", en: "Orthopaedic surgeon and researcher, UMC Utrecht" }, c: "--usp-19", photo: "/img/ambassadors/roel-custers.jpg", pos: "44% 25%" },
  { name: "Thomas Hoogeboom", role: { nl: "Hoogleraar Fysiotherapiewetenschap, UMC Utrecht", en: "Professor of Physical Therapy Science, UMC Utrecht" }, c: "--usp-22", photo: "/img/ambassadors/thomas-hoogeboom.jpg", pos: "52% 28%" },
];

/* Foto's in /public/img/photos (bronnen en licenties: public/img/CREDITS.md).
   Een leeg pad laat het lege fotovak "Foto volgt" staan. */
export const images = {
  umhMain: "/img/photos/umh-1.jpg",
  umhSmall: "/img/photos/umh-2.jpg",
  ticket: "/img/photos/ticket-yoga-studio.jpg",
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
