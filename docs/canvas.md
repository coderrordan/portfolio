# Canvas Architecture

## IntroCanvas (`src/components/canvas/IntroCanvas.jsx`)
- Durata ~0.9s: 350ms puntini → 300ms linee → 250ms hold
- Al termine chiama `onComplete()` → IntroOverlay fade-out → `ready=true` in App
- Viene smontato dopo il fade

## GridCanvas (`src/components/canvas/GridCanvas.jsx`)
- Disegnato una volta sola (e su resize) con `drawGrid()`
- CSS transition `opacity 0→1` quando `visible=true`
- Nodi: `rgba(232,114,12, 0.35)` r=1.2px | Linee: `rgba(232,114,12, 0.07)` 0.5px

## ParticlesCanvas (`src/components/canvas/ParticlesCanvas.jsx`)
- 43 particelle, posizione normalizzata [0-1], drift ±0.0008/frame, bounce ai bordi
- **Zero attrazione mouse** — le particelle non seguono il cursore
- Parallax: `scrollY * 0.17`
- Link: distanza < 140px → linea `rgba(103,232,249, alpha)` decrescente con distanza

## Regole comuni
- Sempre `cancelAnimationFrame` nel cleanup di `useEffect` (no memory leak)
- Nessuna libreria esterna — vanilla Canvas API
