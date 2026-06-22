"use client";

import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import SectionHeading from "./SectionHeading";

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome").max(120),
  email: z.string().email("E-mail inválido").max(200),
  whatsapp: z.string().max(40).optional().or(z.literal("")),
  servico: z.string().max(80).optional(),
  mensagem: z.string().min(10, "Conte um pouco mais sobre o projeto").max(5000),
});

type Fields = z.infer<typeof schema>;
type Status = "idle" | "loading" | "success" | "error";

const servicos = [
  "Site ou Landing Page",
  "Sistema ou SaaS",
  "Automação com IA",
  "App Mobile",
  "Tráfego Pago",
  "Outro",
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [honeypot, setHoneypot] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value.trim(),
      servico: (form.elements.namedItem("servico") as HTMLSelectElement).value,
      mensagem: (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value.trim(),
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof Fields, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Fields;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    // Honeypot: bots preenchem campos ocultos — fingimos sucesso e ignoramos.
    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!supabase) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const { error } = await supabase.from("contacts").insert(parsed.data);
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    form.reset();
  }

  const inputClass =
    "w-full rounded-lg border border-edge bg-bg px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-accent";

  return (
    <section id="contato" className="border-t border-edge px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            number="05"
            tag="Contato"
            title="Vamos conversar?"
            subtitle="Tem um projeto em mente? Me chama no WhatsApp ou preencha o formulário — respondo em até 24h."
          />
          <div className="space-y-3">
            <a
              href="https://wa.me/5591982460001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-edge bg-surface px-4 py-3.5 transition-colors hover:border-accent/60"
            >
              <span className="font-mono text-xs text-accent">WhatsApp</span>
              <span className="text-sm text-muted">(91) 98246-0001</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-edge bg-surface px-4 py-3.5">
              <span className="font-mono text-xs text-accent">Local</span>
              <span className="text-sm text-muted">Belém, Pará — Brasil</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-edge bg-surface p-6 sm:p-8">
          {status === "success" ? (
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-2xl text-accent">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Mensagem enviada!</h3>
              <p className="mt-2 text-sm text-muted">
                Obrigado pelo contato. Retorno em até 24h.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-accent hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome" error={errors.nome}>
                  <input name="nome" type="text" placeholder="Seu nome" className={inputClass} />
                </Field>
                <Field label="WhatsApp" error={errors.whatsapp}>
                  <input name="whatsapp" type="text" placeholder="(91) 99999-9999" className={inputClass} />
                </Field>
              </div>
              <Field label="E-mail" error={errors.email}>
                <input name="email" type="email" placeholder="seu@email.com" className={inputClass} />
              </Field>
              <Field label="Serviço de interesse" error={errors.servico}>
                <select name="servico" defaultValue={servicos[0]} className={inputClass}>
                  {servicos.map((s) => (
                    <option key={s} value={s} className="bg-bg">
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Mensagem" error={errors.mensagem}>
                <textarea
                  name="mensagem"
                  rows={4}
                  placeholder="Conte um pouco sobre seu projeto..."
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
              />

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Algo deu errado. Tente novamente ou fale comigo no WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
