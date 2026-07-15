import Image from "next/image";
import Parallax from "./Parallax";

const metrics = [
  ["LEXOS", "SaaS juridico em producao"],
  ["IA", "agentes, ferramentas e automacao"],
  ["Full", "produto, codigo e deploy"],
];

export default function Hero() {
  return (
    <section
      id="top"
      className="paper-noise relative min-h-screen overflow-hidden px-6 pb-16 pt-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid min-h-[calc(100vh-9rem)] gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="dot-grid animate-fade-up flex flex-col justify-between border border-edge bg-surface/86 p-6 shadow-[0_24px_70px_color-mix(in_srgb,var(--color-ink)_10%,transparent)] backdrop-blur sm:p-8 lg:p-10">
            <div>
              <div className="mb-10 flex flex-wrap items-center gap-3">
                <span className="border border-accent/35 bg-accent/10 px-3 py-1.5 font-mono text-xs uppercase text-accent">
                  Founder da TechLab
                </span>
                <span className="border border-edge bg-bg/80 px-3 py-1.5 font-mono text-xs uppercase text-muted">
                  Belem, PA · remoto
                </span>
              </div>

              <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-faint">
                Full Stack AI Builder
              </p>

              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                Eu construo sistemas SaaS com IA que viram operação real.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                Do zero ao produto em produção: arquitetura, UX, automações,
                integrações e interfaces que ajudam empresas a vender, atender e
                operar melhor.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#lexos"
                  className="bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_color-mix(in_srgb,var(--color-accent)_28%,transparent)] transition-transform hover:-translate-y-0.5"
                >
                  Ver LEXOS
                </a>
                <a
                  href="https://wa.me/5591982460001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-edge-2 bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Falar sobre um projeto
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-3 border-t border-edge pt-5 sm:grid-cols-3">
              {metrics.map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-semibold text-ink">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-faint">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <Parallax speed={0.06} className="min-h-[420px]">
              <div className="relative h-full min-h-[420px] overflow-hidden border border-edge bg-surface">
                <Image
                  src="/images/sergio-rodrigues.webp"
                  alt="Sergio Rodrigues"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 border-t border-edge bg-surface/92 p-5 backdrop-blur">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    Sergio Rodrigues
                  </p>
                  <p className="mt-2 text-xl font-semibold">
                    CEO TechLab &amp; SRADV · produto, direito e tecnologia
                  </p>
                </div>
              </div>
            </Parallax>

            <ProductPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductPanel() {
  return (
    <div className="animate-fade-up [animation-delay:120ms]">
      <div className="overflow-hidden border border-[#1f2a3a] bg-[#0b1118]/95 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between border-b border-[#1f2a3a] bg-[#111927] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-xs text-[#8793a8]">lexos.product</span>
        </div>

        <div className="p-5 text-[#e8eef6]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22c55e]">
                Case principal
              </p>
              <h2 className="mt-2 text-2xl font-semibold">LEXOS TechLab</h2>
            </div>
            <span className="border border-[#22c55e]/30 bg-[#22c55e]/10 px-3 py-1 font-mono text-xs text-[#86efac]">
              SaaS
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Legal OS", "processos, clientes e financeiro"],
              ["IA juridica", "agente contextual com ferramentas"],
              ["Billing", "trial, Stripe e planos"],
            ].map(([title, desc]) => (
              <div key={title} className="border border-[#1f2a3a] bg-[#0f1722] p-3">
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-2 text-xs leading-relaxed text-[#9aa8ba]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 border border-[#1f2a3a] bg-[#0f1722] p-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#38bdf8]">
              Como eu penso produto
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#cbd5e1]">
              Menos tela solta, mais fluxo completo: aquisicao, cadastro,
              operacao, IA, pagamento e melhoria continua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
