// app/components/Footer.tsx
const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Atuação", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2c2621] text-white">
      {/* Faixa de destaque no topo */}
      <div className="h-1 w-full bg-accent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-12">
        {/* Linha principal: marca à esquerda, navegação à direita */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Marca + informações */}
          <div className="flex flex-col items-start gap-4">
            <a
              href="#hero"
              aria-label="Voltar ao início"
              className="rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <img
                src="/logos/logo-ass-bege.png"
                alt="Laiza Advocacia"
                className="h-24 w-auto object-contain sm:h-28"
              />
            </a>

            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold text-white">
                Laiza Batista Advocacia
              </p>
              <p className="text-sm font-medium tracking-wide text-accent">
                OAB-PB 31376
              </p>
              <p className="text-sm text-white/70">
                Assessoria jurídica com excelência e dedicação.
              </p>
            </div>
          </div>

          {/* Navegação */}
          <nav
            aria-label="Navegação de rodapé"
            className="flex flex-col gap-4 lg:items-end"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
              Navegação
            </h3>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Aviso legal */}
        <p className="mt-10 max-w-[75ch] text-xs leading-relaxed text-white/50">
          Este site tem caráter informativo e não constitui promessa de
          resultado. A atuação profissional observa rigorosamente o Código de
          Ética e Disciplina da OAB.
        </p>

        {/* Linha de Direitos Autorais */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            &copy; {year} Laiza Batista Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/40">
            Feito com dedicação para nossos clientes.
          </p>
        </div>
      </div>
    </footer>
  );
}
