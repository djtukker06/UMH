"use client";

/* Logo wall: every partner gets the same tile. Without an official logo file
   the name is set as a wordmark so the grid stays even. */

import Image from "next/image";
import { partners } from "@/lib/content";
import { Title } from "./Title";
import { useLang } from "./LangProvider";

export function Partners() {
  const { lang, t } = useLang();
  return (
    <section className="partners" id="partners">
      <div className="container">
        <Title lines={[t("partners.l1")]} script={t("partners.script")} />
        <ul className="partners__list">
          {partners.map((p) => (
            <li key={p.name} className="partner" data-reveal style={{ "--c": `var(${p.c})` } as React.CSSProperties}>
              <span className="partner__mark">
                {p.logo ? (
                  <Image className="partner__logo" src={p.logo} alt={p.name} width={240} height={64} unoptimized />
                ) : (
                  <span className="partner__wordmark">{p.name}</span>
                )}
              </span>
              {p[lang] ? <span className="partner__sub">{p[lang]}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
