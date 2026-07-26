export const SITE = {
  name: 'Daniele Napolitano',
  title: 'Amazon Account Manager',
  email: 'patriziodaniele.napolitano@gmail.com',
  bookingUrl: 'https://calendar.app.google/wPhDHVgLufgNR3JX7',
  vat: 'IT 12741130012',
  socials: { youtube: 'https://www.youtube.com/@daniele.napolitano', instagram: 'https://www.instagram.com/daniele.p.napolitano/', linkedin: 'https://www.linkedin.com/in/daniele-p-napolitano', substack: 'https://substack.com/@napolitanodaniele' },
}

export const META = {
  title: 'Amazon Account Management | Daniele Napolitano',
  description: 'Aiuto i brand europei a conquistare il loro spazio su Amazon con metodo, dati e una responsabilità unica sul canale.',
  locale: 'it_IT',
}

export const NAV_LINKS = [
  { index: '01', label: 'Cosa risolvo', href: '#diagnosis' },
  { index: '02', label: 'Chi sono', href: '#about' },
  { index: '03', label: 'Servizi', href: '#services' },
  { index: '04', label: 'Metodo', href: '#process' },
  { index: '05', label: 'Risultati', href: '#case-studies' },
  { index: '06', label: 'Il sistema', href: '#skalebidos' },
  { index: '07', label: 'Parliamone', href: '#cta' },
]

export const LANGUAGES = [
  { code: 'it', short: 'IT', label: 'Italiano' },
  { code: 'en', short: 'EN', label: 'English' },
]

export const HERO = {
  eyebrow: 'Amazon Account Management',
  lines: ['Il tuo brand su Amazon', 'non si improvvisa.'],
  sub: 'Aiuto i brand europei a conquistare il loro spazio su Amazon con metodo, dati e una responsabilità unica sul canale.',
  ctas: [
    { label: 'Parlami del tuo progetto', href: SITE.bookingUrl, primary: true },
  ],
}

export const EUROPE_NETWORK = {
  label: 'Rete europea',
  status: 'Mercati attivi',
  origin: 'Origine / Italia',
  flow: 'Ordini in movimento',
}

export const DIAGNOSIS = {
  label: '01',
  sectionTitle: 'Cosa risolvo',
  heading: 'Il problema raramente è una singola attività.',
  items: [
    { title: 'Manca una direzione comune', desc: 'Team, agenzie e fornitori avanzano, ma non verso la stessa priorità.' },
    { title: 'Le leve lavorano separate', desc: 'Advertising, contenuti e catalogo si ostacolano invece di rafforzarsi.' },
    { title: 'I dati non decidono', desc: 'I report raccontano il passato. Nessuno traduce i numeri nella prossima mossa.' },
  ],
  close: {
    before: 'Cosa cambierebbe se queste parti tornassero a ',
    accent: 'lavorare nello stesso sistema',
    after: ', con qualcuno responsabile di farlo avanzare?',
  },
}

export const SERVICES = {
  label: '03',
  sectionTitle: 'Servizi',
  heading: { text: 'Tre modi per lavorare', accent: 'insieme.' },
  subtext: 'La scelta dipende dal punto in cui si trova il tuo brand, non da un listino infinito di attività.',
  scopes: [
    {
      num: '01', featured: false, kicker: 'A progetto', title: 'Intervento operativo',
      fit: 'Per un lancio, un’espansione o un problema operativo con un perimetro e una fine chiari.',
      responsibilities: ['Analisi e obiettivo', 'Piano di progetto', 'Esecuzione su catalogo, contenuti e PPC', 'Consegna al team'],
      outcome: 'Un progetto chiuso bene, non una serie di attività lasciate a metà.',
    },
    {
      num: '02', featured: true, kicker: 'Continuativo', title: 'Account Management',
      fit: 'Per brand che vogliono una responsabilità unica e continuativa sul canale Amazon.',
      responsibilities: ['Strategia e priorità', 'PPC, contenuti e catalogo', 'Coordinamento operativo', 'Analisi e confronto con il team'],
      outcome: 'Il canale avanza con una direzione chiara, un responsabile e una prossima mossa.',
    },
    {
      num: '03', featured: false, kicker: 'Una tantum', title: 'Consulenza personalizzata',
      fit: 'Per chi deve prendere una decisione importante prima di investire tempo e budget.',
      responsibilities: ['Audit dell’account e dei dati', 'Lettura del problema', 'Sessione strategica', 'Priorità e piano d’azione'],
      outcome: 'Una lettura esterna, risposte chiare e un piano che puoi eseguire.',
    },
  ],
  cta: 'Parlami del tuo progetto',
}

export const PROCESS = {
  label: '04',
  sectionTitle: 'Metodo',
  heading: 'Ogni mossa nasce da quella prima.',
  steps: [
    { num: '01', symbol: 'search', title: 'Ricerca', desc: 'Studio mercato, domanda, margini e vincoli per capire dove si trova l’opportunità reale.' },
    { num: '02', symbol: 'compass', title: 'Direzione', desc: 'Metto in ordine ciò che emerge e scelgo dove competere, con una priorità chiara per il team.' },
    { num: '03', symbol: 'blueprint', title: 'Piano', desc: 'Traduco la direzione in attività, responsabilità e tempi che tengono insieme tutto il lavoro.' },
    { num: '04', symbol: 'modules', title: 'Esecuzione', desc: 'Faccio avanzare catalogo, contenuti e advertising come parti coordinate dello stesso sistema.' },
    { num: '05', symbol: 'cycle', title: 'Ottimizzazione', desc: 'Leggo la risposta del mercato, correggo la rotta e trasformo ogni ciclo in una base più solida.' },
  ],
}

export const CASE_STUDIES = {
  label: '05',
  sectionTitle: 'Risultati',
  heading: { first: 'Tre problemi.', secondBefore: 'Tre', accent: 'sistemi', secondAfter: 'rimessi in moto.' },
  intro: 'Brand e metriche restano riservati per accordi contrattuali. In una call qualificata posso mostrare il contesto e i risultati verificabili senza esporre dati sensibili.',
  items: [
    {
      num: '01', visual: 'listing', title: 'Un integratore italiano parlava al pubblico sbagliato.',
      objective: 'Riallineare un listing rimasto indietro con la domanda italiana attuale e con il pubblico più vicino all’acquisto.',
      intervention: 'Abbiamo rifatto il set immagini, aggiornato il posizionamento SEO sulle query del 2026 e corretto messaggio e gerarchia della pagina.',
      result: 'Il prodotto ha ora una pagina aggiornata, coerente con le ricerche e i bisogni del pubblico a cui deve parlare.',
    },
    {
      num: '02', visual: 'launch', title: 'Un brand ha lanciato da zero una cassetta per la lievitazione.',
      objective: 'Entrare nel mercato italiano partendo da zero: nessun posizionamento di categoria, nessuna immagine e nessuno storico advertising.',
      intervention: 'Abbiamo costruito posizionamento, listing e immagini con procedure proprietarie di generazione e revisione, poi coordinato il lancio advertising.',
      result: 'Il prodotto ha raggiunto circa 10.000 € di vendite settimanali nella sola Italia.',
    },
    {
      num: '03', visual: 'markets', title: 'Lo stesso prodotto doveva parlare a 4 mercati diversi.',
      objective: 'Lanciare le cassette in Spagna, Germania e Francia senza limitarsi a tradurre il listing italiano.',
      intervention: 'Abbiamo analizzato query, recensioni e linguaggio di ogni paese, adattando listing, immagini e tono di voce al pubblico locale.',
      result: 'Tre lanci localizzati, ciascuno costruito sulla domanda e sulle aspettative reali del proprio mercato.',
    },
  ],
}

export const SKALEBIDOS = {
  label: '06',
  sectionTitle: 'Il sistema',
  heading: 'Il lavoro non si perde tra call, file e messaggi.',
  description: 'Un sistema costruito su anni di lavoro Amazon, che collega procedure, dati e responsabilità. Quando ogni parte lavora insieme, l’effetto complessivo è maggiore della somma delle singole attività.',
  media: { label: 'SkalebidOS', caption: null, alt: 'Dashboard SkalebidOS per la gestione delle priorità Amazon' },
}

export const TERMINAL_LINES = [
  { type: 'ok', label: 'context', text: 'informazioni brand caricate' },
  { type: 'ok', label: 'context', text: 'best practice da prodotti comparabili importate' },
  { type: 'ok', label: 'next', text: 'creazione listing pianificata' },
  { type: 'ok', label: 'sop', text: 'procedura stesura copy collegata' },
  { type: 'ok', label: 'ai', text: 'analisi e prima bozza assistite' },
  { type: 'warn', label: 'review', text: 'listing in approvazione' },
]

export const ABOUT = {
  label: '02',
  sectionTitle: 'Chi sono',
  heading: ['Un po’ informatico.', 'Un po’ marketer.'],
  paragraphs: [
    {
      text: 'Ho iniziato dall’informatica e oggi studio Management a Torino. Nel mezzo ho trovato Amazon: un canale in cui dati, posizionamento e operatività devono funzionare insieme.',
      highlights: ['informatica', 'Management', 'Amazon'],
    },
    {
      text: 'È qui che il mio modo di ragionare diventa utile. Non guardo PPC, contenuti e catalogo come attività isolate. Cerco il legame tra numeri, comportamento delle persone e lavoro necessario per far avanzare il brand.',
      highlights: ['PPC, contenuti e catalogo', 'numeri', 'comportamento delle persone'],
    },
    {
      text: 'Costruisco sistemi perché le decisioni restino visibili, il lavoro sia ripetibile e ogni miglioramento non vada perso. Preferisco una base solida e risultati concreti alle soluzioni veloci che durano una settimana.',
      highlights: ['sistemi', 'ripetibile', 'base solida e risultati concreti'],
    },
  ],
  question: {
    lead: 'La domanda da cui parto è sempre la stessa:',
    accent: 'qual è il blocco che oggi costa più opportunità al tuo brand?',
  },
  media: { label: 'Daniele / @LotusRetreat a Krimml', caption: null, alt: 'Daniele Napolitano al computer al Lotus Retreat a Krimml' },
}

export const CTA_SECTION = {
  eyebrow: 'Già su Amazon o pronto a entrarci?',
  heading: ['Capiamo qual è', 'la prossima mossa.'],
  text: 'Se il canale è bloccato, individuiamo cosa lo frena. Se devi ancora partire, valutiamo dove c’è spazio e come entrarci con criterio. Se non posso aiutarti, te lo dirò direttamente.',
  note: '30 minuti. Contesto reale, priorità chiare, nessuna presentazione standard.',
  ctas: [
    { label: 'Parlami del tuo progetto', href: SITE.bookingUrl, primary: true },
  ],
}

export const UI = {
  menu: 'Indice', close: 'Chiudi', contact: 'Parlami del tuo progetto', language: 'Lingua', home: 'Inizio', skip: 'Vai al contenuto', external: 'Si apre in una nuova scheda', socials: 'Social',
  footerLine: 'Amazon Account Management', fit: 'Per chi è', responsibility: 'Cosa comprende', outcome: 'Cosa cambia', objective: 'Obiettivo', intervention: 'Intervento', result: 'Risultato', caseFile: 'Caso studio',
  terminalLabel: 'Stato operativo SkalebidOS', terminalTitle: 'skalebid-os / account', terminalLoad: 'avvia procedura listing', terminalReady: 'sistema pronto per la prossima azione', systemDashboard: 'Mostra dashboard', systemTerminal: 'Mostra terminale', systemToggle: 'Cambia vista SkalebidOS', scrollDiagnostic: 'Scorri per continuare', substack: 'Substack',
}
