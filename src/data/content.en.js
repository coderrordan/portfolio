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
  description: 'I help European brands earn their space on Amazon through method, data and one accountable owner for the channel.',
  locale: 'en_GB',
}

export const NAV_LINKS = [
  { index: '01', label: 'What I solve', href: '#diagnosis' },
  { index: '02', label: 'About me', href: '#about' },
  { index: '03', label: 'Services', href: '#services' },
  { index: '04', label: 'Method', href: '#process' },
  { index: '05', label: 'Results', href: '#case-studies' },
  { index: '06', label: 'The system', href: '#skalebidos' },
]

export const LANGUAGES = [
  { code: 'it', short: 'IT', label: 'Italiano' },
  { code: 'en', short: 'EN', label: 'English' },
]

export const HERO = {
  eyebrow: 'Amazon Account Management for European brands',
  lines: ['Your brand on Amazon', 'is not improvised.'],
  sub: 'I help European brands earn their space on Amazon through method, data and one accountable owner for the channel.',
  ctas: [
    { label: 'Tell me about your brand', href: SITE.bookingUrl, primary: true },
  ],
}

export const EUROPE_NETWORK = {
  label: 'European network',
  status: 'Active markets',
  origin: 'Origin / Italy',
  flow: 'Orders in motion',
}

export const DIAGNOSIS = {
  label: '01', sectionTitle: 'What I solve', heading: 'The problem is rarely one task.',
  items: [
    { title: 'There is no shared direction', desc: 'Teams, agencies and suppliers move, but not towards the same priority.' },
    { title: 'Each lever works alone', desc: 'Advertising, content and catalogue get in each other’s way instead of reinforcing one another.' },
    { title: 'Data does not decide', desc: 'Reports describe the past. Nobody turns the numbers into the next move.' },
  ],
  close: {
    before: 'What would change if these parts started to ',
    accent: 'work as one system',
    after: ' again, with someone responsible for moving it forward?',
  },
}

export const SERVICES = {
  label: '03', sectionTitle: 'Services', heading: 'Three ways to work together.', subtext: 'The right option depends on where your brand is now, not on an endless list of tasks.',
  scopes: [
    { num: '01', featured: false, kicker: 'Project', title: 'Operational intervention', fit: 'For a launch, expansion or operational issue with a clear scope and finish.', responsibilities: ['Analysis and objective', 'Project plan', 'Execution across catalogue, content and PPC', 'Team handover'], outcome: 'A project completed properly, not a list of half-finished tasks.' },
    { num: '02', featured: true, kicker: 'Ongoing', title: 'Account Management', fit: 'For brands seeking one continuous owner for their Amazon channel.', responsibilities: ['Strategy and priorities', 'PPC, content and catalogue', 'Operational coordination', 'Analysis and team alignment'], outcome: 'The channel moves forward with clear direction, one owner and a defined next move.' },
    { num: '03', featured: false, kicker: 'One-off', title: 'Tailored consulting', fit: 'For brands facing an important decision before investing time and budget.', responsibilities: ['Account and data audit', 'Problem assessment', 'Strategic session', 'Priorities and action plan'], outcome: 'An outside perspective, clear answers and a plan you can execute.' },
  ],
  cta: 'Tell me about your brand',
}

export const PROCESS = {
  label: '04', sectionTitle: 'Method', heading: 'Each move starts with the one before it.',
  steps: [
    { num: '01', symbol: 'search', title: 'Research', desc: 'I study the market, demand, margins and constraints to find where the real opportunity lies.' },
    { num: '02', symbol: 'compass', title: 'Direction', desc: 'I organise what emerges and choose where to compete, giving the team one clear priority.' },
    { num: '03', symbol: 'blueprint', title: 'Plan', desc: 'I turn the direction into tasks, responsibilities and timing that keep the work connected.' },
    { num: '04', symbol: 'modules', title: 'Execution', desc: 'I move catalogue, content and advertising forward as coordinated parts of the same system.' },
    { num: '05', symbol: 'cycle', title: 'Optimisation', desc: 'I read the market response, adjust the course and use each cycle to build a stronger base.' },
  ],
}

export const CASE_STUDIES = {
  label: '05', sectionTitle: 'Results', heading: 'Three problems. Three systems moving again.', intro: 'The brand stays confidential. The work can still be shown.',
  items: [
    { num: '01', code: 'CONVERSION', visual: 'listing', title: 'The page had traffic, but failed to persuade.', situation: 'Generic content left the main objections unanswered.', intervention: 'A new hierarchy, copy and images built around real queries.', result: 'Existing demand found a page better equipped to convert it.' },
    { num: '02', code: 'LAUNCH', visual: 'launch', title: 'The product had to launch without history.', situation: 'Positioning, catalogue and campaigns were moving on separate tracks.', intervention: 'We prepared them as one coordinated launch sequence.', result: 'The product built recurring sales and a base to develop.' },
    { num: '03', code: 'MARKETS', visual: 'markets', title: 'Translating the listing was not enough to grow abroad.', situation: 'Each country needed different demand, messages and priorities.', intervention: 'Research and launch were adapted market by market.', result: 'Expansion became a repeatable process.' },
  ],
  confidentiality: 'Brands and metrics remain confidential under contractual agreements. In a qualified call I can show context and verifiable results without exposing sensitive data.',
}

export const SKALEBIDOS = {
  label: '06', sectionTitle: 'The system', eyebrow: 'SkalebidOS', heading: 'Work does not disappear between calls, files and messages.',
  media: { label: 'Operating system', caption: 'Anonymised view · Priorities and tasks', alt: 'SkalebidOS dashboard for managing Amazon priorities' },
}

export const TERMINAL_LINES = [
  { type: 'ok', label: 'context', text: 'goals and constraints loaded' },
  { type: 'ok', label: 'priority', text: 'queue sorted by impact' },
  { type: 'ok', label: 'owner', text: 'responsibilities assigned' },
  { type: 'ok', label: 'sop', text: 'procedures linked to work' },
  { type: 'warn', label: 'review', text: 'next decision ready' },
]

export const ABOUT = {
  label: '02', sectionTitle: 'About me', heading: ['Part computer scientist.', 'Part marketer.'],
  paragraphs: [
    {
      text: 'I started with computer science and now study Management in Turin. Along the way I found Amazon: a channel where data, positioning and operations need to work together.',
      highlights: ['computer science', 'Management', 'Amazon'],
    },
    {
      text: 'That is where my way of thinking becomes useful. I do not see PPC, content and catalogue as separate tasks. I look for the link between numbers, people’s behaviour and the work needed to move a brand forward.',
      highlights: ['PPC, content and catalogue', 'numbers', 'people’s behaviour'],
    },
    {
      text: 'I build systems so decisions remain visible, work becomes repeatable and each improvement is retained. I prefer solid foundations and concrete results to quick solutions that last a week.',
      highlights: ['systems', 'repeatable', 'solid foundations and concrete results'],
    },
  ],
  question: {
    lead: 'I always start with the same question:',
    accent: 'which constraint is costing your brand the most opportunity today?',
  },
  media: { label: 'Daniele / @LotusRetreat a Krimml', caption: 'Daniele Napolitano · Amazon Account Manager', alt: 'Daniele Napolitano working at his computer at the Lotus Retreat in Krimml' },
}

export const CTA_SECTION = {
  eyebrow: 'Do you have a brand on Amazon?', heading: ['Let’s find what is', 'holding it back.'], text: 'We start with the most expensive problem in your account. If I can help, I will explain how. If I cannot, I will say so.', note: '30 minutes. One real problem. No standard presentation.',
  ctas: [
    { label: 'Tell me about your brand', href: SITE.bookingUrl, primary: true },
  ],
}

export const UI = {
  menu: 'Index', close: 'Close', contact: 'Tell me about your brand', language: 'Language', home: 'Home', skip: 'Skip to content', external: 'Opens in a new tab',
  footerLine: 'Amazon Account Management · Turin, Italy', fit: 'Who it is for', responsibility: 'What it includes', outcome: 'What changes', situation: 'Before', intervention: 'Intervention', result: 'After', confidential: 'Confidential', caseFile: 'Case',
  terminalLabel: 'SkalebidOS operational status', terminalTitle: 'skalebid-os / account', terminalLoad: 'load operating space', terminalReady: 'system ready for the next decision', scrollDiagnostic: 'Scroll to continue', substack: 'Substack',
}
