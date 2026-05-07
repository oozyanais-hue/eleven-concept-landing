import hallwayImg from "@/assets/hallway-luxury.jpg";
import mediaImg from "@/assets/media-room.jpg";
import wineCellarImg from "@/assets/wine-cellar.jpg";
import laundryImg from "@/assets/laundry-luxury.jpg";
import kidsImg from "@/assets/kids-room.jpg";
import balconyImg from "@/assets/balcony-luxury.jpg";
import kitchenImg from "@/assets/kitchen-luxury.jpg";
import bathroomImg from "@/assets/bathroom-luxury.jpg";
import closetImg from "@/assets/closet-luxury.jpg";
import exteriorImg from "@/assets/exterior-lighting.jpg";
import bedroomImg from "@/assets/bedroom-luxury.jpg";
import diningImg from "@/assets/dining-luxury.jpg";
import heroImg from "@/assets/hero-interior.jpg";

const gallery = [
  { src: kitchenImg, label: "Cozinha Gourmet", span: "col-span-2 row-span-2" },
  { src: hallwayImg, label: "Hall de Entrada", span: "" },
  { src: bathroomImg, label: "Banheiro Master", span: "" },
  { src: heroImg, label: "Living Room", span: "col-span-2" },
  { src: exteriorImg, label: "Iluminação Exterior", span: "" },
  { src: laundryImg, label: "Lavanderia", span: "" },
  { src: bedroomImg, label: "Suíte Master", span: "" },
  { src: closetImg, label: "Closet", span: "" },
  { src: diningImg, label: "Sala de Jantar", span: "col-span-2" },
  { src: mediaImg, label: "Sala de TV", span: "" },
  { src: wineCellarImg, label: "Adega", span: "" },
  { src: balconyImg, label: "Varanda Gourmet", span: "col-span-2" },
];

export function GallerySection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-xs tracking-[0.4em] text-gold uppercase font-body">Portfólio</span>
          <h2 className="font-heading text-3xl md:text-5xl text-cream mt-4 font-light">
            Ambientes que <span className="italic gold-text-gradient">inspiram</span>
          </h2>
          <p className="text-muted-foreground font-body font-light mt-4 max-w-xl mx-auto">
            Cada espaço é pensado com exclusividade, refletindo a personalidade e o estilo de vida de nossos clientes.
          </p>
          <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[240px]">
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`animate-on-scroll relative overflow-hidden group cursor-pointer ${item.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div>
                  <div className="w-8 h-px bg-gold mb-2" />
                  <span className="text-cream font-body text-sm tracking-wide">{item.label}</span>
                </div>
              </div>
              <div className="absolute top-3 right-3 w-2 h-2 border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
