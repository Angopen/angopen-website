import { Gem, GitBranch, GitPullRequest, UserRound } from "lucide-react";

export const menuNavbar = [
  {
    name: "Início",
    href: "#",
  },
  {
    name: "Sistema",
    href: "#",
  },
  {
    name: "Projectos",
    href: "#",
  },
  {
    name: "Comunidade",
    href: "#",
  },
];

export const allTechLanguages = [
  // --- WEB FRONTEND & BACKEND ---
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
    name: "PHP",
    color: "#777BB4",
    bg: "bg-indigo-400/10",
    text: "text-indigo-400",
  },
  {
    name: "Python",
    color: "#3776AB",
    bg: "bg-blue-400/10",
    text: "text-blue-400",
  },
  { name: "Ruby", color: "#CC342D", bg: "bg-red-600/10", text: "text-red-600" },
  { name: "Go", color: "#00ADD8", bg: "bg-cyan-400/10", text: "text-cyan-400" },
  {
    name: "Java",
    color: "#ED8B00",
    bg: "bg-orange-500/10",
    text: "text-orange-500",
  },

  // --- MOBILE ---
  {
    name: "Dart",
    color: "#0175C2",
    bg: "bg-blue-300/10",
    text: "text-blue-300",
  }, // Flutter
  {
    name: "Kotlin",
    color: "#7F52FF",
    bg: "bg-purple-500/10",
    text: "text-purple-500",
  }, // Android
  {
    name: "Swift",
    color: "#F05138",
    bg: "bg-red-500/10",
    text: "text-red-500",
  }, // iOS
  {
    name: "React Native",
    color: "#61DAFB",
    bg: "bg-sky-400/10",
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
    text: "text-blue-600",
  },
  {
    name: "C#",
    color: "#239120",
    bg: "bg-green-600/10",
    text: "text-green-600",
  },
  {
    name: "Rust",
    color: "#DEA584",
    bg: "bg-orange-800/10",
    text: "text-orange-300",
  },
  {
    name: "Zig",
    color: "#F7A41D",
    bg: "bg-yellow-600/10",
    text: "text-yellow-600",
  },

  // --- DATA & SCRIPTS ---
  { name: "R", color: "#276DC3", bg: "bg-blue-500/10", text: "text-blue-500" },
  {
    name: "SQL",
    color: "#4479A1",
    bg: "bg-blue-700/10",
    text: "text-blue-700",
  },
  {
    name: "Shell",
    color: "#89E051",
    bg: "bg-green-400/10",
    text: "text-green-400",
  },
  {
    name: "Lua",
    color: "#000080",
    bg: "bg-blue-900/10",
    text: "text-blue-300",
  },

  // --- OTHERS ---
  {
    name: "Elixir",
    color: "#4E2A8E",
    bg: "bg-purple-700/10",
    text: "text-purple-400",
  },
  {
    name: "Haskell",
    color: "#5D4F85",
    bg: "bg-indigo-800/10",
    text: "text-indigo-300",
  },
  {
    name: "Scala",
    color: "#DC322F",
    bg: "bg-red-700/10",
    text: "text-red-400",
  },
  {
    name: "Solidity",
    color: "#363636",
    bg: "bg-zinc-500/10",
    text: "text-zinc-400",
  }, // Web3
];

export const comments = [
  {
    name: "Maria Salembe",
    area: "Desenvolvedora Front-end",
    image: "https://avatars.githubusercontent.com/u/105380583?v=4",
    languages: ["JavaScript", "TypeScript", "Python"],
    linkedin: "https://www.linkedin.com/in/maria-salembe/",
    comment:
      "Excelente iniciativa! O Dravo é uma plataforma incrível para conectar profissionais de software livre em Angola. Estou ansiosa para colaborar e contribuir para o ecossistema de código aberto do país.",
  },
  {
    name: "João Silva",
    area: "Engenheiro de Software",
    image: "https://avatars.githubusercontent.com/u/105380583?v=4",
    languages: ["Java", "Python", "Go", "C++"],
    linkedin: "https://www.linkedin.com/in/joao-silva/",
    comment:
      "Parabéns pela criação do Dravo! É inspirador ver uma plataforma dedicada a promover o software livre em Angola. Mal posso esperar para explorar os projetos e me envolver com a comunidade.",
  },
  {
    name: "Ana Costa",
    area: "Desenvolvedora Back-end",
    image: "https://avatars.githubusercontent.com/u/105380583?v=4",
    languages: ["C++", "Go"],
    linkedin: "https://www.linkedin.com/in/ana-costa/",
    comment:
      "O Dravo é uma iniciativa fantástica para fortalecer a comunidade de software livre em Angola. Estou animada para compartilhar meus conhecimentos e aprender com outros profissionais apaixonados por código aberto.",
  },
  {
    name: "Carlos Mendes",
    area: "Desenvolvedor Full Stack",
    image: "https://avatars.githubusercontent.com/u/105380583?v=4",
    languages: ["Ruby", "PHP"],
    linkedin: "https://www.linkedin.com/in/carlos-mendes/",
    comment:
      "Incrível ver uma plataforma como o Dravo surgindo em Angola! Estou ansioso para colaborar com outros desenvolvedores e contribuir para o crescimento do software livre no país.",
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
        { label: "Discord da Comunidade", href: "https://discord.gg/..." },
        { label: "Grupo WhatsApp", href: "https://chat.whatsapp.com/..." },
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
