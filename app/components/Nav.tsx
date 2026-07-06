"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Atuação", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-rich/95 backdrop-blur-md border-b border-white/10 shadow-lg py-1 md:py-2"
          : "bg-ink-rich py-1 md:py-2"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-12">
        <a
          href="#hero"
          className="flex items-center gap-3 font-serif text-lg font-semibold tracking-tight text-white transition-colors hover:text-accent"
          aria-label="Laiza Advocacia - Início"
        >
          <img
            src="/logos/logo-ass-bege.png" 
            alt="Logo Laiza Advocacia"
            className="h-12 w-auto md:h-20" 
            aria-hidden="true"
            onError={(e) => {
              e.currentTarget.src = "/logos/logo-simples.png"; 
            }}
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="inline-flex h-10 items-center gap-2 rounded-sm bg-accent px-6 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-dim focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-[0_2px_10px_oklch(0.72_0.12_85/0.2)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale Conosco
            </a>
          </li>
        </ul>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
            className="text-white"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu Mobile */}
      {open && (
        <div className="absolute top-full left-0 w-full border-t border-white/10 bg-ink-rich md:hidden shadow-xl">
          <ul className="flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-4 py-3 text-sm font-medium uppercase tracking-widest text-white/80 transition-colors hover:bg-white/5 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}