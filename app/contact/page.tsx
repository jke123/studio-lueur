import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import { studio } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${studio.name} pour un devis personnalisé.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
        Contact
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-bone md:text-5xl">
        Parlons de votre projet.
      </h1>

      <div className="mt-14 grid gap-16 md:grid-cols-[1fr_1.3fr]">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
            <div>
              <h3 className="font-display text-lg text-bone">Téléphone / WhatsApp</h3>
              <p className="mt-1 font-body text-sm text-bone/65">{studio.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
            <div>
              <h3 className="font-display text-lg text-bone">E-mail</h3>
              <p className="mt-1 font-body text-sm text-bone/65">{studio.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
            <div>
              <h3 className="font-display text-lg text-bone">Adresse</h3>
              <p className="mt-1 font-body text-sm text-bone/65">{studio.address}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
