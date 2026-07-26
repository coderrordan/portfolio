# Portfolio final pass

## Scope

Complete the portfolio with a new closing CTA, compact-height desktop rail behaviour, consistent supporting typography and restrained one-time entrance motion.

## Content

### Hero

- Replace the hero eyebrow with the exact text `Amazon Account Management`.
- Apply the same change in English.

### Closing CTA

Use this Italian content:

- Eyebrow: `Già su Amazon o pronto a entrarci?`
- Heading: `Capiamo qual è la prossima mossa.`
- Supporting text: `Se il canale è bloccato, individuiamo cosa lo frena. Se devi ancora partire, valutiamo dove c’è spazio e come entrarci con criterio. Se non posso aiutarti, te lo dirò direttamente.`
- Button: `Parlami del tuo progetto`
- Note: `30 minuti. Contesto reale, priorità chiare, nessuna presentazione standard.`

Provide a faithful English localisation with the same direct tone and content contract.

### Footer

- Set the Italian and English footer line to `Amazon Account Management`.
- Remove `Torino, Italia` and `Turin, Italy`.

## Layout

### CTA

- Keep the current two-column desktop composition.
- Make the CTA button occupy the full width of the right column.
- Keep a full-width button on mobile with a usable touch target.

### Compact-height rail

- Keep logo, navigation, language selector and CTA visible whenever viewport height permits.
- Below approximately `800px`, progressively reduce logo height, navigation row height, rail padding and bottom CTA height.
- Preserve readable labels and a minimum touch/click target.
- When the viewport becomes shorter than the minimum complete layout, allow only the central navigation area to scroll; keep the logo and bottom controls fixed in their grid rows.
- Do not alter the mobile navigation breakpoint or behaviour.

## Supporting Typography

- Treat the hero subtitle, services introduction, results confidentiality introduction, SkalebidOS description and CTA supporting text as one supporting-copy tier.
- Use a shared responsive size around `1.08rem–1.25rem` with consistent `1.65` line height.
- Preserve section-specific colour and max-width rules.
- Do not apply this tier to body paragraphs, card descriptions or metadata.

## Terminal Readability

- Increase command and row text sizes on desktop only.
- Keep the existing compact mobile terminal overrides so every row remains visible inside the intrinsic dashboard ratio.
- Confirm the larger desktop type does not overflow either face.

## Entrance Motion

- Reuse and modernise the existing `useScrollReveal` hook as the single observer owner.
- Invoke it once in `AppContent` and observe declarative reveal elements across sections.
- Reveal each element only once with opacity and a small vertical transform.
- Use three restrained variants: standard copy reveal, short stagger for grouped cards/rows, and slight scale reveal for visual panels.
- Keep delays between `80ms` and `120ms` and durations under `600ms`.
- Do not animate every child independently, add parallax, or introduce continuous decorative motion.
- Hero remains governed by its existing intro behaviour; do not replay the generic reveal there.
- Under `prefers-reduced-motion`, all reveal content must be immediately visible with no transform or transition.
- Content must remain visible when `IntersectionObserver` is unavailable.

## Responsive Verification

- Verify desktop at standard and short heights, including approximately `1440×900`, `1366×768` and `1280×650`.
- Verify mobile at `375×812` and a narrow viewport.
- Confirm no horizontal overflow, no hidden rail CTA at supported desktop heights and no clipped terminal content.
- Confirm reveal content is accessible before and after intersection and immediately visible with reduced motion.
- Run all tests, production build and `git diff --check`.
