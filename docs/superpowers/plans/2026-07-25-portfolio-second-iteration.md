# Portfolio Second Iteration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio around a larger desktop rail, a concise hero with a coded Brand Builder, clearer services, visual case studies, an animated method, a demonstrative system section and a more personal closing profile.

**Architecture:** Keep the current React and localized-content architecture. Add focused visual components for the Brand Builder, method particles and case diagrams; keep all public copy in the two locale files; use CSS and Canvas APIs without new dependencies.

**Tech Stack:** React 18, Vite 5, CSS, Canvas 2D, Node test runner, agent-browser.

---

### Task 1: Lock the revised structure with failing tests

**Files:**
- Modify: `tests/content-contract.test.js`
- Modify: `tests/ui-structure.test.js`
- Modify: `tests/visual-system.test.js`

- [ ] Add assertions for the approved hero claim, one hero CTA, three service packages, six rail labels, About after SkalebidOS, BrandBuilder presence and ControlMap absence.
- [ ] Run `node --test tests/*.test.js` and confirm failures identify the old content and structure.

### Task 2: Rewrite and humanize localized content

**Files:**
- Modify: `src/data/content.js`
- Modify: `src/data/content.en.js`

- [ ] Replace the navigation, hero, diagnosis, services, cases, process, system and About data while preserving the same IT/EN object shape.
- [ ] Audit the Italian draft against `2-context/brand/voice.md` and the Humanizer rules: short sentences, concrete nouns, no inflated claims, no em dashes and no repeated negative parallelisms.
- [ ] Run `node --test tests/content-contract.test.js` and confirm the locale contract passes.

### Task 3: Build the hero animation

**Files:**
- Create: `src/components/ui/BrandBuilder.jsx`
- Modify: `src/components/sections/Hero.jsx`
- Delete: `src/components/ui/ControlMap.jsx`

- [ ] Implement an accessible decorative SVG/CSS sequence that assembles Listing, PPC, Catalogo, Dati and Mercati into one brand structure.
- [ ] Reduce Hero to eyebrow, headline, supporting line, one large CTA and BrandBuilder.
- [ ] Add a static final state under `prefers-reduced-motion`.
- [ ] Run the relevant structure tests and confirm they pass.

### Task 4: Recompose commercial sections

**Files:**
- Modify: `src/components/sections/Diagnosis.jsx`
- Modify: `src/components/sections/Services.jsx`
- Modify: `src/components/sections/CaseStudies.jsx`
- Create: `src/components/ui/CaseVisual.jsx`

- [ ] Reduce diagnosis to three linked problem/effect statements.
- [ ] Render services as three comparable package cards with fit, responsibilities, outcome and CTA.
- [ ] Render each case as a wide scene with one-line before, intervention and result plus a case-specific coded visual.
- [ ] Run structure and content tests.

### Task 5: Build the method and system demonstrations

**Files:**
- Create: `src/components/ui/MethodParticles.jsx`
- Modify: `src/components/sections/Process.jsx`
- Modify: `src/components/sections/SkalebidOS.jsx`
- Modify: `src/components/ui/TerminalBox.jsx`

- [ ] Implement a sticky vertical method whose active phase follows scroll.
- [ ] Draw particles that morph between lens, compass, blueprint, modules and cycle symbols; expose the same information as DOM text.
- [ ] Recompose SkalebidOS as screenshot left and heading plus terminal right, removing the explanatory paragraph and benefits list.
- [ ] Verify Canvas cleanup, resize handling and reduced-motion behavior.

### Task 6: Move and deepen About

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/sections/About.jsx`

- [ ] Move About after SkalebidOS.
- [ ] Use the archived "Un po' informatico. Un po' marketer." direction with the current portrait and concise personal copy.
- [ ] Keep the closing diagnostic question as the final line.
- [ ] Run structure tests.

### Task 7: Apply the new visual system

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/ui/Button.jsx`

- [ ] Set desktop rail width to `clamp(13.75rem, 15vw, 17.5rem)` and place number plus label on one row at 16-18 px.
- [ ] Increase primary button height to at least 64 px and text to 17-18 px.
- [ ] Add responsive styles for BrandBuilder, package cards, case scenes, sticky method, particle canvas, system split and late About.
- [ ] Preserve mobile menu behavior, visible focus and reduced motion.
- [ ] Run all tests and `npm run build`.

### Task 8: Browser verification and refinement

**Files:**
- Modify as needed: `src/index.css`, affected components and localized content.

- [ ] Check 390x844, 768x1024, 1440x1000 and 1920x1080 with agent-browser.
- [ ] Confirm no horizontal overflow, no console errors, readable rail, one hero CTA and stable animations.
- [ ] Run `npx impeccable --json src`, `git diff --check`, `node --test tests/*.test.js`, `npm run build` and `npm audit --omit=dev`.
- [ ] Provide the local preview URL and concise verification results.
