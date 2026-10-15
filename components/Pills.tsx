"use client";

/* Who takes part and where it happens, as loose pills. On desktop they drop in on
   load and stay where they land. On small screens they wrap as a static cloud. */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Barbell, Bone, Buildings, Chalkboard, Flask, FirstAid, GraduationCap, Heartbeat, PawPrint,
  PersonSimpleWalk, Student, Wheelchair, type Icon,
} from "@phosphor-icons/react";
import { pills } from "@/lib/content";
import { useLang } from "./LangProvider";
import { useMediaQuery } from "@/lib/useMediaQuery";

const ICONS: Record<string, Icon> = {
  student: Student, flask: Flask, heartbeat: Heartbeat, chalkboard: Chalkboard, bone: Bone, walk: PersonSimpleWalk,
  barbell: Barbell, wheelchair: Wheelchair, paw: PawPrint, city: Buildings, hospital: FirstAid, graduation: GraduationCap,
};

/* Light pill colours get dark text. */
const DARK_TEXT = new Set(["--usp-1", "--usp-2", "--usp-18", "--usp-19", "--usp-20", "--usp-21", "--usp-22", "--usp-3"]);

export function Pills({ reducedMotion }: { reducedMotion: boolean }) {
  const { lang, t } = useLang();
  const fieldRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    if (!isDesktop) {
      // Small screens: static cloud, only a short staggered entrance.
      if (reducedMotion) return;
      const ctx = gsap.context(() => {
        gsap.from(".pill", { y: 24, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.05, delay: 0.3, clearProps: "all" });
      }, field);
      return () => ctx.revert();
    }
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(".pill", {
        y: -window.innerHeight * 0.9,
        rotation: () => gsap.utils.random(-40, 40),
        opacity: 0,
        duration: 1.3,
        ease: "bounce.out",
        stagger: { each: 0.07, from: "random" },
        delay: 0.5,
      });
    }, field);
    return () => ctx.revert();
  }, [reducedMotion, isDesktop]);

  return (
    <div className="pillfield" ref={fieldRef} role="list" aria-label={t("hero.pillsLabel")}>
      {pills.map((p) => {
        const IconC = ICONS[p.icon];
        const style = {
          "--c": `var(${p.c})`,
          "--pc": DARK_TEXT.has(p.c) ? "var(--ink)" : "var(--on-dark)",
          "--l": `${p.left}%`,
          "--t": `${p.top}%`,
          "--rot": `${p.rot}deg`,
        } as React.CSSProperties;
        return (
          <span key={p.nl} className="pill" role="listitem" style={style}>
            <span className="pill__icon" aria-hidden="true"><IconC size={15} weight="bold" /></span>
            {p[lang]}
          </span>
        );
      })}
    </div>
  );
}
