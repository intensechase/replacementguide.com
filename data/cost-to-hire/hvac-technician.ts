export const guide = {
  slug: 'hvac-technician',
  title: 'How Much Does HVAC Repair Cost?',
  metaTitle: 'How Much Does HVAC Repair Cost? (2026 Pricing) | ReplacementGuide',
  metaDescription: 'HVAC repair costs average $150-$600 per visit. Get real pricing for AC and furnace repairs, what drives the bill up, and smart ways to save.',
  professional: 'HVAC Technician',
  intro: `Your AC dies on the hottest day of the year... of course it does. HVAC repair visits typically run $150 to $600, though refrigerant recharges and compressor replacements can push costs higher. Understanding what you're paying for makes the whole experience less stressful.`,
  averageCost: { low: 150, high: 600, unit: 'per visit' },
  costFactors: [
    {
      factor: 'Season and demand',
      detail: 'HVAC companies are slammed in July and January. You\'ll pay premium rates during peak seasons. Schedule maintenance in spring or fall when technicians are less busy and more likely to offer deals.',
    },
    {
      factor: 'Refrigerant type',
      detail: 'Older systems use R-22 (Freon), which is no longer manufactured and costs $50-$150 per pound. Newer systems use R-410A at $10-$25 per pound. If your system uses R-22, a recharge alone can cost $500-$1500.',
    },
    {
      factor: 'Age of the system',
      detail: 'Parts for systems over 15 years old are harder to find and sometimes need to be special ordered. A simple repair on an old unit can cost more than the same repair on a newer one.',
    },
    {
      factor: 'Type of repair',
      detail: 'A capacitor replacement ($150-$300) is very different from a compressor replacement ($1500-$2500). Diagnostic fees are typically $75-$150 and usually get applied toward the repair if you go ahead with it.',
    },
    {
      factor: 'System type',
      detail: 'Central air, heat pumps, mini-splits, and commercial systems all have different repair costs. Mini-split repairs tend to be more expensive because fewer technicians specialize in them.',
    },
    {
      factor: 'Emergency vs. scheduled',
      detail: 'Weekend and after-hours calls add $100-$200 to the bill. If you can survive with fans and space heaters for a day, scheduling a weekday visit saves real money.',
    },
  ],
  commonJobs: [
    { job: 'Diagnostic service call', costRange: '$75-$150', timeEstimate: '30-60 minutes' },
    { job: 'Replace a capacitor', costRange: '$150-$300', timeEstimate: '30-60 minutes' },
    { job: 'Refrigerant recharge (R-410A)', costRange: '$200-$500', timeEstimate: '30-60 minutes' },
    { job: 'Replace a blower motor', costRange: '$300-$700', timeEstimate: '1-3 hours' },
    { job: 'Replace a contactor', costRange: '$150-$350', timeEstimate: '30-60 minutes' },
    { job: 'Fix a refrigerant leak', costRange: '$500-$1500', timeEstimate: '2-4 hours' },
    { job: 'Replace a compressor', costRange: '$1500-$2500', timeEstimate: '3-6 hours' },
    { job: 'Annual maintenance tune-up', costRange: '$75-$200', timeEstimate: '45-90 minutes' },
  ],
  whenToHire: `Call a technician when your system is blowing warm air in cooling mode (or cold air in heating mode), making grinding or screeching noises, cycling on and off rapidly, or leaking refrigerant. Anything involving refrigerant, electrical components, or gas connections is strictly pro territory. Also call if your energy bills spike suddenly with no change in usage.`,
  whenToDIY: `You can handle more than you think. Change your air filter every 1-3 months (this alone prevents a huge percentage of service calls). Clean debris away from the outdoor unit, clear condensate drain lines with vinegar, and check your thermostat batteries and settings before calling. Sometimes the fix is just a tripped breaker or a thermostat set to the wrong mode.`,
  howToSave: [
    'Sign up for a maintenance plan. Most HVAC companies offer plans ($150-$300/year) that include 2 tune-ups, priority scheduling, and discounts on parts and labor.',
    'Change your air filter regularly. A clogged filter causes most of the problems that lead to expensive service calls.',
    'Get the system serviced in the off-season (spring for AC, fall for heating) when companies often run specials.',
    'Get 2-3 quotes for any repair over $500. Especially for compressor or refrigerant work where pricing varies widely.',
    'Ask if the diagnostic fee applies toward the repair cost. Most reputable companies credit it.',
  ],
  redFlags: [
    'They recommend replacing the entire system without even diagnosing the problem. Some companies push replacements because the commission is higher.',
    'Extremely low diagnostic fee ($29 or "free") that leads to inflated repair quotes. The money has to come from somewhere.',
    'They can\'t explain what\'s wrong in plain language. A good tech will show you the failed part and explain why it matters.',
    'Pressuring you to decide immediately with "today only" pricing. A legitimate repair estimate should be good for at least a few days.',
    'Not EPA 608 certified for refrigerant handling. This is legally required and any real HVAC tech has it.',
  ],
  relatedProducts: [
    { category: 'home', slug: 'air-conditioner', name: 'Air Conditioner' },
    { category: 'home', slug: 'furnace', name: 'Furnace' },
    { category: 'home', slug: 'thermostat', name: 'Thermostat' },
  ],
}
