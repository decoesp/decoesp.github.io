> 🔗 Caso você esteja vendo este README ao invés do site, acesse o portfólio em:
> 👉 [decoesp-github-io.vercel.app](https://decoesp-github-io.vercel.app/)

# André Filho - Portfolio

Portfolio pessoal com design de card interativo, desenvolvido com Next.js 16, TypeScript, Tailwind CSS e MDX.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Conteúdo:** MDX + next-mdx-remote + gray-matter
- **Deploy:** Vercel

## Funcionalidades

- Card interativo com navegação por abas
- Seções: Sobre, Experiência, Projetos, Blog, Trabalhos e Contato
- Blog com posts em MDX e renderização server-side
- Design responsivo e mobile-first
- Animações suaves de transição
- Hot-reload de conteúdo MDX

## Estrutura

```
├── content/
│   ├── blog/           # Posts do blog
│   ├── experiences/    # Experiências profissionais
│   ├── pages/          # Conteúdo das páginas (sobre, contato, trabalhos)
│   └── projects/       # Projetos em destaque
├── src/
│   ├── app/            # Rotas e páginas (App Router)
│   ├── components/     # Componentes React
│   ├── lib/            # Utilitários (mdx.ts, utils.ts)
│   └── styles/         # CSS global com Tailwind
```

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`

## Editar Conteúdo

### Blog

Crie `content/blog/nome-do-post.mdx`:

```mdx
---
title: Título do Post
description: Descrição breve
date: 2025-12-06
tags:
  - Tag1
  - Tag2
---

Conteúdo em Markdown...
```

**Nota:** Evite usar `<` em texto fora de blocos de código (use "menos de" em vez de `<10ms`).

### Experiência

Crie `content/experiences/empresa.mdx`:

```mdx
---
company: Nome da Empresa
role: Cargo
year: "2024 - Presente"
skills:
  - React
  - TypeScript
order: 1
---

Descrição da experiência...
```

### Projeto

Crie `content/projects/projeto.mdx`:

```mdx
---
title: Nome do Projeto
description: Descrição breve
url: https://exemplo.com
github: https://github.com/user/repo
tags:
  - Next.js
  - TypeScript
featured: true
order: 1
---

Detalhes do projeto...
```

### Páginas

Edite `content/pages/sobre.mdx`, `contato.mdx` ou `trabalhos.mdx`:

```mdx
---
title: Sobre
---

Conteúdo da página...
```

## Deploy

Deploys automáticos a cada push na `main`.

## Licença

MIT

