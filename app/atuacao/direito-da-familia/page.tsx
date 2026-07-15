// app/atuacao/direito-da-familia/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useSlideshow } from "../../hooks/useSlideshow";

const slideImages = ["/images/bg-hero1.webp", "/images/bg-hero2.webp", "/images/bg-hero3.webp"];

export default function DireitoDaFamilia() {
  const { currentSlide } = useSlideshow(slideImages, 5000);

  return (
    <main id="main-content" className="min-h-screen lg:h-screen bg-slate-950 flex flex-col justify-center relative overflow-hidden px-6 py-8 lg:px-12">
      {/* Background Slideshow */}
      {slideImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          aria-hidden={index !== currentSlide}
        >
          <Image src={src} alt={`Background slide ${index + 1}`} fill sizes="100vw" className="object-cover object-center" priority={index === 0} />
        </div>
      ))}

      <div className="absolute inset-0 z-0 bg-slate-950/85" />

      {/* Container Principal */}
      <div className="mx-auto grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-14 w-full max-w-6xl relative z-10 my-auto">
        
        {/* COLUNA DA ESQUERDA */}
        <div className="max-w-2xl flex flex-col justify-center">
          
          {/* [DESKTOP ONLY] Botão de Voltar no topo */}
          <Link 
            href="/#servicos" 
            className="hidden lg:inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] opacity-90 transition-transform hover:-translate-x-1 mb-6"
          >
            ← Voltar para Serviços
          </Link>

          {/* 1. TEXTO PRINCIPAL */}
          <h1 className="mb-3 font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white [text-wrap:balance] opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_200ms_forwards]">
            Sensibilidade,<br />amparo e respeito<br />para o seu recomeço
          </h1>
          
          <p className="mb-6 max-w-[48ch] text-sm leading-relaxed text-slate-300 lg:text-base opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_300ms_forwards]">
            Decisões e transições familiares mexem com o que temos de mais valioso: nossas relações e nossa paz de espírito. Mais do que resolver questões como divórcio, guarda, pensão ou inventário, nosso papel é ouvir suas angústias com paciência e conduzir cada etapa com a delicadeza e o respeito que sua história merece.
          </p>

          {/* 2. [MOBILE ONLY] Foto inserida exatamente após o texto principal */}
          <div className="block lg:hidden my-6 mx-auto w-full max-w-[280px]">
            <FotoAdvogada />
          </div>

          {/* 3. CALL TO ACTION */}
          <div className="opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_400ms_forwards]">
            <div className="mb-4 h-[1px] w-16 bg-[#C5A059]" />
            
            <h2 className="text-lg font-serif font-semibold text-white mb-1">
              Sua paz e o futuro de quem você ama merecem proteção.
            </h2>
            
            <p className="mb-5 text-xs text-slate-300 max-w-[45ch] leading-relaxed">
              Atravessar uma mudança familiar não precisa ser um processo de desgaste e sofrimento. Estamos aqui para estender a mão e garantir um caminho seguro, ético e focado no bem-estar e na dignidade de todos os envolvidos.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="https://wa.me/55XXXXXXXXXXX?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20Direito%20da%20Família." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-sm bg-[#25D366] px-6 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#20ba5a] hover:scale-[1.02] shadow-[0_4px_20px_rgba(37,211,102,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                Falar no WhatsApp
              </a>

              {/* 4. [MOBILE ONLY] Botão de Voltar no final do fluxo */}
              <Link 
                href="/#servicos" 
                className="lg:hidden inline-flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] opacity-90 transition-transform hover:-translate-x-1 py-3 border border-[#C5A059]/20 rounded-sm"
              >
                ← Voltar para Serviços
              </Link>
            </div>
          </div>
        </div>

        {/* COLUNA DA DIREITA (2. [DESKTOP ONLY] Foto lateral) */}
        <div className="hidden lg:block relative mx-auto w-full lg:max-w-[320px]">
          <FotoAdvogada />
        </div>

      </div>
    </main>
  );
}

// Componente auxiliar interno para renderizar a foto
function FotoAdvogada() {
  return (
    <div className="relative mx-auto w-full max-w-[195px] sm:max-w-[225px] lg:max-w-[255px] opacity-0 animate-[slideIn_1200ms_cubic-bezier(0.22,1,0.36,1)_100ms_forwards]">
      <Image 
        src="/images/foto-2.webp" 
        alt="Dra. Laiza Batista - Advocacia Humanizada" 
        width={255}
        height={320}
        sizes="(max-width: 1024px) 100vw, 255px"
        className="w-full h-auto rounded-2xl object-contain"
        priority 
      />
      
      {/* Tag de assinatura flutuante integrada, embaixo da imagem */}
      <div className="absolute bottom-4 left-4 right-4 z-20 text-center bg-slate-950/85 backdrop-blur-sm border border-[#C5A059]/20 py-1.5 px-3 rounded-md shadow-lg">
        <p className="font-serif text-xs font-semibold text-white tracking-wide">Dra. Laiza Batista</p>
        <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#C5A059] mt-0.5">Advocacia Humanizada</p>
      </div>
    </div>
  );
}