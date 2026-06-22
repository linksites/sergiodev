import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Service = {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    title: "Sites & Landing Pages",
    desc: "Sites institucionais, landing pages de alta conversão e portfólios com design único e performance otimizada.",
    tags: ["React", "Next.js", "SEO"],
    icon: (
      <svg {...iconProps} aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    title: "Sistemas & SaaS",
    desc: "Sistemas web customizados, plataformas SaaS, painéis administrativos e ferramentas internas para empresas.",
    tags: ["Node.js", "API REST", "PostgreSQL"],
    icon: (
      <svg {...iconProps} aria-hidden>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <path d="M7 7h.01M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Automação com IA",
    desc: "Automação de processos com IA, chatbots, integrações com OpenAI e fluxos que economizam horas de trabalho.",
    tags: ["Python", "OpenAI", "n8n"],
    icon: (
      <svg {...iconProps} aria-hidden>
        <rect x="5" y="8" width="14" height="11" rx="2" />
        <path d="M12 8V5M9 3h6M9 13h.01M15 13h.01M9 19v2M15 19v2" />
      </svg>
    ),
  },
  {
    title: "Apps Mobile",
    desc: "Aplicativos mobile para iOS e Android com React Native, da ideia ao lançamento nas lojas.",
    tags: ["React Native", "iOS", "Android"],
    icon: (
      <svg {...iconProps} aria-hidden>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "Tráfego Pago",
    desc: "Gestão de campanhas Meta e Google Ads com estratégia, criativos e otimização contínua para resultados reais.",
    tags: ["Meta Ads", "Google Ads", "Pixel"],
    icon: (
      <svg {...iconProps} aria-hidden>
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M14 8h6v6" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="border-t border-edge px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="04"
          tag="Serviços"
          title="O que eu construo"
          subtitle="Soluções de tecnologia ponta a ponta, com emissão de nota fiscal."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <div className="group h-full rounded-xl border border-edge bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-edge-2 bg-surface-2 text-accent">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-edge bg-bg px-2 py-1 font-mono text-[10px] text-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
