import g01 from "@/assets/gallery-01.jpg";
import g02 from "@/assets/gallery-02.jpg";
import g03 from "@/assets/gallery-03.jpg";
import g04 from "@/assets/gallery-04.jpg";
import g05 from "@/assets/gallery-05.jpg";
import g06 from "@/assets/gallery-06.jpg";
import g07 from "@/assets/gallery-07.jpg";
import g08 from "@/assets/gallery-08.jpg";
import g09 from "@/assets/gallery-09.jpg";
import g10 from "@/assets/gallery-10.jpg";

const gallery = [
  { src: g01, label: "Cozinha Gourmet", span: "col-span-2 row-span-2" },
  { src: g02, label: "Living & Adega", span: "col-span-2" },
  { src: g03, label: "Suíte Master", span: "" },
  { src: g04, label: "Cozinha & Lavanderia", span: "" },
  { src: g05, label: "Sala de Estar", span: "col-span-2" },
  { src: g06, label: "Sala de Jantar", span: "" },
  { src: g07, label: "Cozinha Planejada", span: "" },
  { src: g08, label: "Suíte com Closet", span: "col-span-2" },
  { src: g09, label: "Banheiro Master", span: "" },
  { src: g10, label: "Home & Cozinha", span: "" },
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
