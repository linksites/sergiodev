const stack = ["TypeScript", "React", "Node.js", "Next.js", "Python", "IA"];

export default function Hero() {
  return (
    <section
      id="top"
      className="dot-grid relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-accent-2/10 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            disponível para novos projetos
          </p>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Sérgio
            <br />
            Rodrigues
          </h1>

          <p className="caret mt-4 font-mono text-xl text-accent sm:text-2xl">
            Full Stack Developer
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Construo produtos digitais de ponta a ponta — do banco de dados ao
            pixel. Sistemas, SaaS e automações com IA, com a visão estratégica de
            quem também entende de negócios. Fundador da{" "}
            <span className="font-medium text-ink">TECHLAB</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              Ver projetos
            </a>
            <a
              href="https://wa.me/5591982460001"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-edge-2 px-6 py-3.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-faint">
            {stack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                {i > 0 && <span className="text-edge-2">·</span>}
                <span className="text-muted">{tech}</span>
              </span>
            ))}
          </div>
        </div>

        <CodePanel />
      </div>
    </section>
  );
}

function CodePanel() {
  return (
    <div className="animate-fade-up [animation-delay:120ms]">
      <div className="overflow-hidden rounded-xl border border-edge bg-surface/80 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2 border-b border-edge bg-surface-2/50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-faint">sergio.ts</span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          <code>
            <span className="text-accent-2">const</span>{" "}
            <span className="text-ink">sergio</span>
            <span className="text-faint">: </span>
            <span className="text-accent">Developer</span>
            <span className="text-faint"> = {"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-muted">nome</span>
            <span className="text-faint">: </span>
            <span className="text-emerald-300">&quot;Sérgio Rodrigues&quot;</span>
            <span className="text-faint">,</span>
            {"\n"}
            {"  "}
            <span className="text-muted">stack</span>
            <span className="text-faint">: [</span>
            <span className="text-emerald-300">&quot;React&quot;</span>
            <span className="text-faint">, </span>
            <span className="text-emerald-300">&quot;Node&quot;</span>
            <span className="text-faint">, </span>
            <span className="text-emerald-300">&quot;TypeScript&quot;</span>
            <span className="text-faint">],</span>
            {"\n"}
            {"  "}
            <span className="text-muted">foco</span>
            <span className="text-faint">: [</span>
            <span className="text-emerald-300">&quot;SaaS&quot;</span>
            <span className="text-faint">, </span>
            <span className="text-emerald-300">&quot;Automação IA&quot;</span>
            <span className="text-faint">, </span>
            <span className="text-emerald-300">&quot;APIs&quot;</span>
            <span className="text-faint">],</span>
            {"\n"}
            {"  "}
            <span className="text-muted">baseadoEm</span>
            <span className="text-faint">: </span>
            <span className="text-emerald-300">&quot;Belém, PA&quot;</span>
            <span className="text-faint">,</span>
            {"\n"}
            {"  "}
            <span className="text-muted">empresa</span>
            <span className="text-faint">: </span>
            <span className="text-emerald-300">&quot;TECHLAB&quot;</span>
            <span className="text-faint">,</span>
            {"\n"}
            {"  "}
            <span className="text-muted">disponivel</span>
            <span className="text-faint">: </span>
            <span className="text-amber-300">true</span>
            <span className="text-faint">,</span>
            {"\n"}
            <span className="text-faint">{"}"};</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
