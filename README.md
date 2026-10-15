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
| Rollen van ambassadeurs `[ROL / AFDELING]` | `lib/content.ts` (`ambassadors`) |
| Alle teksten NL en EN | `lib/i18n.ts` |
| Labels in de hero (doelgroepen, disciplines, plekken) | `lib/content.ts` (`pills`) |
| Partners | `lib/content.ts` (`partners`) |
| Foto's (nu picsum-placeholders) | `lib/content.ts` (`images`), bestanden in `public/img` |
| Video | zet `concept.mp4` in `public/videos`. Zolang die ontbreekt blijft de poster staan. |
| Kleuren, fonts, afronding, spacing | `app/globals.css` (tokens bovenaan) |
| Fonts (Anton, Outfit, Caveat via next/font) | `app/layout.tsx` |
| Logo (navigatie, footer, favicon) | `public/img/umh-logo.png` en `app/icon.png` |

## Opbouw

- `components/Hero.tsx`: kop met script-accent en de vallende, sleepbare labels (`Pills.tsx`).
- `components/Band.tsx`: bewegende Science Park-kleurenstrook die op de muis reageert.
- `components/Moment.tsx`: eerstvolgende moment als ticket met aanmeldknop (mailto).
- `components/Concept.tsx`: concept met video-achtergrond en drie kernwaarden die op elkaar stapelen bij het scrollen.
- `components/ScrollFx.tsx`: alle scroll-animaties, voortgangsbalk en magnetische knoppen. Alles respecteert `prefers-reduced-motion`.
- `components/LangProvider.tsx`: NL/EN-schakelaar, onthouden in localStorage.
