import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Privacy Policy · Gowtham",
  description: "How gowtham.codelove.in handles data: CodeLove Analytics visit counts, Google AdSense cookies, embedded games and your choices.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <InfoPage title="Privacy Policy" updated="November 2026">
      <p>
        This is the privacy policy for gowtham.codelove.in, the 3D portfolio of Gowtham, the developer behind CodeLove. The site has no
        accounts, no sign-up and no forms, so it never asks for your name, email or files.
      </p>

      <h2>What is collected</h2>
      <p>
        The site uses CodeLove Analytics, our own small visit counter (admin.codelove.in/t.js). It counts page views, time on the page,
        clicks, the page that sent you here, the type of device and browser, and your time zone. To tell new visitors from returning
        ones it keeps one random id in your browser&apos;s local storage. It sets no cookies and does not record your IP address or
        anything you type.
      </p>

      <h2>Advertising</h2>
      <p>
        This site uses Google AdSense. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this
        website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on
        your visits to this site and other sites on the Internet.
      </p>
      <p>
        You can opt out of personalised advertising in <a href="https://adssettings.google.com">Google Ads Settings</a>, and opt out of
        other vendors&apos; cookies for personalised advertising at <a href="https://www.aboutads.info">aboutads.info</a>. Read{" "}
        <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from sites that use its services</a>.
      </p>

      <h2>Embedded games and links</h2>
      <p>
        The Game Center room plays games from games.codelove.in inside the page, and every room links to another CodeLove site. Those
        sites follow the <a href="https://codelove.in/legal/privacy">CodeLove privacy policy</a>.
      </p>

      <h2>Sound and voice</h2>
      <p>
        The music is made in your browser and the guides&apos; voices are audio files on this site. Nothing from your microphone or
        camera is used.
      </p>

      <h2>Your choices</h2>
      <p>
        You can clear local storage and cookies in your browser at any time. For any question about your data, write to{" "}
        <a href="mailto:gowtham@codelove.in">gowtham@codelove.in</a>.
      </p>
    </InfoPage>
  );
}
