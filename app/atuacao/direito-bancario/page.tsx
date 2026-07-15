// app/atuacao/direito-bancario/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slideImages = ["/images/slidedireitodotrab1.jpeg", "/images/slidedireitodotrab2.jpeg", "/images/slidedireitodotrab3.jpeg"];

export default function DireitoBancario() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen lg:h-screen bg-slate-950 flex flex-col justify-center relative overflow-hidden px-6 py-8 lg:px-12">
      {/* Background Slideshow */}
      {slideImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={src} alt={`Background slide ${index + 1}`} fill className="object-cover object-center" priority={index === 0} />
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
            Proteção patrimonial<br />contra abusos<br />financeiros
          </h1>
          
          <p className="mb-6 max-w-[48ch] text-sm leading-relaxed text-slate-300 lg:text-base opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_300ms_forwards]">
            Instituições financeiras frequentemente impõem taxas indevidas e juros abusivos que asfixiam o seu orçamento. Atuamos de forma técnica e humanizada na revisão de contratos, defesa contra fraudes e renegociação estratégica de dívidas para proteger o seu patrimônio.
          </p>

          {/* 2. [MOBILE ONLY] Foto inserida exatamente após o texto principal */}
          <div className="block lg:hidden my-6 mx-auto w-full max-w-[280px]">
            <FotoAdvogada />
          </div>

          {/* 3. CALL TO ACTION */}
          <div className="opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_400ms_forwards]">
            <div className="mb-4 h-[1px] w-16 bg-[#C5A059]" />
            
            <h2 className="text-lg font-serif font-semibold text-white mb-1">
              Sua saúde financeira está ameaçada?
            </h2>
            
            <p className="mb-5 text-xs text-slate-300 max-w-[45ch] leading-relaxed">
              Não aceite cobranças abusivas ou intimidações de bancos. Nós analisamos as entrelinhas do seu contrato e buscamos o equilíbrio judicial necessário para livrar você desse peso.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="https://wa.me/55XXXXXXXXXXX?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20Direito%20Bancário." 
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

function FotoAdvogada() {
  return (
    /* 
      Aumentamos a largura do container físico para compensar o vazio do arquivo.
      Usamos "overflow-hidden" para que o zoom do corpo dela não vaze para fora do layout.
    */
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] aspect-[4/5] overflow-hidden rounded-2xl opacity-0 animate-[slideIn_1200ms_cubic-bezier(0.22,1,0.36,1)_100ms_forwards]">
      
      {/* 
        EFEITO DE ZOOM E CORTE DE MARGEM TRANSPARENTE:
        - "scale-150": Amplia a imagem em 150% para eliminar as bordas vazias do arquivo.
        - "translate-y-[10%]": Ajusta a altura dela para assentar perfeitamente acima da assinatura.
        - "origin-center": Garante que a ampliação parta do meio, centralizando o rosto dela.
      */}
      <Image 
        src="/images/foto1semfundo.jpeg" // Ou .png caso você altere
        alt="Dra. Laiza Batista - Advocacia Humanizada" 
        fill
        sizes="(max-width: 1024px) 100vw, 480px"
        className="object-contain scale-150 translate-y-[10%] origin-center z-0"
        priority 
      />
      
      {/* Tag de assinatura flutuante integrada */}
      <div className="absolute bottom-4 left-4 right-4 z-20 text-center bg-slate-950/85 backdrop-blur-sm border border-[#C5A059]/20 py-1.5 px-3 rounded-md shadow-lg">
        <p className="font-serif text-xs font-semibold text-white tracking-wide">Dra. Laiza Batista</p>
        <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#C5A059] mt-0.5">Advocacia Humanizada</p>
      </div>
    </div>
  );
}