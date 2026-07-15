import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import { projects, type Project } from "@/content/projects";

export default function Projects() {
  const [lexos, ...otherProjects] = projects;

  return (
    <section id="projetos" className="border-t border-edge bg-bg px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="03"
          tag="Projetos"
          title="Produtos, sites e interfaces que já saíram do papel."
          subtitle="Uma seleção de sistemas e experiências reais, com segmentos diferentes e o mesmo cuidado: clareza, presença e conversão."
        />

        {lexos && (
          <Reveal className="mb-5">
            <LexosCard project={lexos} />
          </Reveal>
        )}

        <div className="grid gap-5 lg:grid-cols-12">
          {otherProjects.map((project, i) => (
            <Reveal
              key={project.url}
              delay={(i % 3) * 60}
              className={i === 0 ? "lg:col-span-6" : i === 1 ? "lg:col-span-6" : "lg:col-span-4"}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LexosCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden border border-accent/35 bg-[#071019] text-white shadow-[0_28px_80px_rgba(22,163,74,0.14)] transition-all hover:-translate-y-1">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative min-h-[360px] overflow-hidden border-b border-white/10 bg-[#0b1118] p-6 sm:p-8 lg:border-b-0 lg:border-r"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.26),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.18),transparent_32%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-green-300">
                  Produto principal
                </p>
                <h3 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  LEXOS
                </h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.26em] text-green-400">
                  TechLab
                </p>
              </div>
              <span className="border border-green-400/35 bg-green-400/10 px-3 py-1.5 font-mono text-xs uppercase text-green-300">
                Legal SaaS
              </span>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Processos", "gestão jurídica"],
                ["IA", "assistente contextual"],
                ["Billing", "trial e Stripe"],
              ].map(([title, desc]) => (
                <div key={title} className="border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </a>

        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-green-400/25 bg-green-400/10 px-2 py-1 font-mono text-[10px] uppercase text-green-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-3xl font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {project.description}
            </p>
          </div>

          <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-5 py-3 text-center text-sm font-semibold text-[#052e16] transition-transform hover:-translate-y-0.5"
            >
              Abrir LEXOS
            </a>
            <a
              href="#contato"
              className="border border-white/15 bg-white/[0.04] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-green-400/60"
            >
              Quero algo assim
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-edge bg-surface transition-all hover:-translate-y-1 hover:border-accent">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden border-b border-edge bg-bg"
      >
        <Parallax speed={0.04} className="absolute inset-0 scale-110">
          <Image
            src={project.image}
            alt={`Captura do projeto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </Parallax>
        <span className="absolute left-3 top-3 border border-edge-2 bg-surface/88 px-2 py-1 font-mono text-[10px] uppercase text-muted backdrop-blur">
          {project.category}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="font-mono text-xs text-accent">↗</span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-edge bg-bg px-2 py-1 font-mono text-[10px] uppercase text-faint"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-4 border-t border-edge pt-4 font-mono text-xs">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent transition-transform hover:translate-x-0.5"
          >
            abrir projeto
          </a>
        </div>
      </div>
    </article>
  );
}
