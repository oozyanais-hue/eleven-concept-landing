import heroImg from "@/assets/hero-interior.jpg";
import { BrandLogo } from "./BrandLogo";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Interior sofisticado" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <div className="mb-8">
          <span className="font-heading text-3xl md:text-4xl tracking-[0.4em] gold-text-gradient font-semibold">EC</span>
          <div className="w-16 h-px bg-gold mx-auto my-4 opacity-60" />
          <span className="text-sm tracking-[0.5em] text-muted-foreground uppercase font-body">Eleven Concept</span>
        </div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 text-cream">
          Do projeto à entrega final.
          <br />
          <span className="gold-text-gradient font-medium italic">Do conceito ao nível 11.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body font-light leading-relaxed">
          Móveis planejados e projetos completos de alto padrão — do design à entrega, sem intermediários.
        </p>

        <button
          onClick={scrollToContact}
          className="gold-gradient text-primary-foreground px-10 py-4 text-sm tracking-[0.2em] uppercase font-body font-medium hover:opacity-90 transition-opacity duration-300"
        >
          Fale com um especialista
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
        <div className="w-px h-8 bg-gold/40" />
      </div>
    </section>
  );
}
