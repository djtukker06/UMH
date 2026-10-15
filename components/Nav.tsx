"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { useLang } from "./LangProvider";

const links = [
  { href: "#moment", key: "nav.moment" },
  { href: "#umh", key: "nav.umh" },
  { href: "#concept", key: "nav.concept" },
  { href: "#partners", key: "nav.partners" },
] as const;

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const toggleLang = () => setLang(lang === "nl" ? "en" : "nl");

  return (
    <>
      <a className="skip-link" href="#main">{t("skip")}</a>
      <div className="progress" aria-hidden="true"><div className="progress__bar" /></div>

      <header className="nav" id="top">
        <a className="nav__brand" href="#top" aria-label="Utrecht Mobility & Health, naar boven">
          <Image className="nav__logo" src="/img/umh-logo.png" alt="" width={56} height={56} priority />
        </a>

        <nav className="nav__links" aria-label="Hoofdnavigatie">
          {links.map((l) => <a key={l.href} href={l.href}>{t(l.key)}</a>)}
        </nav>

        <div className="nav__actions">
          <button className="lang" type="button" onClick={toggleLang} aria-label={t("nav.langLabel")}>
            <span className={`lang__opt ${lang === "nl" ? "is-active" : ""}`}>NL</span>
            <span className="lang__sep" aria-hidden="true">/</span>
            <span className={`lang__opt ${lang === "en" ? "is-active" : ""}`}>EN</span>
          </button>
          <a className="btn btn--primary btn--sm" href="#moment">{t("nav.cta")}</a>
          <button
            className="nav__burger"
            type="button"
            aria-label={t("nav.menuOpen")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <List size={22} weight="bold" />
          </button>
        </div>
      </header>

      {open ? (
        <div className="menu" id="mobile-menu" role="dialog" aria-modal="true">
          <button className="menu__close" type="button" aria-label={t("nav.menuClose")} onClick={() => setOpen(false)}>
            <X size={22} weight="bold" />
          </button>
          <nav className="menu__links" aria-label="Mobiele navigatie">
            {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{t(l.key)}</a>)}
            <a href="#ambassadeurs" onClick={() => setOpen(false)}>{t("nav.amb")}</a>
          </nav>
          <a className="btn btn--primary" href="#moment" onClick={() => setOpen(false)}>{t("nav.cta")}</a>
        </div>
      ) : null}
    </>
  );
}
