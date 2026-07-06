// app/components/Footer.tsx
const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Atuação", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 py-6 lg:px-12 lg:py-8">
      {/* Container Principal */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between md:flex-row">
        
        {/* Coluna 1: Espaçador Invisível */}
        <div className="hidden md:block md:flex-1"></div>

        {/* Coluna 2: Logo e Texto (Centro) */}
        <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-none">
          <a 
            href="#hero"
            aria-label="Voltar ao início"
            className="transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-sm"
          >
            <img
              src="/logos/logo-ass-bege.png"
              alt="Laiza Advocacia"
              className="h-32 w-auto object-contain sm:h-40" 
            />
          </a>
          <p className="max-w-[42ch] text-sm leading-relaxed text-muted">
            Assessoria jurídica com excelência e dedicação.
          </p>
        </div>

        {/* Coluna 3: Navegação (Alinhada no topo com offset) */}
        <nav 
          aria-label="Navegação de rodapé" 
          className="mt-6 w-full md:flex-1 md:flex md:justify-end md:self-start md:mt-6 lg:mt-8"
        >
          <ul className="flex flex-wrap items-center justify-center gap-6 md:justify-end lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Linha de Direitos Autorais */}
      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-center border-t border-border pt-3 text-center">
        <p className="text-xs text-muted-light">
          &copy; {new Date().getFullYear()} Laiza Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}