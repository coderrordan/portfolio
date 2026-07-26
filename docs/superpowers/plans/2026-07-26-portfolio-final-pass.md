# Portfolio Final Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Finish the portfolio with a broader closing CTA, consistent supporting typography, a short-height-safe desktop rail and restrained section entrance motion.

**Architecture:** Keep all copy in the existing locale modules, reuse the existing global scroll-reveal hook from `AppContent`, and express all responsive and motion behaviour in `index.css`. No animation dependency is added.

**Tech Stack:** React 18, IntersectionObserver, CSS, Vite 5, Node test runner.

---

### Task 1: Lock and implement final localised copy

**Files:**
- Modify: `tests/content-contract.test.js`
- Modify: `src/data/content.js`
- Modify: `src/data/content.en.js`

- [ ] Add assertions for `HERO.eyebrow === 'Amazon Account Management'`, the approved CTA strings, `CTA_SECTION.ctas[0].label === 'Parlami del tuo progetto'`, and `UI.footerLine === 'Amazon Account Management'`.
- [ ] Run `node --test tests/content-contract.test.js` and confirm it fails on the old CTA.
- [ ] Replace Italian content with eyebrow `Già su Amazon o pronto a entrarci?`, heading `Capiamo qual è la prossima mossa.`, the approved supporting paragraph, note and button label.
- [ ] Mirror the exact object shape in English using `Already on Amazon or ready to enter?`, `Let’s understand the next move.`, direct supporting copy including `If I cannot help, I will tell you directly.`, and `Tell me about your project`.
- [ ] Set both footer lines and both hero eyebrows to `Amazon Account Management`.
- [ ] Run `node --test tests/content-contract.test.js` and confirm all content tests pass.

### Task 2: Add one reusable reveal system

**Files:**
- Modify: `tests/ui-structure.test.js`
- Modify: `src/hooks/useScrollReveal.js`
- Modify: `src/App.jsx`
- Modify: section components under `src/components/sections/`

- [ ] Add structure assertions requiring `useScrollReveal()` in `AppContent`, `IntersectionObserver`, an observer fallback, `reveal-group`, `reveal-visual`, and no generic reveal class in `Hero.jsx`.
- [ ] Run `node --test tests/ui-structure.test.js` and confirm the new assertions fail.
- [ ] Update `useScrollReveal` to add a root `reveal-ready` class only when IntersectionObserver exists, observe all `[data-reveal]` elements, set `data-revealed="true"` once, unobserve them, and leave content visible when unsupported.
- [ ] Invoke the hook once in `AppContent`.
- [ ] Add `data-reveal` attributes to section labels/headings/supporting copy, `data-reveal="group"` to meaningful card/list containers, and `data-reveal="visual"` to major visual panels. Do not add generic reveals to Hero.
- [ ] Run focused tests and confirm they pass.

### Task 3: Refine typography, CTA, terminal and compact rail

**Files:**
- Modify: `tests/visual-system.test.js`
- Modify: `src/index.css`

- [ ] Add CSS contract assertions for one shared supporting-copy selector, `.cta-actions a { width: 100%; }`, a `max-height` rail query, larger embedded desktop terminal text and reduced-motion reveal overrides.
- [ ] Run `node --test tests/visual-system.test.js` and confirm failure.
- [ ] Set `.hero-sub`, `.services-intro > p`, `.cases-intro > p`, `.os-description` and `.cta-copy > p` to `font-size: clamp(1.08rem, 1.25vw, 1.25rem)` and `line-height: 1.65`, preserving existing colours and max widths in their individual rules.
- [ ] Make `.cta-actions` a grid and its link full width with at least a `4rem` touch target.
- [ ] Increase embedded terminal command and line text on desktop, leaving the existing `max-width: 30rem` compact values authoritative on mobile.
- [ ] Add `@media (min-width: 64rem) and (max-height: 50rem)` to reduce rail logo, nav rows, language padding and contact height. Set `.rail-index { min-height: 0; overflow-y: auto; }` so only navigation scrolls below the minimum.
- [ ] Add reveal CSS with opacity/translate, group child staggering, subtle visual scale, one-time transitions and immediate reduced-motion visibility.
- [ ] Run `node --test tests/visual-system.test.js` and confirm it passes.

### Task 4: Verify responsive behaviour and completion

**Files:**
- Verify all modified source and test files.

- [ ] Run `node --test tests/*.test.js`; expect zero failures.
- [ ] Run `npm run build`; expect a successful Vite production build.
- [ ] Run `git diff --check`; expect no output.
- [ ] Browser-check CTA, rail and section reveals at `1440×900`, `1366×768`, `1280×650`, `375×812` and a narrow mobile width.
- [ ] Confirm the rail CTA remains visible, only the central index scrolls when required, CTA button fills its column, terminal faces do not clip, and no horizontal overflow exists.
- [ ] Emulate reduced motion and confirm all reveal content is immediately visible.

No commit, push or branch integration is included because none was requested.
