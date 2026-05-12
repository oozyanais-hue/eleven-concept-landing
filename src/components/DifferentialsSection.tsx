import diff01 from "@/assets/diff-01.jpg";
import diff02 from "@/assets/diff-02.jpg";

export function DifferentialsSection() {
  const cards = [
    { title: "Projeto completo e personalizado", desc: "Cada detalhe pensado exclusivamente para o seu espaço.", image: diff01 },
    { title: "Gestão total da obra", desc: "Acompanhamento integral, sem preocupações para você.", image: diff02 },
  ];

  return (
    <section id="diferenciais" className="py-24 md:py-32 px-6 bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-xs tracking-[0.4em] text-gold uppercase font-body">Diferenciais</span>
          <h2 className="font-heading text-3xl md:text-5xl text-cream mt-4 font-light">
            Por que a <span className="italic gold-text-gradient">Eleven Concept?</span>
          </h2>
          <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Left card */}
          <div className="animate-on-scroll bg-surface border border-gold/15 overflow-hidden hover:border-gold/40 transition-all duration-500 group flex flex-col">
            <div className="relative h-80 md:h-[28rem] overflow-hidden">
              <img src={cards[0].image} alt={cards[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1280} height={960} />
            </div>
            <div className="p-6 flex items-start gap-3">
              <span className="text-gold text-xl mt-0.5 flex-shrink-0">✦</span>
              <div>
                <h4 className="text-cream font-body font-medium text-lg mb-1">{cards[0].title}</h4>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{cards[0].desc}</p>
              </div>
            </div>
          </div>

          {/* Center quote card */}
          <div
            className="animate-on-scroll bg-background border border-gold/30 gold-border-glow flex items-center justify-center p-10 text-center min-h-[28rem]"
            style={{ transitionDelay: "100ms" }}
          >
            <div>
              <span className="text-gold text-3xl leading-none block mb-6">“</span>
              <p className="font-heading italic text-2xl md:text-3xl gold-text-gradient leading-relaxed">
                Um único parceiro.
                <br />
                Do início ao fim.
              </p>
              <div className="w-12 h-px bg-gold/60 mx-auto mt-8" />
            </div>
          </div>

          {/* Right card */}
          <div className="animate-on-scroll bg-surface border border-gold/15 overflow-hidden hover:border-gold/40 transition-all duration-500 group flex flex-col" style={{ transitionDelay: "200ms" }}>
            <div className="relative h-80 md:h-[28rem] overflow-hidden">
              <img src={cards[1].image} alt={cards[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1280} height={960} />
            </div>
            <div className="p-6 flex items-start gap-3">
              <span className="text-gold text-xl mt-0.5 flex-shrink-0">✦</span>
              <div>
                <h4 className="text-cream font-body font-medium text-lg mb-1">{cards[1].title}</h4>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{cards[1].desc}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll pt-12 text-center">
          <p className="text-muted-foreground font-body italic text-lg">
            "Nós vendemos <span className="text-gold font-medium">controle</span>, <span className="text-gold font-medium">tranquilidade</span> e <span className="text-gold font-medium">resultado</span>."
          </p>
        </div>
      </div>
    </section>
  );
}
