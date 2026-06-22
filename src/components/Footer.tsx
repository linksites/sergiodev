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
    <footer className="border-t border-edge bg-surface/30 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-sr.webp"
                alt="Sérgio Rodrigues"
                width={40}
                height={40}
                className="rounded-full border border-edge-2"
              />
              <span className="font-mono text-sm text-accent">
                sergiorodrigues<span className="text-faint">.dev.br</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-faint">
              Desenvolvedor full stack JavaScript. Sistemas, SaaS e automações com
              IA — da ideia à produção.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-faint">
              Navegação
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-faint">
              Contato
            </p>
            <ul className="space-y-2 text-sm text-muted">
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

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-edge pt-6">
          <p className="text-xs text-faint">
            © {year} Sérgio Rodrigues. Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs text-faint">
            TECHLAB · CNPJ 43.985.397/0001-20
          </p>
        </div>
      </div>
    </footer>
  );
}
