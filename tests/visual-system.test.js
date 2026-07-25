import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8')

test('display typography avoids compressed letter collisions', async () => {
  const [tokens, html, css] = await Promise.all([
    read('../src/nexus-ui/tokens/typography.css'),
    read('../index.html'),
    read('../src/index.css'),
  ])

  assert.doesNotMatch(tokens, /Anybody/)
  assert.doesNotMatch(html, /Anybody/)
  assert.match(tokens, /Funnel Display/)
  assert.match(css, /--text-body:\s*1rem/)
  assert.match(css, /--text-label:\s*0\.75rem/)
})

test('desktop rail and commercial body copy meet readable minimums', async () => {
  const css = await read('../src/index.css')
  assert.match(css, /--rail-width:\s*clamp\(11rem,\s*18vw,\s*13\.75rem\)/)
  assert.match(css, /\.rail-index a\s*\{[^}]*grid-template-columns:\s*auto 1fr/s)
  assert.match(css, /\.rail-index a strong\s*\{[^}]*font-size:\s*clamp\(1rem,[^}]*1\.125rem\)/s)
  assert.match(css, /\.scope-details p\s*\{[^}]*font-size:\s*var\(--text-body\)/s)
  assert.match(css, /\.case-flow p\s*\{[^}]*font-size:\s*var\(--text-body\)/s)
  assert.match(css, /\.hero-actions a\s*\{[^}]*min-height:\s*4rem[^}]*font-size:\s*1\.125rem/s)
  assert.match(css, /\.rail-contact\s*\{[^}]*min-height:\s*4\.6rem[^}]*font-size:\s*1\.125rem/s)
})

test('compact laptops keep desktop navigation from 1024px', async () => {
  const css = await read('../src/index.css')
  assert.match(css, /@media \(min-width: 64rem\)[\s\S]*?\.mobile-header,[\s\S]*?\.site-rail\s*\{[^}]*display:\s*grid/s)
  assert.match(css, /@media \(min-width: 80rem\)\s*\{[^}]*--rail-width:/s)
  assert.match(css, /@media \(min-width: 64rem\) and \(max-width: 79\.99rem\)[\s\S]*?\.hero-network-layer\s*\{[^}]*width:\s*42vw[^}]*}[\s\S]*?\.hero-sub\s*\{[^}]*max-width:\s*30rem/s)
})

test('Europe map behaves as an unframed hero background', async () => {
  const css = await read('../src/index.css')
  assert.match(css, /\.hero-section::before,[\s\S]*?\.process-section::before\s*\{[^}]*background-image:\s*radial-gradient/s)
  assert.match(css, /\.hero-section::before,[\s\S]*?\.process-section::before\s*\{[^}]*background-attachment:\s*fixed/s)
  assert.doesNotMatch(css, /\.hero-section::before\s*\{[^}]*linear-gradient\(var\(--nexus-border-subtle\)/s)
  assert.doesNotMatch(css, /\.process-visual\s*\{[^}]*(?:border|background)/s)
  assert.match(css, /\.process-section\s*\{[^}]*overflow:\s*clip/s)
  assert.match(css, /\.process-route li:not\(\.is-active\)\s*\{[^}]*opacity:\s*0\.78/s)
  assert.match(css, /\.process-route li\s*\{[^}]*min-height:\s*clamp\(18rem/s)
  assert.match(css, /\.process-route li\.is-active \.process-step-copy\s*\{[^}]*transform:\s*translateX\(0\.5rem\)/s)
  assert.doesNotMatch(css, /\.process-route li\.is-active\s*\{[^}]*transform:/s)
  assert.match(css, /\.hero-network-layer\s*\{[^}]*position:\s*absolute/s)
  assert.doesNotMatch(css, /\.europe-network\s*\{[^}]*border(?:-|:)/s)
  assert.doesNotMatch(css, /\.europe-network__(?:meta|legend)/)
  assert.match(css, /\.country-active\s*\{[^}]*animation:[^;]*network-country-in[^;]*forwards/s)
  assert.doesNotMatch(css, /network-map-cycle|network-origin-cycle/)
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.country-active[\s\S]*?opacity:\s*1\s*!important/s)
})

test('language selection uses one scalable dropdown component', async () => {
  const [navbar, dropdown] = await Promise.all([
    read('../src/components/sections/Navbar.jsx'),
    read('../src/components/ui/LanguageDropdown.jsx'),
  ])
  assert.match(navbar, /import LanguageDropdown/)
  assert.doesNotMatch(navbar, /\['it', 'en'\]\.map/)
  assert.match(dropdown, /LANGUAGES\.map/)
  assert.match(dropdown, /aria-haspopup="listbox"/)
})

test('services use a light editorial surface with readable ink', async () => {
  const css = await read('../src/index.css')
  assert.match(css, /\.services-section\s*\{[^}]*background:\s*var\(--nexus-paper\)[^}]*color:\s*var\(--nexus-ink\)/s)
  assert.match(css, /\.services-intro\s*>\s*p\s*\{[^}]*color:\s*oklch\(/s)
  assert.match(css, /\.services-intro\s*>\s*p\s*\{[^}]*max-width:\s*none/s)
  assert.match(css, /\.services-section\s+\.scope-details p\s*\{[^}]*color:\s*oklch\(/s)
  assert.match(css, /\.scope-grid \.scope-featured\s*\{[^}]*border:\s*3px solid var\(--nexus-accent-primary\)[^}]*background:\s*oklch\(/s)
  assert.match(css, /\.scope-featured h3\s*\{[^}]*color:\s*var\(--nexus-accent-primary\)/s)
  assert.match(css, /\.services-cta\s*\{[^}]*min-height:\s*5\.5rem/s)
  assert.match(css, /\.services-cta\s*\{[^}]*background:\s*var\(--nexus-accent-primary\)[^}]*text-align:\s*center/s)
  assert.match(css, /@media \(min-width: 64rem\)[\s\S]*?\.scope-grid\s*\{[^}]*grid-template-columns:\s*0\.92fr 1\.12fr 0\.92fr/s)
})

test('about copy uses its full column and highlights the closing question', async () => {
  const css = await read('../src/index.css')
  assert.match(css, /\.about-copy h2\s*\{[^}]*max-width:\s*none/s)
  assert.match(css, /\.about-text strong\s*\{[^}]*font-weight:\s*700/s)
  assert.match(css, /\.about-question\s*\{[^}]*color:\s*var\(--nexus-text-primary\)/s)
  assert.match(css, /\.about-question strong\s*\{[^}]*color:\s*var\(--nexus-accent-primary\)/s)
  assert.match(css, /\.diagnosis-close__accent\s*\{[^}]*background:\s*var\(--nexus-accent-primary\)/s)
})
