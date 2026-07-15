export default function LexosSpotlight() {
  return (
    <section id="lexos" className="border-t border-edge px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <article className="overflow-hidden border border-accent/35 bg-[#071019] text-white shadow-[0_28px_80px_rgba(22,163,74,0.14)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[320px] border-b border-white/10 bg-[#0b1118] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.26),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.18),transparent_32%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-green-300">
                    Case em destaque
                  </p>
                  <h2 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">
                    LEXOS
                  </h2>
                  <p className="mt-2 font-mono text-sm uppercase tracking-[0.32em] text-green-400">
                    TechLab
                  </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Legal OS", "processos e clientes"],
                    ["IA", "assistente contextual"],
                    ["SaaS", "trial, planos e Stripe"],
                  ].map(([title, desc]) => (
                    <div key={title} className="border border-white/10 bg-white/[0.04] p-4">
                      <p className="font-semibold">{title}</p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <span className="inline-flex border border-green-400/30 bg-green-400/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-green-300">
                  Produto real em evolução
                </span>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Sistema jurídico com IA, financeiro, processos e operação comercial.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                  O LEXOS é a principal prova de produto da TechLab: uma plataforma
                  SaaS para escritórios com cadastro inteligente, IA jurídica,
                  clientes, honorários, billing, convites e refinamento contínuo de UX.
                </p>
              </div>

              <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                <a
                  href="https://techlab.sergiorodrigues.dev.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 px-5 py-3 text-center text-sm font-semibold text-[#052e16] transition-transform hover:-translate-y-0.5"
                >
                  Abrir LEXOS
                </a>
                <a
                  href="#projetos"
                  className="border border-white/15 bg-white/[0.04] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-green-400/60"
                >
                  Ver outros projetos
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
