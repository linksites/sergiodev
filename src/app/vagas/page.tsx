import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JobsBoard from "@/components/JobsBoard";

export const metadata: Metadata = {
  title: "Vagas Tech | Sérgio Rodrigues",
  description:
    "Agregador de vagas remotas de tecnologia em tempo real, com filtros por stack, nível e fonte. Demo full stack construída por Sérgio Rodrigues.",
};

export default function VagasPage() {
  return (
    <>
      <Nav />
      <main className="px-6 pb-24 pt-28">
        <div className="mx-auto max-w-4xl">
          <header className="mb-10">
            <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              ao vivo
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Vagas Tech
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              Vagas remotas de tecnologia agregadas em tempo real de múltiplas
              fontes públicas, com filtros por stack, nível e origem. Uma demo
              interativa — busca, normalização de dados e cache no próprio navegador.
            </p>
          </header>

          <JobsBoard />
        </div>
      </main>
      <Footer />
    </>
  );
}
