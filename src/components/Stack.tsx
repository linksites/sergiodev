import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const groups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UX/UI"],
  },
  {
    label: "Backend",
    items: ["Node.js", "APIs REST", "PostgreSQL", "Supabase"],
  },
  {
    label: "IA & Automação",
    items: ["Python", "OpenAI", "n8n", "Integrações"],
  },
  {
    label: "Mobile & Infra",
    items: ["React Native", "Git", "GitHub Actions", "Vercel"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="border-t border-edge bg-surface/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="02"
          tag="Stack"
          title="Tecnologias que eu domino"
          subtitle="As ferramentas que uso para levar um produto da ideia à produção."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 90}
              className="rounded-xl border border-edge bg-surface p-5 transition-colors hover:border-edge-2"
            >
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {group.label}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-edge-2" />
                    {item}
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
