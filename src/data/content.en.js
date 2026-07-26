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
  { index: '07', label: 'Let\'s talk', href: '#cta' },
]

export const LANGUAGES = [
  { code: 'it', short: 'IT', label: 'Italiano' },
  { code: 'en', short: 'EN', label: 'English' },
]

export const HERO = {
  eyebrow: 'Amazon Account Management',
  lines: ['Your brand on Amazon', 'is not improvised.'],
  sub: 'I help European brands earn their space on Amazon through method, data and one accountable owner for the channel.',
  ctas: [
    { label: 'Tell me about your project', href: SITE.bookingUrl, primary: true },
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
  label: '03', sectionTitle: 'Services', heading: { text: 'Three ways to work', accent: 'together.' }, subtext: 'The right option depends on where your brand is now, not on an endless list of tasks.',
  scopes: [
    { num: '01', featured: false, kicker: 'Project', title: 'Operational intervention', fit: 'For a launch, expansion or operational issue with a clear scope and finish.', responsibilities: ['Analysis and objective', 'Project plan', 'Execution across catalogue, content and PPC', 'Team handover'], outcome: 'A project completed properly, not a list of half-finished tasks.' },
    { num: '02', featured: true, kicker: 'Ongoing', title: 'Account Management', fit: 'For brands seeking one continuous owner for their Amazon channel.', responsibilities: ['Strategy and priorities', 'PPC, content and catalogue', 'Operational coordination', 'Analysis and team alignment'], outcome: 'The channel moves forward with clear direction, one owner and a defined next move.' },
    { num: '03', featured: false, kicker: 'One-off', title: 'Tailored consulting', fit: 'For brands facing an important decision before investing time and budget.', responsibilities: ['Account and data audit', 'Problem assessment', 'Strategic session', 'Priorities and action plan'], outcome: 'An outside perspective, clear answers and a plan you can execute.' },
  ],
  cta: 'Tell me about your project',
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
  label: '05', sectionTitle: 'Results', heading: { first: 'Three problems.', secondBefore: 'Three', accent: 'systems', secondAfter: 'moving again.' }, intro: 'Brands and metrics remain confidential under contractual agreements. In a qualified call I can show context and verifiable results without exposing sensitive data.',
  items: [
    { num: '01', visual: 'listing', title: 'An Italian supplement was speaking to the wrong audience.', objective: 'Bring an outdated listing back in line with current Italian demand and the audience most likely to buy.', intervention: 'We rebuilt the image set, updated SEO positioning around 2026 queries and corrected the page message and hierarchy.', result: 'The product now has a current page aligned with the searches and needs of its actual audience.' },
    { num: '02', visual: 'launch', title: 'A brand launched a pizza proofing box from scratch.', objective: 'Enter the Italian market from scratch, with no category position, product images or advertising history.', intervention: 'We built positioning, listing and images through proprietary generation and review procedures, then coordinated the advertising launch.', result: 'The product reached approximately €10,000 in weekly sales in Italy alone.' },
    { num: '03', visual: 'markets', title: 'The same product needed to speak to 4 different markets.', objective: 'Launch the boxes in Spain, Germany and France without simply translating the Italian listing.', intervention: 'We analysed queries, reviews and language in each country, adapting the listing, images and tone of voice to the local audience.', result: 'Three localised launches, each built around the real demand and expectations of its market.' },
  ],
}

export const SKALEBIDOS = {
  label: '06', sectionTitle: 'The system', heading: 'Work does not disappear between calls, files and messages.',
  description: 'A system built on years of Amazon work, connecting procedures, data and responsibilities. When every part works together, the overall effect is greater than the sum of the individual activities.',
  media: { label: 'SkalebidOS', caption: null, alt: 'SkalebidOS dashboard for managing Amazon priorities' },
}

export const TERMINAL_LINES = [
  { type: 'ok', label: 'context', text: 'brand information loaded' },
  { type: 'ok', label: 'context', text: 'best practices from comparable products imported' },
  { type: 'ok', label: 'next', text: 'listing creation planned' },
  { type: 'ok', label: 'sop', text: 'copywriting procedure linked' },
  { type: 'ok', label: 'ai', text: 'analysis and first draft assisted' },
  { type: 'warn', label: 'review', text: 'listing awaiting approval' },
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
  media: { label: 'Daniele / @LotusRetreat a Krimml', caption: null, alt: 'Daniele Napolitano working at his computer at the Lotus Retreat in Krimml' },
}

export const CTA_SECTION = {
  eyebrow: 'Already on Amazon or ready to enter?', heading: ['Let’s understand', 'the next move.'], text: 'If the channel is blocked, we identify what is holding it back. If you have yet to start, we assess where there is room and how to enter with a clear rationale. If I cannot help, I will tell you directly.', note: '30 minutes. Real context, clear priorities, no standard presentation.',
  ctas: [
    { label: 'Tell me about your project', href: SITE.bookingUrl, primary: true },
  ],
}

export const UI = {
  menu: 'Index', close: 'Close', contact: 'Tell me about your project', language: 'Language', home: 'Home', skip: 'Skip to content', external: 'Opens in a new tab', socials: 'Social links',
  footerLine: 'Amazon Account Management', fit: 'Who it is for', responsibility: 'What it includes', outcome: 'What changes', objective: 'Objective', intervention: 'Intervention', result: 'Result', caseFile: 'Case study',
  terminalLabel: 'SkalebidOS operational status', terminalTitle: 'skalebid-os / account', terminalLoad: 'start listing procedure', terminalReady: 'system ready for the next action', systemDashboard: 'Show dashboard', systemTerminal: 'Show terminal', systemToggle: 'Switch SkalebidOS view', scrollDiagnostic: 'Scroll to continue', substack: 'Substack',
}
