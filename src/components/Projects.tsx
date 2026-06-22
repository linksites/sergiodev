import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "@/content/projects";

export default function Projects() {
  return (
    <section id="projetos" className="border-t border-edge bg-surface/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="03"
          tag="Projetos"
          title="Sites e sistemas que desenvolvi"
          subtitle="Projetos reais entregues para clientes de diversos setores — do SaaS à landing page."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-edge bg-surface transition-all hover:-translate-y-1 hover:border-accent/60"
    >
      <div className="relative h-44 overflow-hidden border-b border-edge bg-bg">
        <Image
          src={project.image}
          alt={`Captura do site ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded border border-edge-2 bg-bg/80 px-2 py-1 font-mono text-[10px] text-muted backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-edge bg-bg px-2 py-1 font-mono text-[10px] text-faint"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent">
          Ver site
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
}
