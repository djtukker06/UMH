"use client";

import Image from "next/image";
import { ImageSquare } from "@phosphor-icons/react";
import { images } from "@/lib/content";
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

        {/* Photos come from lib/content.ts (images). An empty path keeps the "Foto volgt" slot. */}
        <figure className="umh__figure" data-reveal>
          {images.umhMain ? (
            <div className="blob blob--a">
              <Image src={images.umhMain} alt={t("umh.alt1")} fill sizes="(max-width: 860px) 90vw, 560px" />
            </div>
          ) : (
            <div className="blob blob--a photo-slot" aria-hidden="true"><ImageSquare size={36} /><span>{t("umh.photo")}</span></div>
          )}
          {images.umhSmall ? (
            <div className="blob blob--b">
              <Image src={images.umhSmall} alt={t("umh.alt2")} fill sizes="(max-width: 860px) 45vw, 260px" />
            </div>
          ) : (
            <div className="blob blob--b photo-slot" aria-hidden="true"><ImageSquare size={28} /></div>
          )}
          {images.umhMain || images.umhSmall ? <figcaption className="umh__credit">{t("umh.credit")}</figcaption> : null}
        </figure>
      </div>
    </section>
  );
}
