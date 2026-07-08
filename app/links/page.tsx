// app/links/page.tsx
import Image from "next/image";

const links = [
  { 
    label: "Plantão Criminal 24h", 
    href: "https://wa.me/5583987911703?text=Ol%C3%A1%2C%20Dra.%20Laiza.%20Preciso%20de%20atendimento%20de%20urg%C3%AAncia%20no%20plant%C3%A3o%20criminal.", 
    highlight: true, 
    type: "whatsapp"
  },
  { 
    label: "E-mail Corporativo", 
    href: "mailto:contato@laizaadv.com.br", 
    highlight: false, 
    type: "mail"
  },
  { 
    label: "Instagram", 
    href: "https://instagram.com/laizaadv", 
    highlight: false, 
    type: "instagram"
  },
  { 
    label: "LinkedIn", 
    href: "https://linkedin.com/in/seu-perfil", 
    highlight: false, 
    type: "linkedin"
  },
  { label: "Nosso Site Principal", href: "/", highlight: false, type: "globe" },
  { label: "Localização do Escritório", href: "https://maps.app.goo.gl/GjNGfXB8YZZhVYAj6", highlight: false, type: "map" },
];

function Icon({ type }: { type: string }) {
  switch (type) {
    case "whatsapp":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      );
    case "mail":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      );
    case "globe":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "map":
    default:
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0z" />
        </svg>
      );
  }
}

export default function LinkTreePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#1e1a17] text-white flex flex-col items-center px-6 py-12 overflow-x-hidden">
      <div className="absolute inset-0 bg-slate-950/40 z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center flex-1 justify-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#C5A059] shadow-xl mb-4">
          <Image
            src="/images/foto-1.jpeg"
            alt="Dra. Laiza Batista"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <h1 className="font-serif text-xl font-semibold tracking-wide text-white mb-1">
          Dra. Laiza Batista
        </h1>
        <p className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-10">
          Advocacia Especializada
        </p>

        <div className="w-full flex flex-col gap-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.href.startsWith("http") || link.href.startsWith("mailto:") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`flex items-center justify-between w-full px-5 py-4 text-sm font-medium tracking-wide rounded-sm transition-all duration-300 transform active:scale-95 ${
                link.highlight
                  ? "bg-[#C5A059] text-[#1e1a17] font-bold shadow-[0_4px_20px_rgba(197,160,89,0.25)] border border-[#C5A059] hover:bg-[#C5A059]/90"
                  : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-[#C5A059]/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon type={link.type} />
                <span>{link.label}</span>
              </div>
              <span className={link.highlight ? "text-[#1e1a17]/50" : "text-white/30"}>➔</span>
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-12 text-[10px] uppercase tracking-widest text-white/30 font-sans">
        © {new Date().getFullYear()} • Todos os direitos reservados
      </div>
    </div>
  );
}