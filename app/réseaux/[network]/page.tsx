import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import SocialIcon from "@/components/SocialIcon";
import { socialLinks } from "@/lib/data";

export function generateStaticParams() {
  return socialLinks.map((s) => ({ network: s.name.toLowerCase() }));
}

export function generateMetadata({
  params,
}: {
  params: { network: string };
}): Metadata {
  const social = socialLinks.find(
    (s) => s.name.toLowerCase() === params.network
  );
  return { title: social ? social.name : "Réseau social" };
}

export default function SocialPage({
  params,
}: {
  params: { network: string };
}) {
  const social = socialLinks.find(
    (s) => s.name.toLowerCase() === params.network
  );
  if (!social) notFound();

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center md:px-10">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
        <Clock className="h-6 w-6" />
      </div>
      <span className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-gold">
        {social.name}
      </span>
      <h1 className="mt-3 font-display text-3xl text-bone md:text-4xl">
        Cette page est en cours de mise à jour.
      </h1>
      <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-bone/60">
        Notre présence {social.name} ({social.handle}) est en cours de
        déploiement. Revenez bientôt, ou contactez-nous directement en
        attendant.
      </p>
      <div className="mt-8 flex items-center gap-4">
        {socialLinks.map((s) => (
          <SocialIcon key={s.name} name={s.name} />
        ))}
      </div>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 font-body text-sm text-bone/70 hover:text-gold"
      >
        <ArrowLeft className="h-4 w-4" /> Retour à l&apos;accueil
      </Link>
    </section>
  );
}
