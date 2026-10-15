"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { dictionaries, type Key, type Lang } from "@/lib/i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string };

const LangContext = createContext<Ctx>({ lang: "nl", setLang: () => {}, t: (k) => dictionaries.nl[k] });

/* Tiny external store around localStorage so the server renders NL and the
   client picks up the stored choice without a setState-in-effect. */
const STORAGE_KEY = "umh-lang";
const listeners = new Set<() => void>();
const readLang = (): Lang => {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "en" ? "en" : "nl";
  } catch {
    return "nl";
  }
};
const subscribe = (cb: () => void) => { listeners.add(cb); return () => listeners.delete(cb); };
const writeLang = (l: Lang) => {
  try { window.localStorage.setItem(STORAGE_KEY, l); } catch {}
  listeners.forEach((cb) => cb());
};

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "nl" as Lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => writeLang(l), []);
  const value = useMemo<Ctx>(() => ({ lang, setLang, t: (k) => dictionaries[lang][k] }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
