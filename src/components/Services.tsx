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
    title: "SaaS e sistemas web",
    desc: "MVPs, painéis, portais e produtos comerciais com autenticação, banco, permissões, billing e deploy.",
    tags: ["Next.js", "Supabase", "Stripe"],
    icon: (
      <svg {...iconProps} aria-hidden>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <path d="M7 7h.01M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "IA aplicada ao negócio",
    desc: "Assistentes, agentes com ferramentas, triagem, geração de documentos e automações conectadas ao fluxo real.",
    tags: ["AI SDK", "Anthropic", "n8n"],
    icon: (
      <svg {...iconProps} aria-hidden>
        <rect x="5" y="8" width="14" height="11" rx="2" />
        <path d="M12 8V5M9 3h6M9 13h.01M15 13h.01M9 19v2M15 19v2" />
      </svg>
    ),
  },
  {
    title: "Landing pages e funis",
    desc: "Páginas de venda, sites institucionais e experiências rápidas, responsivas e orientadas à conversão.",
    tags: ["UX", "SEO", "Performance"],
    icon: (
      <svg {...iconProps} aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    title: "Integrações e automações",
    desc: "Conexão entre sistemas, WhatsApp, planilhas, webhooks, pagamentos e rotinas internas.",
    tags: ["APIs", "Webhooks", "WhatsApp"],
    icon: (
      <svg {...iconProps} aria-hidden>
        <path d="M7 7h10v10H7z" />
        <path d="M3 12h4M17 12h4M12 3v4M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Consultoria de produto",
    desc: "Diagnóstico técnico e estratégico para transformar uma ideia solta em roadmap, telas e arquitetura viável.",
    tags: ["Roadmap", "UX", "Arquitetura"],
    icon: (
      <svg {...iconProps} aria-hidden>
        <path d="M4 19V5" />
        <path d="M4 7h12l-2 4 2 4H4" />
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
          title="Entrega por módulos, com foco em valor de produto."
          subtitle="O objetivo é sair com algo utilizável, vendável e fácil de evoluir depois da primeira versão."
        />

        <div className="grid gap-4 lg:grid-cols-6">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 60}
              className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <div className="group h-full border border-edge bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent">
                <div className="mb-6 flex h-11 w-11 items-center justify-center border border-edge-2 bg-bg text-accent">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-edge bg-bg px-2 py-1 font-mono text-[10px] uppercase text-faint"
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
