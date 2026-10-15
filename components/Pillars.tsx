"use client";

import { ChatsCircle, HandHeart, ShareNetwork } from "@phosphor-icons/react";
import { Title } from "./Title";
import { useLang } from "./LangProvider";

export function Pillars() {
  const { t } = useLang();
  return (
    <section className="pillars" id="pijlers">
      <div className="container">
        <Title lines={[t("pillars.l1")]} script={t("pillars.script")} />
        <ol className="pillars__list">
          <li className="pillar pillar--1" data-reveal>
            <ShareNetwork className="pillar__icon" size={40} aria-hidden="true" />
            <h3>{t("pillars.1.t")}</h3>
            <p>{t("pillars.1.p")}</p>
          </li>
          <li className="pillar pillar--2" data-reveal>
            <ChatsCircle className="pillar__icon" size={40} aria-hidden="true" />
            <h3>{t("pillars.2.t")}</h3>
            <p>{t("pillars.2.p")}</p>
          </li>
          <li className="pillar pillar--3" data-reveal>
            <HandHeart className="pillar__icon" size={40} aria-hidden="true" />
            <h3>{t("pillars.3.t")}</h3>
            <p>{t("pillars.3.p")}</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
