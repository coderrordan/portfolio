// ─────────────────────────────────────────────
//  SITE CONTENT — edit everything here
//  No need to touch components to update copy
// ─────────────────────────────────────────────

export const SITE = {
  name: 'Daniele Napolitano',
  title: 'Amazon Account Manager',
  email: 'patriziodaniele.napolitano@gmail.com',
  vat: 'IT 12741130012',
  year: '2025',

  socials: {
    youtube: 'https://www.youtube.com/@TUO_CANALE',    // ← aggiorna
    instagram: 'https://www.instagram.com/TUO_PROFILO', // ← aggiorna
    linkedin: 'https://www.linkedin.com/in/TUO_PROFILO', // ← aggiorna
  },
}

export const NAV_LINKS = [
  { label: 'Chi Sono', href: '#about' },
  { label: 'Servizi', href: '#services' },
  { label: 'Metodo', href: '#process' },
  { label: 'Risorse', href: '#newsletter' },
]

export const HERO = {
  badge: 'SYSTEM ONLINE // DANIELE NAPOLITANO // AMAZON SPECIALIST',
  lines: [
    { text: 'Non faccio miracoli.', accent: false },
    { text: 'Costruisco ecosistemi', accent: true },
    { text: 'di vendita.', accent: true },
  ],
  sub: 'Nessuna formula magica. Solo dati, copywriting chirurgico e strategie di posizionamento spietate per far scalare il tuo <strong>brand su Amazon</strong>.',
  stats: [
    { num: '5+', label: 'Anni di\nesperienza' },
    { num: '2+', label: 'Anni su\nAmazon' },
  ],
  ctas: [
    { label: 'Consulenza gratuita →', href: `mailto:${SITE.email}`, primary: true },
    { label: 'Scopri i servizi →', href: '#services', primary: false },
  ],
}

export const MARQUEE_ITEMS = [
  'Amazon PPC',
  'Account Management',
  'Listing Optimization',
  'Brand Registry',
  'Copywriting Strategico',
  'Digital Marketing',
  'Data Analysis',
  'Second Brain',
]

export const ABOUT = {
  label: '01 —',
  sectionTitle: 'Identikit Strategico',
  heading: ['Un po\' informatico.', 'Un po\' marketer.'],
  paragraphs: [
    'Non approccio il marketing come un\'arte astratta, ma come un <strong>sistema ingegneristico</strong>. Da 5 anni analizzo il comportamento degli utenti e applico modelli matematici per scalare gli e-commerce.',
    'Centralizzo ogni esperimento, dato e fallimento nel mio <a href="#" target="_blank">Second Brain</a>: un archivio di conoscenze che mi permette di collegare i puntini dove gli altri vedono solo caos.',
  ],
}

// Terminal typewriter lines
// types: 'prompt' | 'ok' | 'warn' | 'spacer' | 'json'
// json uses <k>key</k> and <s>string value</s> tags
export const TERMINAL_LINES = [
  { type: 'prompt', text: '> Avvio sistema Napolitano_OS v2.5...' },
  { type: 'spacer', text: '' },
  { type: 'ok', text: '[BOOT] Core marketing engine: OK' },
  { type: 'ok', text: '[BOOT] Algoritmo A9 Amazon: caricato' },
  { type: 'ok', text: '[BOOT] Modulo PPC ottimizzatore: attivo' },
  { type: 'ok', text: '[BOOT] Second Brain sync: completato' },
  { type: 'warn', text: '[INFO] 5 anni di pattern riconosciuti' },
  { type: 'spacer', text: '' },
  { type: 'prompt', text: '> Query: "skill_matrix"' },
  { type: 'spacer', text: '' },
  { type: 'json', text: '{ <k>"amazon"</k>: [<s>"A9 Algorithm"</s>, <s>"PPC"</s>, <s>"Listing"</s>],' },
  { type: 'json', text: '  <k>"copy"</k>: [<s>"Strategico"</s>, <s>"Data-driven"</s>],' },
  { type: 'json', text: '  <k>"tools"</k>: [<s>"Helium10"</s>, <s>"Notion"</s>, <s>"GA4"</s>],' },
  { type: 'json', text: '  <k>"mindset"</k>: <s>"Ingegneristico"</s> }' },
  { type: 'spacer', text: '' },
  { type: 'prompt', text: '> In attesa di input' },
]

export const SERVICES = {
  label: '02 —',
  sectionTitle: 'Cosa Posso Fare Per Te',
  heading: ['Servizi su misura', 'per il tuo business'],
  subtext: 'Non lavoro con soluzioni preconfezionate. Analizzo la tua situazione specifica e costruisco una strategia che funziona davvero.',
  cards: [
    {
      num: '01',
      title: 'Amazon Account Management',
      desc: 'Amazon ha le sue regole, e non si può sperare di fare il minimo indispensabile. Gestisco il tuo account in modo completo: ottimizzazione listing, campagne PPC, gestione inventory, review strategy e tutto ciò che serve per scalare in modo sostenibile.',
      tags: ['PPC Advertising', 'Listing Optimization', 'Brand Registry', 'A+ Content', 'Reporting'],
      fullWidth: false,
    },
    {
      num: '02',
      title: 'Copywriting Strategico',
      desc: 'Ci sono copy che vendono e copy che non vendono. Approccio ogni testo con mentalità scientifica: ricerca del target, analisi della concorrenza, test e ottimizzazione continua. Dal listing Amazon alle email, dal blog alle landing page.',
      tags: ['Listing Copy', 'Email Marketing', 'Content Strategy', 'Brand Voice'],
      fullWidth: true,
    },
  ],
  cta: {
    heading: 'Prima consulenza gratuita e senza impegno',
    text: 'Valutiamo insieme la tua situazione. Se posso aiutarti davvero, ti dico come. Se non posso, te lo dico lo stesso.',
    label: 'Prenota ora →',
  },
}

export const PROCESS = {
  label: '03 —',
  sectionTitle: 'Il Metodo',
  heading: ['Come lavoro,', 'passo per passo'],
  subtext: 'Un processo strutturato che si adatta alla tua realtà, non il contrario. Ogni fase è pensata per massimizzare i risultati.',
  steps: [
    { num: '01', title: 'Briefing & Ricerca', desc: 'Esploro il territorio del tuo mercato e i tuoi obiettivi prima di muovere un solo passo.' },
    { num: '02', title: 'Creazione Piano', desc: 'Niente sentieri generici: un percorso costruito su misura per te e le tue esigenze.' },
    { num: '03', title: 'Messa in Atto', desc: 'Ci sporchiamo le mani e trasformiamo le idee in risultati tangibili e misurabili.' },
    { num: '04', title: 'Analisi Dati', desc: 'Numeri, grafici, report: capiamo l\'impatto del lavoro svolto e le aree di miglioramento.' },
    { num: '05', title: 'Ottimizzazione Continua', desc: 'I dati raccolti e le ultime novità del settore guidano ogni aggiustamento della rotta.' },
  ],
}

export const CTA_SECTION = {
  eyebrow: 'Pronto a crescere?',
  heading: ['Parliamo del', 'tuo progetto'],
  text: 'Il giusto professionista può fare la differenza tra il successo e il fallimento della tua attività. Prima consulenza gratuita, zero impegno.',
  ctas: [
    { label: 'Scrivi ora →', href: `mailto:${SITE.email}`, primary: true },
    { label: 'Guarda il canale →', href: SITE.socials.youtube, primary: false },
  ],
}

export const NEWSLETTER = {
  label: 'INSIGHT —',
  sectionTitle: 'Newsletter',
  heading: 'Mi formo continuamente e condivido quello che imparo',
  text: 'Ogni tanto invio contenuti utili per freelancer e lavoratori del settore. Niente spam, promesso.',
  disclaimer: 'Zero spam. Cancellati quando vuoi.',
  placeholder: 'la-tua@email.com',
  cta: 'Unisciti →',
}

// Extra UI strings not in content objects
export const UI = {
  contact: 'Contattami',
  scroll: 'Scroll',
  thankYou: 'Grazie! ✓',
  footerCrafted: 'Handcrafted in Italy',
  systemOnline: 'SYSTEM ONLINE',
  amazonSpecialist: 'AMAZON SPECIALIST',
}
