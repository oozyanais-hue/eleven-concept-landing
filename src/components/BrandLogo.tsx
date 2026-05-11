interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function BrandLogo({ size = "md", showText = true, className = "" }: BrandLogoProps) {
  const dims = {
    sm: { box: "w-10 h-10", text: "text-xl", name: "text-sm", tag: "text-[9px]" },
    md: { box: "w-14 h-14", text: "text-2xl", name: "text-base", tag: "text-[10px]" },
    lg: { box: "w-24 h-24 md:w-28 md:h-28", text: "text-5xl md:text-6xl", name: "text-2xl md:text-3xl", tag: "text-xs md:text-sm" },
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Bi monogram */}
      <div className={`${dims.box} relative flex items-center justify-center border border-gold/40 bg-background/40`}>
        <div className="absolute inset-1 border border-gold/15" />
        <span className={`font-heading ${dims.text} gold-text-gradient font-semibold italic leading-none tracking-tight`}>
          Bi
        </span>
        <span className="absolute -top-px left-1/2 -translate-x-1/2 w-2 h-px bg-gold/60" />
        <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-2 h-px bg-gold/60" />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-heading ${dims.name} text-cream tracking-[0.15em] uppercase font-medium`}>
            Bella <span className="italic gold-text-gradient">Itália</span>
          </span>
          <span className={`font-body ${dims.tag} text-muted-foreground tracking-[0.35em] uppercase mt-0.5`}>
            Ambientes Personalizados
          </span>
        </div>
      )}
    </div>
  );
}
