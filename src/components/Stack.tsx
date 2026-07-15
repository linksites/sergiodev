import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const groups = [
  {
    label: "Frontend",
    note: "Interfaces rápidas, acessíveis e fáceis de manter.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UX/UI"],
  },
  {
    label: "Backend",
    note: "APIs, dados e integrações para sustentar produto real.",
    items: ["Node.js", "APIs REST", "PostgreSQL", "Supabase"],
  },
  {
    label: "IA & Automação",
    note: "Fluxos que removem trabalho manual e conectam ferramentas.",
    items: ["Python", "OpenAI", "n8n", "Integrações"],
  },
  {
    label: "Mobile & Infra",
    note: "Entrega, versionamento e presença em múltiplas plataformas.",
    items: ["React Native", "Git", "GitHub Actions", "Vercel"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="border-t border-edge bg-surface/45 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="02"
          tag="Stack"
          title="Stack enxuta para sair do conceito e chegar em produção."
          subtitle="Tecnologia escolhida pelo trabalho que resolve, não pelo brilho do momento."
        />

        <div className="grid gap-px overflow-hidden border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 60}
              className="bg-surface p-6 transition-colors hover:bg-bg"
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {group.label}
              </p>
              <p className="mb-6 min-h-12 text-sm leading-relaxed text-muted">
                {group.note}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center justify-between gap-3 border-t border-edge pt-3 text-sm text-muted">
                    {item}
                    <span className="h-px w-5 bg-edge-2" />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
