// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Work_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
});

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C5A572",
};

export const metadata: Metadata = {
  title: {
    default: "Laiza Advocacia | Assessoria Jurídica Humanizada",
    template: "%s | Laiza Advocacia", // Permite que subpáginas fiquem "Direito Criminal | Laiza Advocacia"
  },
  description:
    "Assessoria jurídica com excelência e dedicação em Santa Rita - PB. Atendimento personalizado e estratégico para proteger seus direitos criminais, familiares e trabalhistas.",
  keywords: [
    "Advogada Santa Rita",
    "Direito Criminal",
    "Direito da Família",
    "Advogado Trabalhista",
    "Laiza Advocacia",
    "Paraíba",
    "Direito Bancário",
    "Assessoria Jurídica Humanizada",
    "Advocacia Humanizada",
    "Defesa Técnica",
    "Proteção Patrimonial",
    "Divórcio",
    "Guarda de Filhos",
    "Pensão Alimentícia",
    "Inventário",
    "Revisão de Contratos",
    "Renegociação de Dívidas",
  ],
  authors: [
    {
      name: "Laiza Advocacia",
      url: "https://laizaadv.com.br",
    },
  ],
  creator: "Laiza Advocacia",
  publisher: "Laiza Advocacia",
  category: "Legal Services",
  metadataBase: new URL("https://laizaadv.com.br"),
  alternates: {
    canonical: "/",
  },
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Laiza Advocacia | Assessoria Jurídica Humanizada",
    description:
      "Assessoria jurídica com excelência e dedicação em Santa Rita - PB. Atendimento personalizado para proteger seus direitos.",
    url: "https://laizaadv.com.br",
    siteName: "Laiza Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Laiza Advocacia - Assessoria Jurídica em Santa Rita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laiza Advocacia | Assessoria Jurídica Humanizada",
    description:
      "Assessoria jurídica com excelência e dedicação em Santa Rita - PB.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "COLOQUE_O_CODIGO_DO_GOOGLE_SEARCH_CONSOLE_AQUI",
  // },
  icons: {
    icon: "/logos/icon.png",
    shortcut: "/logos/icon.png",
    apple: "/logos/icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Laiza Advocacia",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sourceSerif.variable} ${workSans.variable} scroll-smooth`}
    >
      <body className="min-h-dvh flex flex-col font-sans antialiased text-ink bg-bg">
        {/* Link de Acessibilidade com estilos Impecáveis de Focus (Navegação por Teclado) */}
        <a
          href="#main-content"
          className="fixed -translate-y-full left-4 top-4 z-[100] rounded-sm bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl transition-transform focus:translate-y-0 focus:outline-2 focus:outline-offset-4 focus:outline-accent"
        >
          Pular para o conteúdo
        </a>

        {/* Envolva as páginas em uma tag main com ID para casar com o botão acima */}
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>

        <WhatsAppButton />
      </body>
    </html>
  );
}
