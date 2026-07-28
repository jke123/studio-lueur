// Données centrales du site — Studio Lueur
// Toutes les données sont statiques (aucun backend requis).

export const studio = {
  name: "Studio Lueur",
  tagline: "Là où la lumière raconte votre histoire.",
  founded: 2016,
  location: "Abomey-Calavi, Bénin",
  phone: "+229 01 67 00 40 80",
  whatsapp: "+229 01 67 00 40 80",
  email: "kalebadagbe@gmail.com",
  address: "Abomey-Calavi, Bénin",
  story: [
    "Studio Lueur est né d'une conviction simple : la lumière n'est pas qu'une contrainte technique, c'est la matière première de toute image mémorable. Fondé à Abomey-Calavi, l'atelier a d'abord travaillé pour des familles et de jeunes entrepreneurs du Bénin avant de collaborer avec des marques et des institutions à travers l'Afrique de l'Ouest.",
    "Chaque projet commence par la même question : quelle lumière raconte le mieux ce moment ? Cette exigence, appliquée mariage après mariage, marque après marque, a bâti la réputation de l'atelier — un travail reconnaissable, jamais interchangeable.",
    "Aujourd'hui, Studio Lueur réunit une petite équipe de photographes, de retoucheurs et de réalisateurs qui partagent un seul objectif : livrer des images que nos clients regarderont encore avec émotion dans vingt ans.",
  ],
  values: [
    {
      title: "Exigence technique",
      description:
        "Chaque réglage — ouverture, ISO, vitesse — est choisi pour servir l'émotion de l'instant, jamais par automatisme.",
    },
    {
      title: "Discrétion",
      description:
        "Nous documentons sans jamais nous imposer : les meilleurs moments sont ceux où personne ne pose pour l'objectif.",
    },
    {
      title: "Transparence",
      description:
        "Devis clairs, délais tenus, retouches expliquées. Aucune surprise entre la réservation et la livraison.",
    },
    {
      title: "Ancrage local",
      description:
        "Basés à Abomey-Calavi, nous connaissons la lumière, les lieux et les codes culturels qui font la différence.",
    },
  ],
  stats: [
    { value: 9, suffix: "", label: "années d'activité" },
    { value: 480, suffix: "+", label: "projets livrés" },
    { value: 65, suffix: "+", label: "marques accompagnées" },
    { value: 98, suffix: "%", label: "clients qui recommandent" },
  ],
  team: [
    {
      name: "Aïssatou K.",
      role: "Photographe principale — Mariage & Portrait",
      bio: "Formée à Dakar puis à Paris, Aïssatou dirige la direction artistique de l'atelier depuis 2018.",
    },
    {
      name: "Rufin D.",
      role: "Photographe — Corporate & Événementiel",
      bio: "Ancien photojournaliste, Rufin apporte un œil documentaire aux projets de marque.",
    },
    {
      name: "Nadège S.",
      role: "Retouche & Post-production",
      bio: "Responsable de la cohérence visuelle de chaque livraison, du tri à l'export final.",
    },
    {
      name: "Comlan A.",
      role: "Réalisateur — Mode & Films de marque",
      bio: "Pilote les tournages courts-métrages et les capsules mode de l'atelier.",
    },
  ],
};

export type GalleryCategory =
  | "Mariage"
  | "Portrait"
  | "Corporate"
  | "Événementiel"
  | "Mode";

export const galleryCategories: GalleryCategory[] = [
  "Mariage",
  "Portrait",
  "Corporate",
  "Événementiel",
  "Mode",
];

export const galleryImages: {
  id: string;
  category: GalleryCategory;
  src: string;
  alt: string;
}[] = [
  { id: "g1", category: "Mariage", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80", alt: "Couple de mariés au coucher du soleil" },
  { id: "g2", category: "Mariage", src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80", alt: "Échange des alliances" },
  { id: "g3", category: "Portrait", src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80", alt: "Portrait en lumière naturelle" },
  { id: "g4", category: "Portrait", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80", alt: "Portrait studio noir et blanc" },
  { id: "g5", category: "Corporate", src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80", alt: "Équipe en réunion" },
  { id: "g6", category: "Corporate", src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80", alt: "Portrait corporate en bureau" },
  { id: "g7", category: "Événementiel", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80", alt: "Concert et foule en liesse" },
  { id: "g8", category: "Événementiel", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80", alt: "Conférence sur scène" },
  { id: "g9", category: "Mode", src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80", alt: "Séance mode en extérieur" },
  { id: "g10", category: "Mode", src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80", alt: "Look book collection wax" },
  { id: "g11", category: "Mariage", src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80", alt: "Danse des mariés" },
  { id: "g12", category: "Portrait", src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1200&q=80", alt: "Portrait enfant souriant" },
];

export const portfolioProjects: {
  slug: string;
  title: string;
  category: GalleryCategory;
  client: string;
  year: string;
  cover: string;
  summary: string;
  story: string;
  objectives: string[];
  images: string[];
  result: string;
  testimonial: { quote: string; author: string };
}[] = [
  {
    slug: "mariage-adjovi",
    title: "Mariage Adjovi & Béatrice",
    category: "Mariage",
    client: "Famille Adjovi",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80",
    summary: "Un mariage traditionnel et civil documenté sur trois jours à Abomey-Calavi.",
    story:
      "Adjovi et Béatrice souhaitaient un reportage qui capture à la fois la cérémonie traditionnelle et la réception, sans jamais interrompre le déroulement de la journée. L'équipe a couvert les préparatifs dès l'aube jusqu'au bal final, en s'appuyant sur deux photographes positionnés en simultané.",
    objectives: [
      "Documenter la cérémonie traditionnelle dans son intégralité",
      "Livrer une sélection de 400 photos retouchées sous 15 jours",
      "Produire un film récapitulatif de 3 minutes",
    ],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
    ],
    result:
      "420 photographies livrées en 12 jours et un film de mariage diffusé lors de la réception du lendemain, un format devenu depuis une signature de l'atelier.",
    testimonial: {
      quote:
        "L'équipe s'est faite oublier toute la journée, et pourtant chaque instant important a été capturé.",
      author: "Béatrice A., mariée",
    },
  },
  {
    slug: "corporate-flexafrica",
    title: "Campagne portraits FlexAfrica",
    category: "Corporate",
    client: "FlexAfrica SARL",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1600&q=80",
    summary: "Portraits d'équipe et reportage bureau pour le rapport annuel d'une entreprise de logistique.",
    story:
      "FlexAfrica avait besoin d'une banque d'images cohérente pour son rapport annuel, son site web et son réseau LinkedIn. L'enjeu : photographier 40 collaborateurs en une seule journée sans ralentir l'activité du bureau.",
    objectives: [
      "Portraits standardisés de 40 collaborateurs",
      "Reportage des espaces de travail et de la salle serveur",
      "Livraison compatible avec la charte graphique existante",
    ],
    images: [
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    ],
    result:
      "Une bibliothèque de 180 visuels utilisée pendant plus d'un an sur l'ensemble des supports de communication de FlexAfrica.",
    testimonial: {
      quote:
        "Un studio installé à l'entrée, un planning minuté, aucun collaborateur n'a attendu plus de cinq minutes.",
      author: "Responsable communication, FlexAfrica",
    },
  },
  {
    slug: "mode-collection-wax",
    title: "Lookbook — Collection Wax Héritage",
    category: "Mode",
    client: "Maison Adande",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
    summary: "Lookbook de 24 tenues pour le lancement d'une collection textile inspirée des motifs traditionnels.",
    story:
      "La styliste souhaitait un lookbook qui mette en valeur les motifs sans effacer la personnalité des mannequins. Le tournage s'est déroulé sur deux jours, en extérieur puis en studio, avec une direction artistique construite autour de la lumière naturelle de fin de journée.",
    objectives: [
      "24 tenues photographiées en deux jours",
      "Mixte studio et extérieur",
      "Livraison d'un lookbook PDF et de visuels réseaux sociaux",
    ],
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
    ],
    result:
      "Le lookbook a servi de support principal au lancement de la collection, avec une série de visuels réutilisés pendant six mois sur les réseaux de la marque.",
    testimonial: {
      quote:
        "Les photos ont fait ressortir exactement l'histoire que je voulais raconter avec cette collection.",
      author: "Fondatrice, Maison Adande",
    },
  },
];

export const testimonials = [
  {
    quote:
      "Un travail d'une précision rare. Chaque image livrée était utilisable telle quelle, sans retouche supplémentaire de notre côté.",
    author: "Client corporate, secteur bancaire",
  },
  {
    quote:
      "Nous avons reçu nos photos de mariage en avance sur le délai annoncé, et la qualité a dépassé nos attentes.",
    author: "Couple marié, Cotonou",
  },
  {
    quote:
      "Studio Lueur comprend ce qu'une marque veut dire avant même de sortir l'appareil.",
    author: "Directrice marketing, agence événementielle",
  },
];

export const services = [
  {
    title: "Mariage",
    description:
      "Couverture complète de la cérémonie traditionnelle à la réception, avec livraison retouchée et film récapitulatif en option.",
    settings: "f/1.8 · ISO 400 · lumière naturelle privilégiée",
  },
  {
    title: "Portrait",
    description:
      "Séances individuelles ou familiales, en studio ou en extérieur, pour des portraits destinés à durer.",
    settings: "f/2.8 · ISO 200 · éclairage studio contrôlé",
  },
  {
    title: "Corporate",
    description:
      "Portraits d'équipe, reportages bureau et visuels institutionnels pour rapports annuels et communication interne.",
    settings: "f/4 · ISO 320 · lumière mixte",
  },
  {
    title: "Événementiel",
    description:
      "Conférences, lancements de produits et concerts documentés en temps réel, livraison rapide sous 48h possible.",
    settings: "f/2.8 · ISO 1600 · faible lumière",
  },
  {
    title: "Mode",
    description:
      "Lookbooks et campagnes pour marques et créateurs, direction artistique complète sur demande.",
    settings: "f/2 · ISO 100 · lumière dorée de fin de journée",
  },
];

export const pricingPlans = [
  {
    name: "Essentiel",
    price: "150 000",
    unit: "FCFA",
    description: "Pour une séance courte et un usage simple.",
    features: [
      "2 heures de prise de vue",
      "1 photographe",
      "40 photos retouchées",
      "Livraison sous 7 jours",
      "Galerie en ligne privée",
    ],
  },
  {
    name: "Signature",
    price: "420 000",
    unit: "FCFA",
    description: "La formule la plus choisie pour mariages et projets de marque.",
    features: [
      "Journée complète (jusqu'à 8h)",
      "2 photographes",
      "250 photos retouchées",
      "Livraison sous 10 jours",
      "Film récapitulatif de 2 à 3 min",
      "Galerie en ligne privée",
    ],
    featured: true,
  },
  {
    name: "Prestige",
    price: "Sur devis",
    unit: "",
    description: "Pour campagnes de marque, lookbooks et projets multi-jours.",
    features: [
      "Tournage multi-jours",
      "Équipe complète (photo + réalisation)",
      "Direction artistique dédiée",
      "Livrables adaptés à votre charte",
      "Accompagnement post-production",
    ],
  },
];

export const faqs = [
  {
    question: "Quel est le délai moyen de livraison des photos ?",
    answer:
      "Entre 7 et 15 jours selon la formule choisie et la saison. Un délai express sous 48h est disponible en option pour l'événementiel.",
  },
  {
    question: "Peut-on choisir le nombre de photos retouchées ?",
    answer:
      "Oui, chaque formule inclut un nombre de photos retouchées, et des photos supplémentaires peuvent être ajoutées à l'unité après la séance.",
  },
  {
    question: "Le studio se déplace-t-il en dehors d'Abomey-Calavi ?",
    answer:
      "Oui, l'équipe intervient dans tout le Bénin et peut se déplacer en Afrique de l'Ouest pour les projets de plusieurs jours, frais de déplacement en sus.",
  },
  {
    question: "Comment se déroule le paiement ?",
    answer:
      "Un acompte de 40% confirme la réservation, le solde est réglé à la livraison des photos. Les modalités précises sont indiquées sur le devis.",
  },
  {
    question: "Les droits d'utilisation des photos sont-ils inclus ?",
    answer:
      "Oui, un usage personnel ou commercial standard est inclus. Les usages publicitaires à grande échelle font l'objet d'une clause spécifique dans le devis.",
  },
  {
    question: "Peut-on demander des retouches supplémentaires après livraison ?",
    answer:
      "Oui, des allers-retours de retouche sont possibles après la livraison initiale, dans la limite précisée par votre formule.",
  },
];

export const socialLinks = [
  { name: "Facebook", handle: "@studiolueur" },
  { name: "Instagram", handle: "@studio.lueur" },
  { name: "TikTok", handle: "@studiolueur" },
  { name: "LinkedIn", handle: "Studio Lueur" },
  { name: "Pinterest", handle: "Studio Lueur" },
  { name: "YouTube", handle: "Studio Lueur" },
];
