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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const html = document.documentElement;
    const prevScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

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
      const dest = document.querySelector(id);
      if (!dest) return;
      e.preventDefault();
      lenis.scrollTo(dest as HTMLElement, { offset: -96 });
      history.pushState(null, "", isRootHash ? href : id);
    };
    document.addEventListener("click", onClick);

    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      html.style.scrollBehavior = prevScrollBehavior;
    };
  }, []);

  return null;
}
