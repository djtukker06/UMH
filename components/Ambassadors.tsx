"use client";

/* Portraits live in /public/img/ambassadors (sources: public/img/CREDITS.md).
   Without a photo, initials on a Science Park colour stand in. */

import Image from "next/image";
import { ambassadors } from "@/lib/content";
import { Title } from "./Title";
import { useLang } from "./LangProvider";

const initials = (name: string) => name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

export function Ambassadors() {
  const { lang, t } = useLang();
  return (
    <section className="amb" id="ambassadeurs">
      <div className="container">
        <Title lines={[t("amb.l1")]} script={t("amb.script")} light />
        <ul className="amb__grid">
          {ambassadors.map((a) => (
            <li key={a.name} className="person" data-reveal style={{ "--c": `var(${a.c})` } as React.CSSProperties}>
              <span className="person__avatar">
                {a.photo ? (
                  <Image src={a.photo} alt="" fill sizes="112px" style={{ objectPosition: a.pos }} />
                ) : (
                  <span aria-hidden="true">{initials(a.name)}</span>
                )}
              </span>
              <span className="person__name">{a.name}</span>
              <span className="person__role">{a.role[lang]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
