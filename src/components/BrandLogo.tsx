import logoImg from "@/assets/eleven-logo.png";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function BrandLogo({ size = "md", showText = true, className = "" }: BrandLogoProps) {
  const dims = {
    sm: { img: "h-10", name: "text-sm", tag: "text-[9px]" },
    md: { img: "h-14", name: "text-base", tag: "text-[10px]" },
    lg: { img: "h-44 md:h-56", name: "text-2xl md:text-3xl", tag: "text-xs md:text-sm" },
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoImg}
        alt="Eleven Concept"
        className={`${dims.img} w-auto object-contain`}
      />
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-heading ${dims.name} text-cream tracking-[0.2em] uppercase font-medium`}>
            Eleven <span className="italic gold-text-gradient">Concept</span>
          </span>
          <span className={`font-body ${dims.tag} text-muted-foreground tracking-[0.35em] uppercase mt-0.5`}>
            Móveis Planejados
          </span>
        </div>
      )}
    </div>
  );
}
