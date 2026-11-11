/**
 * Shared site content for Nexora Digital.
 * Centralising copy keeps sections consistent and easy to maintain.
 */

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    icon: 'Code2',
    title: 'Website Development',
    description:
      'Fast, scalable, pixel-perfect websites built with modern frameworks and engineered to convert visitors into customers.',
    points: ['Responsive front-end', 'Headless CMS', 'Performance-first'],
  },
  {
    icon: 'PenTool',
    title: 'UI/UX Design',
    description:
      'Human-centred interfaces that feel effortless. We design journeys backed by research, prototyping and rigorous testing.',
    points: ['User research', 'Design systems', 'Interactive prototypes'],
  },
  {
    icon: 'Palette',
    title: 'Branding',
    description:
      'Distinctive identities that tell your story — from logo systems and typography to tone of voice and brand guidelines.',
    points: ['Logo & identity', 'Brand guidelines', 'Visual language'],
  },
  {
    icon: 'Search',
    title: 'SEO',
    description:
      'Technical and content SEO that moves you up the rankings and keeps qualified organic traffic flowing month after month.',
    points: ['Technical audits', 'On-page optimisation', 'Keyword strategy'],
  },
  {
    icon: 'Megaphone',
    title: 'Digital Marketing',
    description:
      'Data-driven campaigns across paid, social and email that grow audience, nurture leads and deliver measurable ROI.',
    points: ['Paid social & search', 'Email automation', 'Analytics & reporting'],
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We dig into your goals, audience and market to define a clear, measurable strategy before a single pixel is drawn.',
    icon: 'Compass',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Wireframes evolve into polished prototypes. We refine every interaction until the experience feels right.',
    icon: 'Layout',
  },
  {
    step: '03',
    title: 'Develop',
    description:
      'Our engineers build production-grade, tested code — fast, accessible and ready to scale with your business.',
    icon: 'Terminal',
  },
  {
    step: '04',
    title: 'Deliver & Grow',
    description:
      'We launch, measure and optimise. Continuous improvement keeps your product ahead of the curve.',
    icon: 'Rocket',
  },
];

export const PORTFOLIO = [
  {
    title: 'Lumen Finance Platform',
    category: 'Web App · Fintech',
    description:
      'A concept dashboard for a next-gen banking product, featuring real-time charts and a fluid dark interface.',
    image:
      'https://images.pexels.com/photos/6638402/pexels-photo-6638402.png?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['UI/UX', 'Development'],
  },
  {
    title: 'Aura Wellness App',
    category: 'Mobile · Healthtech',
    description:
      'Concept mobile experience for a meditation startup, built around calm motion and gentle onboarding flows.',
    image:
      'https://images.pexels.com/photos/38639/mockup-psd-ipad-iphone-38639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Mobile', 'Branding'],
  },
  {
    title: 'Northwind Brand System',
    category: 'Branding · Agency',
    description:
      'A concept identity system for a creative studio, including logo suite, stationery and a flexible colour palette.',
    image:
      'https://images.pexels.com/photos/7598009/pexels-photo-7598009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Branding', 'Print'],
  },
];

export const HIGHLIGHTS = [
  {
    title: 'Dark Dashboard Exploration',
    category: 'Concept · UI Design',
    description:
      'A self-initiated exploration of a data-rich analytics interface, studying how dense information can stay calm and legible in a dark theme.',
    image:
      'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Dashboard', 'Data viz'],
  },
  {
    title: 'Calm Onboarding Flow',
    category: 'Concept · Mobile UX',
    description:
      'A concept onboarding sequence for a wellness app, exploring how pacing, motion and whitespace can reduce friction and set a gentle tone.',
    image:
      'https://images.pexels.com/photos/4325494/pexels-photo-4325494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Mobile', 'Motion'],
  },
  {
    title: 'Identity System Study',
    category: 'Concept · Branding',
    description:
      'A brand identity study exploring logo systems, typographic hierarchy and colour application across print and digital touchpoints.',
    image:
      'https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Identity', 'Print'],
  },
];

export const STATS = [
  { value: 'Full-stack', label: 'Design & engineering' },
  { value: '4', label: 'Step process' },
  { value: '5', label: 'Service areas' },
  { value: '∞', label: 'Iteration cycles' },
];

// Editable contact placeholders — replace these with your real details
// when launching. No real email, phone or messaging account is configured.
export const CONTACT_PLACEHOLDERS = {
  email: 'your-email@example.com',
  phone: '+1 (000) 000-0000',
  location: 'Remote · Worldwide',
};
