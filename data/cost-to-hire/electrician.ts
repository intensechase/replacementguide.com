export const guide = {
  slug: 'electrician',
  title: 'How Much Does an Electrician Cost?',
  metaTitle: 'How Much Does an Electrician Cost? (2026 Pricing) | ReplacementGuide',
  metaDescription: 'Electrician costs average $150-$500 per visit. See real pricing for common jobs, what affects the bill, and when you actually need a licensed electrician.',
  professional: 'Electrician',
  intro: `Electrical work isn't cheap... but there's a good reason for that. It's one of the few trades where mistakes can kill you or burn your house down. Most electrician visits run $150 to $500, though panel upgrades and rewiring jobs can go much higher. Knowing what's reasonable helps you avoid overpaying.`,
  averageCost: { low: 150, high: 500, unit: 'per visit' },
  costFactors: [
    {
      factor: 'Licensing and local requirements',
      detail: 'Electricians carry expensive licenses and insurance. States with stricter requirements (like California or Massachusetts) tend to have higher labor rates because the barrier to entry is higher.',
    },
    {
      factor: 'Permit requirements',
      detail: 'Most electrical work beyond simple fixture swaps requires a permit. Permit costs range from $50 to $500 depending on the scope and your city. The electrician usually handles this, but you pay for it.',
    },
    {
      factor: 'Access difficulty',
      detail: 'Running wire through a finished wall costs more than running it through an unfinished basement. If your attic is cramped or your crawl space is tight, expect the job to take longer and cost more.',
    },
    {
      factor: 'Panel capacity',
      detail: 'If your electrical panel is full or outdated, even a simple addition like a new circuit might require a panel upgrade ($1500-$3000). This is common in homes built before 1980.',
    },
    {
      factor: 'Time of day',
      detail: 'Emergency electrical calls are expensive. After-hours rates are typically $200-$350 just for the service call before any work begins.',
    },
  ],
  commonJobs: [
    { job: 'Install a ceiling fan', costRange: '$150-$350', timeEstimate: '1-2 hours' },
    { job: 'Replace an outlet or switch', costRange: '$100-$200', timeEstimate: '15-30 minutes' },
    { job: 'Add a new circuit', costRange: '$200-$500', timeEstimate: '2-4 hours' },
    { job: 'Upgrade electrical panel (100 to 200 amp)', costRange: '$1500-$3000', timeEstimate: '6-10 hours' },
    { job: 'Install a whole-house generator transfer switch', costRange: '$500-$1500', timeEstimate: '3-6 hours' },
    { job: 'Install recessed lighting (4-6 lights)', costRange: '$600-$1200', timeEstimate: '3-5 hours' },
    { job: 'Troubleshoot a tripping breaker', costRange: '$150-$300', timeEstimate: '1-2 hours' },
    { job: 'Install an EV charger (Level 2)', costRange: '$500-$1500', timeEstimate: '2-4 hours' },
  ],
  whenToHire: `Always hire a licensed electrician for panel work, new circuits, anything involving your service entrance, and any job that requires a permit. If breakers trip repeatedly, outlets spark, lights flicker for no reason, or you smell burning near outlets or switches... call an electrician right away. Electrical problems don't get better on their own.`,
  whenToDIY: `Swapping a light switch or outlet is straightforward if you turn off the breaker and verify power is off with a tester ($15 at any hardware store). Replacing a light fixture is also manageable. But be honest with yourself... if you're not 100% sure which wire goes where, stop and call someone. The savings aren't worth the risk.`,
  howToSave: [
    'Bundle multiple small jobs into 1 visit. Adding an outlet while they\'re already there for a ceiling fan saves you a second service call fee.',
    'Get 3 quotes for any job over $500. Electrician pricing varies a lot, especially for panel and rewiring work.',
    'Buy your own fixtures (fans, lights, outlets) from a home store and have the electrician install them. Just confirm they\'re okay with it first.',
    'Schedule during normal weekday hours. Emergency and weekend calls cost 50-100% more.',
    'Ask if they offer a flat rate for common jobs like outlet installs or fan replacements.',
  ],
  redFlags: [
    'They say permits aren\'t needed when they clearly are. This is a huge liability for you as the homeowner.',
    'No license number provided or it can\'t be verified with your state licensing board.',
    'They want to do the work without turning off the breaker. This sounds absurd but it happens.',
    'Insisting on a full panel upgrade when you only need 1 new circuit and have open slots available.',
    'No written estimate. Electrical work should always have a clear scope and price before it starts.',
  ],
  relatedProducts: [
    { category: 'home', slug: 'electrical-panel', name: 'Electrical Panel' },
    { category: 'home', slug: 'ceiling-fan', name: 'Ceiling Fan' },
    { category: 'home', slug: 'thermostat', name: 'Thermostat' },
  ],
}
