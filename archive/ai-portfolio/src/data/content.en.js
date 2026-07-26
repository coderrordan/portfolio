// ─────────────────────────────────────────────
//  SITE CONTENT — English version
// ─────────────────────────────────────────────

export const SITE = {
    name: 'Daniele Napolitano',
    title: 'Amazon Account Manager',
    email: 'patriziodaniele.napolitano@gmail.com',
    vat: 'IT 12741130012',
    year: '2025',

    socials: {
        youtube: 'https://www.youtube.com/@TUO_CANALE',
        instagram: 'https://www.instagram.com/TUO_PROFILO',
        linkedin: 'https://www.linkedin.com/in/TUO_PROFILO',
    },
}

export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Method', href: '#process' },
    { label: 'Resources', href: '#newsletter' },
]

export const HERO = {
    badge: 'SYSTEM ONLINE // DANIELE NAPOLITANO // AMAZON SPECIALIST',
    lines: [
        { text: "I don't do miracles.", accent: false },
        { text: 'I build sales', accent: true },
        { text: 'ecosystems.', accent: true },
    ],
    sub: "No magic formulas. Just data, systems and positioning strategies to scale your <strong>brand on Amazon</strong>.",
    stats: [
        { num: '5+', label: 'Years of\nexperience' },
        { num: '3+', label: 'Years on\nAmazon' },
    ],
    ctas: [
        { label: 'Free consultation →', href: `mailto:${SITE.email}`, primary: true },
        { label: 'Discover services →', href: '#services', primary: false },
    ],
}

export const MARQUEE_ITEMS = [
    'Amazon PPC',
    'Account Management',
    'Listing Optimization',
    'Brand Registry',
    'Data Analytics',
    'AI Automation',
    'n8n',
    'Claude Code',
]

export const ABOUT = {
    label: '01 —',
    sectionTitle: 'IDENTIKIT',
    heading: ['Part engineer.', 'Part marketer.'],
    paragraphs: [
        "I don't approach marketing as an abstract art, but as an <strong>engineering system</strong>. For 5 years I've been analyzing user behavior and applying systems to scale.",
        'Every useful framework, data point, and failure ends up in my <a href="#" target="_blank">Second Brain</a>: an archive that lets me connect the dots where others only see chaos.',
    ],
}

export const TERMINAL_LINES = [
    { type: 'prompt', text: `> Booting Daniele_OS v${((new Date() - new Date('2001-09-17')) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)}...` },
    { type: 'spacer', text: '' },
    { type: 'ok', text: '[BOOT] Core engine: OK' },
    { type: 'ok', text: '[BOOT] Amazon A9 Algorithm: loaded' },
    { type: 'ok', text: '[BOOT] n8n Automations: active' },
    { type: 'ok', text: '[BOOT] Second Brain sync: complete' },
    { type: 'warn', text: '[INFO] 5 years of patterns found' },
    { type: 'spacer', text: '' },
    { type: 'prompt', text: '> Query: "skill_matrix"' },
    { type: 'spacer', text: '' },
    { type: 'json', text: '{ <k>"amazon"</k>: [<s>"Listing Optimization"</s>, <s>"PPC"</s>, <s>"A+"</s>, <s>"Brand Registry"</s>, <s>"Reporting"</s>],' },
    { type: 'json', text: '  <k>"tools"</k>: [<s>"Helium10"</s>, <s>"Claude Code"</s>, <s>"n8n"</s>, <s>"Skalebid LLM"</s>] }' },
    { type: 'spacer', text: '' },
    { type: 'prompt', text: '> Awaiting input' },
]

export const SERVICES = {
    label: '02 —',
    sectionTitle: 'OPERATIONAL MODULES',
    heading: ['Tailored services', 'for your business'],
    subtext: "I don't offer standard services. I implement specific protocols and frameworks to dominate your niche.",
    cards: [
        {
            num: '01',
            title: 'Amazon Account Management',
            desc: "Amazon has its own rules, and you can't just do the bare minimum. I manage your account end-to-end: listing optimization, PPC campaigns, inventory management, review strategy and everything needed to scale sustainably.",
            tags: ['PPC Advertising', 'Listing Optimization', 'Brand Registry', 'A+ Content', 'Reporting'],
            fullWidth: false,
        },
        {
            num: '02',
            title: 'Strategic Copywriting',
            desc: "There's copy that sells and copy that doesn't. I approach every text with a scientific mindset: target research, competitor analysis, testing and continuous optimization. From Amazon listings to emails, from blogs to landing pages.",
            tags: ['Listing Copy', 'Email Marketing', 'Content Strategy', 'Brand Voice'],
            fullWidth: true,
        },
    ],
    cta: {
        heading: 'Free, no-strings-attached consultation',
        text: "Let's evaluate your situation together. If I can truly help, I'll tell you how. If I can't, I'll tell you that too.",
        label: 'Book now →',
    },
}

export const PROCESS = {
    label: '03 —',
    sectionTitle: 'The Method',
    heading: ['How I work,', 'step by step'],
    subtext: 'A structured process that adapts to your reality, not the other way around. Every phase is designed to maximize results.',
    steps: [
        { num: '01', title: 'Briefing & Research', desc: 'I explore your market landscape and goals before making a single move.' },
        { num: '02', title: 'Plan Creation', desc: 'No generic paths: a roadmap built specifically for you and your needs.' },
        { num: '03', title: 'Execution', desc: 'We roll up our sleeves and turn ideas into tangible, measurable results.' },
        { num: '04', title: 'Data Analysis', desc: 'Numbers, charts, reports: we understand the impact and areas for improvement.' },
        { num: '05', title: 'Continuous Optimization', desc: 'Collected data and the latest industry insights guide every course correction.' },
    ],
}

export const CTA_SECTION = {
    eyebrow: 'Ready to grow?',
    heading: ["Let's talk about", 'your project'],
    text: 'The right professional can make the difference between success and failure. Free consultation, zero commitment.',
    ctas: [
        { label: 'Write now →', href: `mailto:${SITE.email}`, primary: true },
        { label: 'Watch the channel →', href: SITE.socials.youtube, primary: false },
    ],
}

export const NEWSLETTER = {
    label: 'INSIGHT —',
    sectionTitle: 'Newsletter',
    heading: 'I constantly learn and share what I discover',
    text: 'From time to time I send useful content for freelancers and industry professionals. No spam, I promise.',
    disclaimer: 'Zero spam. Unsubscribe anytime.',
    placeholder: 'your@email.com',
    cta: 'Join →',
}

// Extra UI strings not in content objects
export const UI = {
    contact: 'Contact me',
    scroll: 'Scroll',
    thankYou: 'Thanks! ✓',
    footerCrafted: 'Handcrafted in Italy',
    systemOnline: 'SYSTEM ONLINE',
    amazonSpecialist: 'AMAZON SPECIALIST',
}
