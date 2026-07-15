// app/components/Contato.tsx
"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error" | "validation-error";

export default function Contato() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const nome = data.get("nome")?.toString().trim();
    const contato = data.get("contato")?.toString().trim() || "";
    const mensagem = data.get("mensagem")?.toString().trim();

    // 1. Validação simples de campos vazios
    if (!nome || !contato || !mensagem) {
      setStatus("validation-error");
      return;
    }

    // 2. Validação rigorosa do campo de contato (Aceita e-mail válido OU telefone com DDD)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Aceita formatos como: 83987911703, (83) 98791-1703, 83 98791-1703, etc. (mínimo 10 e máximo 11 dígitos numéricos líquidos)
    const apenasNumeros = contato.replace(/\D/g, "");
    const isTelefoneValido = apenasNumeros.length === 10 || apenasNumeros.length === 11;
    const isEmailValido = emailRegex.test(contato);

    if (!isEmailValido && !isTelefoneValido) {
      setStatus("validation-error");
      return;
    }

    // Enviando diretamente para o link completo do seu formulário no Formspree
    fetch("https://formspree.io/f/xeeyegro", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setStatus("success");
          form.reset();
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section 
      id="contato" 
      className="bg-[oklch(0.72_0.12_85)] px-6 py-10 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 lg:mb-10">
          <h2 className="mb-2 font-serif text-[clamp(1.5rem,3vw+0.5rem,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-rich [text-wrap:balance]">
            Entre em contato
          </h2>
          <p className="max-w-[62ch] text-base leading-relaxed text-ink-rich/80 lg:text-lg">
            Preencha o formulário ou fale conosco pelo WhatsApp.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-ink">Nome</span>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome"
                  className="h-10 rounded-lg border border-border bg-bg px-4 text-sm text-ink placeholder:text-muted-light focus:border-primary focus:outline-none"
                />
              </label>
              
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-ink">Contato</span>
                <input
                  type="text"
                  name="contato"
                  required
                  placeholder="E-mail ou telefone com DDD"
                  className="h-10 rounded-lg border border-border bg-bg px-4 text-sm text-ink placeholder:text-muted-light focus:border-primary focus:outline-none"
                />
              </label>
            </div>
            
            <label className="flex flex-col gap-1">
              <span className="text-xs font-medium text-ink">Mensagem</span>
              <textarea
                name="mensagem"
                required
                rows={3}
                placeholder="Como podemos ajudar?"
                className="resize-none rounded-lg border border-border bg-bg px-4 py-2 text-sm text-ink placeholder:text-muted-light focus:border-primary focus:outline-none"
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="h-10 w-fit rounded-full bg-primary px-8 text-xs font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensagem"}
              </button>

              {/* Feedbacks Visuais Rápidos para o Usuário */}
              {status === "success" && (
                <p className="text-xs font-bold text-emerald-800 animate-fade-in">✓ Mensagem enviada com sucesso!</p>
              )}
              {status === "validation-error" && (
                <p className="text-xs font-bold text-amber-800 animate-fade-in">⚠ Insira um e-mail válido ou telefone com DDD.</p>
              )}
              {status === "error" && (
                <p className="text-xs font-bold text-rose-800 animate-fade-in">✕ Sistema temporariamente indisponível, tente mais tarde.</p>
              )}
            </div>
          </form>

          <aside className="flex flex-col gap-4 rounded-xl bg-bg p-6 border border-border">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-muted uppercase">WhatsApp</p>
              <a href="https://wa.me/5583987911703" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary">
                (83) 98791-1703
              </a>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-muted uppercase">Email</p>
              <a href="mailto:contato@laizaadv.com.br" className="text-sm font-medium text-primary">
                contato@laizaadv.com.br
              </a>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-muted uppercase">Endereço</p>
              <a 
                href="https://maps.app.goo.gl/GjNGfXB8YZZhVYAj6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm font-medium text-primary hover:underline"
              >
                Av. Flávio Ribeiro Coutinho, 210 - Centro<br />
                Santa Rita - PB<br />
                58300-220
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}