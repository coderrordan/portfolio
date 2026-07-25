# Europe Map Background Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the European map into a frameless hero background where batches of orders from Turin progressively activate target countries.

**Architecture:** Keep `EuropeNetwork.jsx` as the single visual component. Extract target-country path data from the local SVG into a focused module, render base and active country layers inline, and generate deterministic package batches whose arrival timing controls progressive country reveals.

**Tech Stack:** React 18, inline SVG, CSS animations, Vite 5, Node test runner, agent-browser.

---

### Task 1: Add failing structural tests

**Files:**
- Modify: `tests/ui-structure.test.js`
- Modify: `tests/visual-system.test.js`

- [ ] Assert that the network has a Turin origin, package batches and country reveal layers.
- [ ] Assert that meta and legend markup no longer exist.
- [ ] Assert that the visual is an absolute hero layer without border declarations.
- [ ] Run focused tests and confirm failures against the current framed component.

### Task 2: Extract target country geometry

**Files:**
- Create: `src/data/europe-country-paths.js`

- [ ] Extract paths for Italy, France, Germany, Spain, United Kingdom and Poland from `public/images/europe-map.svg`.
- [ ] Export immutable country objects keyed by ISO code.
- [ ] Keep the full local map for the white base silhouette and use inline paths only for progressive orange reveals.

### Task 3: Implement package batches and progressive activation

**Files:**
- Modify: `src/components/ui/EuropeNetwork.jsx`

- [ ] Remove meta, legend, generic hub labels and broad activation circles.
- [ ] Render Turin as the only origin.
- [ ] Generate ten deterministic package paths per desktop target and five mobile-visible paths per primary target.
- [ ] Reveal each country in ten dot-pattern bands synchronized with package arrivals.
- [ ] Sequence France, Germany, Spain, United Kingdom and Poland across an 18-22 second cycle.

### Task 4: Integrate the map into the hero background

**Files:**
- Modify: `src/components/sections/Hero.jsx`
- Modify: `src/index.css`

- [ ] Move the visual outside the content grid as an absolute decorative layer.
- [ ] Place the map mostly on the right, bleed it behind copy, align it to the hero top and clip northern Europe.
- [ ] Add a dark left-to-right readability gradient without adding a panel border.
- [ ] Reduce destinations and package visibility on mobile.
- [ ] Show a static complete network under reduced motion.

### Task 5: Verify the implementation

**Files:**
- Modify as needed: `src/components/ui/EuropeNetwork.jsx`, `src/index.css`

- [ ] Verify initial white fade-in, France batch in transit, progressive country activation and complete state.
- [ ] Verify 390, 768, 1024, 1180, 1440 and 1920 px with no overflow.
- [ ] Run all tests, build, Impeccable, diff check and runtime audit.
