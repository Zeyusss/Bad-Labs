import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Showcase } from "@/components/site/Showcase";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { MouseGlow } from "@/components/site/MouseGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bad Labs — Cinematic Wedding Invitation Experiences" },
      {
        name: "description",
        content:
          "A private collection of interactive, cinematic wedding invitation websites. Handcrafted love stories by Bad Labs.",
      },
      { property: "og:title", content: "Bad Labs — Cinematic Wedding Invitations" },
      {
        property: "og:description",
        content:
          "Where weddings become cinema. Browse the Bad Labs collection of interactive invitation experiences.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative bg-background text-foreground">
      <MouseGlow />
      <Header />
      <main>
        <Hero />
        <Showcase />
        <About />
      </main>
      <Footer />
    </div>
  );
}
