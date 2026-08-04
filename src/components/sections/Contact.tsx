import { buildWhatsAppUrl } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";

const WHATSAPP_URL = buildWhatsAppUrl(
  "+14328477432",
  "Hi Gapstech, I'd like to discuss a project"
);

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Contact</h2>
      <p className="mt-3 text-muted">
        Fastest way to reach me is WhatsApp — or send a message below.
      </p>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-red px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-red-dim"
      >
        Chat on WhatsApp
      </a>

      <div className="mt-12">
        <ContactForm />
      </div>
    </section>
  );
}
