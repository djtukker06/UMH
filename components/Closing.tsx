"use client";

import { ArrowUp } from "@phosphor-icons/react";
import { Title } from "./Title";
import { useLang } from "./LangProvider";

export function Closing() {
  const { t } = useLang();
  return (
    <section className="close">
      <div className="container close__inner" data-reveal>
        <Title lines={[t("close.l1")]} script={t("close.script")} />
        <a className="btn btn--dark" href="#moment" data-magnetic>
          <span>{t("close.cta")}</span>
          <ArrowUp className="btn__up" size={18} weight="bold" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
