import bathroomImg from "@/assets/bathroom-luxury.jpg";
import kitchenImg from "@/assets/kitchen-luxury.jpg";
import bedroomImg from "@/assets/bedroom-luxury.jpg";
import closetImg from "@/assets/closet-luxury.jpg";
import diningImg from "@/assets/dining-luxury.jpg";

const plans = [
  {
    name: "Essential",
    badge: "Entrada",
    image: bathroomImg,
    items: ["Piso laminado", "Móveis planejados brancos na cozinha", "Dormitórios planejados", "Gabinetes dos banheiros"],
    highlighted: false,
  },
  {
    name: "Select",
    badge: "Intermediário",
    image: kitchenImg,
    items: ["Piso vinílico ou porcelanato", "Móveis com cor ou amadeirado (exclusivas Henzel)", "Granito na cozinha e banheiros", "Rebaixamento em gesso", "Box nos banheiros"],
    highlighted: false,
  },
  {
    name: "Signature",
    badge: "Mais escolhido",
    image: bedroomImg,
    items: ["Porcelanato premium", "Móveis com cores e usinagens elaboradas", "Mármore na cozinha e banheiros", "Maior quantidade de armários", "Gesso, pintura e box"],
    highlighted: true,
  },
  {
    name: "Premium",
    badge: "Alto padrão",
    image: closetImg,
    items: ["Totalmente personalizado", "Todos os cômodos", "Portas reflectas e vidro", "Quartzo", "Iluminação completa", "Gesso, pintura e box"],
    highlighted: false,
  },
  {
    name: "Elite",
    badge: "Exclusivo",
    image: diningImg,
    items: ["Tudo do Premium incluído", "Automação residencial completa", "Integração total do imóvel", "Experiência sob medida"],
    highlighted: false,
  },
];

export function PlansSection() {
  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="planos" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-xs tracking-[0.4em] text-gold uppercase font-body">Planos</span>
          <h2 className="font-heading text-3xl md:text-5xl text-cream mt-4 font-light">
            Encontre o plano ideal <span className="italic gold-text-gradient">para o seu imóvel</span>
          </h2>
          <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`animate-on-scroll flex flex-col bg-surface border overflow-hidden transition-all duration-500 hover:border-gold/50 ${
                plan.highlighted ? "border-gold/60 gold-border-glow lg:scale-105 relative" : "border-gold/15"
              } ${i >= 3 ? "lg:col-span-1 sm:col-span-1" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="gold-gradient text-primary-foreground text-xs text-center py-1.5 tracking-[0.3em] uppercase font-body font-medium">
                  ★ {plan.badge}
                </div>
              )}
              <div className="relative h-40 overflow-hidden">
                <img src={plan.image} alt={plan.name} className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                <div className="absolute bottom-3 left-5">
                  <h3 className="font-heading text-2xl text-cream font-semibold">{plan.name}</h3>
                  {!plan.highlighted && (
                    <span className="text-xs tracking-[0.2em] text-gold/80 uppercase font-body">{plan.badge}</span>
                  )}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <ul className="space-y-2 flex-1 mb-5">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                      <span className="text-gold text-xs mt-1">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 text-xs tracking-[0.2em] uppercase font-body font-medium transition-all duration-300 ${
                    plan.highlighted
                      ? "gold-gradient text-primary-foreground hover:opacity-90"
                      : "border border-gold/30 text-gold hover:bg-gold/10"
                  }`}
                >
                  Solicitar orçamento
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
