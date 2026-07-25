# Europe Network Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Brand Builder with an animated European market and logistics network, and keep desktop navigation visible on compact laptop viewports.

**Architecture:** Use a local, commercially reusable SVG map as geographic geometry. A focused React component renders country paths, dot texture, hubs, routes and moving orders; CSS controls the animation and four responsive states without adding dependencies.

**Tech Stack:** React 18, SVG, CSS animations, Vite 5, Node test runner, agent-browser.

---

### Task 1: Lock the behavior with failing tests

**Files:**
- Modify: `tests/ui-structure.test.js`
- Modify: `tests/visual-system.test.js`

- [ ] Assert that Hero imports `EuropeNetwork`, no source references `BrandBuilder`, and the visual is decorative.
- [ ] Assert that the rail breakpoint starts at `64rem` and the full-width rail refinement starts at `80rem`.
- [ ] Run `node --test tests/ui-structure.test.js tests/visual-system.test.js` and confirm failures come from the current component and `77.5rem` breakpoint.

### Task 2: Add and optimise the map asset

**Files:**
- Create: `public/images/europe-map.svg`

- [ ] Download the SimpleMaps Robinson Europe SVG under its commercial-use licence.
- [ ] Remove fixed colours, dimensions and XML metadata while preserving country IDs and the `0 0 1000 684` viewBox.
- [ ] Confirm the local asset contains country paths for `IT`, `FR`, `DE`, `ES` and `GB` and makes no runtime network request.

### Task 3: Build the Europe network visual

**Files:**
- Create: `src/components/ui/EuropeNetwork.jsx`
- Modify: `src/components/sections/Hero.jsx`
- Delete: `src/components/ui/BrandBuilder.jsx`
- Modify: `src/data/content.js`
- Modify: `src/data/content.en.js`

- [ ] Render the local map geometry through an SVG mask filled by a dot pattern.
- [ ] Add activation layers for European markets, generic logistics hubs, route paths and moving order dots.
- [ ] Replace the Brand Builder in Hero and localise only the micro-labels needed by the visual.
- [ ] Add `aria-hidden="true"` and preserve all meaning in the existing hero copy.
- [ ] Run the focused tests and confirm they pass.

### Task 4: Implement motion and responsive states

**Files:**
- Modify: `src/index.css`

- [ ] Remove all `.brand-builder` rules and add `.europe-network` styles.
- [ ] Animate map reveal, country activation, route drawing and order movement in a nine-second loop.
- [ ] Show a static completed network under `prefers-reduced-motion`.
- [ ] Use mobile below 48rem, tablet from 48rem, compact desktop from 64rem and full desktop from 80rem.
- [ ] Keep mobile copy above a reduced panoramic map with two hubs and fewer visible routes.

### Task 5: Verify in browser

**Files:**
- Modify as needed: `src/index.css`, `src/components/ui/EuropeNetwork.jsx`

- [ ] Verify 390x844, 768x1024, 1024x768, 1180x820, 1440x1000 and 1920x1080.
- [ ] Confirm rail visibility from 1024 px, no overflow, readable hero, static reduced-motion fallback and clean console.
- [ ] Run `node --test tests/*.test.js`, `npm run build`, `npx impeccable --json src`, `git diff --check` and `npm audit --omit=dev`.
