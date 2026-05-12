import { ChevronLeft, ChevronRight } from "lucide-react";

export function SwipeHint({ label = "Arraste para ver mais" }: { label?: string }) {
  return (
    <div className="md:hidden flex items-center justify-center gap-3 mt-6 text-gold/80 animate-pulse">
      <ChevronLeft className="w-4 h-4" />
      <span className="text-[10px] tracking-[0.3em] uppercase font-body">{label}</span>
      <ChevronRight className="w-4 h-4" />
    </div>
  );
}
