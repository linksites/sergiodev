"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const themeEvent = "sergio-theme-change";

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribeThemeChange(onChange: () => void) {
  window.addEventListener(themeEvent, onChange);
  return () => window.removeEventListener(themeEvent, onChange);
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(
    subscribeThemeChange,
    getThemeSnapshot,
    () => "light",
  );

  function toggle() {
    const root = document.documentElement;
    const next: Theme = root.classList.contains("dark") ? "light" : "dark";
    root.classList.add("theme-anim");
    root.classList.toggle("light", next === "light");
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    window.dispatchEvent(new Event(themeEvent));
    window.setTimeout(() => root.classList.remove("theme-anim"), 340);
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Ativar tema escuro" : "Ativar tema claro"}
      title={isLight ? "Tema escuro" : "Tema claro"}
      className={`flex h-10 w-10 items-center justify-center border border-edge bg-bg text-muted transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <span suppressHydrationWarning className="flex h-5 w-5 items-center justify-center">
        {isLight ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}
