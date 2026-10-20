import { Ambassadors } from "@/components/Ambassadors";
import { Band } from "@/components/Band";
import { Closing } from "@/components/Closing";
import { Concept } from "@/components/Concept";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Moment } from "@/components/Moment";
import { Nav } from "@/components/Nav";
import { Partners } from "@/components/Partners";
import { Themes } from "@/components/Themes";
import { ScrollFx } from "@/components/ScrollFx";
import { Umh } from "@/components/Umh";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Band />
        <Moment />
        <Umh />
        <Themes />
        <Concept />
        <Partners />
        <Ambassadors />
        <Closing />
      </main>
      <Footer />
      <ScrollFx />
    </>
  );
}
