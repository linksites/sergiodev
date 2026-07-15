import Image from "next/image";
import Parallax from "./Parallax";

const metrics = [
  ["12+", "projetos em portfólio"],
  ["2", "empresas lideradas"],
  ["Full", "produto ao deploy"],
];

export default function Hero() {
  return (
    <section
      id="top"
      className="paper-noise relative min-h-screen overflow-hidden px-6 pb-16 pt-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid min-h-[calc(100vh-9rem)] gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="dot-grid animate-fade-up flex flex-col justify-between border border-edge bg-surface/80 p-6 shadow-[0_24px_70px_color-mix(in_srgb,var(--color-ink)_10%,transparent)] sm:p-8 lg:p-10">
            <div>
              <div className="mb-10 flex flex-wrap items-center gap-3">
                <span className="border border-edge bg-bg px-3 py-1.5 font-mono text-xs uppercase text-accent">
                  Disponível para projetos selecionados
                </span>
                <span className="border border-edge bg-bg px-3 py-1.5 font-mono text-xs uppercase text-muted">
                  Belém, PA · remoto
                </span>
              </div>

              <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-faint">
                Desenvolvedor full stack e fundador
              </p>

              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                Interfaces com estratégia. Sistemas com tração.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                Eu desenho e desenvolvo produtos digitais que parecem maduros desde
                o primeiro clique: sites, SaaS, automações com IA e apps com visão
                de negócio, execução técnica e acabamento visual.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projetos"
                  className="bg-ink px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
                >
                  Ver estudos de caso
                </a>
                <a
                  href="https://wa.me/5591982460001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-edge-2 bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Iniciar conversa
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
                  alt="Sérgio Rodrigues"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 border-t border-edge bg-surface/92 p-5 backdrop-blur">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    Sérgio Rodrigues
                  </p>
                  <p className="mt-2 text-xl font-semibold">
                    CEO Techlab &amp; SRADV · Full Stack Developer
                  </p>
                </div>
              </div>
            </Parallax>

            <CodePanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function CodePanel() {
  // Editor sempre escuro (em ambos os temas) — cores de sintaxe fixas,
  // padrão comum e legível tanto no claro quanto no escuro.
  return (
    <div className="animate-fade-up [animation-delay:120ms]">
      <div className="overflow-hidden border border-[#1f2a3a] bg-[#0d1119]/95 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2 border-b border-[#1f2a3a] bg-[#141a25] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-[#8793a8]">sergio.ts</span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-[#e8eef6]">
          <code>
            <span className="text-[#818cf8]">const</span>{" "}
            <span className="text-[#e8eef6]">sergio</span>
            <span className="text-[#8793a8]">: </span>
            <span className="text-[#22d3ee]">Developer</span>
            <span className="text-[#8793a8]"> = {"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-[#a0adc0]">nome</span>
            <span className="text-[#8793a8]">: </span>
            <span className="text-[#6ee7b7]">&quot;Sérgio Rodrigues&quot;</span>
            <span className="text-[#8793a8]">,</span>
            {"\n"}
            {"  "}
            <span className="text-[#a0adc0]">stack</span>
            <span className="text-[#8793a8]">: [</span>
            <span className="text-[#6ee7b7]">&quot;React&quot;</span>
            <span className="text-[#8793a8]">, </span>
            <span className="text-[#6ee7b7]">&quot;Node&quot;</span>
            <span className="text-[#8793a8]">, </span>
            <span className="text-[#6ee7b7]">&quot;TypeScript&quot;</span>
            <span className="text-[#8793a8]">],</span>
            {"\n"}
            {"  "}
            <span className="text-[#a0adc0]">foco</span>
            <span className="text-[#8793a8]">: [</span>
            <span className="text-[#6ee7b7]">&quot;SaaS&quot;</span>
            <span className="text-[#8793a8]">, </span>
            <span className="text-[#6ee7b7]">&quot;Automação IA&quot;</span>
            <span className="text-[#8793a8]">, </span>
            <span className="text-[#6ee7b7]">&quot;APIs&quot;</span>
            <span className="text-[#8793a8]">],</span>
            {"\n"}
            {"  "}
            <span className="text-[#a0adc0]">baseadoEm</span>
            <span className="text-[#8793a8]">: </span>
            <span className="text-[#6ee7b7]">&quot;Belém, PA&quot;</span>
            <span className="text-[#8793a8]">,</span>
            {"\n"}
            {"  "}
            <span className="text-[#a0adc0]">cargo</span>
            <span className="text-[#8793a8]">: </span>
            <span className="text-[#6ee7b7]">&quot;CEO Techlab/SRADV · Full Stack&quot;</span>
            <span className="text-[#8793a8]">,</span>
            {"\n"}
            {"  "}
            <span className="text-[#a0adc0]">disponivel</span>
            <span className="text-[#8793a8]">: </span>
            <span className="text-[#fcd34d]">true</span>
            <span className="text-[#8793a8]">,</span>
            {"\n"}
            <span className="text-[#8793a8]">{"}"};</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
