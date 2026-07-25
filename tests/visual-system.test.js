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
  assert.match(css, /--rail-width:\s*clamp\(13\.75rem,\s*15vw,\s*17\.5rem\)/)
  assert.match(css, /\.rail-index a\s*\{[^}]*grid-template-columns:\s*auto 1fr/s)
  assert.match(css, /\.rail-index a strong\s*\{[^}]*font-size:\s*clamp\(1rem,[^}]*1\.125rem\)/s)
  assert.match(css, /\.scope-details p\s*\{[^}]*font-size:\s*var\(--text-body\)/s)
  assert.match(css, /\.case-flow p\s*\{[^}]*font-size:\s*var\(--text-body\)/s)
  assert.match(css, /\.hero-actions a\s*\{[^}]*min-height:\s*4rem[^}]*font-size:\s*1\.125rem/s)
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
