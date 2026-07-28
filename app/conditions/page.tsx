import type { Metadata } from "next";
import { studio } from "@/lib/data";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: `Conditions générales d'utilisation de ${studio.name}.`,
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
        Légal
      </span>
      <h1 className="mt-3 font-display text-4xl text-bone">
        Conditions d&apos;utilisation
      </h1>
      <p className="mt-4 font-mono text-xs text-bone/40">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
      </p>

      <div className="mt-12 space-y-8 font-body text-sm leading-relaxed text-bone/70">
        <div>
          <h2 className="font-display text-xl text-bone">1. Objet</h2>
          <p className="mt-3">
            Les présentes conditions régissent l&apos;utilisation du site
            {" "}{studio.name}, vitrine des prestations de photographie
            proposées par l&apos;atelier basé à Abomey-Calavi, Bénin.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-bone">2. Propriété intellectuelle</h2>
          <p className="mt-3">
            L&apos;ensemble des photographies, textes et éléments graphiques
            présentés sur ce site sont la propriété de {studio.name} ou de ses
            clients ayant autorisé leur diffusion. Toute reproduction sans
            autorisation préalable est interdite.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-bone">3. Devis et réservations</h2>
          <p className="mt-3">
            Les tarifs indiqués sur ce site sont donnés à titre indicatif. Toute
            prestation fait l&apos;objet d&apos;un devis personnalisé et d&apos;un
            accord préalable entre {studio.name} et le client avant réservation.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-bone">4. Responsabilité</h2>
          <p className="mt-3">
            {studio.name} s&apos;efforce d&apos;assurer l&apos;exactitude des
            informations diffusées sur ce site, sans garantir l&apos;absence
            d&apos;erreurs ou d&apos;omissions.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-bone">5. Droit applicable</h2>
          <p className="mt-3">
            Les présentes conditions sont soumises au droit béninois. Tout litige
            relève de la compétence des juridictions béninoises.
          </p>
        </div>
      </div>
    </section>
  );
}
