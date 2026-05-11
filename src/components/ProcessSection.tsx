import process01 from "@/assets/process-01.jpg";
import process02 from "@/assets/process-02.jpg";

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-xs tracking-[0.4em] text-gold uppercase font-body">Nosso Processo</span>
          <h2 className="font-heading text-3xl md:text-5xl text-cream mt-4 font-light">
            Excelência em <span className="italic gold-text-gradient">cada detalhe</span>
          </h2>
          <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="animate-on-scroll relative overflow-hidden group">
            <img src={process01} alt="Materiais premium" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={768} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">Materiais Premium</span>
              <p className="text-cream font-heading text-xl mt-1">Acabamento impecável em cada peça</p>
            </div>
          </div>
          <div className="animate-on-scroll relative overflow-hidden group" style={{ transitionDelay: "150ms" }}>
            <img src={process02} alt="Entrega completa" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={768} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">Entrega Completa</span>
              <p className="text-cream font-heading text-xl mt-1">Ambientes prontos para viver</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
