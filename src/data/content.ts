export interface Step {
  num: string;
  label: string;
  desc: string;
}

export interface Plan {
  name: string;
  price: string;
  sub: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

export interface Faq {
  q: string;
  a: string;
}

export const steps: Step[] = [
  { num: '01', label: 'Discovery Call', desc: 'Wij luisteren. Jij vertelt. Wij nemen alles op.' },
  { num: '02', label: 'Design',         desc: 'Een ontwerp op maat. Geen templates. Geen compromissen.' },
  { num: '03', label: 'Build',          desc: 'Live in 1 week. 99/100 Google score. Gegarandeerd.' },
  { num: '04', label: 'Launch',         desc: 'Jouw site live. Wij blijven beschikbaar.' },
];

export const plans: Plan[] = [
  {
    name: 'Starter', price: '€500', sub: 'Voor wie wil starten.',
    features: ['Volledig custom Next.js website', 'Custom CMS + eigen beheersysteem', 'Live in 1 week', '99/100 Google score', 'SEO technisch correct'],
    cta: 'Kies Starter', highlight: false,
  },
  {
    name: 'Groei', price: '€1.000', sub: 'Voor wie wil groeien.',
    features: ['Volledig custom Next.js website', 'Custom CMS + eigen beheersysteem', 'SEO + copywriting', 'Live in 1 week', '99/100 Google score', '1 maand support'],
    cta: 'Kies Groei', highlight: true,
  },
  {
    name: 'Full Service', price: '€1.500', sub: 'Voor wie wil domineren.',
    features: ['Volledig custom Next.js website', 'Custom CMS + eigen beheersysteem', 'SEO + copywriting + strategie', 'Live in 1 week', '99/100 Google score', '3 maanden support'],
    cta: 'Kies Full Service', highlight: false,
  },
  {
    name: 'Op Maat', price: 'Op aanvraag', sub: 'Voor wie meer nodig heeft.',
    features: ['Multi-page custom Next.js', 'Geavanceerd CMS — meerdere editors, rollen, workflows', 'Integraties: Stripe, boekingen, koppelingen', 'Branding + strategie + copywriting', 'Performance reviews per kwartaal', '6 maanden support'],
    cta: 'Plan gesprek', highlight: false,
  },
];

export const faqs: Faq[] = [
  { q: 'Waarom zijn jullie prijzen zo laag?', a: 'Omdat wij slank werken. Geen groot kantoor, geen overhead, geen tussenpersonen. Wij investeren in technologie en vakmanschap — niet in dure bureaukosten. Die besparing geven wij door aan u.' },
  { q: 'Hoe lang duurt het?', a: 'Één week. Vanaf het moment dat wij alle inhoud van u hebben, is uw site live binnen 7 dagen. Geen weken wachten, geen vage deadlines.' },
  { q: 'Wat krijg ik precies?', a: 'Een volledig custom Next.js website — geen template, geen WordPress. Inclusief een eigen beheersysteem waarmee u zelf teksten en afbeeldingen kan aanpassen. Zonder technische kennis.' },
  { q: 'Heb ik technische kennis nodig?', a: 'Nee. Uw beheersysteem is gebouwd voor ondernemers, niet voor developers. Als u een e-mail kan schrijven, kan u uw site beheren.' },
  { q: 'Wat als ik niet tevreden ben?', a: 'Wij werken in nauw overleg. Na de discovery call weet u exact wat u krijgt. Geen verrassingen, geen meerkosten. Als er iets niet klopt, lossen wij het op.' },
];
