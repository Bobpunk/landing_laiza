// app/components/Sobre.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Sobre() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Corrige o erro do ESLint agendando a execução para o próximo ciclo de renderização
    const handle = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(handle);
  }, []);

  return (
    <section 
      id="sobre" 
      className="bg-surface px-6 pt-16 pb-20 lg:px-12 lg:pt-20 lg:pb-28 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* Coluna da Imagem Animada e Vibrante */}
          <div 
            className={`order-last lg:order-first mx-auto w-full max-w-[500px] transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Container com efeito Hover 3D e Glow Dourado sutil */}
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-2xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(197,160,89,0.15)]">
              
              {/* Overlay de Brilho Dinâmico no Hover */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
              <div className="absolute inset-0 z-10 bg-[#C5A059]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

              <Image
                src="/images/foto-3.jpeg"
                alt="Laiza - Advogada fundadora"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              
              {/* Borda interna estilizada */}
              <div className="absolute inset-0 rounded-xl border border-border pointer-events-none z-20 transition-colors duration-500 group-hover:border-[#C5A059]/40" />
            </div>
          </div>
          
          {/* Coluna de Texto com Entrada Escalonada */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_100ms_forwards]">
              Conheça nossa história
            </p>
            
            <h2 className="mb-6 font-serif text-[clamp(2rem,4vw+0.5rem,3.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-rich [text-wrap:balance] opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_200ms_forwards]">
              Sobre o escritório
            </h2>
            
            <div className="max-w-[62ch] space-y-5 text-base leading-relaxed text-muted lg:text-lg opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_300ms_forwards]">
              <p>
                O escritório Laiza Advocacia nasceu do compromisso com a
                excelência jurídica e o atendimento humanizado. Cada caso é
                tratado com a atenção que merece, unindo conhecimento
                técnico e sensibilidade.
              </p>
              <p>
                Atuamos com transparência e dedicação, oferecendo soluções
                jurídicas personalizadas para cada cliente — seja pessoa
                física ou empresa — sempre buscando o melhor resultado com
                ética e responsabilidade.
              </p>
              <p className="border-l-2 border-[#C5A059] pl-4 italic text-ink-rich/80 bg-[#C5A059]/5 py-2 rounded-r-sm">
                Nosso atendimento é presencial e online, permitindo
                assessoria completa independentemente da sua localização.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}