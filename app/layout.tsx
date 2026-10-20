import type { Metadata } from "next";
import { Anton, Caveat, Outfit } from "next/font/google";
import { LangProvider } from "@/components/LangProvider";
import "./globals.css";

/* Fonts worden door next/font zelf gehost (geen externe font-requests in de browser).
   Outfit en Caveat zijn variabele fonts: zonder weight-opgave laadt next/font de hele as. */
const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const body = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const script = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });

export const metadata: Metadata = {
  title: "Kennis met plezier | Utrecht Mobility & Health",
  description:
    "Kennis met plezier: een vast moment voor promovendi en jonge onderzoekers om uit het eigen onderzoek te stappen en elkaar te leren kennen. Een initiatief van Utrecht Mobility & Health.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" data-script="straight" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <head>
        <meta name="theme-color" content="#006060" />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
