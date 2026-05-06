import detailImg from "@/assets/detail-luxury.jpg";
import officeImg from "@/assets/office-luxury.jpg";

const diffs = [
  { icon: "✦", title: "Projeto completo e personalizado", desc: "Cada detalhe pensado exclusivamente para o seu espaço." },
  { icon: "✦", title: "Gestão total da obra", desc: "Acompanhamento integral, sem preocupações para você." },
  { icon: "✦", title: "Rede de parceiros qualificados", desc: "Piso, gesso, marmoraria — tudo integrado ao seu projeto." },
  { icon: "✦", title: "Entrega final pronta para uso", desc: "Você recebe o ambiente completo, impecável, sem pendências." },
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - images */}
          <div className="animate-on-scroll space-y-6">
            <div className="relative overflow-hidden">
              <img src={detailImg} alt="Detalhes premium" className="w-full h-64 object-cover" loading="lazy" width={1024} height={768} />
              <div className="absolute inset-0 bg-background/20" />
            </div>
            <div className="relative overflow-hidden">
              <img src={officeImg} alt="Home office de luxo" className="w-full h-64 object-cover" loading="lazy" width={1024} height={768} />
              <div className="absolute inset-0 bg-background/20" />
            </div>
            <div className="text-center py-6 border border-gold/20 bg-surface">
              <p className="font-heading text-2xl md:text-3xl gold-text-gradient italic font-medium">
                "Um único parceiro. Do início ao fim."
              </p>
            </div>
          </div>

          {/* Right - cards */}
          <div className="space-y-4">
            {diffs.map((d, i) => (
              <div
                key={i}
                className="animate-on-scroll bg-surface border border-gold/15 p-6 flex gap-4 items-start hover:border-gold/40 transition-all duration-500 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-gold text-xl mt-1 group-hover:scale-125 transition-transform duration-300">{d.icon}</span>
                <div>
                  <h4 className="text-cream font-body font-medium text-lg mb-1">{d.title}</h4>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
            <div className="animate-on-scroll pt-6 text-center">
              <p className="text-muted-foreground font-body italic text-lg">
                "Nós vendemos <span className="text-gold font-medium">controle</span>, <span className="text-gold font-medium">tranquilidade</span> e <span className="text-gold font-medium">resultado</span>."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
