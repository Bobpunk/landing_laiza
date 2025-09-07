# 🏛️ Laiza Batista Advocacia - Especialista em Direito Familiar

Site institucional moderno e responsivo para escritório de advocacia, desenvolvido com foco em design elegante, acessibilidade e experiência do usuário.

## ✨ Características

### 🎨 Design Moderno
- **Glassmorphism**: Efeitos de vidro com `backdrop-filter: blur()`
- **Gradientes Dinâmicos**: Background animado com `@keyframes gradientShift`
- **Tipografia Elegante**: Fontes Google Fonts (Inter + Playfair Display)
- **Cores Profissionais**: Paleta de cores azul/roxo para transmitir confiança
- **Animações Suaves**: Transições e efeitos hover em todos os elementos

### 📱 Totalmente Responsivo
- **Mobile First**: Otimizado para dispositivos móveis
- **Breakpoints**: 320px, 480px, 768px, 1024px, 1200px
- **Orientação Landscape**: Suporte para rotação de tela
- **Header Adaptativo**: Altura reduzida progressivamente em telas menores

### ♿ Acessibilidade
- **VLibras**: Plugin de acessibilidade em Libras integrado
- **ARIA Labels**: Atributos de acessibilidade para leitores de tela
- **Contraste**: Cores com bom contraste para legibilidade
- **Navegação**: Estrutura semântica HTML5

### 🚀 Performance
- **CSS Otimizado**: Sem comentários, código minificado
- **Imagens Locais**: Assets baixados e otimizados
- **Transições GPU**: Uso de `transform` para animações suaves
- **Carregamento Rápido**: Estrutura leve e eficiente

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica moderna
- **CSS3**: 
  - Flexbox e CSS Grid para layout
  - Custom Properties (CSS Variables)
  - Media Queries para responsividade
  - Keyframes para animações
  - Backdrop-filter para glassmorphism
- **JavaScript**: Interações básicas (atualmente vazio)

### Bibliotecas Externas
- **Google Fonts**: Inter (sans-serif) + Playfair Display (serif)
- **VLibras**: Plugin de acessibilidade em Libras
- **SVG Icons**: Ícones vetoriais para WhatsApp e LinkedIn

### Ferramentas de Desenvolvimento
- **Python HTTP Server**: Para desenvolvimento local
- **VS Code Live Server**: Alternativa para desenvolvimento
- **Git**: Controle de versão

## 📁 Estrutura do Projeto

```
laiza_batista/
├── index.html          # Página principal
├── styles.css          # Estilos CSS (sem comentários)
├── script.js           # JavaScript (vazio)
├── images/             # Assets locais
│   ├── topo.png        # Imagem do header
│   ├── logo.png        # Logo da empresa
│   └── carrossel*.jpg  # Imagens do carrossel (não utilizadas)
├── .vscode/            # Configurações do VS Code
│   └── settings.json   # Configuração do Live Server
└── README.md           # Este arquivo
```

## 🎯 Seções do Site

### 1. **Header**
- Imagem de fundo responsiva
- Altura adaptativa para diferentes dispositivos
- Sem texto sobreposto (movido para seção de apresentação)

### 2. **Apresentação**
- Título principal com animação `fadeInUp`
- Descrição da advogada
- Chamada para ação
- Efeito glassmorphism

### 3. **Áreas de Atuação**
- Grid responsivo de serviços
- Cards com hover effects
- Lista de especialidades por área
- Ícones e cores diferenciadas

### 4. **Destaques**
- Estatísticas da empresa
- Diferenciais principais
- Grid adaptativo para mobile

### 5. **Sobre Nós**
- Informações institucionais
- Lista completa de serviços
- Design limpo e profissional

### 6. **Depoimentos**
- Cards de clientes
- Background escuro para contraste
- Efeito glassmorphism

### 7. **Footer**
- Endereço da empresa
- Informações de contato
- Link para LinkedIn do desenvolvedor
- Design minimalista

## 🚀 Como Executar

### Opção 1: Python HTTP Server
```bash
cd /home/bob/Documentos/laiza_batista
python3 -m http.server 8000
```
Acesse: `http://localhost:8000`

### Opção 2: VS Code Live Server
1. Instale a extensão "Live Server"
2. Clique direito em `index.html`
3. Selecione "Open with Live Server"

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile Grande**: 481px - 768px
- **Mobile Pequeno**: 320px - 480px
- **Muito Pequeno**: < 320px

### Adaptações Mobile
- Header com altura reduzida (15vh - 25vh)
- Grids em coluna única
- Botões menores e reposicionados
- Texto redimensionado
- Espaçamentos otimizados

## 🎨 Paleta de Cores

```css
--primary: #667eea        /* Azul principal */
--secondary: #764ba2      /* Roxo secundário */
--accent: #4facfe         /* Azul claro */
--dark: #2c3e50          /* Azul escuro */
--light: #f8f9fa         /* Cinza claro */
--white: #ffffff         /* Branco */
--gold: #f7971e          /* Dourado */
```

## 🔧 Personalização

### Cores
Edite as variáveis CSS em `:root` no arquivo `styles.css`

### Conteúdo
Modifique o HTML em `index.html` para alterar textos e informações

### Imagens
Substitua as imagens na pasta `images/` mantendo os mesmos nomes

## 📞 Contato

**Desenvolvido por:** José Cecílio  
**LinkedIn:** [jcfonsecajunior](https://www.linkedin.com/in/jcfonsecajunior/)  
**WhatsApp:** Disponível no site

## 📄 Licença

Este projeto foi desenvolvido especificamente para Laiza Batista Advocacia. Todos os direitos reservados.

---

*Site desenvolvido com foco em modernidade, acessibilidade e experiência do usuário.*
