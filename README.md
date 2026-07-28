# Studio Lueur — site vitrine

Site vitrine fictif d'un studio de photographie, construit avec Next.js 14
(App Router), TypeScript, Tailwind CSS, Framer Motion et Lucide React.
Aucun backend, aucune base de données : tout le contenu est géré en local
dans `lib/data.ts`.

## Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000.

## Configuration du formulaire de contact (EmailJS)

Le formulaire de contact (`app/contact/ContactForm.tsx`) envoie les messages
via [EmailJS](https://www.emailjs.com), sans serveur.

1. Copiez `.env.example` vers `.env.local`.
2. Créez un compte EmailJS, un "Email Service" et un "Email Template"
   (variables `{{name}}`, `{{email}}`, `{{phone}}`, `{{service}}`,
   `{{message}}`).
3. Renseignez `NEXT_PUBLIC_EMAILJS_SERVICE_ID`,
   `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` et `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   dans `.env.local`.

Toutes les instructions détaillées sont dans `.env.example`.

## Déploiement sur Vercel

1. Poussez ce projet sur GitHub.
2. Importez le dépôt sur [vercel.com](https://vercel.com).
3. Renseignez les trois variables d'environnement EmailJS dans
   **Project Settings → Environment Variables**.
4. Déployez — aucune configuration supplémentaire n'est nécessaire.

## Structure

- `app/` — pages (App Router), une route par page demandée
- `components/` — composants réutilisables (Navbar, Footer, Loader, etc.)
- `lib/data.ts` — tout le contenu du site (textes, portfolio, tarifs, FAQ…)
- `app/sitemap.ts` / `app/robots.ts` — SEO généré dynamiquement
- `app/icon.tsx` / `app/apple-icon.tsx` / `app/opengraph-image.tsx` —
  favicons et image Open Graph générés automatiquement par Next.js

## Notes

- Les images utilisées sont des photos libres de droits (Unsplash),
  chargées à distance — à remplacer par de vraies photos du studio avant
  une mise en production réelle.
- Le projet a été vérifié avec `npx tsc --noEmit` (aucune erreur de type).
