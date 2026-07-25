export const SITE = {
  name: 'Daniele Napolitano',
  title: 'Amazon Account Manager',
  email: 'patriziodaniele.napolitano@gmail.com',
  bookingUrl: 'https://calendar.app.google/wPhDHVgLufgNR3JX7',
  vat: 'IT 12741130012',
  socials: { youtube: null, instagram: null, linkedin: null, substack: 'https://substack.com/@napolitanodaniele' },
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
]

export const LANGUAGES = [
  { code: 'it', short: 'IT', label: 'Italiano' },
  { code: 'en', short: 'EN', label: 'English' },
]

export const HERO = {
  eyebrow: 'Amazon Account Management per brand europei',
  lines: ['Il tuo brand su Amazon', 'non si improvvisa.'],
  sub: 'Aiuto i brand europei a conquistare il loro spazio su Amazon con metodo, dati e una responsabilità unica sul canale.',
  ctas: [
    { label: 'Parlami del tuo brand', href: SITE.bookingUrl, primary: true },
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
  heading: 'Tre modi per lavorare insieme.',
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
  cta: 'Parlami del tuo brand',
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
  heading: 'Tre problemi. Tre sistemi rimessi in moto.',
  intro: 'Il brand resta riservato. Il lavoro, invece, si può mostrare.',
  items: [
    {
      num: '01', code: 'CONVERSION', visual: 'listing', title: 'La pagina riceveva traffico, ma non convinceva.',
      situation: 'Contenuti generici e obiezioni lasciate senza risposta.',
      intervention: 'Nuova gerarchia, copy e immagini costruiti sulle query reali.',
      result: 'La domanda esistente ha trovato una pagina più capace di convertirla.',
    },
    {
      num: '02', code: 'LAUNCH', visual: 'launch', title: 'Il prodotto doveva partire senza storico.',
      situation: 'Posizionamento, catalogo e campagne procedevano su binari diversi.',
      intervention: 'Li abbiamo preparati come un’unica sequenza di lancio.',
      result: 'Il prodotto ha costruito vendite ricorrenti e una base da sviluppare.',
    },
    {
      num: '03', code: 'MARKETS', visual: 'markets', title: 'Tradurre il listing non bastava per crescere fuori.',
      situation: 'Ogni paese richiedeva domanda, messaggi e priorità diverse.',
      intervention: 'Ricerca e lancio sono stati adattati mercato per mercato.',
      result: 'L’espansione è diventata un processo replicabile.',
    },
  ],
  confidentiality: 'Brand e metriche restano riservati per accordi contrattuali. In una call qualificata posso mostrare il contesto e i risultati verificabili senza esporre dati sensibili.',
}

export const SKALEBIDOS = {
  label: '06',
  sectionTitle: 'Il sistema',
  eyebrow: 'SkalebidOS',
  heading: 'Il lavoro non si perde tra call, file e messaggi.',
  media: { label: 'Sistema operativo', caption: 'Vista anonimizzata · Priorità e attività', alt: 'Dashboard SkalebidOS per la gestione delle priorità Amazon' },
}

export const TERMINAL_LINES = [
  { type: 'ok', label: 'contesto', text: 'obiettivi e vincoli caricati' },
  { type: 'ok', label: 'priorità', text: 'coda ordinata per impatto' },
  { type: 'ok', label: 'owner', text: 'responsabilità assegnate' },
  { type: 'ok', label: 'sop', text: 'procedure collegate al lavoro' },
  { type: 'warn', label: 'review', text: 'prossima decisione pronta' },
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
  media: { label: 'Daniele / @LotusRetreat a Krimml', caption: 'Daniele Napolitano · Amazon Account Manager', alt: 'Daniele Napolitano al computer al Lotus Retreat a Krimml' },
}

export const CTA_SECTION = {
  eyebrow: 'Hai un brand su Amazon?',
  heading: ['Vediamo cosa lo', 'sta trattenendo.'],
  text: 'Partiamo dal problema più costoso del tuo account. Se posso aiutarti, ti spiego come. Se non posso, te lo dico.',
  note: '30 minuti. Un problema reale. Nessuna presentazione standard.',
  ctas: [
    { label: 'Parlami del tuo brand', href: SITE.bookingUrl, primary: true },
  ],
}

export const UI = {
  menu: 'Indice', close: 'Chiudi', contact: 'Parlami del tuo brand', language: 'Lingua', home: 'Inizio', skip: 'Vai al contenuto', external: 'Si apre in una nuova scheda',
  footerLine: 'Amazon Account Management · Torino, Italia', fit: 'Per chi è', responsibility: 'Cosa comprende', outcome: 'Cosa cambia', situation: 'Prima', intervention: 'Intervento', result: 'Dopo', confidential: 'Riservato', caseFile: 'Caso',
  terminalLabel: 'Stato operativo SkalebidOS', terminalTitle: 'skalebid-os / account', terminalLoad: 'carica spazio operativo', terminalReady: 'sistema pronto per la prossima decisione', scrollDiagnostic: 'Scorri per continuare', substack: 'Substack',
}
