"use client";

/* The Utrecht Science Park colour strip as a moving band.
   Segments near the pointer stretch up, like a dock. */

import { useEffect, useRef } from "react";
import { uspColors } from "@/lib/content";

const SEGMENTS = [...uspColors, ...uspColors, ...uspColors];

export function Band() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const band = ref.current;
    if (!band) return;
    const segs = Array.from(band.querySelectorAll<HTMLElement>(".band__seg"));
    let raf = 0;
    let px = -1;

    const paint = () => {
      raf = 0;
      for (const s of segs) {
        const r = s.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const d = Math.abs(cx - px);
        const k = px < 0 ? 0 : Math.max(0, 1 - d / 160);
        s.style.setProperty("--s", (0.55 + 0.45 * k).toFixed(3));
      }
    };
    const onMove = (e: PointerEvent) => { px = e.clientX; if (!raf) raf = requestAnimationFrame(paint); };
    const onLeave = () => { px = -1; if (!raf) raf = requestAnimationFrame(paint); };

    band.addEventListener("pointermove", onMove, { passive: true });
    band.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      band.removeEventListener("pointermove", onMove);
      band.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="band" ref={ref} aria-hidden="true">
      <div className="band__track">
        {SEGMENTS.map((c, i) => <span key={i} className="band__seg" style={{ "--c": c } as React.CSSProperties} />)}
      </div>
    </div>
  );
}
