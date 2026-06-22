-- Tabela de contatos do formulário do site.
-- Rode no Supabase: Dashboard → SQL Editor → New query → cole → Run.

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome text not null check (char_length(nome) between 2 and 120),
  email text not null check (char_length(email) between 3 and 200),
  whatsapp text check (char_length(whatsapp) <= 40),
  servico text check (char_length(servico) <= 80),
  mensagem text not null check (char_length(mensagem) between 10 and 5000)
);

-- Habilita Row Level Security. Com RLS ligado e SEM policy de SELECT,
-- ninguém anônimo consegue ler os dados — só o painel do Supabase (service role).
alter table public.contacts enable row level security;

-- Permite apenas INSERT do site (papel public cobre o request anônimo da
-- chave publicável). Sem policy de SELECT, a leitura segue bloqueada.
drop policy if exists "anon pode inserir contato" on public.contacts;
drop policy if exists "permitir insert do site" on public.contacts;
create policy "permitir insert do site"
  on public.contacts
  for insert
  to public
  with check (true);
