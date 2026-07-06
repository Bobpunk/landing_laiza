// app/components/Sobre.tsx
import Image from "next/image";

export default function Sobre() {
  return (
    <section 
      id="sobre" 
      // 1. Espaçamento unificado: Mesmas classes exatas do Hero e Serviços para espelhamento matemático
      className="bg-surface px-6 pt-16 pb-20 lg:px-12 lg:pt-20 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* 2. Simetria Matemática: Mudança de colunas assimétricas para Grid 2x2 (50% / 50%) */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* Coluna da Imagem */}
          <div className="order-last lg:order-first mx-auto w-full max-w-[500px]">
            {/* Remoção do height com clamp e adoção do aspect-[4/5] fluído para casar com o Hero */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-xl shadow-black/5">
              {/* 3. Atualização de performance com next/image */}
              <Image
                src="/images/foto-3.jpeg"
                alt="Laiza - Advogada fundadora"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 rounded-xl border border-border pointer-events-none z-10" />
            </div>
          </div>
          
          {/* Coluna de Texto */}
          <div className="flex flex-col justify-center">
            {/* Adicionada a tag label superior para padronizar com a seção de Serviços */}
            <p className="mb-4 font-sans text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              
            </p>
            <h2 className="mb-6 font-serif text-[clamp(2rem,4vw+0.5rem,3.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-rich [text-wrap:balance]">
              Sobre o escritório
            </h2>
            
            <div className="max-w-[62ch] space-y-5 text-base leading-relaxed text-muted lg:text-lg">
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
              <p>
                Nosso atendimento é presencial e online, permitindo
                assessoria completa independentemente da sua localização.
              </p>
            </div>
            
            {/* Box Redesenhado: Otimizado para caber perfeitamente na coluna de 50% */}
            
          </div>
        </div>
      </div>
    </section>
  );
}