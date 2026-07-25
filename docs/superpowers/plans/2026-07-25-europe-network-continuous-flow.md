# Europe Network Continuous Flow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the staged European map animation with a permanent dotted network and continuous asynchronous package traffic.

**Architecture:** `EuropeNetwork.jsx` will render a dotted full-Europe mask, complete country activation paths and a deterministic set of varied hub-to-hub routes. CSS will handle one-shot map and country entry fades, permanent final state, right-side placement and reduced-motion behavior.

**Tech Stack:** React 18, inline SVG, CSS animations, SVG SMIL, Vite 5, Node test runner, agent-browser.

---

### Task 1: Define the new behavior with failing tests

**Files:**
- Modify: `tests/ui-structure.test.js`
- Modify: `tests/visual-system.test.js`

- [ ] Assert that the component contains `continuous-routes`, `network-hub` and an ivory dotted base mask.
- [ ] Assert that batch, band and mobile reveal markup no longer exists.
- [ ] Assert that country activation uses one-shot `forwards` animation rather than an infinite cycle.
- [ ] Run `node --test tests/ui-structure.test.js tests/visual-system.test.js` and confirm the current implementation fails.

### Task 2: Rebuild the SVG network

**Files:**
- Modify: `src/components/ui/EuropeNetwork.jsx`

- [ ] Remove package batches, reveal clip paths and segmented country layers.
- [ ] Render Europe through a light dot pattern masked by `public/images/europe-map.svg`.
- [ ] Render each active country once with an irregular activation delay.
- [ ] Define Italian hubs in Turin, Milan, Bologna, Rome and Naples plus European destination hubs.
- [ ] Define deterministic cross-border, domestic and hub-to-hub routes with varied durations and negative start offsets.
- [ ] Render package glyphs with indefinite motion and no synchronized reset.

### Task 3: Restyle and reposition the map

**Files:**
- Modify: `src/index.css`

- [ ] Shift `hero-network-layer` farther right and keep the full European silhouette legible.
- [ ] Replace the grey base image treatment with brighter ivory dots.
- [ ] Fade countries as complete orange shapes using one-shot animations with `forwards` fill mode.
- [ ] Keep route lines subtle and package motion continuous.
- [ ] Reduce route density on mobile and expose the final static network under reduced motion.

### Task 4: Verify the stable network

**Files:**
- Modify as needed: `src/components/ui/EuropeNetwork.jsx`, `src/index.css`

- [ ] Run all 13+ Node tests and `npm run build`.
- [ ] Run `npx impeccable --json src` and `git diff --check`.
- [ ] Verify 390, 768, 1024, 1180, 1440 and 1920 px without overflow.
- [ ] Verify that country opacity stays active after entry and package motion continues at later SVG times without a global reset.
- [ ] Verify reduced motion displays the complete static network and no packages.
