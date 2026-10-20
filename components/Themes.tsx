"use client";

/* UMH's six research themes, as a compact typographic list. */

import { themes } from "@/lib/content";
import { Title } from "./Title";
import { useLang } from "./LangProvider";

export function Themes() {
  const { lang, t } = useLang();
  return (
    <section className="themes" id="themas">
      <div className="container">
        <div className="themes__head">
          <Title lines={[t("themes.l1")]} script={t("themes.script")} />
          <p className="themes__intro" data-reveal>{t("themes.intro")}</p>
        </div>
        <ol className="themes__list" data-reveal>
          {themes.map((th, i) => (
            <li key={th.en} className="theme" style={{ "--c": `var(${th.c})` } as React.CSSProperties}>
              <span className="theme__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <span className="theme__bar" aria-hidden="true" />
              <span className="theme__name">{th[lang]}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
