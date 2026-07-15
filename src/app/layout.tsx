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
  title: "Sergio Rodrigues — Full Stack AI Builder",
  description:
    "Founder da TechLab e desenvolvedor full stack. Construo SaaS, sistemas web, automações com IA e interfaces de produto com Next.js, Supabase, Stripe e TypeScript.",
  keywords: [
    "desenvolvedor full stack",
    "Full Stack AI Builder",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Belém",
    "TechLab",
    "LEXOS",
  ],
  authors: [{ name: "Sergio Rodrigues" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Sergio Rodrigues — Full Stack AI Builder",
    description:
      "SaaS, sistemas web, automações com IA e interfaces de produto construídas com visão técnica e comercial.",
    siteName: "Sergio Rodrigues",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Rodrigues — Full Stack AI Builder",
    description:
      "Construo SaaS, sistemas web, automações com IA e interfaces de produto.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <noscript>
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
