import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — gera HTML estático em /out para o GitHub Pages.
  output: "export",
  // O domínio é apex (sergiorodrigues.dev.br), servido na raiz: sem basePath.
  // Otimização de imagem do Next exige servidor; no export usamos imagens estáticas.
  images: {
    unoptimized: true,
  },
  // URLs com barra final geram /pagina/index.html (mais compatível com Pages).
  trailingSlash: true,
};

export default nextConfig;
