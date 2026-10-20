# Kennis met plezier, Utrecht Mobility & Health

Interactieve one-page site voor promovendi en jonge onderzoekers. Gebouwd met Next.js (App Router) en GSAP (ScrollTrigger, Draggable).

## Starten

```bash
npm install
npm run dev
```

Open daarna http://localhost:3000.

Productieversie:

```bash
npm run build
npm start
```

## Waar pas je wat aan

| Wat | Bestand |
|---|---|
| Gegevens volgend moment (activiteit, spreker, datum, tijd, locatie, duur, plekken) | `lib/content.ts` (`nextMoment`) |
| Ambassadeurs: rol, afdeling en foto | `lib/content.ts` (`ambassadors`), portretten in `public/img/ambassadors` |
| Alle teksten NL en EN | `lib/i18n.ts` |
| Labels in de hero (doelgroepen, disciplines, plekken) | `lib/content.ts` (`pills`) |
| Partners en hun logo's | `lib/content.ts` (`partners`), logo's in `public/img/partners`. Zonder logo verschijnt de naam als woordmerk. |
| Vakgebieden (sectie na Wat is UMH) | `lib/content.ts` (`themes`) |
| Portretten ambassadeurs | `lib/content.ts` (`ambassadors`, `photo` en `pos`), bestanden in `public/img/ambassadors`. Zonder foto verschijnen initialen. |
| Foto's (Wat is UMH, ticket) | `lib/content.ts` (`images`), bestanden in `public/img/photos`. Een leeg pad laat het fotovak "Foto volgt" staan. De video-poster van het concept is nog een picsum-placeholder. |
| Beeldbronnen en licenties | `public/img/CREDITS.md`. Houd dit bij als je beeld toevoegt; CC BY-SA-foto's hebben een zichtbare bronvermelding op de site. |
| Stand van het handgeschreven accent onder titels | `app/layout.tsx`: `data-script="straight"` (recht, links uitgelijnd) of `data-script="tilt"` (schuin) |
| Video | zet `concept.mp4` in `public/videos`. Zolang die ontbreekt blijft de poster staan. |
| Kleuren, fonts, afronding, spacing | `app/globals.css` (tokens bovenaan) |
| Fonts (Anton, Outfit, Caveat via next/font) | `app/layout.tsx` |
| Logo (navigatie, footer, favicon) | `public/img/umh-logo.png` en `app/icon.png` |

## Opbouw

- `components/Hero.tsx`: kop met script-accent en de vallende, sleepbare labels (`Pills.tsx`).
- `components/Band.tsx`: bewegende Science Park-kleurenstrook die op de muis reageert.
- `components/Moment.tsx`: eerstvolgende moment als ticket met foto en aanmeldknop (mailto).
- `components/Umh.tsx`: wat UMH is, met twee overlappende foto's.
- `components/Themes.tsx`: de zes onderzoeksthema's van UMH, als compacte lijst (`themes` in `lib/content.ts`).
- `components/Concept.tsx`: concept met (licht vervaagde) video-achtergrond en drie kernwaarden die op elkaar stapelen bij het scrollen. De kaarten blijven dekkend; de kaart eronder krimpt en wordt iets donkerder.
- `components/Partners.tsx`: logowand met gelijke tegels.
- `components/Ambassadors.tsx`: ambassadeurs met portret in een gecentreerd raster.
- `components/Closing.tsx` en `components/Footer.tsx`: compacte afsluitende oproep en footer met links, contact en beeldbronnen.
- `components/ScrollFx.tsx`: alle scroll-animaties, voortgangsbalk en magnetische knoppen. Alles respecteert `prefers-reduced-motion`.
- `components/LangProvider.tsx`: NL/EN-schakelaar, onthouden in localStorage.
