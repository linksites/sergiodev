import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const strengths = [
  "UX/UI para SaaS",
  "Next.js / React",
  "TypeScript",
  "Supabase / Postgres",
  "Stripe Billing",
  "IA com ferramentas",
  "Automacoes e APIs",
  "Produto juridico",
];

export default function About() {
  return (
    <section id="sobre" className="border-t border-edge px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="01"
          tag="Sobre"
          title="Um construtor de produto com cabeça de negócio e mão no código."
          subtitle="Eu uno visão jurídica, design de experiência e engenharia para criar sistemas que resolvem operação real."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative min-h-[520px] overflow-hidden border border-edge bg-surface">
            <Image
              src="/images/sergio-rodrigues.webp"
              alt="Sergio Rodrigues"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
            <div className="absolute left-4 top-4 border border-accent/35 bg-surface/90 px-3 py-2 font-mono text-xs uppercase text-accent backdrop-blur">
              TechLab / SRADV / LEXOS
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal className="border border-edge bg-surface p-6 sm:p-8">
              <p className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                Meu melhor trabalho acontece onde uma ideia precisa deixar de ser
                conversa e virar produto: telas claras, dados confiáveis,
                integrações e uma experiência que o usuário entende rápido.
              </p>
              <div className="mt-7 grid gap-5 text-base leading-relaxed text-muted sm:grid-cols-2">
                <p>
                  Sou Sergio Rodrigues, fundador da TechLab e advogado na SRADV.
                  Construo plataformas, SaaS, automações e interfaces com a
                  mesma obsessão: reduzir trabalho manual e aumentar resultado.
                </p>
                <p>
                  Minha principal vitrine hoje é o LEXOS, um legal OS com IA,
                  financeiro, clientes, processos, billing e fluxos inteligentes
                  para escritórios de advocacia.
                </p>
              </div>
            </Reveal>

            <Reveal className="grid gap-3 sm:grid-cols-2">
              {strengths.map((skill) => (
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
