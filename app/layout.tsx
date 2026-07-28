import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Loader from "@/components/Loader";
import { studio } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://studio-lueur.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${studio.name} — Photographe professionnel à Abomey-Calavi, Bénin`,
    template: `%s — ${studio.name}`,
  },
  description:
    "Studio Lueur est un studio de photographie professionnel basé à Abomey-Calavi, Bénin, spécialisé en mariage, portrait, corporate, événementiel et mode.",
  keywords: [
    "photographe Bénin",
    "photographe Abomey-Calavi",
    "photographe mariage Bénin",
    "studio photo Cotonou",
    "photographe corporate Bénin",
  ],
  authors: [{ name: studio.name }],
  openGraph: {
    title: `${studio.name} — Photographe professionnel à Abomey-Calavi, Bénin`,
    description: studio.tagline,
    url: siteUrl,
    siteName: studio.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${studio.name} — Photographe professionnel à Abomey-Calavi, Bénin`,
    description: studio.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable} font-body antialiased`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
