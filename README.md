# Bad Labs

A cinematic, production-ready wedding invitation studio portfolio built with **React 19**, **TanStack Router**, and **Tailwind CSS v4**. It features a dark luxury aesthetic, motion-driven storytelling, and a curated gallery of interactive invitation experiences.

![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=white)
![TanStack Router](https://img.shields.io/badge/TanStack-Router-FF4154)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-0ea5e9?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.x-0055FF?logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)

## 1. Project Overview

Bad Labs is a single-page portfolio for a boutique wedding invitation studio — a private collection of interactive, cinematic wedding invitation websites. The experience is designed to feel like stepping into a film: dark, atmospheric, and deliberately paced.

This project exists as a production-minded React codebase that demonstrates:

- **Strong visual identity** through a custom cinematic design system (dark luxury palette, film grain, gold accents).
- **Modern React patterns** (functional components, hooks, strict TypeScript).
- **File-based routing** with TanStack Router for type-safe navigation.
- **Performant animations** using Framer Motion with intersection observer triggers.
- **A data-driven project registry** that scales by simply appending to an array.
- **Responsive, accessible layouts** that degrade gracefully across devices.

---

## 2. Key Features

- **Cinematic hero** with animated background, floating particles, and staggered text reveals.
- **Project showcase** with mood-based filtering and a responsive masonry-style grid.
- **Project cards** with hover-driven lift effects, film grain overlays, and external link navigation.
- **Studio about section** with motion-triggered stats and brand storytelling.
- **Commission footer** with direct WhatsApp contact integration.
- **Mouse glow** cursor-following ambient light effect (desktop only).
- **Scroll-aware header** that transitions from transparent to frosted glass on scroll.
- **Smooth scroll** navigation between page sections.
- **404 and error boundaries** with branded fallback UI.
- **SEO-ready meta tags** via TanStack Router's file-based `head` API.

---

## 3. Tech Stack

- **React 19**
  - Chosen for the latest concurrent features, improved hydration, and modern JSX transform. The app uses `StrictMode` for early detection of side effects.
- **TanStack Router**
  - File-based routing with automatic code splitting, type-safe link generation, and route-level `head` configuration for meta tags. Scroll restoration is enabled out of the box.
- **TanStack Query (React Query)**
  - Integrated at the router context level for future server-state needs. The query client is provided globally via `QueryClientProvider` in the root route.
- **Tailwind CSS v4**
  - Custom theme system using the new `@theme inline` block, CSS custom properties, and OKLCH color space for a refined cinematic palette. Features bespoke utilities for film grain, vignette, shimmer text, and hover-lift effects.
- **Framer Motion**
  - Declarative animations for page entrance, scroll-triggered reveals (`whileInView`), and staggered delays. All motion uses a custom cinematic easing curve `[0.22, 1, 0.36, 1]`.
- **Radix UI Primitives**
  - Unstyled, accessible UI primitives used throughout `src/components/ui/` for consistent interaction patterns (dialogs, dropdowns, toggles, etc.).
- **Vite**
  - Fast dev server, optimized production builds, and first-class TypeScript support via `@vitejs/plugin-react`.

---

## 4. Architecture & Design

### High-level architecture

Bad Labs follows a flat, feature-oriented component architecture:

- **Presentation layer** (`src/components/site/`): page-specific sections (Hero, Showcase, About, Footer, Header).
- **Reusable UI layer** (`src/components/ui/`): unstyled Radix-based primitives and shared UI building blocks.
- **Data layer** (`src/data/projects.ts`): the single source of truth for the project registry.
- **Routing layer** (`src/routes/`): file-based route definitions leveraging TanStack Router conventions.
- **Styling layer** (`src/styles.css`): global theme tokens, custom utilities, and base resets.

### Component structure philosophy

- **Pure display components**: rely on props and local state. No side effects beyond animation triggers.
- **Page sections**: self-contained vertical slices that compose smaller presentational units.
- **Data-driven rendering**: the showcase grid and mood filters derive entirely from the `projects` array.

### Reusability approach

- **`ProjectCard`** is a generic, reusable card that accepts any `InvitationProject` shape.
- **`Particles`** is a configurable floating particle system with adjustable count.
- **Custom CSS utilities** (`.film-grain`, `.vignette`, `.hover-lift`, `.shimmer-text`) are globally available and composable.

---

## 5. Project Structure

```
src/
  assets/              — static images (hero, project thumbnails)
  components/
    site/              — page sections (Header, Hero, Showcase, About, Footer, etc.)
    ui/                — reusable Radix-based UI primitives
  data/
    projects.ts        — typed project registry and mood taxonomy
  hooks/
    use-mobile.tsx     — responsive breakpoint detection
  lib/
    utils.ts           — `cn()` utility for Tailwind class merging
  routes/
    __root.tsx         — root layout with QueryClientProvider, 404, and error boundaries
    index.tsx          — home page composing all site sections
  styles.css           — global theme, custom utilities, and Tailwind v4 config
  main.tsx             — React root entry point
  router.tsx           — TanStack Router instance creation
```

---

## 6. Data Flow

### Project registry → UI

1. **Project data** lives in `src/data/projects.ts` as a typed array of `InvitationProject` objects.
2. **`Showcase`** imports the array and derives a filtered subset based on the active `Mood` filter state.
3. **`ProjectCard`** receives a single project object and renders its visual representation with a link to the live experience.
4. **Adding a new invitation** requires only:
   - Dropping a thumbnail into `src/assets/`
   - Importing it in `projects.ts`
   - Appending a new object to the `projects` array

### Animation flow

- **`Hero`** uses `motion` components with `initial` / `animate` props for mount animations.
- **`Showcase`**, **`About`**, and **`ProjectCard`** use `whileInView` with `viewport={{ once: true }}` to trigger scroll-based reveals.
- **Stagger delays** are calculated dynamically (`(index % 3) * 0.1`) to create a cascading grid entrance.

---

## 7. UI/UX Considerations

### Performance

- **Lazy-loaded images** with native `loading="lazy"` on project thumbnails.
- **`requestAnimationFrame`-based mouse glow** to avoid layout thrashing.
- **CSS-based film grain** using an inline SVG noise filter (no external assets).
- **Particle system** uses deterministic `useMemo` to prevent re-generation on re-renders.

### Accessibility

- **Semantic HTML** (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
- **`aria-hidden`** on decorative elements (particles, mouse glow, film grain overlays).
- **Adequate color contrast** using OKLCH perceptually uniform colors.
- **Smooth scroll behavior** does not interfere with keyboard navigation.

### Responsiveness

- **Mobile-first** Tailwind utility classes.
- **Header** collapses to a minimal brand + CTA on small screens.
- **Showcase grid** adapts from 1 to 2 to 3 columns.
- **Mouse glow** is hidden on mobile (`hidden md:block`).

### UX decisions

- **Cinematic pacing**: animations are slow (1–2.4s) with long easing for a luxurious feel.
- **Gold** as the only accent color creates a cohesive, premium identity.
- **External project links** open in new tabs (`target="_blank" rel="noopener noreferrer"`).
- **Direct WhatsApp commission CTA** reduces friction for potential clients.

---

## 8. Installation & Running Locally

### Prerequisites

- Node.js 22+ (recommended: latest LTS)
- npm or bun

### Setup

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

Navigate to: `http://localhost:5173/`

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint & format

```bash
npm run lint
npm run format
```

---

## 9. Environment & Deployment

### Netlify

The project includes a `netlify.toml` with:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **SPA redirect rule**: `/* → /index.html` (status 200)
- **Node version**: 22

### Adding new projects

1. Add a thumbnail image to `src/assets/` (recommended aspect ratio: 3:4 portrait).
2. Import the asset in `src/data/projects.ts`.
3. Append a new `InvitationProject` object to the `projects` array.
4. The new project will automatically appear in the showcase with mood filtering support.

---

## 10. Future Improvements

- Add a dedicated `/project/:id` detail route for deep-linking individual invitations.
- Introduce a contact form with validation (React Hook Form + Zod) alongside the WhatsApp CTA.
- Add a testimonials or press section to build social proof.
- Implement dark/light mode toggle (currently hardcoded to cinematic dark).
- Add blog or journal section for studio updates and behind-the-scenes content.
- Consider SSR/SSG (e.g., Vike or Astro) for improved SEO and first-contentful paint.

---

## 11. Developer Notes

### Advanced patterns used

- **TanStack Router file-based routing** with route-level `head` metadata.
- **Tailwind v4 `@theme inline`** for custom design tokens in CSS.
- **OKLCH color space** for perceptually uniform theming.
- **Framer Motion orchestration** with staggered viewport-triggered reveals.
- **Pure CSS effects** (film grain via SVG noise filter, vignette via radial gradient, shimmer via animated background-position).

### Trade-offs (intentional)

- A single-page design prioritizes narrative flow over deep information architecture.
- No global state manager is needed; local React state is sufficient for the current scope.
- External project links open live experiences rather than embedding them to preserve performance and isolate each cinematic build.

### What makes this project "Great"

- A cohesive, opinionated visual identity executed consistently across every section.
- Motion that serves storytelling rather than decoration.
- Scalable data model: adding projects is a zero-code-change operation beyond the registry.
- Performance-conscious decisions (lazy loading, RAF, CSS-based effects).
- Clean separation between site-specific sections, reusable UI primitives, and data.

---

## 12. Author

Built as a production-minded portfolio project for Bad Labs — a boutique studio crafting cinematic wedding invitation experiences.

If you are a recruiter or hiring manager:

- Review `src/styles.css` to see the custom cinematic design system and Tailwind v4 theme configuration.
- Review `src/components/site/Hero.tsx` and `src/components/site/Showcase.tsx` to evaluate animation orchestration and component composition.
- Review `src/data/projects.ts` to understand the typed, scalable data model.
