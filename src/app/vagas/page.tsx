import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JobsBoard from "@/components/JobsBoard";

export const metadata: Metadata = {
  title: "Vagas Tech | Sergio Rodrigues",
  description:
    "Agregador de vagas remotas de tecnologia em tempo real, com filtros por stack, nível e fonte. Demo full stack construída por Sergio Rodrigues.",
};

export default function VagasPage() {
  return (
    <>
      <Nav />
      <main className="paper-noise px-6 pb-24 pt-32">
        <div className="mx-auto max-w-6xl">
          <header className="mb-8 grid gap-6 border border-edge bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_320px]">
            <div>
              <p className="mb-5 inline-flex border border-edge bg-bg px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                radar ao vivo
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-none tracking-tight sm:text-6xl">
                Vagas Tech para testar busca, filtros e dados reais.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                Vagas remotas agregadas de fontes públicas, normalizadas no
                navegador e organizadas por stack, nível e origem.
              </p>
            </div>
            <div className="border border-edge bg-bg p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                Demo full stack
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Interface client-side com cache local, fallback de carregamento e
                dados de APIs públicas.
              </p>
            </div>
          </header>

          <JobsBoard />
        </div>
      </main>
      <Footer />
    </>
  );
}
