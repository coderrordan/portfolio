# Results and System Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Correct the case-study hierarchy and turn the SkalebidOS screenshot and terminal into one accessible two-sided system card.

**Architecture:** Keep localised copy in the two content modules, preserve `CaseVisual` as the owner of case diagrams, and add one focused `SystemCard` component for flip state and keyboard interaction. `SkalebidOS` remains responsible only for section composition, while CSS owns responsive layout, card perspective and reduced-motion behaviour.

**Tech Stack:** React 18, Vite 5, CSS, Node test runner.

---

## File Map

- Modify `src/data/content.js`: Italian case-study, system and terminal copy.
- Modify `src/data/content.en.js`: matching English content contract.
- Modify `src/components/sections/CaseStudies.jsx`: return each title to the left visual column and remove forced heading lines.
- Modify `src/components/ui/CaseVisual.jsx`: orange launch checks and four-market pyramid.
- Create `src/components/ui/SystemCard.jsx`: accessible screenshot/terminal face state.
- Modify `src/components/sections/SkalebidOS.jsx`: compose the new card with heading and supporting copy.
- Modify `src/index.css`: case layout, diagrams, intrinsic screenshot ratio and card motion.
- Modify `tests/content-contract.test.js`: revised content contract.
- Modify `tests/ui-structure.test.js`: revised component and accessibility contract.

### Task 1: Lock the revised content contract

**Files:**
- Modify: `tests/content-contract.test.js:37-48`
- Modify: `src/data/content.js:103-144`
- Modify: `src/data/content.en.js:81-101`

- [ ] **Step 1: Write failing content assertions**

Assert the shortened second title, four-market third title, system subtitle, missing caption and exact terminal sequence:

```js
assert.equal(it.CASE_STUDIES.items[1].title, 'Un brand ha lanciato da zero una cassetta per la lievitazione.')
assert.equal(it.CASE_STUDIES.items[2].title, 'Lo stesso prodotto doveva parlare a 4 mercati diversi.')
assert.match(it.SKALEBIDOS.description, /anni di lavoro Amazon/)
assert.equal(it.SKALEBIDOS.media.label, 'SkalebidOS')
assert.equal(it.SKALEBIDOS.media.caption, null)
assert.deepEqual(it.TERMINAL_LINES.map(({ label, text }) => [label, text]), [
  ['context', 'informazioni brand caricate'],
  ['context', 'best practice da prodotti comparabili importate'],
  ['next', 'creazione listing pianificata'],
  ['sop', 'procedura stesura copy collegata'],
  ['ai', 'analisi e prima bozza assistite'],
  ['review', 'listing in approvazione'],
])
assert.equal(it.UI.terminalReady, 'sistema pronto per la prossima azione')
```

- [ ] **Step 2: Run the content test and verify failure**

Run: `node --test tests/content-contract.test.js`

Expected: FAIL on the old case titles or missing `SKALEBIDOS.description`.

- [ ] **Step 3: Implement the localised content**

Use the exact Italian strings from Step 1. Set:

```js
export const SKALEBIDOS = {
  label: '06',
  sectionTitle: 'Il sistema',
  heading: 'Il lavoro non si perde tra call, file e messaggi.',
  description: 'Un sistema costruito su anni di lavoro Amazon, che collega procedure, dati e responsabilità. Quando ogni parte lavora insieme, l’effetto complessivo è maggiore della somma delle singole attività.',
  media: { label: 'SkalebidOS', caption: null, alt: 'Dashboard SkalebidOS per la gestione delle priorità Amazon' },
}
```

Mirror the shape in English with `The same product needed to speak to 4 different markets.`, `A brand launched a pizza proofing box from scratch.`, the translated description, terminal sequence and `system ready for the next action`.

- [ ] **Step 4: Run the content test and verify success**

Run: `node --test tests/content-contract.test.js`

Expected: all content tests PASS.

### Task 2: Correct the case-study structure and diagrams

**Files:**
- Modify: `tests/ui-structure.test.js:58-73`
- Modify: `src/components/sections/CaseStudies.jsx:11-31`
- Modify: `src/components/ui/CaseVisual.jsx:16-35`
- Modify: `src/index.css:850-941, 1917-2035, 2198-2206`

- [ ] **Step 1: Replace the old structure assertions with failing assertions**

Require one flowing heading, the title inside the first `case-scene` child, launch checks and the pyramid classes:

```js
assert.doesNotMatch(section, /cases-heading__line/)
assert.match(section, /CASE_STUDIES\.heading\.first/)
assert.ok(section.indexOf('<h3>{item.title}</h3>') > section.indexOf('<div className="case-scene">'))
assert.match(visual, /case-launch__check/)
assert.match(visual, /market-pyramid/)
assert.match(visual, /market-origin.*IT/s)
assert.match(visual, />DE<.*>FR<.*>ES</s)
assert.doesNotMatch(css, /white-space:\s*nowrap/)
```

- [ ] **Step 2: Run the UI structure test and verify failure**

Run: `node --test tests/ui-structure.test.js`

Expected: FAIL because the heading still uses line spans and the title is above `case-scene`.

- [ ] **Step 3: Implement the minimal JSX structure**

Render the heading inline while preserving the accent:

```jsx
<h2 className="cases-heading">
  {CASE_STUDIES.heading.first} {CASE_STUDIES.heading.secondBefore}{' '}
  <strong>{CASE_STUDIES.heading.accent}</strong> {CASE_STUDIES.heading.secondAfter}
</h2>
```

Move the title into the visual column:

```jsx
<div className="case-scene">
  <div className="case-scene__visual">
    <h3>{item.title}</h3>
    <CaseVisual type={item.visual} before={UI.objective} after={UI.result} />
  </div>
  <div className="case-flow">...</div>
</div>
```

- [ ] **Step 4: Replace launch dots and market geometry**

Use a semantic decorative check element for every launch row:

```jsx
<i className="case-launch__check">✓</i>
```

For markets, render an `IT / BASE` origin above one branch junction and a bottom row ordered `DE`, `FR`, `ES`; use a `market-pyramid` class and SVG paths from the top centre to each lower node.

- [ ] **Step 5: Update CSS without allowing cross-column overflow**

Remove `.cases-heading__line` and its responsive `nowrap`. Keep `.case-file h3 { max-width: none; }`, but place its padding and spacing on `.case-scene__visual`; set both desktop grid tracks to `minmax(0, ...)`. Remove incremental launch translation, add horizontal inset, style the check orange, and position the market origin at top centre with three nodes on the bottom row.

- [ ] **Step 6: Run the focused tests**

Run: `node --test tests/content-contract.test.js tests/ui-structure.test.js`

Expected: all focused tests PASS.

### Task 3: Build the accessible two-sided system card

**Files:**
- Create: `src/components/ui/SystemCard.jsx`
- Modify: `tests/ui-structure.test.js`
- Modify: `src/components/sections/SkalebidOS.jsx:1-24`
- Modify: `src/components/ui/TerminalBox.jsx:11-14`

- [ ] **Step 1: Write failing system-card structure assertions**

Add a test that requires `useState`, a keyboard handler for Enter and Space, two buttons with `aria-pressed`, the dashboard source, `TerminalBox`, and the absence of a standalone terminal in `SkalebidOS.jsx`:

```js
assert.match(card, /useState\('dashboard'\)/)
assert.match(card, /event\.key === 'Enter'/)
assert.match(card, /event\.key === ' '/)
assert.match(card, /aria-pressed=/)
assert.match(card, /skalebidos-dashboard\.avif/)
assert.match(card, /<TerminalBox/)
assert.match(section, /<SystemCard/)
assert.doesNotMatch(section, /<TerminalBox|SKALEBIDOS\.eyebrow/)
assert.match(section, /SKALEBIDOS\.description/)
```

- [ ] **Step 2: Run the UI structure test and verify failure**

Run: `node --test tests/ui-structure.test.js`

Expected: FAIL because `SystemCard.jsx` does not exist.

- [ ] **Step 3: Implement `SystemCard`**

Create a component with `face` state (`dashboard` or `terminal`), a persistent top bar, two explicit face-selection buttons, and a central keyboard/click target. Stop propagation on indicator clicks so selecting a face does not immediately toggle it again. Use `aria-label` text from localised UI keys and apply `is-flipped` only for the terminal face.

- [ ] **Step 4: Make terminal row keys stable**

Change the terminal map callback to include the index:

```jsx
{TERMINAL_LINES.map((line, index) => (
  <div key={`${line.label}-${index}`} className={`terminal-line terminal-${line.type}`}>
```

- [ ] **Step 5: Compose the revised section**

Replace `MediaFrame` and the separate `TerminalBox` with `<SystemCard />`. Keep `SectionLabel`, heading and `SKALEBIDOS.description` in `.os-console`.

- [ ] **Step 6: Run the focused tests**

Run: `node --test tests/content-contract.test.js tests/ui-structure.test.js`

Expected: all focused tests PASS.

### Task 4: Style and verify the system-card interaction

**Files:**
- Modify: `src/index.css:1040-1197, 2095-2119, responsive and reduced-motion blocks`

- [ ] **Step 1: Add card-shell and intrinsic-ratio styles**

Create a persistent `.system-card__bar`, a `.system-card__stage` with `aspect-ratio: 1280 / 722` and `perspective`, and two absolutely positioned faces. Use `backface-visibility: hidden`; rotate only `.system-card__inner`; make the terminal fill the back face without its own shadow.

- [ ] **Step 2: Add restrained interaction feedback**

Apply `transform: scale(1.015)` to the dashboard image only when the front face is hovered. Use a 420ms `cubic-bezier(0.22, 1, 0.36, 1)` flip. Give active indicators orange fill and visible keyboard focus.

- [ ] **Step 3: Add reduced-motion and responsive rules**

Inside the existing reduced-motion query, disable image scaling and 3D transition. On mobile, keep the intrinsic ratio, prevent face overflow and place `.os-console` below the card.

- [ ] **Step 4: Run complete automated verification**

Run: `node --test tests/*.test.js`

Expected: all tests PASS with zero failures.

Run: `npm run build`

Expected: Vite completes successfully.

Run: `git diff --check`

Expected: no output.

- [ ] **Step 5: Verify in browser**

At desktop and 375px mobile widths, verify:

- The results heading wraps only at its container boundary.
- Case titles stay in the left column on desktop.
- Launch checks remain inside the diagram.
- The market pyramid has IT above DE/FR/ES.
- The full dashboard is visible at its intrinsic ratio.
- Clicking the card and either indicator selects the correct face.
- Enter and Space flip the focused card.
- Hover zoom affects only the screenshot.
- Reduced-motion mode changes face without a 3D animation.
- `document.documentElement.scrollWidth === document.documentElement.clientWidth`.

No commits are included in this plan because repository commits were not requested.
