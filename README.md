# Sérgio Rodrigues — Portfólio

Portfólio profissional de Sérgio Rodrigues, desenvolvedor Full Stack JavaScript.

🌐 **[sergiorodrigues.dev.br](https://sergiorodrigues.dev.br)**

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **[Supabase](https://supabase.com)** — Postgres + SDK (formulário de contato e conteúdo dinâmico)
- Deploy estático no **GitHub Pages** via GitHub Actions

## Arquitetura

Site estático (`next build` com `output: 'export'`) hospedado no GitHub Pages.
Dados dinâmicos (contato, depoimentos) consumidos diretamente do **Supabase**
via SDK no cliente, protegidos por **Row Level Security (RLS)**.

```
Browser (Next.js estático)  ──►  Supabase (Postgres + RLS)
```

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera /out (export estático)
npm run lint
```

### Variáveis de ambiente

Crie `.env.local` (ver `.env.example`):

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

No deploy, as mesmas chaves são configuradas como **GitHub Secrets**.

## Deploy

Todo push na branch `master` dispara build e deploy automáticos via GitHub Actions.

## Contato

- WhatsApp: [(91) 98246-0001](https://wa.me/5591982460001)
- TECHLAB · CNPJ 43.985.397/0001-20
