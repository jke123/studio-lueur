import Link from "next/link";
import { Aperture, Phone, MapPin, Mail } from "lucide-react";
import { studio, socialLinks } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";

const columns = [
  {
    title: "Studio",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/gallery", label: "Galerie" },
      { href: "/services", label: "Services" },
    ],
  },
  {
    title: "Informations",
    links: [
      { href: "/tarifs", label: "Tarifs" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/confidentialite", label: "Politique de confidentialité" },
      { href: "/conditions", label: "Conditions d'utilisation" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-xl text-bone"
            >
              <Aperture className="h-5 w-5 text-gold" strokeWidth={1.5} />
              {studio.name}
            </Link>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-bone/60">
              {studio.tagline}
            </p>
            <ul className="mt-6 space-y-3 font-body text-sm text-bone/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" /> {studio.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" /> {studio.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" /> {studio.email}
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-body text-sm text-bone/70 transition-colors hover:text-bone"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <SocialIcon key={s.name} name={s.name} />
            ))}
          </div>
          <p className="font-mono text-xs text-bone/40">
            © {new Date().getFullYear()} {studio.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
