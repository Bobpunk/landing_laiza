// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div id="main-content" className="relative min-h-screen w-full bg-[#1e1a17] text-white flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      
      {/* Overlay sutil para seguir o padrão do Hero */}
      <div className="absolute inset-0 bg-slate-950/60 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-md flex flex-col items-center">
        
        {/* Ícone Minimalista de Construção / Restrição */}
        <div className="mb-6 text-[#C5A059]">
          <svg className="w-16 h-16 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A1.75 1.75 0 1114.79 23.46L9 17.67M12.58 8.83L6.75 3a1.75 1.75 0 00-2.46 2.46L10.12 11.3M14 6.343l-.707-.707m-5.656 5.656l-.707-.707m11.314 2.122l-.707-.707m-5.656 5.656l-.707-.707M12 12a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
        </div>

        {/* Título de Status */}
        <p className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-[#C5A059] mb-3">
          Erro 404
        </p>
        
        <h1 className="font-serif text-3xl font-light tracking-tight text-white mb-4">
          Página não encontrada
        </h1>
        
        <p className="text-sm leading-relaxed text-slate-400 mb-8 max-w-[35ch]">
          A página que você procura não existe ou foi movida. Vamos ajudá-lo a encontrar o que precisa.
        </p>

        {/* Ações Rápidas de Escape */}
        <div className="w-full flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-sm bg-[#C5A059] px-6 text-xs font-bold uppercase tracking-wide text-[#1e1a17] transition-all duration-300 hover:bg-[#C5A059]/90 transform active:scale-95"
          >
            Voltar ao Início
          </Link>
          
          <a
            href="https://wa.me/5583987911703"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-sm border border-white/10 bg-white/5 px-6 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white/10"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Rodapé institucional */}
      <div className="absolute bottom-8 z-10 text-[9px] uppercase tracking-widest text-white/20 font-sans">
        Dra. Laiza Batista • Advocacia Especializada
      </div>
    </div>
  );
}