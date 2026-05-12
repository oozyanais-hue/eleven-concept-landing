import heroImg from "@/assets/hero-interior.jpg";
import diningImg from "@/assets/dining-luxury.jpg";
import closetImg from "@/assets/closet-luxury.jpg";
import hallwayImg from "@/assets/hallway-luxury.jpg";
import poolImg from "@/assets/pool-luxury.jpg";
import wineCellarImg from "@/assets/wine-cellar.jpg";

const testimonials = [
  {
    quote: "A Eleven Concept transformou nosso apartamento em algo que nem imaginávamos ser possível. Cada detalhe foi pensado com um cuidado que impressiona.",
    name: "Mariana e Rafael Fontana",
    project: "Apartamento 3 dormitórios, Alphaville",
    image: heroImg,
  },
  {
    quote: "Desde o primeiro contato até a entrega, tudo foi impecável. O nível de atenção e sofisticação é incomparável. Recomendo de olhos fechados.",
    name: "Dr. Henrique Meirelles",
    project: "Cobertura duplex, Jardins",
    image: diningImg,
  },
  {
    quote: "Ter um parceiro único que cuida de tudo, do piso ao último detalhe de marcenaria, nos deu uma tranquilidade que não tem preço.",
    name: "Carolina Duarte",
    project: "Casa em condomínio, Granja Viana",
    image: closetImg,
  },
];

const beforeAfter = [
  { src: hallwayImg, label: "Projeto Hall, Entregue" },
  { src: poolImg, label: "Área de Lazer, Entregue" },
  { src: wineCellarImg, label: "Adega Personalizada, Entregue" },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 px-6 bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-xs tracking-[0.4em] text-gold uppercase font-body">Depoimentos</span>
          <h2 className="font-heading text-3xl md:text-5xl text-cream mt-4 font-light">
            O que nossos clientes <span className="italic gold-text-gradient">dizem</span>
          </h2>
          <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-surface border border-gold/15 overflow-hidden hover:border-gold/30 transition-all duration-500"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={t.image} alt={t.project} className="w-full h-full object-cover opacity-60" loading="lazy" width={1024} height={768} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-gold text-3xl font-heading leading-none">"</span>
                <p className="text-muted-foreground font-body font-light text-sm leading-relaxed mt-2 mb-4">{t.quote}</p>
                <div className="border-t border-gold/15 pt-4">
                  <p className="text-cream font-body font-medium text-sm">{t.name}</p>
                  <p className="text-gold/60 text-xs font-body mt-1">{t.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional project showcase */}
        <div className="animate-on-scroll">
          <h3 className="text-center font-heading text-2xl text-cream mb-8 font-light">Projetos <span className="gold-text-gradient italic">recentes</span></h3>
          <div className="grid md:grid-cols-3 gap-4">
            {beforeAfter.map((item, i) => (
              <div key={i} className="relative overflow-hidden group h-56" style={{ transitionDelay: `${i * 100}ms` }}>
                <img src={item.src} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={768} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-6 h-px bg-gold mb-2" />
                  <span className="text-cream font-body text-sm">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
