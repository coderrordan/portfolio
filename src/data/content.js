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
  { index: '02', label: 'Servizi', href: '#services' },
  { index: '03', label: 'Metodo', href: '#process' },
  { index: '04', label: 'Risultati', href: '#case-studies' },
  { index: '05', label: 'Il sistema', href: '#skalebidos' },
  { index: '06', label: 'Chi sono', href: '#about' },
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

export const BRAND_BUILDER = {
  label: 'Brand builder',
  status: 'Sistema coordinato',
  brand: 'Il tuo brand',
  input: 'Ingresso / 05 moduli',
  output: 'Uscita / 01 sistema',
  modules: ['Listing', 'PPC', 'Catalogo', 'Dati', 'Mercati'],
}

export const DIAGNOSIS = {
  label: '01',
  sectionTitle: 'Cosa risolvo',
  heading: 'Il problema raramente è una singola attività.',
  intro: 'È ciò che succede quando le parti del canale smettono di lavorare insieme.',
  items: [
    { code: 'DIR', title: 'Manca una direzione comune', desc: 'Team, agenzie e fornitori avanzano, ma non verso la stessa priorità.', impact: 'Decisioni lente' },
    { code: 'SYS', title: 'Le leve lavorano separate', desc: 'Advertising, contenuti e catalogo si ostacolano invece di rafforzarsi.', impact: 'Budget disperso' },
    { code: 'DAT', title: 'I dati non decidono', desc: 'I report raccontano il passato. Nessuno traduce i numeri nella prossima mossa.', impact: 'Crescita a tentativi' },
  ],
  close: 'Rimetto queste parti nello stesso sistema e mi assumo la responsabilità di farlo avanzare.',
}

export const SERVICES = {
  label: '02',
  sectionTitle: 'Servizi',
  heading: 'Tre modi per lavorare insieme.',
  subtext: 'La scelta dipende dal punto in cui si trova il tuo brand, non da un listino infinito di attività.',
  scopes: [
    {
      num: '01', featured: true, kicker: 'Continuativo', title: 'Account Management',
      fit: 'Per chi vuole un responsabile operativo del canale Amazon.',
      responsibilities: ['Direzione e priorità', 'PPC e contenuti', 'Catalogo e operatività', 'Analisi e confronto con il team'],
      outcome: 'Sai cosa stiamo facendo, perché e cosa viene dopo.',
      cta: 'Parliamo del tuo account',
    },
    {
      num: '02', featured: false, kicker: 'A progetto', title: 'Lancio o espansione',
      fit: 'Per un nuovo prodotto, l’ingresso su Amazon o un nuovo mercato.',
      responsibilities: ['Ricerca e posizionamento', 'Struttura del catalogo', 'Contenuti di lancio', 'Piano advertising'],
      outcome: 'Il lancio parte come un sistema, non come una serie di tentativi.',
      cta: 'Raccontami il progetto',
    },
    {
      num: '03', featured: false, kicker: 'Mirato', title: 'Intervento operativo',
      fit: 'Per un blocco preciso che frena vendite o lavoro del team.',
      responsibilities: ['Diagnosi del problema', 'Piano di intervento', 'Esecuzione mirata', 'Consegna e passaggio al team'],
      outcome: 'Chiudiamo il blocco e lasciamo una base più solida.',
      cta: 'Mostrami il problema',
    },
  ],
}

export const PROCESS = {
  label: '03',
  sectionTitle: 'Metodo',
  heading: 'Ogni mossa nasce da quella prima.',
  subtext: 'Il metodo serve a ridurre i tentativi. Ogni fase lascia un output che guida la successiva.',
  steps: [
    { num: '01', symbol: 'search', title: 'Ricerca', desc: 'Capisco mercato, domanda, margini e vincoli.', output: 'Contesto' },
    { num: '02', symbol: 'compass', title: 'Direzione', desc: 'Scelgo dove competere e cosa viene prima.', output: 'Priorità' },
    { num: '03', symbol: 'blueprint', title: 'Piano', desc: 'Traduco la direzione in attività, responsabilità e tempi.', output: 'Roadmap' },
    { num: '04', symbol: 'modules', title: 'Esecuzione', desc: 'Le parti avanzano insieme e restano visibili al team.', output: 'Avanzamento' },
    { num: '05', symbol: 'cycle', title: 'Ottimizzazione', desc: 'Leggo la risposta del mercato e correggo la rotta.', output: 'Prossima mossa' },
  ],
}

export const CASE_STUDIES = {
  label: '04',
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
  label: '05',
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
  label: '06',
  sectionTitle: 'Chi sono',
  heading: ['Un po’ informatico.', 'Un po’ marketer.', 'Sempre curioso.'],
  paragraphs: [
    'Ho iniziato dall’informatica. Oggi studio Management e lavoro ogni giorno su Amazon. Sono mondi diversi solo in apparenza: in entrambi devi capire il sistema prima di provare a migliorarlo.',
    'Mi piace costruire strumenti, mettere ordine nelle informazioni e conservare ciò che imparo. È il motivo per cui tratto il marketing meno come un’intuizione creativa e più come un problema da osservare, testare e correggere.',
    'Fuori dai task resto la stessa persona: curiosa, metodica e incapace di lasciare un processo confuso quando può diventare più semplice.',
  ],
  question: 'La domanda da cui parto è sempre la stessa: qual è il blocco che oggi costa più opportunità al tuo brand?',
  notes: [
    { value: '01', label: 'Base', text: 'Informatica' },
    { value: '02', label: 'Studio', text: 'Management' },
    { value: '03', label: 'Ossessione utile', text: 'Sistemi che funzionano' },
  ],
  media: { label: 'Daniele / Torino', caption: 'Daniele Napolitano · Amazon Account Manager', alt: 'Daniele Napolitano al lavoro al computer' },
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
