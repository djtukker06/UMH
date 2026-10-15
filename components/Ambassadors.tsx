"use client";

/* Portraits are not available yet: initials on a Science Park colour stand in.
   Add a photo per person in /public/img and render it inside .person__avatar. */

import { ambassadors } from "@/lib/content";
import { Title } from "./Title";
import { useLang } from "./LangProvider";

const initials = (name: string) => name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

export function Ambassadors() {
  const { t } = useLang();
  return (
    <section className="amb" id="ambassadeurs">
      <div className="container">
        <Title lines={[t("amb.l1")]} script={t("amb.script")} light />
      </div>
      <ul className="amb__row">
        {ambassadors.map((a) => (
          <li key={a.name} className="person" data-reveal style={{ "--c": `var(${a.c})` } as React.CSSProperties}>
            <span className="person__avatar" aria-hidden="true">{initials(a.name)}</span>
            <span className="person__name">{a.name}</span>
            <span className="person__role">{a.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
