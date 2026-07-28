import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Music2,
  Pin,
} from "lucide-react";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: Facebook,
  Instagram: Instagram,
  TikTok: Music2,
  LinkedIn: Linkedin,
  Pinterest: Pin,
  YouTube: Youtube,
};

export default function SocialIcon({ name }: { name: string }) {
  const Icon = icons[name] ?? Facebook;
  const slug = name.toLowerCase();
  return (
    <Link
      href={`/reseaux/${slug}`}
      aria-label={name}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-bone/70 transition-all hover:border-gold/50 hover:text-gold"
    >
      <Icon className="h-4 w-4" />
    </Link>
  );
}
