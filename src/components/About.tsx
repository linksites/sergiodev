import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

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
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="01"
          tag="Sobre"
          title="Um perfil híbrido: produto, código e operação."
          subtitle="Eu entro onde a ideia precisa virar uma interface clara, um sistema funcional e uma entrega que sustente crescimento."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative min-h-[520px] overflow-hidden border border-edge bg-surface">
            <Image
              src="/images/sergio-rodrigues.webp"
              alt="Sérgio Rodrigues"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
            <div className="absolute left-4 top-4 border border-edge bg-surface/90 px-3 py-2 font-mono text-xs uppercase text-accent backdrop-blur">
              Techlab / SRADV
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal className="border border-edge bg-surface p-6 sm:p-8">
              <p className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                Não vendo só tela bonita. Eu conecto interface, stack e decisão
                de negócio para reduzir ruído entre ideia, execução e resultado.
              </p>
              <div className="mt-7 grid gap-5 text-base leading-relaxed text-muted sm:grid-cols-2">
                <p>
                  Sou Sérgio Rodrigues, desenvolvedor full stack pleno e CEO da
                  Techlab e da SRADV. Construo sites, sistemas, SaaS, automações
                  com IA e apps mobile com uma visão prática de produto.
                </p>
                <p>
                  Meu foco é transformar requisitos soltos em jornadas claras,
                  interfaces confiáveis e bases técnicas que continuam evoluindo
                  depois do lançamento.
                </p>
              </div>
            </Reveal>

            <Reveal className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-between border border-edge bg-surface px-4 py-3 text-sm text-muted"
                >
                  <span>{skill}</span>
                  <span className="font-mono text-xs text-accent">OK</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
