# CLAUDE.md — Portfolio Daniele Napolitano

**Stack**: React 18 + Vite + Tailwind CSS v3 | **Deploy**: Cloudflare Pages (push su `main`)

Leggi prima [`AGENTS.md`](AGENTS.md): contiene il posizionamento commerciale e le regole operative aggiornate del progetto. Questo file documenta soprattutto architettura e design system.

---

## Struttura del progetto

```
src/
├── nexus-ui/              # Design system (copia da ~/NexusOS/nexus-ui/ — vedi sotto)
│   ├── tokens/            # colors.css, typography.css, animations.css
│   ├── themes/personal.css
│   ├── tailwind.preset.js
│   ├── components/Button.tsx
│   └── utils/cn.ts
├── components/
│   ├── canvas/            # IntroCanvas, GridCanvas, ParticlesCanvas
│   ├── sections/          # Navbar, Hero, Marquee, About, Services, Process, CtaSection, Newsletter, Footer, IntroOverlay
│   └── ui/                # Button.jsx (adapter), SectionLabel.jsx, CustomCursor.jsx
├── data/                  # content.js (IT), content.en.js (EN) — TUTTO IL TESTO QUI
├── hooks/                 # useScrollReveal.js, useCustomCursor.js
├── i18n/                  # LanguageContext.jsx, useTranslation.js
├── App.jsx
├── index.css              # Tailwind + stili portfolio-specifici
└── main.jsx
```

---

## Design system

### Sorgente dei token
I token vengono da `src/nexus-ui/tokens/` (CSS variables `--nexus-*`).
Il preset Tailwind è in `src/nexus-ui/tailwind.preset.js` — già incluso in `tailwind.config.js`.

### Colori Tailwind disponibili (preset + alias locali)
| Classe Tailwind            | CSS Variable             | Valore    |
|----------------------------|--------------------------|-----------|
| `bg`                       | `--nexus-bg-primary`     | `#0a0a0a` |
| `accent`                   | `--nexus-accent-primary` | `#e8720c` |
| `accent2`                  | `--nexus-accent-hover`   | `#f59e0b` |
| `cream`                    | `--nexus-text-primary`   | `#f0ece4` |
| `muted`                    | `--nexus-text-muted`     | `#6b6560` |
| `border`                   | `--nexus-border-default` | `#1e1e1e` |
| `surface`                  | `--nexus-bg-surface`     | `#111111` |
| `bg3`                      | `--nexus-bg-elevated`    | `#141414` |
| `success` / `info` / `warning` | semantic vars        | verde / blu / ambra |

Nelle classi CSS custom (`.t-ok`, `.t-key`, ecc.) usa `var(--nexus-*)` direttamente.

### Font
| Classe        | Font             | Uso                                  |
|---------------|------------------|---------------------------------------|
| `font-sans`   | Figtree          | Body, testo UI                       |
| `font-serif`  | Funnel Display   | Titoli sezione, numeri stat, hero h1 |
| `font-mono`   | Red Hat Mono     | Badge, label, CTA, terminale         |

Caricati via Google Fonts in `index.html`. Dettagli e uso completo → [`../brandkit/DESIGN.md`](../brandkit/DESIGN.md).

### z-index
`GridCanvas` 0 → `ParticlesCanvas` 1 → `body::before` noise 2 → sezioni 10 → Navbar 500 → Cursor 9998/9 → Intro 9000

### Bottoni
- `ButtonPrimary` → `variant="primary" clipped` (arancione, clip-path angoli)
- `ButtonOutline` → `variant="outline"` (bordo cream, hover arancione)
- Entrambi in `src/components/ui/Button.jsx` (adapter su nexus-ui `Button`)
- Clip-path CSS: `.btn-clip` / `.btn-clip-sm` definiti in `index.css`

---

## nexus-ui — sync

File in `src/nexus-ui/` = copia vendored (no npm link, incompatibile con deploy cloud).
Per aggiornare dalla sorgente:
```bash
cp ~/NexusOS/nexus-ui/tailwind.preset.js src/nexus-ui/tailwind.preset.js
cp ~/NexusOS/nexus-ui/src/tokens/*.css   src/nexus-ui/tokens/
cp ~/NexusOS/nexus-ui/src/themes/personal.css src/nexus-ui/themes/
cp ~/NexusOS/nexus-ui/src/utils/cn.ts    src/nexus-ui/utils/
cp ~/NexusOS/nexus-ui/src/components/Button.tsx src/nexus-ui/components/
```
Dopo ogni sync aggiorna la data in `src/nexus-ui/README.md`.

---

## Regole

1. **Testo → `content.js`**, non hardcodare nei componenti
2. **Design system**: non introdurre colori/font senza aggiornare `tailwind.config.js` e la tabella sopra
3. **Canvas**: nessuna libreria esterna, sempre `cancelAnimationFrame` nel cleanup
4. **Tailwind-first**: CSS custom solo per ciò che Tailwind non può fare (`clip-path`, `.t-*`, `body::before`)
5. **Mobile**: grid 2 col → 1 col sotto `md:` (900px); sito usabile su mobile
6. **Accessibilità**: `alt` su immagini, testo descrittivo sui link
7. **Modifica mirata**: se la richiesta è piccola modifica solo il file pertinente — non riscrivere tutto
8. **NON toccare** senza motivo: canvas, hooks, data, i18n, sezioni

---

## Riferimenti dettagliati
- Deploy e troubleshooting → [`docs/deploy.md`](docs/deploy.md)
- Architettura canvas → [`docs/canvas.md`](docs/canvas.md)
- Come aggiornare contenuti / i18n → [`docs/content.md`](docs/content.md)
- Stile grafico / design language → [`../brandkit/DESIGN.md`](../brandkit/DESIGN.md) (brandkit condiviso, non solo portfolio)
