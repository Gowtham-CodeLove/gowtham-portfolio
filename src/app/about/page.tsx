import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { sites } from "@/lib/sites";
import { skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Gowtham · Creative Web Developer & CodeLove Founder",
  description: "About Gowtham (Gowthamraj): a solo web developer from India who builds the free CodeLove tools, a 3D model library and browser games.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InfoPage title="About Gowtham">
      <p>
        I&apos;m Gowtham (Gowthamraj), a creative web developer from India and the one person behind{" "}
        <a href="https://codelove.in">CodeLove</a>. I design, code and run every CodeLove site myself, and all of them are free to use.
      </p>
      <p>
        This portfolio is a 3D museum: each room is one of my live products, with its logo on a pillar and its story on the walls. You
        can scroll through it, or walk around in first person.
      </p>

      <h2>What I&apos;ve built</h2>
      <ul>
        {sites.map((s) => (
          <li key={s.domain}>
            <a href={s.url}>{s.name}</a> — {s.tagline}
          </li>
        ))}
      </ul>

      <h2>What I work with</h2>
      <ul>
        {skills.map((g) => (
          <li key={g.title}>
            <b>{g.title}:</b> {g.items.join(", ")}
          </li>
        ))}
      </ul>

      <p>
        Want to work together or have an idea for a tool? See the <a href="/contact">contact page</a>.
      </p>
    </InfoPage>
  );
}
