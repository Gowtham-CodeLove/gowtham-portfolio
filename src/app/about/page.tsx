import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { sites } from "@/lib/sites";
import { skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Gowtham (Gowthamraj) · Web Developer & CodeLove",
  description: "About Gowtham (Gowthamraj): creative web developer from India, founder of CodeLove, and maker of this three.js 3D portfolio, free tools and games.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InfoPage title="About Gowtham (Gowthamraj)">
      <p>
        I&apos;m Gowtham (Gowthamraj), a creative web developer from India and the one person behind{" "}
        <a href="https://codelove.in">CodeLove</a>. I design, code and run every CodeLove site myself, and all of them are free to use.
      </p>

      <h2>Gowtham and CodeLove</h2>
      <p>
        CodeLove is my home for free tools for creators and developers. It started as one site and is now a small network: a video
        shorts cutter, an AI video maker, a free 3D model library, browser games, a link-in-bio builder and more. Every one of them is
        built and maintained by me, so when you write in, you reach the person who made the tool.
      </p>

      <h2>A three.js 3D portfolio</h2>
      <p>
        This portfolio is a 3D museum built with three.js: each room is one of my live products, with its logo on a pillar and its
        story on the walls. You can scroll through it, or walk around in first person. The furniture and the people in the rooms come
        from my own free 3D model library, and the Game Center room plays my browser games right on its retro TVs.
      </p>

      <h2>What a creative web developer does here</h2>
      <p>
        I like web work that is fast, useful and a little playful — tools that do one job well, and pages you can explore instead of
        only read. That means front-end and 3D on the web, the tooling behind it, and the small details that make a free tool feel
        finished.
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
