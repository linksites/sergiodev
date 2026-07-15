import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import { projects, type Project } from "@/content/projects";

export default function Projects() {
  return (
    <section id="projetos" className="border-t border-edge bg-bg px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="03"
          tag="Projetos"
          title="Entrega visual com intenção comercial."
          subtitle="Uma seleção de sites e sistemas reais, com segmentos diferentes e o mesmo cuidado: clareza, presença e conversão."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          {projects.map((project, i) => (
            <Reveal
              key={project.url}
              delay={(i % 3) * 60}
              className={i === 0 || i === 1 ? "lg:col-span-6" : "lg:col-span-4"}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
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
            alt={`Captura do site ${project.title}`}
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
