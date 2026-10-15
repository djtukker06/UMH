"use client";

import Image from "next/image";
import { EnvelopeSimple } from "@phosphor-icons/react";
import { contact } from "@/lib/content";
import { useLang } from "./LangProvider";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer__band" aria-hidden="true" />
      <div className="container footer__grid">
        <div>
          <Image className="footer__logo" src="/img/umh-logo.png" alt="Logo Utrecht Mobility & Health" width={96} height={96} />
          <p className="footer__brand">{t("footer.brand")}</p>
          <p className="footer__line">{t("footer.init")}</p>
        </div>
        <div>
          <p className="footer__label">{t("footer.contact")}</p>
          <a className="footer__mail" href={`mailto:${contact.email}`}>
            <EnvelopeSimple size={20} aria-hidden="true" /> {contact.email}
          </a>
        </div>
        <div>
          <p className="footer__label">{t("footer.conceptLabel")}</p>
          <p className="footer__line">{t("footer.concept")}</p>
        </div>
      </div>
    </footer>
  );
}
