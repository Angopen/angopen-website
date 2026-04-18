import { Gem, GitBranch, GitPullRequest, UserRound } from "lucide-react";

export const menuNavbar = [
  {
    name: "Início",
    href: "home",
    type: "internal",
  },
  {
    name: "Sistema",
    href: "system",
    type: "internal",
  },
  {
    name: "Comunidade",
    href: "community",
    type: "internal",
  },
  {
    name: "Visão Geral",
    href: "/overview",
    type: "external",
  },
];

export const allTechLanguages = [
  // --- WEB FRONTEND ---
  {
    name: "JavaScript",
    color: "#F7DF1E",
    bg: "bg-yellow-400/10",
    text: "text-yellow-400",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    bg: "bg-blue-500/10",
    text: "text-blue-500",
  },
  {
    name: "HTML",
    color: "#E34F26",
    bg: "bg-orange-600/10",
    text: "text-orange-500",
  },
  {
    name: "CSS",
    color: "#1572B6",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
  {
    name: "React",
    color: "#61DAFB",
    bg: "bg-sky-400/10",
    text: "text-sky-400",
  },
  { name: "Next.js", color: "#ffffff", bg: "bg-white/10", text: "text-white" },
  {
    name: "Vue.js",
    color: "#4FC08D",
    bg: "bg-green-400/10",
    text: "text-green-400",
  },
  {
    name: "Nuxt.js",
    color: "#00DC82",
    bg: "bg-emerald-400/10",
    text: "text-emerald-400",
  },
  {
    name: "Angular",
    color: "#DD0031",
    bg: "bg-red-600/10",
    text: "text-red-500",
  },
  {
    name: "Svelte",
    color: "#FF3E00",
    bg: "bg-orange-500/10",
    text: "text-orange-500",
  },
  {
    name: "SolidJS",
    color: "#2C4F7C",
    bg: "bg-blue-800/10",
    text: "text-blue-400",
  },
  {
    name: "Astro",
    color: "#FF5D01",
    bg: "bg-orange-600/10",
    text: "text-orange-400",
  },
  {
    name: "Remix",
    color: "#121212",
    bg: "bg-zinc-800/10",
    text: "text-zinc-300",
  },
  {
    name: "Qwik",
    color: "#AC7EF4",
    bg: "bg-purple-400/10",
    text: "text-purple-400",
  },

  // --- WEB BACKEND ---
  {
    name: "Node.js",
    color: "#339933",
    bg: "bg-green-600/10",
    text: "text-green-500",
  },
  {
    name: "Express",
    color: "#ffffff",
    bg: "bg-white/10",
    text: "text-zinc-300",
  },
  {
    name: "Fastify",
    color: "#000000",
    bg: "bg-zinc-900/10",
    text: "text-zinc-300",
  },
  {
    name: "NestJS",
    color: "#E0234E",
    bg: "bg-red-600/10",
    text: "text-red-400",
  },
  {
    name: "PHP",
    color: "#777BB4",
    bg: "bg-indigo-400/10",
    text: "text-indigo-400",
  },
  {
    name: "Laravel",
    color: "#FF2D20",
    bg: "bg-red-500/10",
    text: "text-red-400",
  },
  {
    name: "Symfony",
    color: "#000000",
    bg: "bg-zinc-900/10",
    text: "text-zinc-300",
  },
  {
    name: "Python",
    color: "#3776AB",
    bg: "bg-blue-400/10",
    text: "text-blue-400",
  },
  {
    name: "Django",
    color: "#092E20",
    bg: "bg-green-900/10",
    text: "text-green-400",
  },
  {
    name: "Flask",
    color: "#000000",
    bg: "bg-zinc-900/10",
    text: "text-zinc-300",
  },
  {
    name: "FastAPI",
    color: "#009688",
    bg: "bg-teal-500/10",
    text: "text-teal-400",
  },
  { name: "Ruby", color: "#CC342D", bg: "bg-red-600/10", text: "text-red-500" },
  {
    name: "Rails",
    color: "#CC0000",
    bg: "bg-red-700/10",
    text: "text-red-400",
  },
  { name: "Go", color: "#00ADD8", bg: "bg-cyan-400/10", text: "text-cyan-400" },
  {
    name: "Gin",
    color: "#00ACD7",
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
  },
  {
    name: "Fiber",
    color: "#00ACD7",
    bg: "bg-cyan-600/10",
    text: "text-cyan-300",
  },
  {
    name: "Java",
    color: "#ED8B00",
    bg: "bg-orange-500/10",
    text: "text-orange-500",
  },
  {
    name: "Spring Boot",
    color: "#6DB33F",
    bg: "bg-green-500/10",
    text: "text-green-400",
  },
  {
    name: "Kotlin",
    color: "#7F52FF",
    bg: "bg-purple-500/10",
    text: "text-purple-500",
  },
  {
    name: "Ktor",
    color: "#7F52FF",
    bg: "bg-purple-600/10",
    text: "text-purple-400",
  },
  {
    name: "Elixir",
    color: "#4E2A8E",
    bg: "bg-purple-700/10",
    text: "text-purple-400",
  },
  {
    name: "Phoenix",
    color: "#FD4F00",
    bg: "bg-orange-600/10",
    text: "text-orange-400",
  },
  {
    name: "Rust",
    color: "#DEA584",
    bg: "bg-orange-800/10",
    text: "text-orange-300",
  },
  {
    name: "Actix",
    color: "#DEA584",
    bg: "bg-orange-700/10",
    text: "text-orange-300",
  },
  {
    name: "Axum",
    color: "#DEA584",
    bg: "bg-orange-700/10",
    text: "text-orange-300",
  },
  {
    name: "C#",
    color: "#239120",
    bg: "bg-green-600/10",
    text: "text-green-500",
  },
  {
    name: ".NET",
    color: "#512BD4",
    bg: "bg-purple-600/10",
    text: "text-purple-400",
  },
  {
    name: "Scala",
    color: "#DC322F",
    bg: "bg-red-700/10",
    text: "text-red-400",
  },
  {
    name: "Haskell",
    color: "#5D4F85",
    bg: "bg-indigo-800/10",
    text: "text-indigo-300",
  },
  {
    name: "Clojure",
    color: "#5881D8",
    bg: "bg-blue-600/10",
    text: "text-blue-400",
  },
  {
    name: "Erlang",
    color: "#A90533",
    bg: "bg-red-800/10",
    text: "text-red-400",
  },

  // --- MOBILE ---
  {
    name: "Dart",
    color: "#0175C2",
    bg: "bg-blue-300/10",
    text: "text-blue-300",
  },
  {
    name: "Flutter",
    color: "#02569B",
    bg: "bg-blue-700/10",
    text: "text-blue-400",
  },
  {
    name: "Swift",
    color: "#F05138",
    bg: "bg-red-500/10",
    text: "text-red-400",
  },
  {
    name: "SwiftUI",
    color: "#F05138",
    bg: "bg-red-400/10",
    text: "text-red-300",
  },
  {
    name: "Objective-C",
    color: "#438EFF",
    bg: "bg-blue-400/10",
    text: "text-blue-400",
  },
  {
    name: "React Native",
    color: "#61DAFB",
    bg: "bg-sky-400/10",
    text: "text-sky-400",
  },
  {
    name: "Expo",
    color: "#000020",
    bg: "bg-zinc-900/10",
    text: "text-zinc-300",
  },
  {
    name: "Ionic",
    color: "#3880FF",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
  {
    name: "Capacitor",
    color: "#119EFF",
    bg: "bg-sky-500/10",
    text: "text-sky-400",
  },

  // --- SYSTEMS & LOW LEVEL ---
  {
    name: "C",
    color: "#A8B9CC",
    bg: "bg-slate-400/10",
    text: "text-slate-400",
  },
  {
    name: "C++",
    color: "#00599C",
    bg: "bg-blue-600/10",
    text: "text-blue-500",
  },
  {
    name: "Zig",
    color: "#F7A41D",
    bg: "bg-yellow-600/10",
    text: "text-yellow-500",
  },
  {
    name: "Assembly",
    color: "#6E4C13",
    bg: "bg-yellow-900/10",
    text: "text-yellow-700",
  },
  {
    name: "WASM",
    color: "#654FF0",
    bg: "bg-violet-600/10",
    text: "text-violet-400",
  },

  // --- DATA & AI ---
  {
    name: "Python",
    color: "#3776AB",
    bg: "bg-blue-400/10",
    text: "text-blue-400",
  },
  { name: "R", color: "#276DC3", bg: "bg-blue-500/10", text: "text-blue-400" },
  {
    name: "Julia",
    color: "#9558B2",
    bg: "bg-purple-600/10",
    text: "text-purple-400",
  },
  {
    name: "SQL",
    color: "#4479A1",
    bg: "bg-blue-700/10",
    text: "text-blue-500",
  },
  {
    name: "PostgreSQL",
    color: "#4169E1",
    bg: "bg-blue-600/10",
    text: "text-blue-400",
  },
  {
    name: "MySQL",
    color: "#4479A1",
    bg: "bg-blue-700/10",
    text: "text-blue-400",
  },
  {
    name: "MongoDB",
    color: "#47A248",
    bg: "bg-green-600/10",
    text: "text-green-500",
  },
  {
    name: "Redis",
    color: "#DC382D",
    bg: "bg-red-600/10",
    text: "text-red-400",
  },
  {
    name: "Prisma",
    color: "#2D3748",
    bg: "bg-slate-700/10",
    text: "text-slate-300",
  },
  {
    name: "Drizzle",
    color: "#C5F74F",
    bg: "bg-lime-400/10",
    text: "text-lime-400",
  },
  {
    name: "TensorFlow",
    color: "#FF6F00",
    bg: "bg-orange-600/10",
    text: "text-orange-400",
  },
  {
    name: "PyTorch",
    color: "#EE4C2C",
    bg: "bg-red-500/10",
    text: "text-red-400",
  },

  // --- DEVOPS & INFRA ---
  {
    name: "Docker",
    color: "#2496ED",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
  {
    name: "Kubernetes",
    color: "#326CE5",
    bg: "bg-blue-600/10",
    text: "text-blue-400",
  },
  {
    name: "Terraform",
    color: "#7B42BC",
    bg: "bg-purple-600/10",
    text: "text-purple-400",
  },
  {
    name: "Ansible",
    color: "#EE0000",
    bg: "bg-red-600/10",
    text: "text-red-400",
  },
  {
    name: "Shell",
    color: "#89E051",
    bg: "bg-green-400/10",
    text: "text-green-400",
  },
  {
    name: "Bash",
    color: "#4EAA25",
    bg: "bg-green-500/10",
    text: "text-green-400",
  },
  {
    name: "PowerShell",
    color: "#5391FE",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
  {
    name: "Nginx",
    color: "#009639",
    bg: "bg-green-600/10",
    text: "text-green-500",
  },
  {
    name: "Linux",
    color: "#FCC624",
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
  },

  // --- SCRIPTS & OTHERS ---
  {
    name: "Lua",
    color: "#000080",
    bg: "bg-blue-900/10",
    text: "text-blue-300",
  },
  {
    name: "Perl",
    color: "#39457E",
    bg: "bg-indigo-700/10",
    text: "text-indigo-400",
  },
  {
    name: "Groovy",
    color: "#4298B8",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
  {
    name: "MATLAB",
    color: "#0076A8",
    bg: "bg-blue-600/10",
    text: "text-blue-400",
  },
  {
    name: "Solidity",
    color: "#363636",
    bg: "bg-zinc-500/10",
    text: "text-zinc-400",
  },
  {
    name: "Move",
    color: "#4DA1F5",
    bg: "bg-blue-400/10",
    text: "text-blue-300",
  },
  {
    name: "Cairo",
    color: "#FF6B6B",
    bg: "bg-red-400/10",
    text: "text-red-300",
  },

  // --- CSS FRAMEWORKS ---
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
  },
  {
    name: "Sass",
    color: "#CC6699",
    bg: "bg-pink-500/10",
    text: "text-pink-400",
  },
  {
    name: "Bootstrap",
    color: "#7952B3",
    bg: "bg-purple-600/10",
    text: "text-purple-400",
  },

  // --- TESTING ---
  { name: "Jest", color: "#C21325", bg: "bg-red-700/10", text: "text-red-400" },
  {
    name: "Vitest",
    color: "#6E9F18",
    bg: "bg-lime-600/10",
    text: "text-lime-400",
  },
  {
    name: "Cypress",
    color: "#17202C",
    bg: "bg-zinc-900/10",
    text: "text-zinc-300",
  },
  {
    name: "Playwright",
    color: "#2EAD33",
    bg: "bg-green-600/10",
    text: "text-green-400",
  },
];

export const comments = [
  {
    name: "Justino Soares",
    area: "Software Engineer | Back-end Developer",
    image: "/users/just.png",
    languages: ["Node.js", "TypeScript", "Python", "SQL"],
    linkedin: "https://www.linkedin.com/in/justino-soares-a56833292/",
    comment:
      "Excelente iniciativa! A Angopen é uma plataforma incrível para conectar profissionais de software livre em Angola. Estou ansiosa para colaborar e contribuir para o ecossistema de código aberto do país.",
  },
  {
    name: "Domingos Franco",
    area: "Back-end Developer | Security Enthusiast",
    image: "/users/germano.png",
    languages: ["Java", "Python", "TypeScript", "C++"],
    linkedin: "https://www.linkedin.com/in/domingos-germano-franco-231550296/",
    comment:
      "A Angopen é uma iniciativa fantástica para fortalecer a comunidade de software livre em Angola. Estou animado para compartilhar meus conhecimentos e aprender com outros profissionais apaixonados por código aberto.",
  },
  {
    name: "Finéias Jilaiassule",
    area: "Software Engineer | Front-end Developer",
    image: "/users/fineias.jpeg",
    languages: ["TypeScript", "C++", "Shell", "React Native"],
    linkedin: "https://www.linkedin.com/in/fin%C3%A9ias-jilaiassule-422607376/",
    comment:
      "A Angopen veio para conectar desenvolvedores de software livre em Angola. Estou ansioso para colaborar com outros profissionais e contribuir para o crescimento do ecossistema de código aberto no país.",
  },
  {
    name: "Mário Salembe",
    area: "Software Engineer | UI/UX Designer",
    image: "/users/level.png",
    languages: ["TypeScript", "React Native", "Shell", "Go"],
    linkedin: "https://www.linkedin.com/in/mariosalembe/",
    comment:
      "Incrível ver uma plataforma como a Angopen surgindo em Angola! Estou ansioso para colaborar com outros desenvolvedores e contribuir para o crescimento do software livre no país.",
  },
];

export const features = [
  {
    id: "showcase",
    title: "Vitrine de Projectos",
    icon: GitBranch,
    description:
      "Repositório central do software nacional com importação directa via API do GitHub.",
    status: "no-escopo",
    tags: ["Impacto Local", "Categorização", "Análises"],
  },
  {
    id: "contribute",
    title: "Mural de Contribuições",
    icon: GitPullRequest,
    description:
      "Filtro inteligente de tarefas para desenvolvedores de todos os níveis.",
    status: "no-escopo",
    tags: ["Júnior", "Intermédio", "Sénior"],
  },
  {
    id: "profile",
    title: "Perfil do Desenvolvedor",
    icon: UserRound,
    description:
      "Portfólio focado em contribuições reais e impacto na comunidade tech angolana.",
    status: "no-escopo",
    tags: ["Competências", "Histórico", "Disponibilidade"],
  },
  {
    id: "gamification",
    title: "Ranking Nacional",
    icon: Gem,
    description:
      "Reconhecimento e destaques para os devs mais activos do nosso ecossistema.",
    status: "no-escopo",
    tags: ["PRs Aceites", "Issues Resolvidas", "Estrelas"],
  },
];

export const openSourceAgents = [
  // --- Engenharia e Desenvolvimento ---
  "Desenvolvedor Frontend",
  "Desenvolvedor Backend",
  "Desenvolvedor Mobile",
  "Engenheiro de Software",
  "Desenvolvedor Full Stack",
  "Engenheiro de Dados",
  "Especialista em QA (Testes)",
  "Engenheiro DevOps",
  "Arquitecto de Sistemas",
  "Especialista em Cibersegurança",
  "Desenvolvedor de Jogos",
  "Engenheiro de Machine Learning",

  // --- Design e Experiência ---
  "Designer de UI (Interface)",
  "Designer de UX (Experiência)",
  "Designer Gráfico",
  "Ilustrador Digital",
  "Motion Designer",
  "Especialista em Acessibilidade",

  // --- Produto e Gestão ---
  "Gestor de Projecto (Project Manager)",
  "Product Owner",
  "Scrum Master",
  "Analista de Negócios",
  "Gestor de Comunidade (Community Manager)",

  // --- Conteúdo e Documentação ---
  "Redactor Técnico (Technical Writer)",
  "Tradutor / Localizador",
  "Criador de Conteúdo Tech",
  "Editor de Vídeo",
  "Copywriter",

  // --- Dados e Ciência ---
  "Cientista de Dados",
  "Analista de Dados",
  "Administrador de Base de Dados (DBA)",

  // --- Infraestrutura e Suporte ---
  "Administrador de Sistemas (SysAdmin)",
  "Engenheiro de Redes",
  "Arquitecto de Cloud",
  "Suporte Técnico",

  // --- Áreas Transversais / Apoio ---
  "Advogado Especialista em Propriedade Intelectual",
  "Especialista em Marketing Digital",
  "Evangelista Tecnológico (Developer Advocate)",
  "Especialista em SEO",
  "Recrutador Tech (IT Recruiter)",
];

export const footerContent = {
  brand: {
    name: "Angopen",
    email: "angopenangola@gmail.com",
    slogan: "Fortalecendo a tecnologia nacional, commit a commit.",
    copyright: `© ${new Date().getFullYear()} Angopen. Todos os direitos reservados.`,
  },
  sections: [
    {
      title: "Plataforma",
      links: [
        { label: "Ver Projectos", href: "/projects" },
        { label: "Quero Contribuir", href: "/contribute" },
        { label: "Ranking Nacional", href: "/leaderboard" },
        { label: "Directório de Devs", href: "/members" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Documentação", href: "/docs" },
        { label: "Guia do Iniciante", href: "/guide" },
        { label: "Blog da Angopen", href: "/blog" },
        { label: "Status da API", href: "/status" },
      ],
    },
    {
      title: "Comunidade",
      links: [
        { label: "Código de Conduta", href: "/conduct" },
        { label: "Discord da Comunidade", href: "/discord" },
        { label: "Grupo WhatsApp", href: process.env.NEXT_PUBLIC_WHATSAPP_GROUP ?? "#" },
        { label: "Open Collective", href: "/donate" },
      ],
    },
  ],
  bottom: {
    message: "Feito com 🇦🇴 por desenvolvedores angolanos.",
    legal: [
      { label: "Política de Privacidade", href: "/privacy" },
      { label: "Termos & Condições", href: "/terms" },
      {
        label: "Política de Cookies",
        href: "/cookies",
      },
    ],
  },
};
