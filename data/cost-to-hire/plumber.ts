export const guide = {
  slug: 'plumber',
  title: 'How Much Does a Plumber Cost?',
  metaTitle: 'How Much Does a Plumber Cost? (2026 Pricing) | ReplacementGuide',
  metaDescription: 'Wondering how much a plumber costs? Average rates are $150-$500 per visit. We break down pricing by job type, what affects the bill, and how to save.',
  professional: 'Plumber',
  intro: `Plumbing bills have a reputation for being painful... and sometimes they are. But knowing what to expect before you call takes a lot of the sting out. Most service calls land between $150 and $500 depending on the job, and a lot of common fixes are way cheaper than people assume.`,
  averageCost: { low: 150, high: 500, unit: 'per visit' },
  costFactors: [
    {
      factor: 'Time of day and urgency',
      detail: 'Emergency and after-hours calls typically cost 1.5 to 2 times the normal rate. A burst pipe at 2am on a Saturday is going to cost more than a scheduled Tuesday appointment.',
    },
    {
      factor: 'Geographic location',
      detail: 'Plumbers in major metros like San Francisco or New York charge $100-$150/hour. In rural areas or smaller cities, $60-$90/hour is more typical.',
    },
    {
      factor: 'Complexity of the job',
      detail: 'Replacing a faucet is straightforward. Rerouting a drain line through a concrete slab is not. The more demolition, access issues, or code requirements involved, the higher the bill.',
    },
    {
      factor: 'Parts and materials',
      detail: 'Most plumbers mark up parts 20-50% over retail. For big ticket items like a water heater, you can sometimes save by purchasing the unit yourself... but check with the plumber first since some won\'t warranty work on customer-supplied equipment.',
    },
    {
      factor: 'Permits and inspections',
      detail: 'Some jobs like water heater installs or repiping require permits. The plumber usually pulls these for you, but the cost ($50-$300) gets added to your bill.',
    },
  ],
  commonJobs: [
    { job: 'Fix a leaky faucet', costRange: '$125-$275', timeEstimate: '30-60 minutes' },
    { job: 'Unclog a drain (snake)', costRange: '$150-$350', timeEstimate: '30-90 minutes' },
    { job: 'Replace a toilet', costRange: '$200-$500', timeEstimate: '1-2 hours' },
    { job: 'Install a water heater (tank)', costRange: '$800-$1800', timeEstimate: '2-4 hours' },
    { job: 'Repair a slab leak', costRange: '$1500-$4000', timeEstimate: '1-2 days' },
    { job: 'Replace a garbage disposal', costRange: '$175-$400', timeEstimate: '1-2 hours' },
    { job: 'Fix a running toilet', costRange: '$100-$225', timeEstimate: '20-45 minutes' },
    { job: 'Repipe a whole house', costRange: '$4000-$15000', timeEstimate: '2-5 days' },
  ],
  whenToHire: `Call a plumber when water is actively leaking and you can't stop it, when you smell gas near a water heater, or when a drain is completely blocked and a store-bought snake didn't help. Any work involving gas lines, main sewer lines, or water supply rerouting should always go to a licensed pro.`,
  whenToDIY: `You can handle a lot more than you think. Replacing a faucet, swapping a toilet flapper, unclogging a slow drain with a plunger or hand snake, and even installing a new toilet are all very doable with a YouTube tutorial and basic tools. Just know when to stop... if you hit something unexpected, turn off the water and call someone.`,
  howToSave: [
    'Get 3 quotes for any job over $500. Prices vary wildly between plumbers in the same area.',
    'Schedule during normal business hours on weekdays. Avoid emergency and weekend rates whenever possible.',
    'Ask about flat-rate pricing vs. hourly. For simple jobs, flat rate is usually cheaper and more predictable.',
    'Bundle multiple small jobs into 1 visit. Most plumbers charge a service fee just to show up, so knock out everything at once.',
    'Join a plumbing company\'s maintenance plan if they offer one. Many waive the service call fee for members.',
  ],
  redFlags: [
    'They demand full payment upfront before any work begins. A deposit is normal... full payment is not.',
    'No written estimate or contract. If they won\'t put it in writing, walk away.',
    'They pressure you into immediate, expensive repairs without explaining the problem or showing you the issue.',
    'Not licensed or insured. Ask for their license number and verify it with your state board.',
    'The quote is dramatically lower than everyone else. That usually means hidden fees or corners being cut.',
  ],
  relatedProducts: [
    { category: 'home', slug: 'water-heater', name: 'Water Heater' },
    { category: 'home', slug: 'toilet', name: 'Toilet' },
    { category: 'home', slug: 'garbage-disposal', name: 'Garbage Disposal' },
    { category: 'home', slug: 'faucet', name: 'Faucet' },
  ],
}
