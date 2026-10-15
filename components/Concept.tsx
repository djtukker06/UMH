"use client";

import { images, videos } from "@/lib/content";
import { Title } from "./Title";
import { VideoSlot } from "./VideoSlot";
import { useLang } from "./LangProvider";

export function Concept() {
  const { t } = useLang();
  const values = [
    { cls: "value--teal", title: t("values.1.t"), body: t("values.1.p") },
    { cls: "value--orange", title: t("values.2.t"), body: t("values.2.p") },
    { cls: "value--yellow", title: t("values.3.t"), body: t("values.3.p") },
  ];

  return (
    <section className="concept" id="concept">
      <div className="concept__media">
        <VideoSlot className="concept__video" src={videos.concept} poster={images.conceptPoster} />
      </div>

      <div className="container concept__head">
        <Title lines={[t("concept.l1")]} script={t("concept.script")} light />
        <p className="concept__intro" data-reveal>{t("concept.intro")}</p>
      </div>

      <div className="values container" data-stack>
        {values.map((v) => (
          <article key={v.cls} className={`value ${v.cls}`}>
            <p className="value__eyebrow">{t("values.label")}</p>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
