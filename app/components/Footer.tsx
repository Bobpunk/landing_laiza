// app/components/Footer.tsx
const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Atuação", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const contatos = [
  {
    label: "WhatsApp",
    value: "(83) 98791-1703",
    href: "https://wa.me/5583987911703",
    external: true,
    icon: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    ),
  },
  {
    label: "Email",
    value: "contato@laizaadv.com.br",
    href: "mailto:contato@laizaadv.com.br",
    external: false,
    icon: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4h16v16H4z M22 6l-10 7L2 6"
      />
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-rich text-white">
      {/* Faixa de destaque no topo */}
      <div className="h-1 w-full bg-accent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr] lg:gap-12">
          {/* Coluna 1: Marca */}
          <div className="flex flex-col items-start gap-4">
            <a
              href="#hero"
              aria-label="Voltar ao início"
              className="rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <img
                src="/logos/logo-ass-bege.png"
                alt="Laiza Advocacia"
                className="h-28 w-auto object-contain sm:h-32"
              />
            </a>
            <p className="max-w-[38ch] text-sm leading-relaxed text-white/60">
              Assessoria jurídica com excelência e dedicação, oferecendo
              soluções seguras e personalizadas para cada cliente.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <nav aria-label="Navegação de rodapé" className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
              Navegação
            </h3>
            <ul className="flex flex-col gap-3">
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

          {/* Coluna 3: Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
              Contato
            </h3>
            <ul className="flex flex-col gap-4">
              {contatos.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-3 text-white/70 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent transition-colors group-hover:bg-accent/15">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        {c.icon}
                      </svg>
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                        {c.label}
                      </span>
                      <span className="text-sm font-medium">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Flávio+Ribeiro+Coutinho,210+-+Centro,+Santa+Rita+-+PB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-white/70 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent transition-colors group-hover:bg-accent/15">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Endereço
                    </span>
                    <span className="text-sm font-medium leading-relaxed">
                      Av. Flávio Ribeiro Coutinho, 210 - Centro
                      <br />
                      Santa Rita - PB, 58300-220
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de Direitos Autorais */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            &copy; {year} Laiza Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/40">
            Feito com dedicação para nossos clientes.
          </p>
        </div>
      </div>
    </footer>
  );
}
