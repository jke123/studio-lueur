import type { Metadata } from "next";
import { studio } from "@/lib/data";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité de ${studio.name}.`,
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
        Légal
      </span>
      <h1 className="mt-3 font-display text-4xl text-bone">
        Politique de confidentialité
      </h1>
      <p className="mt-4 font-mono text-xs text-bone/40">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
      </p>

      <div className="prose-invert mt-12 space-y-8 font-body text-sm leading-relaxed text-bone/70">
        <div>
          <h2 className="font-display text-xl text-bone">1. Données collectées</h2>
          <p className="mt-3">
            Lorsque vous utilisez le formulaire de contact de {studio.name}, nous
            collectons votre nom, votre adresse e-mail, votre numéro de téléphone
            (si renseigné) et le contenu de votre message. Ces informations sont
            transmises directement à notre messagerie via un service tiers
            d&apos;envoi d&apos;e-mails et ne sont stockées sur aucun serveur ni
            base de données appartenant à {studio.name}.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-bone">2. Utilisation des données</h2>
          <p className="mt-3">
            Les données transmises via le formulaire de contact sont utilisées
            exclusivement pour répondre à votre demande de devis ou
            d&apos;information. Elles ne sont ni vendues, ni cédées, ni utilisées
            à des fins publicitaires.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-bone">3. Cookies</h2>
          <p className="mt-3">
            Ce site n&apos;utilise pas de cookies de suivi publicitaire. Seules
            des préférences d&apos;affichage techniques peuvent être conservées
            localement dans votre navigateur.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-bone">4. Vos droits</h2>
          <p className="mt-3">
            Vous pouvez à tout moment demander l&apos;accès, la rectification ou
            la suppression des informations que vous nous avez transmises en nous
            contactant à l&apos;adresse {studio.email}.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-bone">5. Contact</h2>
          <p className="mt-3">
            Pour toute question relative à cette politique, contactez-nous au
            {" "}{studio.phone} ou par e-mail à {studio.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
