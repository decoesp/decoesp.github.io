# André Filho - Portfolio

Portfolio pessoal com design de card interativo, desenvolvido com Next.js 14, TypeScript, Tailwind CSS e Contentlayer.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Conteúdo:** MDX + Contentlayer2
- **Deploy:** Vercel

## Funcionalidades

- Card interativo com navegação por abas
- Seções: Sobre, Experiência, Projetos, Blog, Trabalhos e Contato
- Blog com posts em MDX e páginas dinâmicas
- Design responsivo e mobile-first
- Animações suaves de transição

## Estrutura

```
├── content/
│   ├── blog/           # Posts do blog
│   ├── experiences/    # Experiências profissionais
│   ├── pages/          # Conteúdo das páginas
│   └── projects/       # Projetos
├── src/
│   ├── app/            # Rotas e páginas
│   ├── components/     # Componentes React
│   ├── lib/            # Utilitários
│   └── styles/         # CSS global
```

## Desenvolvimento

```bash
npm install
npm run dev
```

## Editar Conteúdo

### Blog

Crie `content/blog/nome-do-post.mdx`:

```mdx
---
title: Título
description: Descrição
date: 2024-01-15
tags:
  - Tag1
---

Conteúdo...
```

### Experiência

Crie `content/experiences/empresa.mdx`:

```mdx
---
company: Empresa
role: Cargo
year: "2024"
skills:
  - Skill1
order: 1
---

Descrição...
```

### Projeto

Crie `content/projects/projeto.mdx`:

```mdx
---
title: Projeto
description: Descrição
url: https://exemplo.com
github: https://github.com/user/repo
tags:
  - Tag1
featured: true
order: 1
---

Detalhes...
```

## Deploy

Conecte o repositório à Vercel em [vercel.com/new](https://vercel.com/new). Deploys automáticos a cada push na `main`.

## Licença

MIT
