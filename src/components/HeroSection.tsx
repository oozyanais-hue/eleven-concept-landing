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
        <div className="mb-10 flex flex-col items-center">
          <BrandLogo size="lg" showText={false} />
          <div className="w-16 h-px bg-gold mx-auto my-5 opacity-60" />
          <span className="font-heading text-2xl md:text-3xl text-cream tracking-[0.25em] uppercase font-medium">
            Bella <span className="italic gold-text-gradient">Itália</span>
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.5em] text-muted-foreground uppercase font-body mt-2">
            Ambientes Personalizados
          </span>
        </div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 text-cream">
          Elevamos o conceito do seu ambiente
          <br />
          <span className="gold-text-gradient font-medium italic">ao nível 11</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light mt-4 not-italic">
            — do projeto à entrega final
          </span>
        </h1>

        <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 font-body font-light leading-relaxed">
          Pare de perder tempo com vários fornecedores — <span className="text-gold">nós resolvemos tudo para você</span>.
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
