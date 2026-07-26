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
  assert.equal(it.HERO.eyebrow, 'Amazon Account Management')
  assert.equal(it.HERO.ctas.length, 1)
  assert.equal(it.HERO.ctas[0].label, 'Parlami del tuo progetto')
  assert.equal(it.DIAGNOSIS.items.length, 3)
  assert.equal(it.SERVICES.scopes.length, 3)
  assert.deepEqual(it.SERVICES.scopes.map(({ title, kicker }) => [title, kicker]), [
    ['Intervento operativo', 'A progetto'],
    ['Account Management', 'Continuativo'],
    ['Consulenza personalizzata', 'Una tantum'],
  ])
  assert.deepEqual(it.SERVICES.heading, { text: 'Tre modi per lavorare', accent: 'insieme.' })
  assert.deepEqual(en.SERVICES.heading, { text: 'Three ways to work', accent: 'together.' })
  assert.equal(it.SERVICES.cta, 'Parlami del tuo progetto')
  assert.equal(it.UI.contact, 'Parlami del tuo progetto')
  assert.equal(it.CASE_STUDIES.items.length, 3)
  assert.deepEqual(it.CASE_STUDIES.heading, {
    first: 'Tre problemi.',
    secondBefore: 'Tre',
    accent: 'sistemi',
    secondAfter: 'rimessi in moto.',
  })
  assert.match(it.CASE_STUDIES.intro, /^Brand e metriche restano riservati/)
  assert.ok(it.CASE_STUDIES.items.every((item) => item.objective && !('situation' in item) && !('code' in item)))
  assert.equal(it.CASE_STUDIES.items[1].title, 'Un brand ha lanciato da zero una cassetta per la lievitazione.')
  assert.equal(it.CASE_STUDIES.items[2].title, 'Lo stesso prodotto doveva parlare a 4 mercati diversi.')
  assert.match(it.CASE_STUDIES.items[1].result, /10\.000 €.*settimanal/i)
  assert.doesNotMatch(JSON.stringify(it.CASE_STUDIES), /confidentiality/)
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
  assert.equal(it.CTA_SECTION.eyebrow, 'Già su Amazon o pronto a entrarci?')
  assert.deepEqual(it.CTA_SECTION.heading, ['Capiamo qual è', 'la prossima mossa.'])
  assert.match(it.CTA_SECTION.text, /Se non posso aiutarti, te lo dirò direttamente\.$/)
  assert.equal(it.CTA_SECTION.ctas[0].label, 'Parlami del tuo progetto')
  assert.equal(it.UI.footerLine, 'Amazon Account Management')
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
    assert.equal(locale.SITE.socials.youtube, 'https://www.youtube.com/@daniele.napolitano')
    assert.equal(locale.SITE.socials.instagram, 'https://www.instagram.com/daniele.p.napolitano/')
    assert.equal(locale.SITE.socials.linkedin, 'https://www.linkedin.com/in/daniele-p-napolitano')
    assert.equal(locale.SITE.socials.substack, 'https://substack.com/@napolitanodaniele')
  }
})
