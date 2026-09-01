# Cofo

Site institucional do estúdio Cofo: design e desenvolvimento em São Luís.

## Stack

Site inteiramente estático, sem banco de dados, sem autenticação, sem
conteúdo gerado por visitantes. Uma página só, com seções por âncora.

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**, com os tokens de cor e tipografia da Cofo em
  `tailwind.config.ts` (grafite e creme, sem cor de destaque própria)

## Estrutura

```
app/
  layout.tsx      → fontes (Space Grotesk, Inter, JetBrains Mono) e metadata
  page.tsx         → monta todas as seções na ordem
  globals.css
components/
  Nav.tsx
  Hero.tsx         → inclui o preview da Azulejar como prova de trabalho
  Frentes.tsx      → "Projetos para clientes" e "Cofo Labs"
  Origem.tsx       → texto sobre a origem do nome "Cofo"
  Contato.tsx       → exporta Contato e Footer
```

## Deploy

Mesma lógica da Azulejar: conectar o repositório à Vercel, sem
variáveis de ambiente necessárias (não há Supabase nem serviço externo
aqui).
"# cofo" 
