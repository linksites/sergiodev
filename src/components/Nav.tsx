"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#stack", label: "Stack" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#contato", label: "Contato" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between border border-edge bg-surface/90 px-4 shadow-[0_14px_40px_color-mix(in_srgb,var(--color-ink)_10%,transparent)] backdrop-blur-xl sm:px-5">
        <Link
          href="/"
          className="flex items-center gap-3 font-mono text-sm tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center bg-accent text-[11px] font-semibold text-white">
            SR
          </span>
          <span>
            sergio<span className="text-accent">.dev</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-md border border-edge bg-bg/55 p-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/vagas"
              className="block px-3 py-2 text-xs font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-surface"
            >
              Vagas Tech
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://wa.me/5591982460001"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Falar comigo
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-edge bg-bg text-ink md:hidden"
          >
            <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl border border-edge bg-surface/95 px-3 py-3 shadow-xl backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-bg hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/vagas"
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-accent hover:bg-bg"
              >
                Vagas Tech
              </Link>
            </li>
            <li className="mt-2">
              <a
                href="https://wa.me/5591982460001"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block bg-accent px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Falar comigo
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
