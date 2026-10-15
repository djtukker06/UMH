"use client";

import { useSyncExternalStore } from "react";

/* Subscribes to a media query. Server snapshot is `false`, so SSR markup is the mobile-first version. */
export function useMediaQuery(query: string) {
  const subscribe = (cb: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  };
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false);
}
