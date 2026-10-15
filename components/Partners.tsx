"use client";

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
            <li key={p.name} className="partnerpill" data-reveal style={{ "--c": `var(${p.c})` } as React.CSSProperties}>
              <span className="partnerpill__dot" aria-hidden="true" />
              <span className="partnerpill__name">{p.name}</span>
              {p[lang] ? <span className="partnerpill__sub">{p[lang]}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
