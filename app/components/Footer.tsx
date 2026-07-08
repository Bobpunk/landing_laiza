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

      {/* Redução do py-12 para py-6 (Corta o respiro gigante do topo e base) */}
      <div className="mx-auto w-full max-w-6xl px-6 py-3 lg:px-12">
        
        {/* Linha principal: Gap reduzido de 10 para 6 no mobile */}
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-between">
          
          {/* 1. Coluna Fantasma (Esquerda) */}
          <div className="hidden lg:block lg:flex-1"></div>

          {/* 2. DIVOAB: Marca + informações + aviso legal */}
          {/* Paddings internos reduzidos (p-2 sm:p-4) e gap de 6 para 4 */}
          <div id="divoab" className="flex flex-col items-center gap-4 p-2 sm:p-4 lg:-translate-x-[-0px] lg:flex-none">
            
            <div className="flex flex-row items-center gap-4 sm:gap-6">
              <a
                href="#hero"
                aria-label="Voltar ao início"
                className="shrink-0 rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {/* Logo levemente reduzida para h-16 sm:h-20 para economizar altura vertical */}
                <img
                  src="/logos/logo-ass-bege.png"
                  alt="Laiza Advocacia"
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </a>

              <div className="flex flex-col items-start gap-1 text-left">
                <p className="text-lg font-semibold text-white">
                  Laiza Batista Advocacia
                </p>
                <p className="text-sm font-medium tracking-wide text-accent">
                  OAB-PB 31376
                </p>
                <p className="max-w-[25ch] text-sm leading-snug text-white/70">
                  Assessoria jurídica com excelência e dedicação.
                </p>
              </div>
            </div>

            <p className="max-w-[55ch] text-center text-xs leading-relaxed text-white/50">
              Este site tem caráter informativo e não constitui promessa de
              resultado. A atuação profissional observa rigorosamente o
              Código de Ética e Disciplina da OAB.
            </p>
          </div>

          {/* 3. DIVNAV: Navegação (Direita) */}
          {/* Paddings reduzidos (p-2 sm:p-4) para acompanhar a nova escala */}
          <div id="divnav" className="flex w-full justify-center lg:flex-1 lg:justify-end lg:translate-x-[50px] lg:-translate-y-[70px]">
            <nav
              aria-label="Navegação de rodapé"
              className="flex flex-row items-center gap-6 p-2 sm:p-4"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-accent whitespace-nowrap">
                
              </h3>
              
              <ul className="flex flex-row flex-nowrap items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.href} className="whitespace-nowrap">
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
        </div>

        {/* Linha de Direitos Autorais */}
        {/* Redução do mt-10 para mt-6 e pt-6 para pt-4 */}
        <div className="mt-0 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-center sm:flex-row sm:text-left">
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