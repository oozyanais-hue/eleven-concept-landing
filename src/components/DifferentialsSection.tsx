import officeImg from "@/assets/office-luxury.jpg";
import closetImg from "@/assets/closet-luxury.jpg";
import poolImg from "@/assets/pool-luxury.jpg";
import exteriorImg from "@/assets/exterior-lighting.jpg";

const diffs = [
  { icon: "✦", title: "Projeto completo e personalizado", desc: "Cada detalhe pensado exclusivamente para o seu espaço.", image: exteriorImg },
  { icon: "✦", title: "Gestão total da obra", desc: "Acompanhamento integral, sem preocupações para você.", image: poolImg },
  { icon: "✦", title: "Rede de parceiros qualificados", desc: "Piso, gesso, marmoraria — tudo integrado ao seu projeto.", image: officeImg },
  { icon: "✦", title: "Entrega final pronta para uso", desc: "Você recebe o ambiente completo, impecável, sem pendências.", image: closetImg },
];

export function DifferentialsSection() {
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

        {/* Hero statement with images */}
        <div className="grid lg:grid-cols-3 gap-4 mb-12">
          <div className="animate-on-scroll relative overflow-hidden h-64 lg:h-auto">
            <img src={closetImg} alt="Closet premium" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
            <div className="absolute inset-0 bg-background/30" />
          </div>
          <div className="animate-on-scroll flex items-center justify-center py-12 border border-gold/20 bg-surface" style={{ transitionDelay: "100ms" }}>
            <p className="font-heading text-2xl md:text-3xl gold-text-gradient italic font-medium text-center px-6 leading-relaxed">
              "Um único parceiro.<br />Do início ao fim."
            </p>
          </div>
          <div className="animate-on-scroll relative overflow-hidden h-64 lg:h-auto" style={{ transitionDelay: "200ms" }}>
            <img src={officeImg} alt="Home office de luxo" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
            <div className="absolute inset-0 bg-background/30" />
          </div>
        </div>

        {/* Differential cards with images */}
        <div className="grid md:grid-cols-2 gap-4">
          {diffs.map((d, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-surface border border-gold/15 overflow-hidden hover:border-gold/40 transition-all duration-500 group flex"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-32 md:w-40 flex-shrink-0 relative overflow-hidden">
                <img src={d.image} alt={d.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={1024} height={768} />
                <div className="absolute inset-0 bg-background/20" />
              </div>
              <div className="p-5 flex items-start gap-3">
                <span className="text-gold text-xl mt-0.5 group-hover:scale-125 transition-transform duration-300 flex-shrink-0">{d.icon}</span>
                <div>
                  <h4 className="text-cream font-body font-medium text-lg mb-1">{d.title}</h4>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll pt-10 text-center">
          <p className="text-muted-foreground font-body italic text-lg">
            "Nós vendemos <span className="text-gold font-medium">controle</span>, <span className="text-gold font-medium">tranquilidade</span> e <span className="text-gold font-medium">resultado</span>."
          </p>
        </div>
      </div>
    </section>
  );
}
