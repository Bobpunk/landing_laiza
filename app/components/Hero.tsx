// app/components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slideImages = [
  "/images/bg-hero1.webp",
  "/images/bg-hero2.webp",
  "/images/bg-hero3.webp",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
   <section
      id="hero"
      // Aplicamos o padrão ouro de respiro: pb-20 (80px) no mobile e lg:pb-28 (112px) no desktop.
      // A parte superior (pt-16 e lg:pt-20) foi mantida intocada, pois você já validou que a distância para o Nav ficou boa.
      className="relative flex items-center overflow-hidden px-6 pt-16 pb-20 lg:px-12 lg:pt-20 lg:pb-28"
    >
      {/* Sistema de Background Slider */}
      {slideImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Background slide ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay Escuro */}
      <div className="absolute inset-0 z-0 bg-slate-950/85" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 relative z-10">
        
        {/* Coluna de Texto */}
        <div className="max-w-2xl">
          <p className="mb-6 font-sans text-sm font-semibold tracking-[0.2em] text-accent uppercase opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_100ms_forwards]">
            Laíza Advocacia
          </p>
          
          <h1 className="mb-8 font-serif text-[clamp(2.5rem,5vw+0.5rem,4.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white [text-wrap:balance] opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_200ms_forwards]">
            Assessoria jurídica
            <br />
            com excelência
            <br />
            e dedicação
          </h1>
          
          <p className="mb-12 max-w-[50ch] text-lg leading-relaxed text-slate-300 lg:text-xl opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_300ms_forwards]">
            Atendimento personalizado e soluções jurídicas seguras para
            proteger o que é mais importante para você.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_400ms_forwards]">
            <a
              href="#contato"
              className="inline-flex h-12 items-center rounded-sm bg-accent px-8 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-accent-dim focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-[0_4px_20px_oklch(0.72_0.12_85/0.3)]"
            >
              Agende uma consulta
            </a>
            <a
              href="#servicos"
              className="inline-flex h-12 items-center rounded-sm border border-white/20 bg-white/5 px-8 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Nossos serviços
            </a>
          </div>
        </div>

        {/* Coluna da Imagem Frontal (Foto da Advogada - Corte Profissional) */}
        <div className="relative order-first lg:order-last mx-auto w-full max-w-[450px]">
          <div
            // Retornamos o aspect-[4/5] para forçar a simetria exata com o bloco de texto
            className="relative w-full aspect-[4/5] overflow-hidden rounded-xl opacity-0 animate-[slideIn_1200ms_cubic-bezier(0.22,1,0.36,1)_100ms_forwards] shadow-2xl shadow-black/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none" />
            
            {/* O segredo do enquadramento está no `object-top` e no `fill` */}
            <Image
              src="/images/foto-1.webp"
              alt="Laiza Advocacia"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
            
            <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}