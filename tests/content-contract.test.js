import assert from 'node:assert/strict'
import test from 'node:test'

import * as en from '../src/data/content.en.js'
import * as it from '../src/data/content.js'

const shape = (value) => {
  if (Array.isArray(value)) return value.map(shape)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, shape(child)]))
  }
  return typeof value
}

test('Italian and English expose the same content contract', () => {
  assert.deepEqual(Object.keys(it).sort(), Object.keys(en).sort())

  for (const key of Object.keys(it)) {
    assert.deepEqual(shape(it[key]), shape(en[key]), `content shape differs for ${key}`)
  }
})

test('commercial content stays concise and focused', () => {
  assert.equal(it.HERO.lines.join(' '), 'Il tuo brand su Amazon non si improvvisa.')
  assert.equal(it.HERO.ctas.length, 1)
  assert.equal(it.HERO.ctas[0].label, 'Parlami del tuo brand')
  assert.equal(it.DIAGNOSIS.items.length, 3)
  assert.equal(it.SERVICES.scopes.length, 3)
  assert.deepEqual(it.SERVICES.scopes.map(({ title, kicker }) => [title, kicker]), [
    ['Intervento operativo', 'A progetto'],
    ['Account Management', 'Continuativo'],
    ['Consulenza personalizzata', 'Una tantum'],
  ])
  assert.equal(it.SERVICES.cta, 'Parlami del tuo brand')
  assert.equal(it.CASE_STUDIES.items.length, 3)
  assert.ok(it.CASE_STUDIES.confidentiality.length > 40)
  assert.equal(it.ABOUT.media.label, 'Daniele / @LotusRetreat a Krimml')
  assert.deepEqual(it.NAV_LINKS.map(({ label }) => label), [
    'Cosa risolvo',
    'Chi sono',
    'Servizi',
    'Metodo',
    'Risultati',
    'Il sistema',
  ])
})

test('published content has no placeholder social profiles', () => {
  for (const locale of [it, en]) {
    assert.equal(locale.SITE.socials.youtube, null)
    assert.equal(locale.SITE.socials.instagram, null)
    assert.equal(locale.SITE.socials.linkedin, null)
    assert.equal(locale.SITE.socials.substack, 'https://substack.com/@napolitanodaniele')
  }
})
