# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio homepage as a distinctive Amazon operating manual that positions Daniele as the external owner of the channel and converts qualified companies into calls.

**Architecture:** Keep React 18, Vite, Tailwind and the existing translation provider. Replace the current page composition with focused section components, shared editorial media primitives and data-driven Italian/English content; use semantic HTML plus CSS/SVG for the visual system, with no runtime data APIs or new visual dependencies.

**Tech Stack:** React 18, Vite 5, Tailwind CSS 3, CSS custom properties, inline SVG, Google Fonts.

---

## File Structure

- Modify `src/App.jsx`: assemble the new section order.
- Modify `src/data/content.js`: canonical Italian commercial copy and structured cases/scopes.
- Modify `src/data/content.en.js`: English content with the same data contract.
- Modify `src/components/sections/Navbar.jsx`: desktop rail and mobile header/menu.
- Modify `src/components/sections/Hero.jsx`: promise, qualification and control-map composition.
- Create `src/components/ui/ControlMap.jsx`: accessible decorative Amazon dependency map.
- Create `src/components/ui/MediaFrame.jsx`: reusable image/screenshot framing and captions.
- Create `src/components/sections/Diagnosis.jsx`: pain-point dependency matrix.
- Modify `src/components/sections/About.jsx`: role-led personal section and framed portrait.
- Modify `src/components/sections/Services.jsx`: responsibility scopes rather than cards.
- Modify `src/components/sections/CaseStudies.jsx`: confidential case files.
- Modify `src/components/sections/Process.jsx`: continuous operating route.
- Modify `src/components/sections/SkalebidOS.jsx`: framed product screenshot and meaningful terminal.
- Modify `src/components/ui/TerminalBox.jsx`: render operational statuses from localized content.
- Modify `src/components/sections/CtaSection.jsx`: light final conversion surface.
- Modify `src/components/sections/Footer.jsx`: current year and no fake social links.
- Modify `src/index.css`: editorial layout, rail, responsive rules, motion and media frames.
- Modify `src/nexus-ui/tokens/colors.css`: restrained warm-black, ivory and orange palette.
- Modify `src/nexus-ui/tokens/typography.css`: final display/body/mono families.
- Modify `index.html`: font loading, canonical, favicon and Open Graph metadata.
- Create `public/og-portfolio.svg`: local social sharing artwork.

### Task 1: Content Contract and Commercial Copy

- [ ] Replace both locale files with matching exports and matching object shapes.
- [ ] Make the hero sell channel ownership, not activities.
- [ ] Add `DIAGNOSIS`, structured collaboration scopes and three confidential cases.
- [ ] Keep case outcomes qualitative until verified metrics exist.
- [ ] Replace terminal content with localized module, SOP, priority and reporting states.
- [ ] Remove placeholder social URLs and use `null` for unavailable profiles.
- [ ] Verify locale parity with:

```bash
node -e "Promise.all([import('./src/data/content.js'),import('./src/data/content.en.js')]).then(([it,en])=>{const a=Object.keys(it).sort();const b=Object.keys(en).sort();if(JSON.stringify(a)!==JSON.stringify(b))throw new Error('locale exports differ');console.log('locale exports aligned')})"
```

Expected: `locale exports aligned`.

### Task 2: Navigation and Page Skeleton

- [ ] Update `App.jsx` to render Hero, Diagnosis, About, Services, CaseStudies, Process, SkalebidOS and CTA in that order.
- [ ] Implement a fixed desktop rail above the content breakpoint.
- [ ] Implement an accessible mobile header with menu button, `aria-expanded`, Escape close, link close and scroll locking.
- [ ] Keep section observation in one hook inside the navigation component.
- [ ] Ensure the main content receives rail offset only at the desktop-rail breakpoint.

### Task 3: Hero Control Map

- [ ] Create a semantic hero with one `h1`, two CTAs and a compact qualification line.
- [ ] Build `ControlMap.jsx` as an `aria-hidden` SVG/CSS visual with nodes for Listing, PPC, Catalogo, Margine and Mercati.
- [ ] Use CSS custom properties for pointer movement and disable movement under `prefers-reduced-motion`.
- [ ] Confirm that all hero information remains available when the visual is hidden.

### Task 4: Diagnosis and Personal Proof

- [ ] Build the diagnosis matrix from localized pain-point data.
- [ ] Connect issues visually without presenting invented metrics.
- [ ] Reframe About around why Daniele can own the channel.
- [ ] Create `MediaFrame.jsx` with `label`, `caption`, `ratio`, `priority`, `src` and `alt` props.
- [ ] Preserve the portrait aspect ratio and load it through `MediaFrame`.

### Task 5: Collaboration and Confidential Cases

- [ ] Render Account Management as the primary responsibility scope.
- [ ] Render launch/expansion, focused intervention and operational consulting as secondary scopes.
- [ ] Include fit, responsibility and expected operational outcome for every scope.
- [ ] Render three case files with situation, intervention and qualitative result.
- [ ] Add one clear confidentiality note and remove all placeholder case language.

### Task 6: Method and SkalebidOS

- [ ] Turn the five process steps into one continuous route with semantic ordered-list markup.
- [ ] Frame the 16:9 SkalebidOS screenshot without arbitrary cropping.
- [ ] Keep the terminal beside the screenshot on desktop and below it on narrow layouts.
- [ ] Make the terminal render localized operational statuses without fake counts or versions.

### Task 7: Final CTA, Footer and Metadata

- [ ] Build a light final CTA around the most costly current account problem.
- [ ] Keep Google Calendar as a normal external link and do not embed the iframe.
- [ ] Remove unavailable social links from About and Footer.
- [ ] Compute the footer year with `new Date().getFullYear()`.
- [ ] Add title, description, canonical, favicon and Open Graph/Twitter tags.
- [ ] Add a local SVG Open Graph asset that uses the same visual language.

### Task 8: Editorial Design System and Responsive Adaptation

- [ ] Select and load a characterful display family plus a readable body family after checking Italian glyph coverage and web availability.
- [ ] Implement warm-black, ivory, paper and orange tokens.
- [ ] Add section-specific compositions rather than repeated equal card grids.
- [ ] Add coherent image chrome, captions and asset numbering.
- [ ] Add visible focus styles, 44px touch targets and reduced-motion fallbacks.
- [ ] Add content-driven breakpoints for mobile header, wide content and desktop rail.
- [ ] Prevent horizontal overflow at 320px and excessive line length at wide viewports.

### Task 9: Verification and Refinement

- [ ] Run locale parity verification.
- [ ] Run `npm run build`; expected result is a successful Vite production build.
- [ ] Open the site with `agent-browser` and inspect the accessibility snapshot.
- [ ] Capture full-page screenshots at 390x844, 768x1024, 1440x1000 and 1920x1080.
- [ ] Check mobile menu keyboard behavior, language switching, section links, calendar link and email link.
- [ ] Check browser console errors and horizontal overflow.
- [ ] Compare the screenshots against the approved spec and fix hierarchy, rhythm, image framing and copy wrapping issues.

## Completion Criteria

- The first viewport communicates target, problem, role and next action without relying on the visual.
- Every section has a distinct visual device and contributes new evidence or decision support.
- No invented metrics, placeholder social links or mismatched locale structures remain.
- Desktop uses the rail; mobile and tablet use the compact header without losing navigation.
- Build, browser checks and responsive screenshots pass.
