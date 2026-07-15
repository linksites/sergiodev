import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sergiorodrigues.dev.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sérgio Rodrigues — Desenvolvedor Full Stack JavaScript",
  description:
    "Desenvolvedor Full Stack JavaScript e CEO da Techlab e da SRADV. Construo sistemas, sites e automações com React, Node, TypeScript e IA.",
  keywords: [
    "desenvolvedor full stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Belém",
    "TECHLAB",
  ],
  authors: [{ name: "Sérgio Rodrigues" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Sérgio Rodrigues — Desenvolvedor Full Stack JavaScript",
    description:
      "Construo sistemas, sites e automações com React, Node, TypeScript e IA. CEO da Techlab e da SRADV e desenvolvedor full stack.",
    siteName: "Sérgio Rodrigues",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sérgio Rodrigues — Desenvolvedor Full Stack JavaScript",
    description:
      "Construo sistemas, sites e automações com React, Node, TypeScript e IA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Aplica o tema antes da pintura (evita flash). Padrão claro para
            reforçar o redesign; dark fica disponível no seletor. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'light';var r=document.documentElement;r.classList.toggle('dark',t==='dark');r.classList.toggle('light',t!=='dark');}catch(e){document.documentElement.classList.add('light');}})();`,
          }}
        />
        <noscript>
          {/* Sem JS, garante que o conteúdo com scroll-reveal apareça */}
          <style>{`.reveal{opacity:1 !important;transform:none !important;filter:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
