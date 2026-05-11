import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { GallerySection } from "@/components/GallerySection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PlansSection } from "@/components/PlansSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Eleven Concept — Móveis Planejados de Alto Padrão" },
      { name: "description", content: "Móveis planejados e projetos completos de alto padrão. Do design à entrega, sem intermediários. Eleven Concept." },
      { property: "og:title", content: "Eleven Concept — Móveis Planejados de Alto Padrão" },
      { property: "og:description", content: "Móveis planejados e projetos completos de alto padrão. Do design à entrega, sem intermediários." },
    ],
  }),
});

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <MissionSection />
      <GallerySection />
      <DifferentialsSection />
      <ProcessSection />
      <PlansSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
