// app/components/AreaCard.tsx
import Link from "next/link";

interface AreaCardProps {
  titulo: string;
  descricao: string;
  slug: string; // ex: "direito-do-trabalho"
}

export default function AreaCard({ titulo, descricao, slug }: AreaCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-border bg-bg p-6 transition-all hover:shadow-md">
      <div>
        <h3 className="mb-2 font-serif text-xl font-semibold text-ink-rich">
          {titulo}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-ink/80">
          {descricao}
        </p>
      </div>
      <Link
        href={`/atuacao/${slug}`}
        className="text-xs font-bold tracking-wider text-primary uppercase hover:underline"
      >
        Saiba mais →
      </Link>
    </div>
  );
}