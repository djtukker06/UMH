"use client";

import Image from "next/image";
import { ArrowUp, EnvelopeSimple } from "@phosphor-icons/react";
import { contact } from "@/lib/content";
import type { Key } from "@/lib/i18n";
import { useLang } from "./LangProvider";

const links: ReadonlyArray<{ href: string; key: Key }> = [
  { href: "#moment", key: "nav.moment" },
  { href: "#umh", key: "nav.umh" },
  { href: "#concept", key: "nav.concept" },
  { href: "#partners", key: "nav.partners" },
  { href: "#ambassadeurs", key: "nav.amb" },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer__band" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__brandcol">
          <Image className="footer__logo" src="/img/umh-logo.png" alt="Logo Utrecht Mobility & Health" width={80} height={80} />
          <div>
            <p className="footer__brand">{t("footer.brand")}</p>
            <p className="footer__line">{t("footer.init")}</p>
          </div>
        </div>
        <nav aria-label={t("footer.pageLabel")}>
          <p className="footer__label">{t("footer.pageLabel")}</p>
          <ul className="footer__links">
            {links.map((l) => <li key={l.href}><a href={l.href}>{t(l.key)}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="footer__label">{t("footer.contact")}</p>
          <a className="footer__mail" href={`mailto:${contact.email}`}>
            <EnvelopeSimple size={20} aria-hidden="true" /> {contact.email}
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottomin">
          <div className="footer__small">
            <p>{t("footer.concept")}</p>
            <p id="beeldbronnen">{t("footer.credits")}</p>
          </div>
          <a className="footer__top" href="#top">
            <span>{t("footer.top")}</span>
            <ArrowUp size={16} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
