"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contato() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    fetch("https://formspree.io/f/placeholder", {
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
    // Reduzi o padding vertical de py-20/28 para py-10/14 (metade)
    <section 
      id="contato" 
      className="bg-[oklch(0.72_0.12_85)] px-6 py-10 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-6xl">
        {/* Reduzi a margem inferior do título */}
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
            noValidate
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
                  placeholder="Email ou telefone"
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

            <button
              type="submit"
              disabled={status === "sending"}
              className="h-10 w-fit rounded-full bg-primary px-8 text-xs font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>

          <aside className="flex flex-col gap-4 rounded-xl bg-bg p-6 border border-border">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-muted uppercase">WhatsApp</p>
              <a href="https://wa.me/5583987911703" target="_blank" className="text-sm font-medium text-primary">
                (83) 98791-1703
              </a>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-muted uppercase">Email</p>
              <a href="mailto:contato@laizaadv.com.br" className="text-sm font-medium text-primary">
                laiza@laizaadv.com.br
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}