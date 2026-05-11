import diff01 from "@/assets/diff-01.jpg";
import diff02 from "@/assets/diff-02.jpg";

const diffs = [
  { icon: "✦", title: "Projeto completo e personalizado", desc: "Cada detalhe pensado exclusivamente para o seu espaço.", image: diff01 },
  { icon: "✦", title: "Gestão total da obra", desc: "Acompanhamento integral, sem preocupações para você.", image: diff02 },
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

        <div className="grid md:grid-cols-2 gap-6">
          {diffs.map((d, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-surface border border-gold/15 overflow-hidden hover:border-gold/40 transition-all duration-500 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img src={d.image} alt={d.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={768} />
                <div className="absolute inset-0 bg-background/20" />
              </div>
              <div className="p-6 flex items-start gap-3">
                <span className="text-gold text-xl mt-0.5 group-hover:scale-125 transition-transform duration-300 flex-shrink-0">{d.icon}</span>
                <div>
                  <h4 className="text-cream font-body font-medium text-lg mb-1">{d.title}</h4>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </div>
          ))}
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
