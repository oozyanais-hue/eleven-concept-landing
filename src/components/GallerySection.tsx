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
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const gallery = [
  { src: g01, label: "Cozinha Gourmet" },
  { src: g02, label: "Living & Adega" },
  { src: g03, label: "Suíte Master" },
  { src: g04, label: "Cozinha & Lavanderia" },
  { src: g05, label: "Sala de Estar" },
  { src: g06, label: "Sala de Jantar" },
  { src: g07, label: "Cozinha Planejada" },
  { src: g08, label: "Suíte com Closet" },
  { src: g09, label: "Banheiro Master" },
  { src: g10, label: "Home & Cozinha" },
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

        <div className="animate-on-scroll px-4 md:px-12">
          <Carousel opts={{ loop: true, align: "start" }} className="w-full">
            <CarouselContent>
              {gallery.map((item, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative overflow-hidden group cursor-pointer h-[28rem]">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={1024}
                      height={768}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <div className="w-8 h-px bg-gold mb-2" />
                      <span className="text-cream font-body text-base tracking-wide">{item.label}</span>
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
