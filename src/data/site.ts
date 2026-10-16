// Shared content for every design concept. In production this is what moves
// into the CMS (Sanity schemas or WordPress fields) — the concepts only differ
// in presentation, so the content model stays the same whichever one wins.

export const contact = {
  phone: '615.249.8570',
  email: 'info@cloudrangecyber.com',
};

export const hero = {
  eyebrow:  'Cyber readiness platform',
  headline: 'Validate cyber readiness of humans & AI agents',
  subhead:  'Measure cyber defense performance in realistic environments before real incidents occur.',
  body:     'Cloud Range lets organizations test, train, and validate human teams and agentic AI through live-fire attack simulations, realistic enterprise environments, and measurable readiness reporting.',
};

export const nav = [
  {
    label: 'Platform',
    items: [
      { label: 'Cloud Range Platform',          href: '#platform' },
      { label: 'Range365™ Hosted Cyber Ranges', href: '#platform' },
      { label: 'Performance Portal™',           href: '#platform' },
      { label: 'AI Validation Range™',          href: '#ai' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      { label: 'Live-Fire Attack Simulations',  href: '#solutions' },
      { label: 'FlexRange™ Readiness Programs', href: '#solutions' },
      { label: 'Tabletop 2.0 Exercises',        href: '#solutions' },
      { label: 'FlexLabs™ Skills Courses',      href: '#solutions' },
      { label: 'Capture the Flag',              href: '#solutions' },
      { label: 'RightTrak™ Aptitude',           href: '#solutions' },
      { label: 'Incident Commander Training',   href: '#solutions' },
    ],
  },
  {
    label: 'Industries',
    items: [
      { label: 'Commercial Enterprise',   href: '#industries' },
      { label: 'Critical Infrastructure', href: '#industries' },
      { label: 'Government & Military',   href: '#industries' },
      { label: 'Higher Education',        href: '#industries' },
      { label: 'MSSPs',                   href: '#industries' },
    ],
  },
  {
    label: 'Partners',
    items: [
      { label: 'Partner Program',           href: '#' },
      { label: 'VARs & Distributors',       href: '#' },
      { label: 'Tech Manufacturers & OEMs', href: '#' },
      { label: 'Partner Portal',            href: '#' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'News & Blog',   href: '#resources' },
      { label: 'Resources',     href: '#resources' },
      { label: 'Videos Hub',    href: '#resources' },
      { label: 'About',         href: '#' },
      { label: 'Leadership',    href: '#' },
      { label: 'Careers',       href: '#' },
    ],
  },
];

export const products = [
  {
    key:     'platform',
    name:    'Cloud Range Platform',
    tagline: 'Improve and validate cyber readiness',
    body:    'A dedicated cloud-hosted range that replicates your network, with licensed versions of the security tools your SOC actually runs.',
  },
  {
    key:     'live-fire',
    name:    'Live-Fire Simulations',
    tagline: 'Prepare teams for real attacks',
    body:    'MITRE ATT&CK–aligned attacks across IT, OT/ICS, cloud, and hybrid environments, run against your blue team in real time.',
  },
  {
    key:     'ai',
    name:    'AI Validation Range™',
    tagline: 'Evaluate AI behavior and performance',
    body:    'Put SOC agents under real attack pressure and score their decisions, escalations, and outcomes before they touch production.',
  },
  {
    key:     'labs',
    name:    'Hands-On Labs',
    tagline: 'Build and reinforce technical skills',
    body:    '1,500+ FlexLabs™ courses and exercises that turn individual skills into measurable, repeatable proficiency.',
  },
  {
    key:     'tabletop',
    name:    'Tabletop 2.0',
    tagline: 'Improve coordination and decision-making',
    body:    'Simulation-supported tabletops where leadership decisions play out against a live technical scenario.',
  },
];

export const stats = [
  { value: '66',     unit: '%', label: 'Reduction in mean time to detect (MTTD)' },
  { value: '30',     unit: '%', label: 'Faster overall incident response' },
  { value: '95',     unit: '%', label: 'Of customers report measurably improved readiness' },
  { value: '1,500',  unit: '+', label: 'Labs, courses, and live-fire attack simulations' },
];

export const capabilities = [
  'Live-fire attack simulations across IT, OT/ICS, cloud, and hybrid environments',
  'MITRE ATT&CK–aligned scenarios based on real-world adversary techniques',
  'Measurable readiness metrics and performance reporting',
  'AI validation for agent behavior, decision-making, and operational performance',
  'Expert-guided missions and simulation-supported tabletop exercises',
  'Custom ranges with licensed versions of the tools in your SOC',
];

export const steps = [
  { n: '01', title: 'Replicate', body: 'We stand up a range that mirrors your network, tools, and telemetry — IT, OT, cloud, or hybrid.' },
  { n: '02', title: 'Attack',    body: 'Our red team runs real adversary techniques against your people and your AI agents, live.' },
  { n: '03', title: 'Measure',   body: 'Every detection, decision, and response is scored in the Performance Portal™.' },
  { n: '04', title: 'Prove',     body: 'Board-ready readiness reporting shows where you improved and what to fix next.' },
];

export const industries = [
  { name: 'Commercial Enterprise',   body: 'Benchmark SOC and IR teams against the threats aimed at your sector.' },
  { name: 'Critical Infrastructure', body: 'OT/ICS ranges for energy, utilities, and manufacturing defenders.' },
  { name: 'Government & Military',   body: 'Mission-ready cyber forces trained on realistic, isolated ranges.' },
  { name: 'Higher Education',        body: 'Hands-on cyber programs that graduate job-ready defenders.' },
  { name: 'MSSPs',                   body: 'Prove analyst quality to clients and scale onboarding.' },
];

// Text placeholders — swap for monochrome SVG logos before launch.
export const customers = ['IBM', 'AWS', 'HCA Healthcare', 'Anthropic', 'Bain & Company', 'EY', 'Travelers', 'BlueCross BlueShield', 'CACI'];

export const quote = {
  text:   'Cloud Range has revolutionized cybersecurity training.',
  source: 'Cybercrime Magazine',
};

export const award = {
  title: 'Overall Cyber Posture Solution of the Year',
  body:  '2026 CyberSecurity Breakthrough Awards',
};

export const posts = [
  { date: 'Oct 15, 2026', tag: 'AI',        title: 'Are cybersecurity teams ready for AI incident response?' },
  { date: 'Oct 8, 2026',  tag: 'News',      title: 'Cloud Range named Overall Cyber Posture Solution of the Year' },
  { date: 'Oct 6, 2026',  tag: 'Cloud',     title: 'How agentic AI is changing cloud security' },
  { date: 'Sep 29, 2026', tag: 'SecOps',    title: 'AI in security operations: 6 challenges security leaders need to solve' },
];

export const footer = [
  { title: 'Platform',   links: ['Cloud Range Platform', 'Range365™', 'Performance Portal™', 'AI Validation Range™'] },
  { title: 'Solutions',  links: ['Live-Fire Simulations', 'FlexRange™', 'Tabletop 2.0', 'FlexLabs™', 'Capture the Flag', 'RightTrak™'] },
  { title: 'Industries', links: ['Commercial Enterprise', 'Critical Infrastructure', 'Government & Military', 'Higher Education', 'MSSPs'] },
  { title: 'Company',    links: ['About', 'Leadership', 'How It Works', 'News & Blog', 'Careers', 'Partners'] },
];
