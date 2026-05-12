import { useState } from "react";
import bathroomImg from "@/assets/bathroom-luxury.jpg";

{/* Número de WhatsApp - substitua pelo número real */}
const WHATSAPP_NUMBER = "5515996184402";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é *${name}*%0ATelefone: ${phone}%0A${message ? `Mensagem: ${message}` : "Gostaria de saber mais sobre os projetos da Eleven Concept."}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 opacity-10">
        <img src={bathroomImg} alt="" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
      </div>
      <div className="absolute inset-0 bg-background/90" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="text-xs tracking-[0.4em] text-gold uppercase font-body">Contato</span>
          <h2 className="font-heading text-3xl md:text-5xl text-cream mt-4 font-light">
            Vamos conversar sobre <span className="italic gold-text-gradient">o seu projeto</span>
          </h2>
          <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
          <p className="text-muted-foreground font-body font-light mt-6">
            Preencha o formulário e um especialista entrará em contato com você pelo WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="animate-on-scroll bg-surface border border-gold/20 p-8 md:p-10 space-y-6 gold-border-glow">
          <div>
            <label className="text-xs tracking-[0.2em] text-gold uppercase font-body block mb-2">Nome completo</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-input border border-gold/15 px-4 py-3 text-cream font-body font-light focus:outline-none focus:border-gold/50 transition-colors"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="text-xs tracking-[0.2em] text-gold uppercase font-body block mb-2">Telefone</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              className="w-full bg-input border border-gold/15 px-4 py-3 text-cream font-body font-light focus:outline-none focus:border-gold/50 transition-colors"
              placeholder="(11) 99999-9999"
            />
          </div>
          <div>
            <label className="text-xs tracking-[0.2em] text-gold uppercase font-body block mb-2">Mensagem <span className="text-muted-foreground">(opcional)</span></label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-input border border-gold/15 px-4 py-3 text-cream font-body font-light focus:outline-none focus:border-gold/50 transition-colors resize-none"
              placeholder="Conte-nos sobre o seu projeto..."
            />
          </div>
          <button
            type="submit"
            className="w-full gold-gradient text-primary-foreground py-4 text-sm tracking-[0.2em] uppercase font-body font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
