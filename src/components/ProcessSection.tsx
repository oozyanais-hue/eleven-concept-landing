import exteriorImg from "@/assets/exterior-lighting.jpg";
import hallwayImg from "@/assets/hallway-luxury.jpg";
import poolImg from "@/assets/pool-luxury.jpg";

const stats = [
  { number: "500+", label: "Projetos entregues" },
  { number: "11", label: "Anos de experiência" },
  { number: "100%", label: "Clientes satisfeitos" },
  { number: "50+", label: "Parceiros qualificados" },
];

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={poolImg} alt="" className="w-full h-full object-cover opacity-15" loading="lazy" width={1024} height={1024} />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-xs tracking-[0.4em] text-gold uppercase font-body">Nosso Processo</span>
          <h2 className="font-heading text-3xl md:text-5xl text-cream mt-4 font-light">
            Excelência em <span className="italic gold-text-gradient">cada detalhe</span>
          </h2>
          <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        {/* Images row */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="animate-on-scroll relative overflow-hidden group">
            <img src={exteriorImg} alt="Iluminação exterior premium" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={768} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">Materiais Premium</span>
              <p className="text-cream font-heading text-xl mt-1">Acabamento impecável em cada peça</p>
            </div>
          </div>
          <div className="animate-on-scroll relative overflow-hidden group" style={{ transitionDelay: "150ms" }}>
            <img src={hallwayImg} alt="Hall de entrada luxuoso" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={768} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">Entrega Completa</span>
              <p className="text-cream font-heading text-xl mt-1">Ambientes prontos para viver</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="animate-on-scroll text-center py-8 border border-gold/15 bg-surface/50 hover:border-gold/30 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-heading text-4xl md:text-5xl gold-text-gradient font-semibold">{stat.number}</span>
              <p className="text-muted-foreground font-body text-sm mt-2 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
