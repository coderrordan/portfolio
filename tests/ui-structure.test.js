import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8')

test('page composition includes diagnosis and a labelled main target', async () => {
  const source = await read('../src/App.jsx')
  assert.match(source, /import Diagnosis/)
  assert.match(source, /<Diagnosis\s*\/>/)
  assert.match(source, /<main id="main-content"/)
})

test('one global reveal observer progressively enhances non-hero sections', async () => {
  const [app, hook, hero, services, cases, system] = await Promise.all([
    read('../src/App.jsx'),
    read('../src/hooks/useScrollReveal.js'),
    read('../src/components/sections/Hero.jsx'),
    read('../src/components/sections/Services.jsx'),
    read('../src/components/sections/CaseStudies.jsx'),
    read('../src/components/sections/SkalebidOS.jsx'),
  ])
  assert.match(app, /useScrollReveal\(\)/)
  assert.match(hook, /IntersectionObserver/)
  assert.match(hook, /if \(!\('IntersectionObserver' in window\)\) return/)
  assert.match(hook, /reveal-ready/)
  assert.match(hook, /\[data-reveal\]/)
  assert.match(hook, /data-revealed/)
  assert.doesNotMatch(hero, /data-reveal/)
  assert.match(services, /data-reveal="group"/)
  assert.match(cases, /data-reveal="group"/)
  assert.match(system, /data-reveal="visual"/)
})

test('page connects the diagnosis to the personal profile before services', async () => {
  const [app, about] = await Promise.all([
    read('../src/App.jsx'),
    read('../src/components/sections/About.jsx'),
  ])
  assert.ok(app.indexOf('<Diagnosis />') < app.indexOf('<About />'))
  assert.ok(app.indexOf('<About />') < app.indexOf('<Services />'))
  assert.doesNotMatch(about, /about-notes|ABOUT\.notes/)
  assert.match(about, /paragraph\.highlights/)
  assert.match(about, /<strong/)
  assert.match(about, /ABOUT\.question\.lead/)
  assert.match(about, /ABOUT\.question\.accent/)
})

test('personal profile owns the published social links while the footer stays commercial', async () => {
  const [about, footer, css] = await Promise.all([
    read('../src/components/sections/About.jsx'),
    read('../src/components/sections/Footer.jsx'),
    read('../src/index.css'),
  ])
  assert.match(about, /SITE\.socials/)
  assert.match(about, /about-socials/)
  assert.match(about, /SocialIcon/)
  assert.match(about, /LinkedIn/)
  assert.match(about, /YouTube/)
  assert.match(about, /Instagram/)
  assert.match(about, /Substack/)
  assert.match(about, /M22\.539 8\.242H1\.46V5\.406/)
  assert.match(about, /UI\.external/)
  assert.doesNotMatch(about, /<span>\{label\}<\/span>/)
  assert.doesNotMatch(footer, /socials\.substack|UI\.substack/)
  assert.match(css, /\.about-media\s*\{[^}]*min-width:\s*0/s)
  assert.match(css, /\.about-media\s*\{[^}]*box-shadow:/s)
  assert.match(css, /\.about-socials\s*\{[^}]*grid-template-columns:\s*repeat\(4, minmax\(0, 1fr\)\)/s)
})

test('diagnosis keeps only numbered problems and one closing question', async () => {
  const source = await read('../src/components/sections/Diagnosis.jsx')
  assert.match(source, /diagnosis-item__heading/)
  assert.match(source, /diagnosis-close/)
  assert.match(source, /diagnosis-close__accent/)
  assert.doesNotMatch(source, /diagnosis-code|item\.impact|DIAGNOSIS\.intro/)
})

test('case studies keep titles with their diagrams and use objective intervention result structure', async () => {
  const [section, visual, css] = await Promise.all([
    read('../src/components/sections/CaseStudies.jsx'),
    read('../src/components/ui/CaseVisual.jsx'),
    read('../src/index.css'),
  ])
  assert.doesNotMatch(section, /cases-heading__line/)
  assert.match(section, /CASE_STUDIES\.heading\.accent/)
  assert.match(section, /UI\.objective/)
  assert.match(section, /item\.objective/)
  assert.doesNotMatch(section, /item\.code|UI\.confidential|confidentiality-note/)
  assert.ok(section.indexOf('<h3>{item.title}</h3>') > section.indexOf('<div className="case-scene">'))
  assert.match(section, /case-scene__visual/)
  assert.match(visual, /case-launch__check/)
  assert.match(visual, /market-pyramid/)
  assert.match(visual, /market-origin.*IT/s)
  assert.match(visual, />DE<.*>FR<.*>ES</s)
  assert.doesNotMatch(visual, />UK</)
  assert.match(css, /\.cases-intro h2\s*\{[^}]*max-width:\s*none/s)
  assert.match(css, /\.cases-heading\s*\{[^}]*text-wrap:\s*wrap/s)
  assert.match(css, /\.case-file h3\s*\{[^}]*max-width:\s*none/s)
  assert.doesNotMatch(css, /\.cases-heading__line:last-child\s*\{[^}]*white-space:\s*nowrap/s)
})

test('system card switches between the full dashboard and terminal accessibly', async () => {
  const [card, section] = await Promise.all([
    read('../src/components/ui/SystemCard.jsx'),
    read('../src/components/sections/SkalebidOS.jsx'),
  ])
  assert.match(card, /useState\('dashboard'\)/)
  assert.match(card, /event\.key === 'Enter'/)
  assert.match(card, /event\.key === ' '/)
  assert.match(card, /aria-pressed=/)
  assert.match(card, /skalebidos-dashboard\.avif/)
  assert.match(card, /<TerminalBox/)
  assert.match(section, /<SystemCard/)
  assert.doesNotMatch(section, /<TerminalBox|SKALEBIDOS\.eyebrow/)
  assert.match(section, /SKALEBIDOS\.description/)
})

test('method particles live behind the section without panel metadata', async () => {
  const [section, particles] = await Promise.all([
    read('../src/components/sections/Process.jsx'),
    read('../src/components/ui/MethodParticles.jsx'),
  ])
  assert.match(section, /process-particles/)
  assert.match(section, /useState\(-1\)/)
  assert.match(section, /active < 0 \? 'amazon'/)
  assert.doesNotMatch(section, /<span className="process-route-end"/)
  assert.match(section, /process-step-copy/)
  assert.ok(section.indexOf('process-layout') < section.indexOf('process-particles'))
  assert.doesNotMatch(section, /PROCESS\.subtext|step\.output|process-visual/)
  assert.match(section, /IntersectionObserver/)
  assert.match(section, /sectionVisible/)
  assert.match(particles, /visibleRef/)
  assert.match(particles, /mediaQuery\.addEventListener\('change'/)
  assert.match(particles, /const POINTS = 1000/)
  assert.match(particles, /symbol === 'amazon'/)
  assert.match(particles, /function amazonShape/)
  assert.match(particles, /function compassShape/)
  assert.match(particles, /needleOuter/)
  assert.match(particles, /needleInner/)
  assert.match(particles, /const diagonal = Math\.SQRT1_2/)
  assert.match(particles, /function executionShape/)
  assert.match(particles, /function optimizationShape/)
  assert.match(particles, /glyphStroke/)
  assert.match(particles, /context\.arc\(/)
  assert.doesNotMatch(particles, /context\.shadowBlur/)
  assert.match(particles, /return moving/)
  assert.match(particles, /if \(!reducedMotion && visibleRef\.current && moving\)/)
})

test('services use one shared call to action below the offer cards', async () => {
  const source = await read('../src/components/sections/Services.jsx')
  assert.match(source, /services-cta/)
  assert.match(source, /SERVICES\.cta/)
  assert.match(source, /SERVICES\.heading\.text/)
  assert.match(source, /SERVICES\.heading\.accent/)
  assert.match(source, />→<\/span>/)
  assert.doesNotMatch(source, /scope-cta|scope\.cta/)
})

test('responsive navigation exposes menu state and Escape handling', async () => {
  const source = await read('../src/components/sections/Navbar.jsx')
  assert.match(source, /aria-expanded=/)
  assert.match(source, /event\.key === 'Escape'/)
  assert.match(source, /document\.body\.style\.overflow/)
  assert.match(source, /window\.matchMedia/)
  assert.match(source, /matchMedia\('\(min-width: 64rem\)'\)/)
  assert.match(source, /\.focus\(\)/)
  assert.match(source, /\.inert = menuOpen/)
})

test('decorative Europe network and media frame have accessible image behavior', async () => {
  const [network, hero, frame] = await Promise.all([
    read('../src/components/ui/EuropeNetwork.jsx'),
    read('../src/components/sections/Hero.jsx'),
    read('../src/components/ui/MediaFrame.jsx'),
  ])
  assert.match(network, /aria-hidden="true"/)
  assert.match(network, /europe-map\.svg/)
  assert.match(network, /animateMotion/)
  assert.match(network, /turin-origin/)
  assert.match(network, /continuous-routes/)
  assert.match(network, /network-hub/)
  assert.match(network, /ivory-map-dots/)
  assert.match(network, /active-country-dots/)
  assert.match(network, /'IT'.*'ES'.*'DE'.*'SE'.*'FR'.*'BE'.*'NL'.*'PL'.*'GB'/s)
  assert.doesNotMatch(network, /package-batch|country-reveal|reveal-/)
  assert.doesNotMatch(network, /europe-network__meta|europe-network__legend/)
  assert.match(hero, /import EuropeNetwork/)
  assert.match(hero, /hero-network-layer/)
  assert.doesNotMatch(hero, /hero-folio|scrollDiagnostic/)
  assert.doesNotMatch(hero, /BrandBuilder|ControlMap/)
  assert.match(frame, /alt=\{alt\}/)
  assert.match(frame, /fetchpriority=/)
  assert.match(frame, /loading=\{priority \? 'eager' : 'lazy'\}/)
})
