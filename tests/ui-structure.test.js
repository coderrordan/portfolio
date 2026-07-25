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

test('diagnosis keeps only numbered problems and one closing question', async () => {
  const source = await read('../src/components/sections/Diagnosis.jsx')
  assert.match(source, /diagnosis-item__heading/)
  assert.match(source, /diagnosis-close/)
  assert.match(source, /diagnosis-close__accent/)
  assert.doesNotMatch(source, /diagnosis-code|item\.impact|DIAGNOSIS\.intro/)
})

test('method particles live behind the section without panel metadata', async () => {
  const [section, particles] = await Promise.all([
    read('../src/components/sections/Process.jsx'),
    read('../src/components/ui/MethodParticles.jsx'),
  ])
  assert.match(section, /process-particles/)
  assert.match(section, /useState\(-1\)/)
  assert.match(section, /active < 0 \? 'scatter'/)
  assert.match(section, /process-step-copy/)
  assert.ok(section.indexOf('process-layout') < section.indexOf('process-particles'))
  assert.doesNotMatch(section, /PROCESS\.subtext|step\.output|process-visual/)
  assert.match(particles, /IntersectionObserver/)
  assert.match(particles, /mediaQuery\.addEventListener\('change'/)
  assert.match(particles, /const POINTS = 320/)
  assert.match(particles, /context\.arc\(/)
  assert.match(particles, /context\.shadowBlur/)
})

test('services use one shared call to action below the offer cards', async () => {
  const source = await read('../src/components/sections/Services.jsx')
  assert.match(source, /services-cta/)
  assert.match(source, /SERVICES\.cta/)
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
