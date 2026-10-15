"use client";

/* Muted looping background video with a poster. If the mp4 is missing, the poster stays.
   The muted flag is set in an effect because React does not always serialise it on SSR. */

import { useEffect, useRef } from "react";

type Props = { src: string; poster: string; className?: string; label?: string };

export function VideoSlot({ src, poster, className, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    return () => v.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <video ref={ref} className={className} poster={poster} autoPlay loop playsInline preload="metadata" aria-label={label} aria-hidden={label ? undefined : true}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
