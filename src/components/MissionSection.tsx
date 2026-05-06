import kitchenImg from "@/assets/kitchen-luxury.jpg";
import bedroomImg from "@/assets/bedroom-luxury.jpg";
import closetImg from "@/assets/closet-luxury.jpg";

const cards = [
  {
    title: "Missão",
    text: "Transformar ideias em ambientes únicos e funcionais, com qualidade, inovação e atenção aos detalhes.",
    image: kitchenImg,
  },
  {
    title: "Visão",
    text: "Ser referência em móveis planejados e decoração, reconhecida por sofisticação, exclusividade e excelência no atendimento.",
    image: bedroomImg,
  },
  {
    title: "Valores",
    text: "",
    image: closetImg,
    values: [
      { name: "Exclusividade Absoluta", desc: "Cada projeto é uma obra única" },
      { name: "Design Autoral", desc: "Identidade, elegância e originalidade" },
      { name: "Relacionamento de Alto Nível", desc: "Atendimento próximo, discreto e personalizado" },
    ],
  },
];

export function MissionSection() {
  return (
    <section id="missao" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-xs tracking-[0.4em] text-gold uppercase font-body">Quem somos</span>
          <h2 className="font-heading text-3xl md:text-5xl text-cream mt-4 font-light">
            Missão, Visão & <span className="italic gold-text-gradient">Valores</span>
          </h2>
          <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-surface border border-gold/20 overflow-hidden group hover:border-gold/40 transition-all duration-500 gold-border-glow"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-heading text-2xl gold-text-gradient font-semibold">{card.title}</h3>
              </div>
              <div className="p-6">
                {card.text && <p className="text-muted-foreground font-body font-light leading-relaxed">{card.text}</p>}
                {card.values && (
                  <ul className="space-y-4">
                    {card.values.map((v, j) => (
                      <li key={j}>
                        <span className="text-gold text-sm font-medium">{v.name}</span>
                        <p className="text-muted-foreground text-sm font-light">{v.desc}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
