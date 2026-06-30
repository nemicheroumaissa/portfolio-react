/**
 * MODEL — Projets
 *
 * ═══════════════════════════════════════════════════════════════════
 *  COMMENT AJOUTER UN PROJET PLUS TARD
 * ═══════════════════════════════════════════════════════════════════
 *  1. Copie le bloc commenté en bas de ce fichier.
 *  2. Colle-le AVANT la dernière `];` (chaque projet = un objet entre { }).
 *  3. Remplis les champs (voir détails ci-dessous).
 *  4. Sauvegarde → le site se met à jour automatiquement (npm run dev).
 *
 *  L'affichage montre 3 projets au départ, puis un bouton « Afficher plus ».
 *
 * ═══════════════════════════════════════════════════════════════════
 *  COMMENT AJOUTER UNE PHOTO
 * ═══════════════════════════════════════════════════════════════════
 *  Option A — Image locale (recommandé) :
 *    • Mets ton image dans :  public/projects/ma-photo.jpg
 *    • Dans img, écris :      "/projects/ma-photo.jpg"
 *
 *  Option B — Lien externe :
 *    • Héberge l'image (Imgur, Cloudinary, GitHub raw, etc.)
 *    • Colle l'URL complète dans img : "https://..."
 *
 *  Si img est vide (""), un placeholder « Aperçu à venir » s'affiche.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  COMMENT AJOUTER UNE DÉMO EN LIGNE
 * ═══════════════════════════════════════════════════════════════════
 *  • Déploie ton projet (Vercel, Netlify, Render, etc.)
 *  • Copie l'URL publique dans demoUrl : "https://mon-projet.vercel.app"
 *  • Le bouton « Démo » apparaît automatiquement.
 *  • Si demoUrl est vide, le texte « Démo bientôt disponible » s'affiche.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  CHAMPS DE CHAQUE PROJET
 * ═══════════════════════════════════════════════════════════════════
 *  title        → Nom du projet
 *  desc         → Description courte (1-2 phrases)
 *  detailedDesc → Description longue (optionnelle, dépliable sur le site)
 *  tags         → Technologies ["React", "Node.js", ...]
 *  img          → Photo (voir ci-dessus) ou "" pour placeholder
 *  demoUrl      → Lien démo en ligne ou "" si pas encore déployé
 *  githubUrl    → Lien repo GitHub ou "" pour masquer le bouton
 *  featured     → true = badge « Featured » sur la carte
 */

/** Nombre de projets visibles avant le bouton « Afficher plus » */
export const PROJECTS_INITIAL_COUNT = 3;

export const PROJECTS = [
  {
    title: "RY Performance",
    desc: "Plateforme web de personnalisation de véhicules avec aperçu visuel en temps réel.",
    detailedDesc:
      "RY Performance est une plateforme complète permettant aux utilisateurs de configurer leur véhicule (couleur, jantes, accessoires) avec un aperçu visuel interactif. Le projet intègre une authentification sécurisée avec confirmation par email, une messagerie en temps réel via Socket.io, et un tableau de bord administrateur pour gérer les demandes. Développé avec Node.js, Express, MySQL et Socket.io, il illustre ma capacité à concevoir une application full stack orientée expérience utilisateur.",
    tags: ["JavaScript", "Node.js", "Express", "MySQL", "Socket.io"],
    img: "",
    demoUrl: "",
    githubUrl: "https://github.com/nemicheroumaissa/RY-performance",
    featured: true,
  },

  // ── Exemple : décommente et adapte pour ajouter un 2e projet ──
  // {
  //   title: "Mon Autre Projet",
  //   desc: "Description courte visible sur la carte.",
  //   detailedDesc: "Description complète optionnelle, affichée au clic sur « Description détaillée ».",
  //   tags: ["React", "Tailwind"],
  //   img: "/projects/mon-autre-projet.jpg",
  //   demoUrl: "https://mon-autre-projet.vercel.app",
  //   githubUrl: "https://github.com/nemicheroumaissa/mon-autre-projet",
  //   featured: false,
  // },
];
