import missionImg from "@/assets/mission-kitchen.jpg";
import visionImg from "@/assets/vision-kitchen.jpg";
import valuesImg from "@/assets/values-living.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const cards = [
  {
    title: "Missão",
    text: "Prover ao cliente uma experiência de reforma completa, integrada e sem complicações, reunindo projeto, gesso, marmoraria e móveis planejados sob uma gestão única e especializada — eliminando a necessidade de múltiplos fornecedores, garantindo excelência técnica em cada etapa e entregando ambientes que traduzem o mais alto padrão de qualidade, com o compromisso de que cada cliente viva sua transformação com segurança, agilidade e total tranquilidade.",
    image: missionImg,
  },
  {
    title: "Visão",
    text: "Ser referência em móveis planejados e decoração, reconhecida por sofisticação, exclusividade e excelência no atendimento.",
    image: visionImg,
  },
  {
    title: "Valores",
    text: "",
    image: valuesImg,
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-xs tracking-[0.4em] text-gold uppercase font-body">Quem somos</span>
          <h2 className="font-heading text-3xl md:text-5xl text-cream mt-4 font-light">
            Missão, Visão & <span className="italic gold-text-gradient">Valores</span>
          </h2>
          <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="animate-on-scroll px-4 md:px-12">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {cards.map((card, i) => (
                <CarouselItem key={i}>
                  <div className="grid md:grid-cols-2 bg-surface border border-gold/20 overflow-hidden gold-border-glow">
                    <div className="relative h-72 md:h-[28rem] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={1280}
                        height={960}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-surface/40" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="font-heading text-3xl md:text-4xl gold-text-gradient font-semibold mb-6">
                        {card.title}
                      </h3>
                      {card.text && (
                        <p className="text-muted-foreground font-body font-light leading-relaxed text-sm md:text-base">
                          {card.text}
                        </p>
                      )}
                      {card.values && (
                        <ul className="space-y-4">
                          {card.values.map((v, j) => (
                            <li key={j}>
                              <span className="text-gold text-base font-medium">{v.name}</span>
                              <p className="text-muted-foreground text-sm font-light">{v.desc}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 bg-surface border-gold/30 text-gold hover:bg-gold/10 hover:text-gold" />
            <CarouselNext className="hidden md:flex -right-4 md:-right-12 bg-surface border-gold/30 text-gold hover:bg-gold/10 hover:text-gold" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
