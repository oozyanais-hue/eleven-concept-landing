export function FooterSection() {
  return (
    <footer className="py-12 px-6 border-t border-gold/15">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <span className="font-heading text-2xl tracking-[0.3em] gold-text-gradient font-semibold">EC</span>
          <span className="text-foreground/30 mx-2">|</span>
          <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase font-body">Eleven Concept</span>
        </div>
        <p className="text-muted-foreground font-body font-light text-sm mb-6">Móveis Planejados de Alto Padrão</p>
        <div className="flex justify-center gap-6 mb-8">
          {/* Instagram placeholder */}
          <a href="https://instagram.com/elevenconcept" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors text-sm font-body">
            @elevenconcept
          </a>
          <span className="text-gold/20">|</span>
          {/* WhatsApp placeholder */}
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors text-sm font-body">
            WhatsApp
          </a>
        </div>
        <div className="w-20 h-px bg-gold/20 mx-auto mb-6" />
        <p className="text-muted-foreground/50 text-xs font-body">© 2025 Eleven Concept. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
