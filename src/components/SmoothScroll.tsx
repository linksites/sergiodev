"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll suave (Lenis) sincronizado com o GSAP ScrollTrigger.
 * - Respeita prefers-reduced-motion: não inicializa, mantém o scroll nativo.
 * - Intercepta cliques em âncoras (#secao) para rolar com a mesma inércia.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const offset = -96;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const html = document.documentElement;
    const prevScrollBehavior = html.style.scrollBehavior;
    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;

    function scrollToHash(hash: string, updateUrl?: string) {
      if (!hash || hash === "#") return false;
      const dest = document.querySelector(hash);
      if (!dest) return false;

      if (lenis) {
        lenis.scrollTo(dest as HTMLElement, { offset });
      } else {
        const top =
          (dest as HTMLElement).getBoundingClientRect().top +
          window.scrollY +
          offset;
        window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
      }

      if (updateUrl) history.pushState(null, "", updateUrl);
      return true;
    }

    if (!reduce) {
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      html.style.scrollBehavior = "auto";
      lenis.on("scroll", ScrollTrigger.update);

      raf = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLAnchorElement>(
        'a[href^="#"], a[href^="/#"]'
      );
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;

      const isRootHash = href.startsWith("/#");
      if (isRootHash && window.location.pathname !== "/") return;

      const id = isRootHash ? href.slice(1) : href;
      if (scrollToHash(id, isRootHash ? href : id)) e.preventDefault();
    };

    const onHashChange = () => {
      window.requestAnimationFrame(() => scrollToHash(window.location.hash));
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);

    ScrollTrigger.refresh();
    if (window.location.hash) {
      window.setTimeout(() => scrollToHash(window.location.hash), 80);
    }

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
      html.style.scrollBehavior = prevScrollBehavior;
    };
  }, []);

  return null;
}
