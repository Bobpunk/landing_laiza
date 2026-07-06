---
name: Laiza Advocacia
description: Landing page jurídica sóbria e tradicional — solidez visível, clareza antes de elegância.
colors:
  primary: "oklch(0.45 0.18 261)"
  primary-deep: "oklch(0.32 0.14 261)"
  primary-light: "oklch(0.62 0.12 261)"
  accent: "oklch(0.72 0.12 85)"
  accent-dim: "oklch(0.55 0.1 85)"
  bg: "oklch(0.985 0 0)"
  surface: "oklch(0.945 0.006 261)"
  surface-alt: "oklch(0.96 0.003 261)"
  ink: "oklch(0.18 0.014 261)"
  ink-rich: "oklch(0.12 0.01 261)"
  muted: "oklch(0.46 0.012 261)"
  muted-light: "oklch(0.46 0.008 261)"
  border: "oklch(0.88 0.004 261)"
  border-strong: "oklch(0.78 0.008 261)"
  success: "oklch(0.62 0.16 145)"
  error: "oklch(0.52 0.18 20)"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw + 0.5rem, 5rem)"
    fontWeight: 600
    lineHeight: "1.05"
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2rem, 4vw + 0.5rem, 3.5rem)"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "normal"
  body:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "normal"
  body-lg:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "normal"
  label:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "1.4"
    letterSpacing: "0.1em"
rounded:
  none: "0"
  input: "8px"
  card: "12px"
  pill: "9999px"
spacing:
  tight: "0.5rem"
  base: "1rem"
  section-y: "clamp(5rem, 10vw, 7rem)"
  gap-px: "1px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "48px"
  button-nav-cta:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "40px"
  button-nav-cta-hover:
    backgroundColor: "{colors.accent-dim}"
  input-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.input}"
    padding: "0 16px"
    height: "48px"
  input-field-focus:
    textColor: "{colors.primary}"
  card-practice-area:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink-rich}"
    rounded: "{rounded.card}"
    padding: "32px"
  card-practice-area-hover:
    backgroundColor: "{colors.surface}"
  card-aside:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-rich}"
    rounded: "{rounded.card}"
    padding: "32px 40px"
---

# Design System: Laiza Advocacia

## 1. Overview

**Creative North Star: "A Balança"**

O sistema é a balança como objeto físico — equilíbrio entre peso e leveza, simetria, materialidade. Cada选择 de design pesa na representação da autoridade jurídica: a paleta ancorada não grita, a serifa firma, o dourado pontua sem ostentar. O visitante chega em momento de vulnerabilidade; a interface deve transmitir que alguém está segurando o prato oposto.

A linguagem visual rejeita deliberadamente o clichê startup/SaaS (gradientes, glassmorphism, micro-animações provocativas) e o corporate anônimo (azul-marinho sem identidade, stock photos de terno, layouts de banco/seguradora). Em vez disso, adota a sobriedade de um escritório tradicional: tipografia serifada firme em display e titles, sans humanista para corpo, paleta escura (navy profundo + ink-rich quase preto) como base institucional, com o dourado contido como accent — nunca como banho. A referência principal é Jailton Pereira Advocacia: estrutura limpa, hierarquia clara (hero → serviços → sobre → contato), solidez sem template genérico.

A elevação é **flat por padrão**: a profundidade vem do contraste tonal entre `bg` e `surface` e de bordas sutis (1px em `border`/`border-strong`). Sombras surgem só como resposta a estado (hover, foco), nunca como decoração ambiente. Isso reforça a sensação de materialidade estática — a balança em repouso, não oscilando.

**Key Characteristics:**
- Paleta escura institucional (navy + ink-rich) com dourado contido como único accent.
- Tipografia serifada display + sans humanista body; peso 600 firma headings sem peso decorativo.
- Hierarquia clara de seções hero → serviços → sobre → contato, sem Destaques decorativos.
- Bordas 1px e contraste tonal como vocabulário de profundidade; sombras só em estado.
- Motion restrito: revelações de entrada com fallback estático (reduced-motion); nada decorativo.
- Cantos arredondados moderados: pill em botões (CTA), 12px em cartões, 8px em inputs, retos na CTA do nav.

## 2. Colors

A paleta é restrita e ancorada: um navy profundo carrega a identidade, um dourado suave pontua, e os neutros são quase-acromáticos com ínfima tendência ao hue 261 (azul) para coesão.

### Primary
- **Navy Advocacia** (oklch(0.45 0.18 261)): Cor institucional central. Base do header (via `ink-rich` sobreposto), CTAs primários em modo claro, links. Usada com precaução — não cobre a maioria da superfície.
- **Navy Profundo** (oklch(0.32 0.14 261)): Variação mais escura do primary para hover de CTA (`primary-deep`). Reforça a profundidade sem mudar de família.
- **Navy Claro** (oklch(0.62 0.12 261)): Variação clara, reservada para estados futuros (disabled, tonal ramps). Uso atual raro.

### Secondary
- **Dourado Contido** (oklch(0.72 0.12 85)): O único accent cálido. Usado na CTA do header ("Fale Conosco"), no hover de links/ícones, e em pontos de micro-ênfase. Nunca em corpo de texto ou superfícies grandes.
- **Dourado Escurecido** (oklch(0.55 0.1 85)): Hover do accent; mantém contraste contra texto branco quando o dourado claro não passaria.

### Neutral
- **Papel Neutro** (oklch(0.985 0 0)): Background base (hero, serviços, contato). Achromatic — zero crominância, não tende ao creme.
- **Superfície Tintada** (oklch(0.945 0.006 261)): Seção "Sobre" e aside de contato. Leve deslocamento tonal para navy cria hierarquia sem introduzir nova cor.
- **Superfície Alt** (oklch(0.96 0.003 261)): Variação ainda mais sutil, reserva para futuros estados tonais.
- **Tinta Base** (oklch(0.18 0.014 261)): Cor de body text. Contraste 4.5:1+ contra `bg`.
- **Tinta Rica** (oklch(0.12 0.01 261)): Headings e texto em fundo claro. Quase preto com ínfima tendência navy.
- **Muted** (oklch(0.46 0.012 261)): Texto secundário, descrições. Deve manter ≥4.5:1 contra `bg` — verificado.
- **Muted Claro** (oklch(0.46 0.008 261)): Labels uppercase/minutos. Verificar contraste em cada uso.
- **Borda** (oklch(0.88 0.004 261)): Separadores e contornos de input/cartão em modo claro.
- **Borda Forte** (oklch(0.78 0.008 261)): Hover de bordas, separadores de ênfase.

### Estado
- **Verde Êxito** (oklch(0.62 0.16 145)): Mensagem de sucesso de formulário.
- **Vermelho Erro** (oklch(0.52 0.18 20)): Mensagem de erro, asterisco de obrigatório.

### Named Rules
**A Regra do Único Accent.** O dourado é o único accent cálido e aparece em ≤10% de qualquer tela. Sua raridade é o ponto — nunca cobre superfícies grandes, nunca em body text, nunca em gradientes.

**A Regra do Achromatic Background.** O `bg` é rigorosamente achromatic (chroma 0). Aquecedores (creme, areia, pergaminho) são proibidos — são o default AI de 2026 e traem o produto. Warmth vem do accent dourado pontual, não do corpo da página.

## 3. Typography

**Display Font:** Source Serif 4 (com Georgia, serif)
**Body Font:** Work Sans (com system-ui, sans-serif)

**Character:** Serif transitional firme em headings — autoridade jurídica恤 apoiada em serifas estruturadas sem ornamentação. Work Sans humanista no corpo, legível e próxima, com polidez sem frieza. O contraste serif/sans funciona no eixo editorial-jurídico sem cair no clichê Fraunces/editorial-magazine.

### Hierarchy
- **Display** (Source Serif 4, 600, `clamp(2.5rem, 6vw + 0.5rem, 5rem)`, line-height 1.05, letter-spacing -0.025em): Apenas H1 do hero. Máx 96px — nunca excede.
- **Headline** (Source Serif 4, 600, `clamp(2rem, 4vw + 0.5rem, 3.5rem)`, line-height 1.1, letter-spacing -0.02em): H2 de seção (serviços, sobre, contato).
- **Title** (Source Serif 4, 600, `clamp(1.25rem, 2vw, 1.5rem)`, line-height 1.2, letter-spacing normal): H3 — títulos de áreas de prática em cards.
- **Body** (Work Sans, 400, 1rem, line-height 1.65): Texto corrido. Cap 65–75ch.
- **Body Lg** (Work Sans, 400, 1.125rem, line-height 1.65): Texto de destaque sob headings (sub-headlines de seção), max-width 58–62ch.
- **Label** (Work Sans, 600, 0.75rem, letter-spacing 0.1em, uppercase): Labels de formulário, kicker do contato, menu nav uppercase. Usar com parcimônia — não como eyebrow decorativo em toda seção.

### Named Rules
**A Regra do Contenção Display.** Display letter-spacing nunca aperta além de -0.025em. Apertar mais faz as letras se tocarem e lê como apertado, não desenhado.

**A Regra do Sem Eyebrow Reflexo.** Kicker uppercase tracked acima de cada heading é proibido como gramática default de seção. Um kicker nomeado e deliberado pode existir em uma seção específica; repeti-lo em todas é scaffold AI.

## 4. Elevation

O sistema é **flat por padrão**. Profundidade é comunicada por contraste tonal (`bg` vs `surface`) e por bordas 1px sutis (`border`, `border-strong`). Sombras são resposta a estado, nunca decoração ambiente.

### Shadow Vocabulary
- **Realce de Hover** (`box-shadow` em backdrop-blur/header scrolled): Usada apenas no header ao scrollar, para separar do conteúdo. Não aplicada a cartões no repouso.
- **Borda Inset Fina** (`inset 0 1px 0 0 oklch(1 0 0 / 0.08), inset 0 -1px 0 0 oklch(0 0 0 / 0.12)`): Aplicada em contêineres de imagem (hero, sobre) como legenda de profundidade interna — borda interna luminosa superior + sombreamento inferior sutil. Sem blur, sem peso.

### Named Rules
**A Regra do Flat no Repouso.** Cartões, inputs e superfícies são planos no estado de repouso. Sombras surgem apenas como resposta a estado (hover, foco, scroll). Se uma sombra aparece em repouso, é excrecência.

**A Regra do Sem Ghost-Card.** Nunca parear `border: 1px solid` com `box-shadow` de blur ≥16px no mesmo elemento. Ou borda definida no `border` da marca, ou sombra definida com ≤8px blur. Nunca ambos como decoração.

## 5. Components

### Buttons
- **Shape:** Cantos arredondados em pill (9999px) para CTAs principais; retos (0px) para CTA do header. Altura 48px (12px em mobile interno). Padding 32px laterais.
- **Primary:** `bg-primary` (navy), texto `bg` (branco). Hover: `bg-primary-deep`. Focus ring: 2px `outline-primary`.
- **Secondary:** Transparente, borda 1px `border`, texto `ink`. Hover: borda `border-strong` + `bg-surface`.
- **Nav CTA:** `bg-accent` (dourado), texto `bg`, uppercase 0.75rem, cantos retos. Hover: `bg-accent-dim`. Sombra sutil `0 2px 10px oklch(0.72 0.12 85 / 0.2)`.
- **Enviar (form):** Mesmo que Primary; estado `sending` mostra spinner + "Enviando…" com `disabled:opacity-60`.

### Inputs / Fields
- **Style:** Borda 1px `border`, `bg-bg`, texto `ink`, placeholder `muted-light`. Radius 8px (`rounded-input`). Altura 48px.
- **Focus:** Borda muda para `primary`. Ring视觉 substituído por border shift — sem glow.
- **Error / Disabled:** Mensagens via `error`/`success` tokens com bg tintado a 8% e borda a 30%.

### Cards / Containers
- **Cartão de Área de Pratática:** `bg-bg`, hover `bg-surface`, padding 32px (lg:40px). Borda via `gap-px` contra `bg-border` (grid de 1px). Sem sombra no repouso. Barra decorativa superior 1px×40px na cor accent da área — marca de identidade da prática.
- **Aside de Contato:** `bg-surface`, padding 32px (lg:40px), radius 12px. Recebe labels uppercase + texto `ink-rich`.
- **Cor do cantos** nunca excede 16px. Cards em 12px, pills em 9999px, inputs em 8px. Cartões 24px+ são proibidos.

### Navigation
- **Header:** Fixo, fundo `ink-rich` (navy quase preto). Ao scrollar >32px: `ink-rich/95` + `backdrop-blur-md` + borda branca 10% inferior.
- **Links:** Work Sans 0.75rem uppercase tracking 0.1em, `white/80`. Hover: `accent` (dourado).
- **Logo:** Variante bege (`logo-ass-bege.png`) para contraste contra fundo escuro. Fallback para `logo-simples.png` em erro.
- **Mobile:** Menu drawer sobre `ink-rich`, links uppercase tracking-widest, CTA dourado full-width.

### Hero Portrait
- **Container:** `aspect-[4/5]`, `overflow-hidden`, radius 12px. `maxHeight: clamp(440px, 70vh, 760px)`.
- **Imagem:** `object-cover object-top` para focar rosto. Gradient overlay sutil `from-surface/40 to-transparent` em `mix-blend-multiply`.
- **Borda interna:** Inset 1px luminosa superior + sombrea inferior para profundidade sem sombra externa.

### Signature: Servicos Grid
- **Estrutura:** Grid `lg:grid-cols-6` com primeiro item `col-span-3 row-span-2` (destaque), segundo `col-span-3`, demais `col-span-2`. Em mobile: `sm:grid-cols-2` com primeiro `col-span-2`.
- **Profundidade:** Sem sombras; separação via `gap-px` contra `bg-border` criando linhas de 1px entre cards. Hover muda `bg-bg` → `bg-surface`.
- **Marca de prática:** Barra decorativa 1px×40px no topo de cada card na cor accent da área (não se repete entre áreas — cada prática tem seu tom).

## 6. Do's and Don'ts

### Do:
- **Do** usar `bg` achromatic (oklch(0.985 0 0)) como fundo base. Warmth vem do accent dourado pontual e da serifa, não do corpo da página.
- **Do** limitar o dourado (`accent`) a ≤10% da superfície visível. Sua raridade é o ponto.
- **Do** manter headings em Source Serif 4 peso 600; body em Work Sans 400. O contraste é a voz.
- **Do** usar cantos moderados: pill (9999px) em CTAs, 12px em cartões, 8px em inputs, 0px na CTA do header.
- **Do** comunicar profundidade via contraste tonal (`bg` vs `surface`) e bordas 1px. Sombras só em estado (hover, scroll).
- **Do** usar `text-wrap: balance` em h1–h3 para quebras consistentes; `pretty` em prosa longa.
- **Do** respeitar `prefers-reduced-motion`: toda revelação tem fallback estático instantâneo.
- **Do** manter contraste ≥4.5:1 em body text; ≥3:1 em texto grande. Verificar `muted-light` em cada uso.
- **Do** focar o rosto em retratos (`object-top`) e usar `aspect-[4/5]` para hierarquia editorial.

### Don't:
- **Don't** usar estética startup/SaaS: gradients, glassmorphism, ilustrações vetoriais "fofinhas", tom informal, scrolljacking ou motion provocativo. (Anti-referência direta do PRODUCT.md.)
- **Don't** usar corporate genérico: azul-marinho-anônimo sem identidade, stock photos de terno em mesa de reunião, layouts de banco/seguradora. (PRODUCT.md.)
- **Don't** usar dourado em ostentação — nunca cobrir superfícies grandes, nunca em gradientes, nunca como banho de joalheria. (PRODUCT.md: "se usar dourado, que seja um toque comedido".)
- **Don't** aplicar `border: 1px` + `box-shadow` com blur ≥16px no mesmo elemento. Ghost-card proibido.
- **Don't** usar `border-radius` ≥24px em cartões. "Insanamente arredondado" nenhum cliente quer.
- **Don't** apertar display letter-spacing além de -0.025em. Letras se tocam = apertado, não desenhado.
- **Don't** repetir kicker uppercase tracked acima de cada heading como gramática default. Eyebrow reflexo é scaffold AI.
- **Don't** usar `background-clip: text` com gradiente. Texto em cor sólida sempre; ênfase via peso ou tamanho.
- **Don't** usar `border-left`/`border-right` maior que 1px como accent lateral. Reescrever com borda completa, bg tintado ou nada.
- **Don't** usar motion como decoração. Cada revelação deve servir ao que revela; nada de fade-on-scroll idêntico em toda seção.
- **Don't** usar tipografia experimental, grids assimétricos forçados ou "moderninho" gratuito. (PRODUCT.md.)
