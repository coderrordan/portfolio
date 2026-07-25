# Portfolio Daniele Napolitano

## Obiettivo e posizionamento

- Portfolio commerciale in italiano per proprietari e responsabili di brand/e-commerce che vendono su Amazon.
- L'offerta visibile e il messaggio restano **solo Amazon**: gestione account, crescita, listing, PPC, catalogo e posizionamento.
- AI, automazioni, n8n e tool interni sono leve operative di backend. Non proporli come servizi autonomi o come focus della comunicazione commerciale.
- Promessa: risultati e decisioni migliori attraverso dati, metodo e sistemi operativi proprietari; evitare claim generici o promesse di crescita non verificabili.

## Stack e comandi

- React 18 + Vite + Tailwind CSS v3.
- Sviluppo: `npm run dev`.
- Verifica prima di chiudere modifiche: `npm run build`.
- Deploy automatico: Cloudflare Pages su push a `main` del repository `coderrordan/portfolio`.
- Non usare `npm run deploy`: e un residuo del precedente deploy GitHub Pages.

## Regole di modifica

- Contenuti localizzati: aggiorna sia `src/data/content.js` sia `src/data/content.en.js` quando il testo o la struttura del contenuto cambiano.
- Non hardcodare copy nei componenti: i contenuti vivono in `src/data/`.
- Conserva il design system vendored in `src/nexus-ui/`; non aggiornare i token senza una ragione esplicita.
- Non modificare canvas, hook, i18n o le sezioni non coinvolte da una richiesta mirata.
- Mantieni accessibilita, `alt` descrittivi, navigazione da tastiera e layout mobile utilizzabile.

## Chiusura dei task

- Dopo ogni blocco di lavoro, indicare sempre: cosa e stato completato, come verificarlo e il prossimo passo concreto.
- Non lasciare la scelta del prossimo step implicita: se serve una decisione o un asset, chiederlo esplicitamente.
