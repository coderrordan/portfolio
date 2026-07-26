# Aggiornare i contenuti

**Tutto il testo del sito è in `src/data/content.js` (IT) e `src/data/content.en.js` (EN).**
Non hardcodare testo nei componenti.

## Socials
```js
export const SITE = {
  socials: {
    youtube:   'https://www.youtube.com/@CANALE',
    instagram: 'https://www.instagram.com/PROFILO',
    linkedin:  'https://www.linkedin.com/in/PROFILO',
  },
}
```

## Aggiungere un servizio
```js
export const SERVICES = {
  cards: [
    { num: '03', title: '...', desc: '...', tags: ['Tag'], fullWidth: true },
  ],
}
```

## Terminale (About section)
```js
export const TERMINAL_LINES = [
  { type: 'prompt', text: '> comando' },   // arancione
  { type: 'ok',     text: '[BOOT] msg' },  // verde
  { type: 'warn',   text: '[WARN] msg' },  // ambra
  { type: 'json',   text: '{ <k>"key"</k>: <s>"val"</s> }' }, // colorato
  { type: 'spacer', text: '' },
]
```

## i18n
Il sito supporta IT/EN via `LanguageContext`. Testo in `content.js` (IT) e `content.en.js` (EN).
Il selettore lingua è nella Navbar.
