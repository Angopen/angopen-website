
# 🇦🇴 Angopen

> **Construindo o futuro de Angola, linha por linha.**

A **Angopen** é uma plataforma centralizada para o ecossistema de código aberto (Open Source) em Angola. O nosso objetivo é dar visibilidade aos projetos nacionais, conectar desenvolvedores e fortalecer a soberania tecnológica do país.

---

## 📌 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades (MVP)](#funcionalidades-mvp)
- [Stack Técnica](#stack-técnica)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começar Agora](#começar-agora)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contacto](#contacto)

---

## 🚀 Visão Geral

Muitos desenvolvedores angolanos criam soluções incríveis que ficam escondidas no GitHub. A **Angopen** resolve a fragmentação da nossa comunidade, servindo como uma vitrine e um ponto de encontro para quem quer "meter a mão na massa" em projetos com impacto local.

## ✨ Funcionalidades (MVP)

- **Vitrine de Projetos:** Galeria de repositórios angolanos categorizados (GovTech, Fintech, Edu, etc).
- **Mural de Contribuições:** Lista de *Issues* fáceis para quem quer começar a contribuir.
- **Perfil do Dev:** Portfólio focado no impacto real dentro da comunidade.
- **Ranking Nacional:** Gamificação para destacar os contribuidores mais ativos.

## 🛠️ Stack Técnica

O projeto foi construído com ferramentas modernas para garantir performance e facilidade de manutenção:

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [Shadcn/UI](https://ui.shadcn.com/) (baseado em Radix UI)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **ORM:** [Prisma](https://www.prisma.io/) (PostgreSQL)

## 📂 Estrutura do Projeto

```
├── 📁 app
│   ├── 📁 components
│   │   ├── 📁 atoms
│   │   │   └── 📄 logo-component.tsx
│   │   └── 📁 molecules
│   │       ├── 📄 background-animated.tsx
│   │       ├── 📄 base-button.tsx
│   │       └── 📄 dark-button.tsx
│   ├── 📁 fonts
│   │   └── 📄 Givonic-Regular.otf
│   ├── 📄 favicon.ico
│   ├── 🎨 globals.css
│   ├── 📄 layout.tsx
│   ├── 📄 page.tsx
│   └── 📄 types.ts
├── 📁 components
│   └── 📁 ui
│       └── 📄 button.tsx
├── 📁 hoooks
│   └── 📄 useIsScrolledToTop.ts
├── 📁 lib
│   └── 📄 utils.ts
├── 📁 public
├── ⚙️ .gitignore
├── 📝 AGENTS.md
├── 📝 CLAUDE.md
├── 📝 README.md
├── ⚙️ components.json
├── 📄 eslint.config.mjs
├── 📄 next.config.ts
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.mjs
├── ⚙️ tsconfig.json
└── 📦 yarn.lock
```

## 🏁 Começar Agora

### Pré-requisitos

Certifica-te de que tens instalado:

  - **Node.js LTS** (v18 ou superior)
  - **npm** ou **pnpm** (recomendado)
  - Um banco de dados **PostgreSQL** (ou conta no Neon.tech/Supabase)

### Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/mariosalembe23/angopen-start angopen

# 2. Entrar na pasta
cd angopen

# 3. Instalar dependências
npm install
```

### Variáveis de Ambiente

---

### Executar Localmente

```bash
# Rodar as migrações do banco de dados
npx prisma migrate dev

# Iniciar o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`.

## 📜 Scripts Disponíveis

  - `npm run dev` – Inicia o ambiente de desenvolvimento.
  - `npm run build` – Gera o build de produção.
  - `npm run start` – Inicia o servidor de produção.
  - `npm run lint` – Verifica erros no código.

## 🤝 Contribuição

Contribuições são o que movem o Open Source\! 🇦🇴

1.  Faz um **Fork** do projeto.
2.  Cria uma **Branch** para a tua funcionalidade (`git checkout -b feature/minha-feature`).
3.  Faz o **Commit** das tuas alterações (`git commit -m 'feat: Adicionei X'`).
4.  Faz o **Push** para a Branch (`git push origin feature/minha-feature`).
5.  Abre um **Pull Request**.

## ⚖️ Licença

Distribuído sob a licença **MIT**. Veja `LICENSE` para mais informações.

## 📧 Contacto

**Equipa Angopen** - **GitHub:** [@angopen](https://www.google.com/search?q=https://github.com/angopen)

  - **URL do Projeto:** [https://angopen.ao](https://www.google.com/search?q=https://angopen.ao)

-----

*Feito com ❤️ em Angola, para o mundo.*



### O que mudei e porquê:
1.  **Terminologia:** Troquei "Dravo" (que parecia o nome do scaffold antigo) por **Angopen**.
2.  **Stack Específica:** Adicionei o **Shadcn/UI** e **Prisma**, que são fundamentais para o fluxo que discutimos.
3.  **Identidade:** Usei a bandeira de Angola e termos como "Soberania Tecnológica" para motivar a comunidade.
4.  **Estrutura Next.js:** O mapa de pastas agora segue o padrão oficial do **App Router**, que é o que vais usar no teu projeto.

Estás pronto para o primeiro `git commit`? Se precisares de ajuda para configurar o **NextAuth** (para o login com GitHub), avisa!
