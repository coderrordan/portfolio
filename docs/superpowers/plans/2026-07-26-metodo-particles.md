# Metodo Particles Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Trasformare la sezione Metodo in una timeline più ariosa con un campo di particelle dense che passa da uno stato sparso a cinque forme procedurali riconoscibili.

**Architecture:** `Process.jsx` controlla quale fase è attiva e mantiene uno stato iniziale sparso. `MethodParticles.jsx` resta un canvas autonomo responsabile di generazione, interpolazione, rendering luminoso e performance. `content.js`, `content.en.js` e `index.css` gestiscono copy e presentazione responsive.

**Tech Stack:** React 18, Canvas 2D, IntersectionObserver, CSS responsive, Node test runner, Vite.

---

## File Structure

- Modify: `src/components/sections/Process.jsx` - stato attivo e struttura di timeline/canvas.
- Modify: `src/components/ui/MethodParticles.jsx` - generazione e rendering delle particelle.
- Modify: `src/data/content.js` - copy italiano.
- Modify: `src/data/content.en.js` - copy inglese equivalente.
- Modify: `src/index.css` - layout, spacing, movimento del solo testo e responsive.
- Modify: `tests/ui-structure.test.js` - contratto strutturale del Metodo.
- Modify: `tests/visual-system.test.js` - contratto CSS e canvas.

### Task 1: Contratti RED

- [ ] Aggiornare `tests/ui-structure.test.js` per richiedere `active === -1`, simbolo `scatter` iniziale e wrapper `.process-step-copy`.
- [ ] Aggiornare `tests/visual-system.test.js` per richiedere canvas dentro `.process-layout`, step più alti, movimento limitato a `.process-step-copy`, almeno 300 particelle e rendering con `arc()` e `shadowBlur`.
- [ ] Eseguire `node --test tests/ui-structure.test.js tests/visual-system.test.js` e verificare che i nuovi controlli falliscano.

### Task 2: Struttura e copy

- [ ] In `Process.jsx`, inizializzare `active` a `-1` e passare `scatter` finché nessuno step è attivo.
- [ ] Spostare `.process-particles` dentro `.process-layout`, dopo la lista, così il canvas parte dalla linea sopra `Ricerca`.
- [ ] Avvolgere titolo e descrizione in `<div className="process-step-copy">` per separarne il movimento dal numero.
- [ ] Sostituire le descrizioni IT/EN con le versioni approvate e controllate per naturalezza.
- [ ] Eseguire i test strutturali e verificare che passino.

### Task 3: Motore particellare

- [ ] Portare il numero di particelle a 320.
- [ ] Aggiungere generatori per linee spesse, anelli, superfici, poligoni e distribuzione deterministica dei punti.
- [ ] Implementare `scatter`, lente, bussola, mappa, ingranaggi e ciclo con grafico usando bordi e dettagli interni.
- [ ] Conservare le particelle tra i cambi di simbolo e interpolarle verso i nuovi target.
- [ ] Disegnare ogni punto con `arc()`, nucleo arancione e `shadowBlur` attenuato, senza stelle o raggi.
- [ ] Mantenere IntersectionObserver, pausa fuori viewport, resize e reduced motion.
- [ ] Eseguire i test focalizzati e correggere eventuali regressioni.

### Task 4: Layout e verifica

- [ ] In `index.css`, dare agli step un'altezza minima di circa `18rem` e aumentare il ritmo verticale.
- [ ] Creare una griglia desktop con timeline a sinistra e canvas sticky più ampio a destra, leggermente sovrapposto verso il centro.
- [ ] Applicare `translateX` solo a `.process-step-copy` quando lo step è attivo.
- [ ] Su mobile mantenere il canvas come fondale attenuato dietro la timeline.
- [ ] Eseguire `node --test tests/*.test.js`, `npm run build`, `npx impeccable --json src` e `git diff --check`.
- [ ] Verificare nel browser 390, 768, 1024, 1510 e 1920 px, reduced motion, console e assenza di overflow.
