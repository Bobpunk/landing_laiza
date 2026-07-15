// app/components/Servicos.tsx
import Image from "next/image";
import Link from "next/link"; // Importado para gerenciar o roteamento interno do Next.js

const areas = [
  {
    id: "01",
    title: "Direito do Trabalho",
    slug: "direito-do-trabalho", // <-- Novo campo para a nossa rota real
    description:
      "Defesa rigorosa dos direitos trabalhistas, atuando em rescisões, horas extras, assédio moral e litígios complexos.",
    icon: "/images/servico-box3-no-bg.png", 
  },
  {
    id: "02",
    title: "Direito Criminal",
    slug: "direito-criminal", // <-- Deixe o slug preparado para as próximas páginas
    description:
      "Atuação ágil, combativa e sob sigilo absoluto em inquéritos policiais, audiências de custódia e processos penais.",
    icon: "/images/servico-box3-no-bg.png",
  },
  {
    id: "03",
    title: "Direito Bancário",
    slug: "direito-bancario", // <-- Deixe o slug preparado
    description:
      "Proteção patrimonial contra abusos financeiros, englobando revisão de juros, fraudes e renegociação de contratos.",
    icon: "/images/servico-box3-no-bg.png",
  },
  {
    id: "04",
    title: "Direito da Família",
    slug: "direito-da-familia", // <-- Deixe o slug preparado
    description:
      "Condução estratégica e humanizada de divórcios, guarda, pensão alimentícia e partilha de bens.",
    icon: "/images/servico-box3-no-bg.png",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="bg-bg px-6 pt-16 pb-20 lg:px-12 lg:pt-20 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 lg:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="mb-6 font-serif text-[clamp(2rem,4vw+0.5rem,3.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-rich [text-wrap:balance]">
            Áreas de atuação
          </h2>
          <p className="text-lg leading-relaxed text-muted lg:text-xl">
            Soluções jurídicas estruturadas para cada necessidade, aliando conhecimento técnico a um atendimento humanizado e estratégico.
          </p>
        </div>

        <div className="mx-auto grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area.id}
              className="flex h-full w-full flex-col items-center text-center rounded-[2rem] border border-accent bg-surface p-6 xl:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 relative flex h-16 w-16 items-center justify-center">
                <Image
                  src={area.icon}
                  alt={`Ilustração para ${area.title}`}
                  fill
                  className="object-contain"
                  sizes="64px"
                  loading="lazy"
                />
              </div>
              
              <h3 className="mb-4 font-serif text-lg lg:text-xl font-bold text-ink-rich">
                {area.title}
              </h3>
              
              <p className="mb-6 text-sm leading-relaxed text-muted grow">
                {area.description}
              </p>

              {/* 
                REDIRECIONAMENTO CORRIGIDO:
                - Agora aponta de forma inteligente para a pasta `/atuacao/[slug]`
              */}
              <Link
                href={`/atuacao/${area.slug}`}
                className="mt-auto w-full max-w-[180px] rounded-md bg-accent py-3 text-sm font-medium text-white text-center transition-opacity duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Saiba Mais
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}