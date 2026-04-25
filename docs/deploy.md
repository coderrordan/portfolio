# Deploy

## Sviluppo locale
```bash
npm install
npm run dev  # → http://localhost:5173
```

## Build
```bash
npm run build   # genera /dist
npm run preview # anteprima locale del build
```

## Deploy Automatico (Cloudflare Pages)
Il deploy avviene automaticamente su **Cloudflare Pages** ad ogni push sul branch `main` di GitHub.
Non gestiamo più il deploy manuale o tramite GitHub Pages.

**Configurazione ambiente su Cloudflare:**
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18+

## Troubleshooting
- **Pagina bianca**: `base` in `vite.config.js` non corrisponde al nome repo
- **404 su refresh**: non eliminare `public/404.html`
- **Font non caricano**: caricati da Google Fonts in `index.html`
- **Immagini non trovate**: usare `import.meta.env.BASE_URL` come prefisso
