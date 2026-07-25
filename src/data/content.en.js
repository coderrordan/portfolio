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
  { index: '02', label: 'Services', href: '#services' },
  { index: '03', label: 'Method', href: '#process' },
  { index: '04', label: 'Results', href: '#case-studies' },
  { index: '05', label: 'The system', href: '#skalebidos' },
  { index: '06', label: 'About me', href: '#about' },
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

export const BRAND_BUILDER = {
  label: 'Brand builder',
  status: 'Coordinated system',
  brand: 'Your brand',
  input: 'Input / 05 modules',
  output: 'Output / 01 system',
  modules: ['Listing', 'PPC', 'Catalogue', 'Data', 'Markets'],
}

export const DIAGNOSIS = {
  label: '01', sectionTitle: 'What I solve', heading: 'The problem is rarely one task.', intro: 'It starts when the parts of the channel stop working together.',
  items: [
    { code: 'DIR', title: 'There is no shared direction', desc: 'Teams, agencies and suppliers move, but not towards the same priority.', impact: 'Slow decisions' },
    { code: 'SYS', title: 'Each lever works alone', desc: 'Advertising, content and catalogue get in each other’s way instead of reinforcing one another.', impact: 'Wasted budget' },
    { code: 'DAT', title: 'Data does not decide', desc: 'Reports describe the past. Nobody turns the numbers into the next move.', impact: 'Trial-and-error growth' },
  ],
  close: 'I bring these parts back into one system and take responsibility for moving it forward.',
}

export const SERVICES = {
  label: '02', sectionTitle: 'Services', heading: 'Three ways to work together.', subtext: 'The right option depends on where your brand is now, not on an endless list of tasks.',
  scopes: [
    { num: '01', featured: true, kicker: 'Ongoing', title: 'Account Management', fit: 'For brands that want an operational owner for their Amazon channel.', responsibilities: ['Direction and priorities', 'PPC and content', 'Catalogue and operations', 'Analysis and team alignment'], outcome: 'You know what we are doing, why, and what comes next.', cta: 'Let’s discuss your account' },
    { num: '02', featured: false, kicker: 'Project', title: 'Launch or expansion', fit: 'For a new product, an Amazon entry or a new market.', responsibilities: ['Research and positioning', 'Catalogue structure', 'Launch content', 'Advertising plan'], outcome: 'The launch starts as one system, not a string of attempts.', cta: 'Tell me about the project' },
    { num: '03', featured: false, kicker: 'Focused', title: 'Operational intervention', fit: 'For one clear issue that is holding back sales or the team.', responsibilities: ['Problem diagnosis', 'Intervention plan', 'Focused execution', 'Team handover'], outcome: 'We remove the constraint and leave a stronger foundation.', cta: 'Show me the problem' },
  ],
}

export const PROCESS = {
  label: '03', sectionTitle: 'Method', heading: 'Each move starts with the one before it.', subtext: 'The method reduces guesswork. Every phase produces something that guides the next.',
  steps: [
    { num: '01', symbol: 'search', title: 'Research', desc: 'I understand the market, demand, margins and constraints.', output: 'Context' },
    { num: '02', symbol: 'compass', title: 'Direction', desc: 'I choose where to compete and what comes first.', output: 'Priorities' },
    { num: '03', symbol: 'blueprint', title: 'Plan', desc: 'I turn direction into tasks, owners and timing.', output: 'Roadmap' },
    { num: '04', symbol: 'modules', title: 'Execution', desc: 'The parts move together and stay visible to the team.', output: 'Progress' },
    { num: '05', symbol: 'cycle', title: 'Optimisation', desc: 'I read the market response and adjust the course.', output: 'Next move' },
  ],
}

export const CASE_STUDIES = {
  label: '04', sectionTitle: 'Results', heading: 'Three problems. Three systems moving again.', intro: 'The brand stays confidential. The work can still be shown.',
  items: [
    { num: '01', code: 'CONVERSION', visual: 'listing', title: 'The page had traffic, but failed to persuade.', situation: 'Generic content left the main objections unanswered.', intervention: 'A new hierarchy, copy and images built around real queries.', result: 'Existing demand found a page better equipped to convert it.' },
    { num: '02', code: 'LAUNCH', visual: 'launch', title: 'The product had to launch without history.', situation: 'Positioning, catalogue and campaigns were moving on separate tracks.', intervention: 'We prepared them as one coordinated launch sequence.', result: 'The product built recurring sales and a base to develop.' },
    { num: '03', code: 'MARKETS', visual: 'markets', title: 'Translating the listing was not enough to grow abroad.', situation: 'Each country needed different demand, messages and priorities.', intervention: 'Research and launch were adapted market by market.', result: 'Expansion became a repeatable process.' },
  ],
  confidentiality: 'Brands and metrics remain confidential under contractual agreements. In a qualified call I can show context and verifiable results without exposing sensitive data.',
}

export const SKALEBIDOS = {
  label: '05', sectionTitle: 'The system', eyebrow: 'SkalebidOS', heading: 'Work does not disappear between calls, files and messages.',
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
  label: '06', sectionTitle: 'About me', heading: ['Part computer scientist.', 'Part marketer.', 'Always curious.'],
  paragraphs: [
    'I started with computer science. Today I study Management and work on Amazon every day. They only look like different worlds: in both, you need to understand the system before trying to improve it.',
    'I like building tools, organising information and keeping what I learn. That is why I treat marketing less like a creative hunch and more like a problem to observe, test and correct.',
    'Away from the task list I am much the same: curious, methodical and unable to leave a confusing process alone when it could be simpler.',
  ],
  question: 'I always start with the same question: which constraint is costing your brand the most opportunity today?',
  notes: [
    { value: '01', label: 'Foundation', text: 'Computer science' },
    { value: '02', label: 'Study', text: 'Management' },
    { value: '03', label: 'Useful obsession', text: 'Systems that work' },
  ],
  media: { label: 'Daniele / Turin', caption: 'Daniele Napolitano · Amazon Account Manager', alt: 'Daniele Napolitano working at his computer' },
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
