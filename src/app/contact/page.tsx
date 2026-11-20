import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Gowtham",
  description: "Contact Gowtham, the developer behind CodeLove, by WhatsApp or email for projects, collaborations, feedback and bug reports.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InfoPage title="Contact">
      <p>Have a project, a collaboration or feedback on a CodeLove tool? I&apos;m one message away and I reply myself.</p>
      <ul>
        <li>
          <b>WhatsApp:</b> <a href={contact.whatsappUrl}>{contact.whatsapp}</a>
        </li>
        {contact.emails.map((m) => (
          <li key={m.email}>
            <b>{m.label}:</b> <a href={`mailto:${m.email}`}>{m.email}</a>
          </li>
        ))}
      </ul>
      <p>For a bug in one of the tools, tell me which site, what you did and what happened, and I&apos;ll look at it.</p>
    </InfoPage>
  );
}
