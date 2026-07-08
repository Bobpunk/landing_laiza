// app/components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slideImages = ["/images/bg-hero1.webp", "/images/bg-hero2.webp", "/images/bg-hero3.webp"];

const metricsData = [
  { target: 500, suffix: "+", label: "Consultorias Júridicas" },
  { target: 100, suffix: "%", label: "Atendimento Personalizado" },
  { target: 24, suffix: "h", label: "Plantão de Urgência" },
  { target: 100, suffix: "%", label: "confidencialidade" },
];

function AnimatedNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = target;
    const duration = end < 10 ? 800 : 1500; 
    const startTime = performance.now();

    function updateNumber(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuad = (t: number) => t * (2 - t);
      
      setCount(Math.floor(easeOutQuad(progress) * end));

      if (progress < 1) requestAnimationFrame(updateNumber);
    }

    requestAnimationFrame(updateNumber);
  }, [target]);

  return <>{count}</>;
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative flex flex-col h-auto overflow-hidden px-6 pt-12 pb-10 lg:px-12 lg:pt-16">
      {slideImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={src} alt={`Background slide ${index + 1}`} fill className="object-cover object-center" priority={index === 0} />
        </div>
      ))}

      <div className="absolute inset-0 z-0 bg-slate-950/85" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14 relative z-10 pt-8 pb-6">
        <div className="max-w-2xl">
          <h1 className="mb-4 font-serif text-[clamp(2.2rem,4vw+0.5rem,3.8rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white [text-wrap:balance] opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_200ms_forwards]">
            Assessoria jurídica<br />com excelência<br />e dedicação
          </h1>
          
          <p className="mb-6 max-w-[48ch] text-base leading-relaxed text-slate-300 lg:text-lg opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_300ms_forwards]">
            Atendimento personalizado e soluções jurídicas seguras para proteger o que é mais importante para você.
          </p>
          
          <div className="flex flex-wrap gap-3 opacity-0 animate-[fadeIn_600ms_cubic-bezier(0.16,1,0.3,1)_400ms_forwards]">
            <a href="#contato" className="inline-flex h-11 items-center rounded-sm bg-accent px-6 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-accent-dim focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-[0_4px_20px_oklch(0.72_0.12_85/0.3)]">
              Agende uma consulta
            </a>
            <a href="#servicos" className="inline-flex h-11 items-center rounded-sm border border-white/20 bg-white/5 px-6 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Nossos serviços
            </a>
          </div>
        </div>

        <div className="relative order-first lg:order-last mx-auto w-full max-w-[380px]">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl opacity-0 animate-[slideIn_1200ms_cubic-bezier(0.22,1,0.36,1)_100ms_forwards] shadow-2xl shadow-black/50">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none" />
            <Image src="/images/foto-1.jpeg" alt="Laiza Advocacia" fill sizes="(max-width: 1024px) 100vw, 380px" className="object-cover object-top" priority />
            <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none z-20" />
          </div>
        </div>
      </div>

      <div className="w-full relative z-10 bg-transparent left-0 right-0 mt-2 -mx-6 lg:-mx-12 xl:mx-auto">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {metricsData.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center px-6 py-2 text-center">
                <div className="font-serif text-4xl font-medium tracking-tight text-white md:text-5xl tabular-nums">
                  <AnimatedNumber target={item.target} />
                  <span>{item.suffix}</span>
                </div>
                <p className="mt-1 max-w-[20ch] text-[9px] font-bold uppercase tracking-[0.2em] text-[#C5A059] opacity-90 sm:text-xs">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}