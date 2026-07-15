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

const principles = [
  ["01", "Operação real", "Fluxos desenhados para uso diário, não só apresentação."],
  ["02", "Velocidade", "Primeiras versões úteis, com caminho claro de evolução."],
  ["03", "Acabamento", "Interface limpa, responsiva e coerente com o mercado."],
  ["04", "Integração", "Dados, IA, pagamento e automação no mesmo raciocínio."],
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
          <Reveal className="border border-edge bg-[#071019] p-6 text-white sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-green-300">
              TechLab / SRADV / LEXOS
            </p>
            <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight">
              Produto técnico com leitura comercial e jurídica.
            </h3>
            <div className="mt-8 grid gap-3">
              {principles.map(([step, title, desc]) => (
                <div key={step} className="grid grid-cols-[48px_1fr] gap-4 border border-white/10 bg-white/[0.04] p-4">
                  <span className="font-mono text-sm text-green-300">{step}</span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{desc}</p>
                  </div>
                </div>
              ))}
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
