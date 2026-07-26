# Results and system refinement

## Scope

Refine the `Risultati` and `Il sistema` sections without changing the portfolio's established editorial visual language.

## Risultati

### Section heading

- Render the heading as one continuous text flow.
- Keep `sistemi` in the accent colour.
- Do not force a line break or apply `white-space: nowrap`; wrapping must happen only at the available section boundary.

### Case-study layout

- On desktop, preserve two columns: title and diagram on the left, `Obiettivo / Intervento / Risultato` on the right.
- Keep each title inside the left column so it cannot extend over the text column.
- On mobile, stack title, diagram and text without horizontal overflow.

### Content and diagrams

- Shorten case 2 to `Un brand ha lanciato da zero una cassetta per la lievitazione.`
- In the case 2 diagram, move all five phases farther inside the frame and replace the final dots with orange check marks.
- Rename case 3 to `Lo stesso prodotto doveva parlare a 4 mercati diversi.`
- Rebuild the case 3 diagram as a pyramid: Italy at the top as the base market, with three descending branches to Germany, France and Spain.
- Apply equivalent content changes to the English locale.

## Il sistema

### Content hierarchy

- Keep the section marker `06 / Il sistema`.
- Remove the `SkalebidOS` eyebrow above the heading.
- Replace `Sistema operativo` in the media card bar with `SkalebidOS`.
- Remove the caption `Vista anonimizzata · Priorità e attività`.
- Add a supporting paragraph below the heading: `Un sistema costruito su anni di lavoro Amazon, che collega procedure, dati e responsabilità. Quando ogni parte lavora insieme, l’effetto complessivo è maggiore della somma delle singole attività.`
- Add a faithful English translation.

### Layout

- Keep the interactive system card in the left column and the heading plus supporting paragraph in the right column.
- Remove the separate terminal from the text column.
- Use the dashboard image's intrinsic `1280 × 722` ratio rather than a generic forced ratio.
- The image to anonymise is `public/images/skalebidos-dashboard.avif`.

### Interactive card

- Keep one persistent top bar outside the rotating faces, labelled `SkalebidOS`, with the two face controls on its right.
- The front face shows the dashboard screenshot.
- The back face contains the existing terminal component.
- A subtle image-only hover zoom provides feedback without changing the card dimensions.
- Clicking anywhere on the card flips it between screenshot and terminal.
- The two controls in the persistent top bar select the corresponding face and visibly expose the active state.
- The card must work with keyboard activation and expose its state through accessible labels and pressed states.
- Under `prefers-reduced-motion`, replace the 3D rotation with an immediate or near-immediate face change and disable the image zoom.
- The card keeps the same footprint on both faces and must not overflow on mobile.

### Terminal sequence

Replace the generic terminal lines with a concrete listing workflow:

1. `[CONTEXT] informazioni brand caricate`
2. `[CONTEXT] best practice da prodotti comparabili importate`
3. `[NEXT] creazione listing pianificata`
4. `[SOP] procedura stesura copy collegata`
5. `[AI] analisi e prima bozza assistite`
6. `[REVIEW] listing in approvazione`
7. Final command: `sistema pronto per la prossima azione`

The sequence must communicate that AI supports the work while the listing remains subject to human review and approval. Terminal data needs stable unique keys even when two rows share the `CONTEXT` label. Apply a faithful English localisation.

## Verification

- Extend content-contract tests for the revised titles, subtitle and localised labels.
- Extend structure tests for the left-column title, pyramid market diagram and interactive system card.
- Verify click, indicator and keyboard interaction in a browser.
- Verify desktop and mobile layouts, reduced-motion behaviour, horizontal overflow and preservation of the full screenshot.
- Run the complete test suite, production build and `git diff --check`.
