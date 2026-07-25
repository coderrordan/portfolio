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

test('page puts personal profile after commercial proof', async () => {
  const source = await read('../src/App.jsx')
  assert.ok(source.indexOf('<SkalebidOS />') < source.indexOf('<About />'))
})

test('responsive navigation exposes menu state and Escape handling', async () => {
  const source = await read('../src/components/sections/Navbar.jsx')
  assert.match(source, /aria-expanded=/)
  assert.match(source, /event\.key === 'Escape'/)
  assert.match(source, /document\.body\.style\.overflow/)
  assert.match(source, /window\.matchMedia/)
  assert.match(source, /\.focus\(\)/)
  assert.match(source, /\.inert = menuOpen/)
})

test('decorative brand builder and media frame have accessible image behavior', async () => {
  const [builder, hero, frame] = await Promise.all([
    read('../src/components/ui/BrandBuilder.jsx'),
    read('../src/components/sections/Hero.jsx'),
    read('../src/components/ui/MediaFrame.jsx'),
  ])
  assert.match(builder, /aria-hidden="true"/)
  assert.match(hero, /import BrandBuilder/)
  assert.doesNotMatch(hero, /ControlMap/)
  assert.match(frame, /alt=\{alt\}/)
  assert.match(frame, /fetchpriority=/)
  assert.match(frame, /loading=\{priority \? 'eager' : 'lazy'\}/)
})
