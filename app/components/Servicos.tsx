// app/components/Servicos.tsx
import Image from "next/image";

const areas = [
  {
    id: "01",
    title: "Direito do Trabalho",
    description:
      "Defesa rigorosa dos direitos trabalhistas, atuando em rescisões, horas extras, assédio moral e litígios complexos.",
    icon: "/images/servico-box.webp", 
  },
  {
    id: "02",
    title: "Direito Criminal",
    description:
      "Atuação ágil, combativa e sob sigilo absoluto em inquéritos policiais, audiências de custódia e processos penais.",
    icon: "/images/servico-box.webp",
  },
  {
    id: "03",
    title: "Direito Bancário",
    description:
      "Proteção patrimonial contra abusos financeiros, englobando revisão de juros, fraudes e renegociação de contratos.",
    icon: "/images/servico-box3.webp",
  },
  {
    id: "04",
    title: "Direito da Família",
    description:
      "Condução estratégica e humanizada de divórcios, guarda, pensão alimentícia e partilha de bens.",
    icon: "/images/servico-box3.webp",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="bg-bg px-6 pt-16 pb-20 lg:px-12 lg:pt-20 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Cabeçalho da Seção */}
        <div className="mb-14 lg:mb-20 text-center max-w-3xl mx-auto">
          
          <h2 className="mb-6 font-serif text-[clamp(2rem,4vw+0.5rem,3.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-rich [text-wrap:balance]">
            Áreas de atuação
          </h2>
          <p className="text-lg leading-relaxed text-muted lg:text-xl">
            Soluções jurídicas estruturadas para cada necessidade, aliando conhecimento técnico a um atendimento humanizado e estratégico.
          </p>
        </div>

        {/* Grid de 3 Colunas com o 4º Elemento Centralizado */}
        <div className="mx-auto grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {areas.map((area, index) => (
            <div
              key={area.id}
              // 1. lg:col-start-2 é injetado apenas no 4º elemento (index 3)
              // 2. max-w-[360px] garante que caibam 3 lado a lado sem quebrar o layout
              className={`flex w-full max-w-[360px] flex-col items-center justify-center text-center rounded-[2rem] border border-accent bg-surface p-8 sm:aspect-square shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                index === 3 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Imagem do Serviço */}
              <div className="mb-6 relative flex h-20 w-20 items-center justify-center">
                <Image
                  src={area.icon}
                  alt={`Ilustração para ${area.title}`}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              
              {/* Título */}
              <h3 className="mb-4 font-serif text-xl font-bold text-ink-rich">
                {area.title}
              </h3>
              
              {/* Descrição */}
              <p className="mb-6 text-sm leading-relaxed text-muted">
                {area.description}
              </p>

              {/* Botão "Saiba Mais" */}
              <a
                href="#contato"
                className="mt-auto w-full max-w-[200px] rounded-md bg-accent py-3 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Saiba Mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}