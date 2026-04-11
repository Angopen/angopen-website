# Angopen

Plataforma web para promover o ecossistema de open source angolano, destacar projectos, conectar desenvolvedores e dar visibilidade a contribuições relevantes.

## Visão geral

Este repositório contém a base do frontend da Angopen. A aplicação está estruturada como uma landing page moderna com seções de apresentação, comunidade, destaque de perfis e blocos de produto que apontam para a evolução futura da plataforma.

O foco atual é interface, experiência visual e organização de componentes. Não existe, neste momento, backend próprio, camada de autenticação nem base de dados configurada no código presente no repositório.

## Stack técnica

- Next.js 16.2.2 com App Router
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui e Radix UI
- class-variance-authority, clsx e tailwind-merge para composição de estilos
- Lucide React, iconoir-react e @hugeicons/react para ícones
- three e postprocessing para experiências visuais/animações mais ricas
- ESLint 9 com eslint-config-next

## Organização do projeto

```text
app/
  globals.css           Estilos globais, fontes e tokens visuais
  layout.tsx            Layout raiz e metadata da aplicação
  page.tsx              Página inicial principal
  types.ts              Conteúdo estático e dados usados na UI
  components/
    atoms/              Componentes base, como logo e ícones
    molecules/          Blocos compostos, como botões, footer e background animado
    fonts/              Fonte local usada no projecto
  signin/               Página de autenticação
  signup/               Página de registo
  private/feedback/     Página interna de feedback
  fonts/overview/       Página auxiliar de apresentação
components/
  ui/                   Componentes reutilizáveis de UI
hoooks/
  useIsScrolledToTop.ts  Hook personalizado para estado do scroll
lib/
  utils.ts              Helpers genéricos, como merge de classes
public/                 Assets estáticos
```

## Funcionalidades actuais

- Hero principal com CTA para registo e entrada
- Navegação para secções da plataforma
- Cards de profissionais e áreas de actuação
- Secção de sistema com pilares do produto
- Secção de comunidade com mensagens institucionais
- Footer estruturado com links e informação da marca

## Como executar

### Pré-requisitos

- Node.js 20 LTS ou superior
- npm, pnpm ou yarn

### Instalação

```bash
git clone https://github.com/Angopen/angopen-website angopen
cd angopen
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Depois abre `http://localhost:3000`.

### Produção

```bash
npm run build
npm run start
```

## Scripts disponíveis

- `npm run dev` inicia o ambiente local de desenvolvimento.
- `npm run build` compila a aplicação para produção.
- `npm run start` executa a build de produção.
- `npm run lint` executa a análise estática com ESLint.

## Convenções de contribuição

Antes de abrir um PR, mantém o trabalho pequeno, focado e consistente com o estilo já existente no código.

- Cria branches por intenção: `feature/nome`, `fix/nome`, `chore/nome`, `docs/nome`, `refactor/nome`, `test/nome`.
- Evita misturar refactor com nova funcionalidade no mesmo PR, salvo quando for estritamente necessário.
- Executa `npm run lint` antes de submeter alterações.
- Não adiciona arquivos gerados, dependências desnecessárias ou alterações fora do escopo.
- Mantém nomes de componentes, hooks e ficheiros claros e alinhados com a estrutura actual.

## Padrão de commits

Usamos mensagens no estilo Conventional Commits.

Formato:

```text
tipo(escopo opcional): descrição curta no imperativo
```

Tipos recomendados:

- `feat`: nova funcionalidade
- `fix`: correcção de bug
- `docs`: alterações em documentação
- `style`: ajustes de formatação ou estilo sem impacto funcional
- `refactor`: refactor sem mudança de comportamento
- `test`: inclusão ou ajuste de testes
- `chore`: manutenção geral do projecto
- `perf`: melhoria de performance
- `build`: alterações de build ou dependências
- `ci`: mudanças em automação ou pipelines

Exemplos:

```text
feat(home): adiciona secção de comunidade
fix(button): corrige estado desativado
docs(readme): melhora instruções de contribuição
```

## Checklist para pull request

- Código lintado com sucesso
- Mudanças focadas em uma única intenção
- Mensagens de commit claras e consistentes
- Prints ou notas adicionadas quando houver mudança visual
- Sem erros óbvios de navegação, layout ou tipagem

## Licença

Este repositório ainda não declara uma licença no código-fonte.

## Contacto

Projeto Angopen

---

Feito para o ecossistema angolano de software livre.
