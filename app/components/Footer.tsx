// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 py-14 lg:px-12 lg:py-16">
      {/* 1. Container Flex Centralizado */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 text-center">
        
        {/* 2. Logo Altamente Visível */}
        <img
          src="/logos/logo-ass-bege.png"
          alt="Laiza Advocacia"
          // Corrigido o "h-30" (inválido no Tailwind padrão) para escalas válidas e grandes
          className="h-32 w-auto object-contain sm:h-40" 
        />
        
        <p className="max-w-[42ch] text-sm leading-relaxed text-muted">
          Assessoria jurídica com excelência e dedicação.
        </p>
      </div>

      {/* 3. Direitos Autorais Centralizados */}
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-center border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-light">
          &copy; {new Date().getFullYear()} Laiza Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}