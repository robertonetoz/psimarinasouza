# Site – Psicóloga Marina Souza

Next.js 16 + React 19 + Tailwind CSS 4 + Motion.

## Rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Editar conteúdo

Todos os textos, contatos, formação, avaliações e FAQ ficam em `src/content/site.ts`.

### Fotos da Marina

1. Coloque as fotos em `public/fotos/` (ex.: `marina-hero.jpg`).
2. Em `src/content/site.ts`, preencha `photos.hero` e `photos.about` com o caminho (ex.: `"/fotos/marina-hero.jpg"`).

Formatos sugeridos: hero vertical 4:5, sobre vertical 3:4.

### Artes do Instagram

Em `instagramPosts`, preencha `image` com o caminho de uma arte do feed para trocar o bloco de texto pela imagem.

## Publicar

`npm run build` gera a versão de produção. A forma mais simples de publicar é pela Vercel.
