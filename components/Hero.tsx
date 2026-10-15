"use client";

import { ArrowDown } from "@phosphor-icons/react";
import { Pills } from "./Pills";
import { Title } from "./Title";
import { useLang } from "./LangProvider";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Hero() {
  const { t } = useLang();
  const reduced = useReducedMotion();

  return (
    <section className="hero" id="hero">
      <div className="hero__inner container">
        <div className="hero__copy">
          <Title as="h1" trigger="load" lines={[t("hero.l1"), t("hero.l2")]} script={t("hero.script")} />
          <p className="hero__sub">{t("hero.sub")}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#moment" data-magnetic>
              <span>{t("hero.cta1")}</span>
              <ArrowDown className="btn__down" size={18} weight="bold" aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#umh">{t("hero.cta2")}</a>
          </div>
        </div>
        <Pills reducedMotion={reduced} />
      </div>
    </section>
  );
}
