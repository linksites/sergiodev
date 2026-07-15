# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Next.js 16 — leia antes de escrever código

Esta versão tem breaking changes que divergem dos dados de treinamento. Leia o guia relevante em `node_modules/next/dist/docs/` antes de qualquer alteração e siga os avisos de deprecação.

## Comandos

```bash
npm run dev      # http://localhost:3000
npm run build    # gera /out (export estático)
npm run lint
```

Antes do primeiro `dev`, copie `.env.example` para `.env.local` e preencha as variáveis do Supabase.

## Arquitetura

**Export estático** — `next.config.ts` define `output: 'export'`. O build gera `/out` para o GitHub Pages. Isso elimina qualquer funcionalidade server-side: sem Server Components com fetch dinâmico, sem API Routes, sem `next/image` com otimização (está desativado com `unoptimized: true`).

**Rotas**:
- `/` — portfólio one-page (Hero → About → Stack → Projects → Services → Contact)
- `/vagas` — agregador de vagas tech (Remotive + RemoteOK, cache localStorage 1h)

**Componentes de seção** (`src/components/`) são Server Components simples. Os três componentes que usam browser APIs são Client Components (`"use client"`):
- `SmoothScroll.tsx` — inicializa Lenis + GSAP ScrollTrigger no root layout; desativa em `prefers-reduced-motion`
- `Reveal.tsx` — IntersectionObserver para entrada com `opacity`/`transform`/`filter`; adiciona `reveal-in` ao elemento quando visível
- `Parallax.tsx` — deslocamento vertical via GSAP ScrollTrigger scrub; desativa em `prefers-reduced-motion`

**Conteúdo dos projetos** — lista estática tipada em `src/content/projects.ts` (`Project[]`). Para adicionar um projeto: edite esse arquivo e adicione a imagem em `public/images/projects/`.

**Supabase** (`src/lib/supabase.ts`) — retorna `null` quando as env vars estão ausentes (ex.: build sem secrets no CI). Todo código que usa o cliente precisa checar `if (!supabase) return`. A tabela `contacts` recebe submissões do formulário de contato.

## Design system

Tokens definidos no bloco `@theme` em `src/app/globals.css` (Tailwind v4):

| Token | Uso |
|---|---|
| `bg` | Fundo principal `#0a0e14` |
| `surface` | Cards e painéis `#11161f` |
| `surface-2` | Camada elevada `#1a2130` |
| `edge` / `edge-2` | Bordas `#1f2a3a` / `#2b3a52` |
| `accent` | Ciano primário `#22d3ee` |
| `accent-2` | Índigo `#818cf8` |
| `accent-3` | Verde `#34d399` |
| `ink` | Texto principal `#e8eef6` |
| `muted` | Texto secundário `#a0adc0` |
| `faint` | Texto terciário `#8793a8` |

Fontes: `font-sans` (Geist Sans) e `font-mono` (Geist Mono), carregadas via `next/font/google` no layout raiz.

## Animações

- **Scroll reveal**: envolva elementos em `<Reveal delay={ms}>`. A classe CSS `reveal` parte de `opacity:0 / translateY(28px) / blur(6px)` e `reveal-in` remove tudo. Em `prefers-reduced-motion`, o CSS já aplica `opacity:1` e o observer não precisa agir.
- **Parallax**: `<Parallax speed={0.04}>` — `speed` é a fração da altura deslocada; 0.04–0.12 é o range usado.
- **Aurora no hero**: classes CSS puras `aurora-a` / `aurora-b` (keyframes em globals.css), sem JS.
- **GSAP**: registre plugins dentro do componente (`gsap.registerPlugin(ScrollTrigger)`) e limpe com `ctx.revert()` ou `gsap.ticker.remove()` no cleanup do `useEffect`.

## Deploy

Push na branch `master` → GitHub Actions faz build → publica `/out` no GitHub Pages em `sergiorodrigues.dev.br`. As variáveis de ambiente estão configuradas como GitHub Secrets.
