import Image from "next/image";
import SectionHeading from "./SectionHeading";

const skills = [
  "UX/UI Design",
  "React / Next.js",
  "TypeScript",
  "Node.js / APIs REST",
  "Automação com IA",
  "Python / Integrações",
  "PostgreSQL / Supabase",
  "Apps Mobile",
];

export default function About() {
  return (
    <section id="sobre" className="border-t border-edge px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-edge-2">
            <Image
              src="/images/sergio-rodrigues.webp"
              alt="Sérgio Rodrigues"
              width={480}
              height={600}
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl border border-edge bg-surface px-4 py-3 font-mono text-xs">
            <span className="text-accent">{"</>"}</span>{" "}
            <span className="text-muted">full stack dev</span>
          </div>
        </div>

        <div>
          <SectionHeading number="01" tag="Sobre" title="Dev que pensa como fundador" />
          <p className="mb-5 text-lg leading-relaxed text-muted">
            Sou Sérgio Rodrigues, desenvolvedor full stack sênior. Há mais de uma
            década construindo software — de sites e sistemas a plataformas SaaS e
            automações com inteligência artificial.
          </p>
          <p className="mb-5 text-lg leading-relaxed text-muted">
            Dirijo a <span className="font-medium text-ink">TECHLAB</span>, empresa
            de tecnologia focada em desenvolvimento web, sistemas SaaS, automações
            com IA e apps mobile. Construo pensando no resultado de negócio — não só
            na tela.
          </p>

          <blockquote className="my-6 rounded-r-lg border-l-2 border-accent bg-surface px-5 py-4 text-base italic text-muted">
            &ldquo;Código limpo é meio, não fim. O que importa é o produto resolvendo
            o problema certo.&rdquo;
          </blockquote>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-2.5 text-sm text-muted">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
