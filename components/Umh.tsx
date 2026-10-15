"use client";

import { ImageSquare } from "@phosphor-icons/react";
import { Title } from "./Title";
import { useLang } from "./LangProvider";

export function Umh() {
  const { t } = useLang();
  return (
    <section className="umh" id="umh">
      <div className="container umh__grid">
        <div className="umh__text">
          <Title lines={[t("umh.l1")]} script={t("umh.script")} light />
          <blockquote className="umh__quote" data-reveal>
            <p>“{t("umh.quote")}”</p>
          </blockquote>
          <p className="umh__mission" data-reveal>{t("umh.mission")}</p>
        </div>

        {/* Photo slots. Drop the stills in /public/img and swap these for <Image> (see lib/content.ts, images). */}
        <div className="umh__figure" data-reveal aria-hidden="true">
          <div className="blob blob--a photo-slot"><ImageSquare size={36} /><span>{t("umh.photo")}</span></div>
          <div className="blob blob--b photo-slot"><ImageSquare size={28} /></div>
        </div>
      </div>
    </section>
  );
}
