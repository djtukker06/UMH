"use client";

/* Page-wide motion, all through GSAP ScrollTrigger (no scroll listeners):
   - scroll progress bar in Science Park colours
   - display headings: words slide up, the script writes itself in
   - [data-reveal] blocks rise into view
   - the three core values stack: each card shrinks a little as the next one arrives
   - nav gets a hairline once you leave the top
   - magnetic pull on primary buttons (pointer devices only)
   Everything above the "reduced" line is skipped under prefers-reduced-motion. */

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollFx() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(".progress__bar", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });

      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        const words = el.querySelectorAll(".title__word");
        const script = el.querySelector(".title__script");
        const onLoad = el.dataset.split === "load";
        const tl = gsap.timeline(onLoad ? { delay: 0.15 } : { scrollTrigger: { trigger: el, start: "top 85%", once: true } });
        tl.from(words, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.06, clearProps: "transform" });
        if (script) {
          tl.fromTo(
            script,
            { clipPath: "inset(-30% 100% -40% -5%)", opacity: 0 },
            { clipPath: "inset(-30% -5% -40% -5%)", opacity: 1, duration: 0.8, ease: "power2.inOut", clearProps: "clipPath,opacity" },
            "-=0.45",
          );
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 48, opacity: 0, duration: 0.9, ease: "power3.out", clearProps: "transform,opacity",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      const cards = gsap.utils.toArray<HTMLElement>("[data-stack] .value");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.94, opacity: 0.55, ease: "none",
          scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top top+=140", scrub: true },
        });
      });
    });

    mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      const cleanups: Array<() => void> = [];
      gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((btn) => {
        const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });
        const move = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.25);
        };
        const leave = () => { xTo(0); yTo(0); };
        btn.addEventListener("pointermove", move);
        btn.addEventListener("pointerleave", leave);
        cleanups.push(() => { btn.removeEventListener("pointermove", move); btn.removeEventListener("pointerleave", leave); });
      });
      return () => cleanups.forEach((fn) => fn());
    });

    const navTrigger = ScrollTrigger.create({
      start: 40,
      onToggle: (self) => document.querySelector(".nav")?.classList.toggle("is-scrolled", self.isActive),
    });

    // Fonts and images change heights after the first layout.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      mm.revert();
      navTrigger.kill();
      window.removeEventListener("load", refresh);
    };
  }, []);

  return null;
}
