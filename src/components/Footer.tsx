import Image from "next/image";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-edge bg-ink px-6 py-14 text-bg">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-sr.webp"
                alt="Sérgio Rodrigues"
                width={40}
                height={40}
                className="border border-bg/25"
              />
              <span className="font-mono text-sm text-bg">
                sergio<span className="text-accent">.dev</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bg/70">
              Desenvolvedor full stack JavaScript. Sistemas, SaaS e automações com
              IA — da ideia à produção.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-bg/50">
              Navegação
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-bg/70 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-bg/50">
              Contato
            </p>
            <ul className="space-y-2 text-sm text-bg/70">
              <li>
                <a
                  href="https://wa.me/5591982460001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  (91) 98246-0001
                </a>
              </li>
              <li>Belém, Pará — Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-bg/20 pt-6">
          <p className="text-xs text-bg/55">
            © {year} Sérgio Rodrigues. Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs text-bg/55">
            TECHLAB · CNPJ 43.985.397/0001-20
          </p>
        </div>
      </div>
    </footer>
  );
}
