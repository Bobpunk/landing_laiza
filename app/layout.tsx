import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Laiza Advocacia",
  description:
    "Assessoria jurídica com excelência e dedicação. Atendimento personalizado para proteger seus direitos.",
  metadataBase: new URL("https://laizaadv.com.br"),
  openGraph: {
    title: "Laiza Advocacia",
    description:
      "Assessoria jurídica com excelência e dedicação. Atendimento personalizado para proteger seus direitos.",
    url: "https://laizaadv.com.br",
    siteName: "Laiza Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Laiza Advocacia - Assessoria Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laiza Advocacia",
    description:
      "Assessoria jurídica com excelência e dedicação. Atendimento personalizado para proteger seus direitos.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logos/icon.png",
    shortcut: "/logos/icon.png",
    apple: "/logos/icon.png",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-dvh flex flex-col font-sans antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}