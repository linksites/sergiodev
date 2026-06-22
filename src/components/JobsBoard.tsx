"use client";

import { useEffect, useMemo, useState } from "react";

type Source = "Remotive" | "RemoteOK";
type Seniority = "Júnior" | "Pleno" | "Sênior" | "—";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  tags: string[];
  url: string;
  date: string;
  source: Source;
  salary?: string;
  seniority: Seniority;
};

const REMOTIVE_URL =
  "https://remotive.com/api/remote-jobs?category=software-dev&limit=100";
const REMOTEOK_URL = "https://remoteok.com/api";
const CACHE_KEY = "vagas-tech-cache-v1";
const CACHE_TTL = 60 * 60 * 1000; // 1h

// RemoteOK lista todas as vagas remotas e as tags sofrem spam; por isso
// filtramos pelo TÍTULO (confiável) para manter só cargos de tecnologia.
function isTechJob(title: string): boolean {
  return /(develop|engineer|programm|software|front[\s-]?end|back[\s-]?end|full[\s-]?stack|dev\s?ops|\bsre\b|\bqa\b|\bdba\b|data (scientist|engineer|analyst|warehouse)|machine learning|\bml\b|\bai\b|\bcloud\b|architect|mobile|android|\bios\b|web\s?dev|tech lead|\bcto\b|security|cyber|blockchain|\bui\/?ux\b)/i.test(
    title
  );
}

// Repara mojibake (UTF-8 interpretado como Latin-1): "SÃªnior" -> "Sênior".
function fixText(s: string): string {
  if (!s || !/[ÃÂ][-¿]/.test(s)) return s || "";
  try {
    return decodeURIComponent(escape(s));
  } catch {
    return s;
  }
}

function cleanLocation(loc: string): string {
  return fixText(loc).replace(/[,\s]+$/, "").trim() || "Remoto";
}

function seniorityOf(title: string): Seniority {
  const t = title.toLowerCase();
  if (/\b(sr|senior|sênior|lead|staff|principal|head)\b/.test(t)) return "Sênior";
  if (/\b(jr|junior|júnior|intern|trainee|est[aá]gi)/.test(t)) return "Júnior";
  if (/\b(pleno|mid|mid-level|intermediate)\b/.test(t)) return "Pleno";
  return "—";
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function normalizeRemotive(raw: any): Job[] {
  if (!raw?.jobs) return [];
  return raw.jobs.map((j: any) => ({
    id: `rmv-${j.id}`,
    title: fixText(j.title ?? ""),
    company: fixText(j.company_name ?? ""),
    location: cleanLocation(j.candidate_required_location),
    tags: Array.isArray(j.tags) ? j.tags.slice(0, 8) : [],
    url: j.url,
    date: j.publication_date ?? "",
    source: "Remotive" as const,
    salary: j.salary || undefined,
    seniority: seniorityOf(fixText(j.title ?? "")),
  }));
}

function normalizeRemoteOK(raw: any): Job[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((j) => j && j.id && j.position)
    .filter((j) => isTechJob(j.position ?? ""))
    .map((j: any) => ({
      id: `rok-${j.id}`,
      title: fixText(j.position ?? ""),
      company: fixText(j.company ?? ""),
      location: cleanLocation(j.location),
      tags: Array.isArray(j.tags) ? j.tags.slice(0, 8) : [],
      url: j.url || j.apply_url,
      date: j.date ?? "",
      source: "RemoteOK" as const,
      salary:
        j.salary_min && j.salary_max
          ? `$${Math.round(j.salary_min / 1000)}k–${Math.round(j.salary_max / 1000)}k`
          : undefined,
      seniority: seniorityOf(fixText(j.position ?? "")),
    }));
}
/* eslint-enable @typescript-eslint/no-explicit-any */

async function fetchAll(): Promise<Job[]> {
  const [rmv, rok] = await Promise.allSettled([
    fetch(REMOTIVE_URL).then((r) => r.json()),
    fetch(REMOTEOK_URL).then((r) => r.json()),
  ]);
  const jobs: Job[] = [];
  if (rmv.status === "fulfilled") jobs.push(...normalizeRemotive(rmv.value));
  if (rok.status === "fulfilled") jobs.push(...normalizeRemoteOK(rok.value));
  if (!jobs.length) throw new Error("Nenhuma fonte respondeu.");
  return jobs.sort((a, b) => (b.date > a.date ? 1 : -1));
}

function relativeDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso).getTime();
  if (isNaN(d)) return "";
  const days = Math.floor((Date.now() - d) / 86400000);
  if (days <= 0) return "hoje";
  if (days === 1) return "ontem";
  if (days < 30) return `${days}d atrás`;
  return `${Math.floor(days / 30)}m atrás`;
}

export default function JobsBoard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [updatedAt, setUpdatedAt] = useState<number | null>(null);

  const [query, setQuery] = useState("");
  const [source, setSource] = useState<"all" | Source>("all");
  const [seniority, setSeniority] = useState<"all" | Seniority>("all");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  async function load(force = false) {
    setStatus("loading");
    try {
      if (!force && typeof localStorage !== "undefined") {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { ts, data } = JSON.parse(cached);
          if (Date.now() - ts < CACHE_TTL && Array.isArray(data) && data.length) {
            setJobs(data);
            setUpdatedAt(ts);
            setStatus("ready");
            return;
          }
        }
      }
      const data = await fetchAll();
      setJobs(data);
      const ts = Date.now();
      setUpdatedAt(ts);
      setStatus("ready");
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ ts, data }));
      } catch {}
    } catch {
      setStatus("error");
    }
  }

  useEffect(() => {
    // Carga inicial das vagas; o setState aqui é intencional (fetch on mount).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const topTags = useMemo(() => {
    const count = new Map<string, number>();
    for (const j of jobs)
      for (const t of j.tags) {
        const k = t.trim();
        if (k) count.set(k, (count.get(k) ?? 0) + 1);
      }
    return [...count.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 14)
      .map(([t]) => t);
  }, [jobs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((j) => {
      if (source !== "all" && j.source !== source) return false;
      if (seniority !== "all" && j.seniority !== seniority) return false;
      if (
        activeTags.length &&
        !activeTags.some((t) =>
          j.tags.map((x) => x.toLowerCase()).includes(t.toLowerCase())
        )
      )
        return false;
      if (q) {
        const hay = `${j.title} ${j.company} ${j.tags.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [jobs, query, source, seniority, activeTags]);

  function toggleTag(t: string) {
    setActiveTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  }

  const chip = "rounded-full border px-3 py-1 text-xs font-medium transition-colors";
  const chipOn = "border-accent bg-accent/10 text-accent";
  const chipOff = "border-edge text-muted hover:border-edge-2";

  return (
    <div>
      {/* Controles */}
      <div className="rounded-2xl border border-edge bg-surface p-5">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por cargo, empresa ou tecnologia..."
          aria-label="Buscar vagas"
          className="w-full rounded-lg border border-edge bg-bg px-4 py-3 text-sm text-ink outline-none placeholder:text-faint focus:border-accent"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="self-center font-mono text-[11px] uppercase tracking-wide text-faint">
            Fonte:
          </span>
          {(["all", "Remotive", "RemoteOK"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSource(s)}
              className={`${chip} ${source === s ? chipOn : chipOff}`}
            >
              {s === "all" ? "Todas" : s}
            </button>
          ))}
          <span className="ml-2 self-center font-mono text-[11px] uppercase tracking-wide text-faint">
            Nível:
          </span>
          {(["all", "Júnior", "Pleno", "Sênior"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSeniority(s)}
              className={`${chip} ${seniority === s ? chipOn : chipOff}`}
            >
              {s === "all" ? "Todos" : s}
            </button>
          ))}
        </div>

        {topTags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {topTags.map((t) => (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={`${chip} font-mono ${
                  activeTags.includes(t) ? chipOn : chipOff
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Status bar */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-faint">
        <span>
          {status === "ready" && (
            <>
              <span className="font-semibold text-ink">{filtered.length}</span> vaga
              {filtered.length === 1 ? "" : "s"}
              {updatedAt &&
                ` · atualizado ${new Date(updatedAt).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
            </>
          )}
        </span>
        <button
          onClick={() => load(true)}
          disabled={status === "loading"}
          className="font-mono text-xs text-accent hover:underline disabled:opacity-50"
        >
          ↻ Atualizar
        </button>
      </div>

      {/* Resultados */}
      <div className="mt-4">
        {status === "loading" && (
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-24 animate-pulse rounded-xl border border-edge bg-surface/50"
              />
            ))}
          </div>
        )}

        {status === "error" && (
          <div className="rounded-xl border border-edge bg-surface p-8 text-center">
            <p className="text-muted">
              Não consegui carregar as vagas agora. As APIs públicas podem estar
              instáveis.
            </p>
            <button
              onClick={() => load(true)}
              className="mt-4 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {status === "ready" && filtered.length === 0 && (
          <div className="rounded-xl border border-edge bg-surface p-8 text-center text-muted">
            Nenhuma vaga encontrada com esses filtros.
          </div>
        )}

        {status === "ready" && filtered.length > 0 && (
          <ul className="space-y-3">
            {filtered.slice(0, 80).map((job) => (
              <li key={job.id}>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 rounded-xl border border-edge bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/60 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-ink group-hover:text-accent">
                        {job.title}
                      </h3>
                      {job.seniority !== "—" && (
                        <span className="rounded border border-edge-2 px-1.5 py-0.5 font-mono text-[10px] text-muted">
                          {job.seniority}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {job.company} · {job.location}
                      {job.salary && (
                        <span className="text-accent-3"> · {job.salary}</span>
                      )}
                    </p>
                    {job.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {job.tags.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="rounded bg-bg px-2 py-0.5 font-mono text-[10px] text-faint"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-3 text-xs text-faint">
                    <span>{relativeDate(job.date)}</span>
                    <span className="rounded border border-edge px-2 py-1 font-mono">
                      {job.source}
                    </span>
                    <span className="font-mono text-accent">ver →</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Créditos exigidos pelos termos das APIs */}
      <p className="mt-8 text-center text-xs text-faint">
        Vagas agregadas das APIs públicas de{" "}
        <a
          href="https://remotive.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent"
        >
          Remotive
        </a>{" "}
        e{" "}
        <a
          href="https://remoteok.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent"
        >
          RemoteOK
        </a>
        . As candidaturas são feitas no site da fonte original.
      </p>
    </div>
  );
}
