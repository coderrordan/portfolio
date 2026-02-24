# CLAUDE.md — Daniele Napolitano Portfolio

> Istruzioni per Claude Code. Leggi questo file prima di ogni sessione.
> Progetto: sito portfolio / personal brand per freelancer Amazon specialist.

---

## Panoramica del progetto

Sito vetrina monopagina (SPA) per il personal brand di **Daniele Napolitano**,
Amazon Account Manager & Digital Strategist freelance.

Stack: **React 18 + Vite + Tailwind CSS v3**, deploy su **GitHub Pages**.

---

## Struttura del progetto

```
daniele-portfolio/
├── public/
│   └── 404.html              # Redirect trick per GitHub Pages SPA
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── IntroCanvas.jsx     # Animazione intro: puntini → griglia
│   │   │   ├── GridCanvas.jsx      # Griglia fissa permanente in background
│   │   │   └── ParticlesCanvas.jsx # Particelle con drift + connessioni
│   │   ├── sections/
│   │   │   ├── IntroOverlay.jsx    # Overlay dell'intro con fade-out
│   │   │   ├── Navbar.jsx          # Navigazione fissa
│   │   │   ├── Hero.jsx            # Hero section con badge + headline + stats
│   │   │   ├── Marquee.jsx         # Striscia ticker con skill
│   │   │   ├── About.jsx           # Identikit + terminale typewriter
│   │   │   ├── Services.jsx        # Griglia servizi
│   │   │   ├── Process.jsx         # 5 step del metodo
│   │   │   ├── CtaSection.jsx      # Call to action centrale
│   │   │   ├── Newsletter.jsx      # Form newsletter
│   │   │   └── Footer.jsx          # Footer con social
│   │   └── ui/
│   │       ├── Button.jsx          # ButtonPrimary + ButtonOutline
│   │       ├── SectionLabel.jsx    # Label uppercase monocromatica
│   │       └── CustomCursor.jsx    # DOM nodes del cursore custom
│   ├── hooks/
│   │   ├── useScrollReveal.js     # IntersectionObserver per .reveal
│   │   └── useCustomCursor.js     # Logica cursore + hover effects
│   ├── data/
│   │   └── content.js             # TUTTO il testo del sito — modifica qui
│   ├── App.jsx                    # Root: orchestrazione intro + sezioni
│   ├── index.css                  # Tailwind + stili globali custom
│   └── main.jsx                   # Entry point React
├── index.html                     # Entry HTML con font Google
├── vite.config.js                 # Vite config (base path GitHub Pages)
├── tailwind.config.js             # Token di design (colori, font, animazioni)
├── postcss.config.js
├── package.json
└── CLAUDE.md                      # Questo file
```

---

## Come avviare in locale

```bash
# 1. Entra nella cartella
cd daniele-portfolio

# 2. Installa dipendenze
npm install

# 3. Avvia il dev server
npm run dev
# → http://localhost:5173
```

---

## Come deployare su GitHub Pages

### Setup iniziale (una tantum)

```bash
# 1. Crea il repo su GitHub (es. "portfolio")

# 2. Inizializza git nella cartella
git init
git remote add origin https://github.com/TUO_USERNAME/portfolio.git

# 3. Imposta il base path in vite.config.js
#    Se il repo si chiama "portfolio":
#    base: '/portfolio/'
#    Se usi dominio custom (es. danielenapolitano.com):
#    base: '/'

# 4. Deploy
npm run deploy
```

Il comando `npm run deploy` esegue:
1. `vite build` → genera `/dist`
2. `gh-pages -d dist` → pusha il dist sul branch `gh-pages`

GitHub Pages servirà automaticamente il branch `gh-pages`.

### Deploy successivi

```bash
git add .
git commit -m "aggiornamento"
git push origin main
npm run deploy
```

### ⚠️ Dominio custom

Se hai un dominio (es. `danielenapolitano.com`):
1. Imposta `base: '/'` in `vite.config.js`
2. Crea il file `public/CNAME` con solo il dominio:
   ```
   danielenapolitano.com
   ```
3. Configura i DNS del dominio con i record A di GitHub Pages

---

## Design system — regole da rispettare sempre

### Colori (definiti in `tailwind.config.js`)

| Token       | Valore    | Uso                              |
|-------------|-----------|----------------------------------|
| `bg`        | `#0a0a0a` | Sfondo principale                |
| `accent`    | `#e8720c` | Arancione — primary actions, highlights |
| `accent2`   | `#f59e0b` | Ambra — hover states             |
| `cream`     | `#f0ece4` | Testo principale                 |
| `muted`     | `#6b6560` | Testo secondario, label          |
| `border`    | `#1e1e1e` | Bordi, separatori                |
| `tgreen`    | `#4ade80` | Terminale: OK, stringhe          |
| `tblue`     | `#60a5fa` | Terminale: chiavi JSON           |
| `tpurple`   | `#c084fc` | Terminale: query                 |

### Font

| Font               | Uso                                      |
|--------------------|------------------------------------------|
| DM Sans (`font-sans`)      | Body, headline hero (900 weight) |
| Playfair Display (`font-serif`) | Titoli sezione, numeri stat    |
| Space Mono (`font-mono`)    | Badge, label, CTA, terminale     |

### Gerarchia z-index

| Livello   | z-index | Cosa                          |
|-----------|---------|-------------------------------|
| Griglia   | 0       | `GridCanvas` (fixed)          |
| Particelle| 1       | `ParticlesCanvas` (fixed)     |
| Noise     | 2       | `body::before` overlay        |
| Contenuto | 10      | Tutte le sezioni              |
| Nav       | 500     | Navbar fissa                  |
| Cursor    | 9998/9  | Cursore custom                |
| Intro     | 9000    | Overlay intro                 |

### Principi visivi

- **Sfondo trasparente sulle sezioni** → le particelle e la griglia si vedono sempre
- **backdrop-filter: blur** sulle sezioni con sfondo semitrasparente
- **Nessun bordo radius** sui bottoni/card (stile tecnico/preciso)
- **clip-path** sui bottoni primari (angolo tagliato in basso a sinistra e alto a destra)
- **Cursore custom** — sostituisce sempre il cursore di sistema (`cursor: none` sul body)
- **Scroll reveal** — tutti gli elementi `.reveal` partono invisibili e appaiono con IntersectionObserver

---

## Contenuto — come aggiornarlo

**Tutto il testo del sito è in `src/data/content.js`.**

Non toccare i componenti per aggiornare copy, link social, email, ecc.
Modifica solo `content.js`.

### Aggiornare i social

```js
// src/data/content.js
export const SITE = {
  socials: {
    youtube:   'https://www.youtube.com/@TUO_CANALE',
    instagram: 'https://www.instagram.com/TUO_PROFILO',
    linkedin:  'https://www.linkedin.com/in/TUO_PROFILO',
  },
}
```

### Aggiungere un servizio

```js
export const SERVICES = {
  cards: [
    // ... cards esistenti
    {
      num: '03',
      title: 'Nuovo Servizio',
      desc: 'Descrizione...',
      tags: ['Tag1', 'Tag2'],
      fullWidth: true,  // true = occupa tutta la larghezza
    },
  ],
}
```

### Modificare il terminale

```js
export const TERMINAL_LINES = [
  { type: 'prompt', text: '> Nuovo comando...' },
  { type: 'ok',     text: '[BOOT] Qualcosa: OK' },
  { type: 'warn',   text: '[WARN] Attenzione' },
  { type: 'json',   text: '{ <k>"chiave"</k>: <s>"valore"</s> }' },
  { type: 'spacer', text: '' },
]
// tipi: 'prompt' (arancione), 'ok' (verde), 'warn' (ambra),
//       'json' (colorato con tag <k> e <s>), 'spacer' (spazio vuoto)
```

---

## Architettura canvas — note importanti

### IntroCanvas
- Dura ~0.9s totali: 350ms puntini → 300ms linee → 250ms hold
- Quando finisce chiama `onComplete()` → IntroOverlay fa fade-out → App setta `ready=true`
- Viene smontato dal DOM dopo il fade

### GridCanvas
- Disegnato una volta sola su resize con `drawGrid()`
- Mostra con `opacity: 0 → 1` (CSS transition) quando `visible=true`
- Nodi agli incroci: `rgba(232,114,12,0.35)`, raggio 1.2px
- Linee: `rgba(232,114,12,0.07)`, spessore 0.5px

### ParticlesCanvas
- 43 particelle con posizione normalizzata [0-1]
- Drift puro: velocità casuale ±0.0008 per frame, bounce ai bordi
- **Zero attrazione verso il mouse** — le particelle non seguono il cursore
- Parallax: `scrollY * 0.17` → le particelle scrollano più lentamente della pagina
- Link: distanza < 140px → linea `rgba(103,232,249, alpha)` dove alpha diminuisce con la distanza

---

## GitHub Pages — cose da sapere

### Problema: pagina bianca dopo deploy
→ Controlla che `base` in `vite.config.js` corrisponda al nome esatto del repository.

### Problema: routing SPA (404 su refresh)
→ Il file `public/404.html` gestisce questo — non eliminarlo.

### Problema: font non caricano in produzione
→ I font sono caricati da Google Fonts in `index.html` — funzionano su GitHub Pages.
→ Se vuoi font self-hosted, aggiungili a `public/fonts/` e importali in `index.css`.

### Problema: immagini non trovate
→ Le immagini vanno in `public/` e si referenziano come `/nome-repo/immagine.jpg`.
→ In sviluppo: `/immagine.jpg`. In produzione con base path: usa `import.meta.env.BASE_URL`.

---

## Estensioni future previste

Queste sezioni potrebbero essere aggiunte in futuro.
Mantieni la stessa struttura e lo stesso stile:

- **Case studies / Portfolio** — griglia di progetti con thumbnail, risultati misurabili
- **Testimonial** — carousel o grid con feedback clienti
- **Blog / Risorse** — lista articoli con link a YouTube o Medium
- **Pagina contatti** — form dedicato (attenzione: GitHub Pages è statico,
  serve un servizio esterno tipo Formspree, Netlify Forms, o EmailJS)
- **SEO avanzato** — react-helmet-async per meta tag dinamici

---

## Regole per Claude Code

1. **Non riscrivere tutto il progetto** se ti viene chiesta una modifica piccola.
   Usa `str_replace_editor` o modifica solo il file pertinente.

2. **Mantieni sempre il design system** — non introdurre nuovi colori, font o stili
   senza aggiornare `tailwind.config.js` e documentarli qui.

3. **Il contenuto va in `content.js`** — non hardcodare testo nei componenti.

4. **Le animazioni canvas NON devono usare librerie esterne** — sono scritte in
   vanilla Canvas API per performance e controllo totale.

5. **GitHub Pages è statico** — non suggerire soluzioni che richiedono un server
   (es. SSR, API routes, database) senza prima proporre un'alternativa statica.

6. **Tailwind utility-first** — preferisci classi Tailwind a CSS custom. Usa
   `index.css` solo per stili che Tailwind non può esprimere (es. `.t-cursor`,
   `clip-path`, `body::before`).

7. **Accessibilità minima** — ogni immagine ha `alt`, i link hanno testo
   descrittivo, il contrasto testo/sfondo è sufficiente.

8. **Performance** — `canvas` usa sempre `cancelAnimationFrame` nel cleanup di
   `useEffect`. Non creare memory leak.

9. **Mobile** — il sito deve essere usabile su mobile. Le sezioni con grid a 2
   colonne collassano a 1 colonna sotto `md:` (900px).
