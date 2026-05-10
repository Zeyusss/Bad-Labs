/**
 * Bad Labs — Project Registry
 * ─────────────────────────────────────────────────────────────
 * To add a new wedding invitation experience to the gallery,
 * append a new object to the `projects` array below.
 *
 * 1. Drop a thumbnail image into `src/assets/` (1:1.4 portrait works best).
 * 2. Import it at the top of this file.
 * 3. Add an entry — it will automatically appear in the showcase.
 *
 * No other code changes required.
 */
import arabian from "@/assets/proj-arabian.jpg";
import royal from "@/assets/proj-royal.jpg";
import minimal from "@/assets/proj-minimal.jpg";
import grandeur from "@/assets/proj-grandeur.jpg";
import museum from "@/assets/proj-museum.jpg";
import parisian from "@/assets/proj-parisian.jpg";

export type Mood =
  | "Arabian Nights"
  | "Royal Luxury"
  | "Minimal Romance"
  | "Golden Cinematic Luxury"
  | "Cinematic Emotional Archive"
  | "Parisian Cinematic Romance";

export interface InvitationProject {
  id: string;
  title: string;
  couple?: string;
  mood: Mood;
  description: string;
  thumbnail: string;
  href: string;
  year: string;
  featured?: boolean;
}

export const projects: InvitationProject[] = [
  {
    id: "Yasmine-Idris",
    title: "Whispers of the Desert",
    couple: "Yasmine & Idris",
    mood: "Arabian Nights",
    description: "Lantern-lit corridors, crescent moons and ornate gold geometry.",
    thumbnail: arabian,
    href: "https://hidden-riad-nights.netlify.app/",
    year: "2026",
    featured: true,
  },
  {
    id: "Aiko-Hiroshi",
    title: "Sakura Dawn",
    couple: "Aiko & Hiroshi",
    mood: "Royal Luxury",
    description: "A soft cinematic wedding invitation inspired by cherry blossoms at sunrise.",
    thumbnail: royal,
    href: "https://sakura-dawn.netlify.app/",
    year: "2026",
    featured: true,
  },
  {
    id: "emma-lucas",
    title: "Garden of Mawadda",
    couple: "Ahmed & Nour",
    mood: "Minimal Romance",
    description:
      "A single rose. Soft ivory air. The poetry of restraint, told in whispers rather than words.",
    thumbnail: minimal,
    href: "https://garden-of-mawadda.netlify.app/",
    year: "2026",
  },
  {
    id: "Amélie-Julien",
    title: "Parisian Golden Hour",
    couple: "Amélie & Julien",
    mood: "Parisian Cinematic Romance",
    description: "A cinematic wedding invitation inspired by the golden light of Paris at sunset.",
    thumbnail: parisian,
    href: "https://parisian-golden-hour.netlify.app/",
    year: "2026",
  },

  {
    id: "AURELIA-BENEDICT",
    title: "Glided Grandeur",
    couple: "AURELIA  & BENEDICT",
    mood: "Golden Cinematic Luxury",
    description:
      "A grand cinematic wedding invitation inspired by golden elegance and timeless luxury.",
    thumbnail: grandeur,
    href: "https://glided-grandeur.netlify.app/",
    year: "2026",
  },
  {
    id: "Ahmed-Layla",
    title: "The Love Museum",
    couple: "Ahmed & Layla",
    mood: "Cinematic Emotional Archive",
    description:
      "An immersive museum of love stories where memories, emotions, and moments are curated.",
    thumbnail: museum,
    href: "https://love-museum.netlify.app/",
    year: "2026",
  },
];

export const moods: Mood[] = [
  "Arabian Nights",
  "Royal Luxury",
  "Minimal Romance",
  "Golden Cinematic Luxury",
  "Cinematic Emotional Archive",
  "Parisian Cinematic Romance",
];
