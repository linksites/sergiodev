export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "LinkSites",
    category: "SaaS",
    description:
      "Plataforma SaaS para criação e gestão de sites com múltiplos links. Painel, autenticação e publicação automática.",
    tags: ["Next.js", "React", "Tailwind"],
    url: "https://linksites.vercel.app/",
    image: "/images/linksites.png",
    featured: true,
  },
  {
    title: "Democrata",
    category: "Landing page",
    description:
      "Site para hamburgueria, pub e barbearia, com cardápio e pedidos integrados ao WhatsApp e iFood.",
    tags: ["Tailwind", "Responsivo", "WhatsApp"],
    url: "https://linksites.github.io/democrata/",
  },
  {
    title: "Arca de Noé",
    category: "Site institucional",
    description:
      "Site para clínica veterinária e pet shop, com apresentação de serviços, equipe e canais de contato.",
    tags: ["Tailwind", "Responsivo", "SEO"],
    url: "https://linksites.github.io/arcadenoe/",
  },
  {
    title: "Frigorífico Carne Boa",
    category: "E-commerce",
    description:
      "Catálogo de cortes com pedidos via WhatsApp, focado em conversão rápida e navegação mobile.",
    tags: ["Tailwind", "Catálogo", "WhatsApp"],
    url: "https://linksites.github.io/frigorificocarneboa/",
  },
  {
    title: "Ivan Leal JJ",
    category: "Landing page",
    description:
      "Site de marca pessoal para mestre de jiu-jitsu em Portugal: trajetória, vídeos, seminários e contato.",
    tags: ["Next.js", "React", "Responsivo"],
    url: "https://linksites.github.io/ivanleal/",
  },
  {
    title: "Danilo Souza",
    category: "Site institucional",
    description:
      "Site oficial para profissional de saúde, com foco em apresentação, autoridade e captação de pacientes.",
    tags: ["HTML", "CSS", "SEO"],
    url: "https://linksites.github.io/danilo-souza/",
  },
  {
    title: "Almeida Cunha",
    category: "Site institucional",
    description:
      "Site institucional profissional com foco em SEO local, performance e conversão de visitantes em contatos.",
    tags: ["Tailwind", "SEO", "Responsivo"],
    url: "https://linksites.github.io/almeida-cunha/",
  },
  {
    title: "Gomes de Deus",
    category: "Site institucional",
    description:
      "Site institucional com estratégia de presença digital, SEO local e layout responsivo orientado a contato.",
    tags: ["Tailwind", "SEO", "Responsivo"],
    url: "https://linksites.github.io/gomes-de-deus/",
  },
  {
    title: "SRADV",
    category: "Site institucional",
    description:
      "Site institucional com foco em SEO local, design sóbrio e otimização para conversão e agendamento online.",
    tags: ["Tailwind", "SEO", "Performance"],
    url: "https://linksites.github.io/sradv/",
  },
  {
    title: "Escritório Criminal",
    category: "Site institucional",
    description:
      "Site institucional one-page com foco em apresentação profissional, SEO e canais diretos de contato.",
    tags: ["HTML", "CSS", "SEO"],
    url: "https://linksites.github.io/sergiorodrigues/",
  },
];
