import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const groups = [
  {
    label: "Produto",
    note: "Fluxos, telas e decisões pensadas para adoção rápida e operação diária.",
    items: ["UX/UI", "Design System", "SaaS", "Mobile-first"],
  },
  {
    label: "Aplicação",
    note: "Frontend moderno, rápido e fácil de evoluir sem perder acabamento.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Dados & Billing",
    note: "Base para produto comercial: autenticação, banco, planos e cobrança.",
    items: ["Supabase", "Postgres", "Stripe", "GitHub Actions"],
  },
  {
    label: "IA & Integrações",
    note: "Agentes, automações e conexões que tiram trabalho repetitivo da rotina.",
    items: ["Anthropic/OpenAI", "n8n", "WhatsApp", "APIs"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="border-t border-edge bg-surface/45 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="02"
          tag="Stack"
          title="Arquitetura enxuta para colocar produto real em produção."
          subtitle="Escolho tecnologia pelo impacto na entrega: velocidade, segurança, manutenção e capacidade de escalar."
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
                  <li
                    key={item}
                    className="flex items-center justify-between gap-3 border-t border-edge pt-3 text-sm text-muted"
                  >
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
