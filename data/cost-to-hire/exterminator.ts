export const guide = {
  slug: 'exterminator',
  title: 'How Much Does an Exterminator Cost?',
  metaTitle: 'How Much Does an Exterminator Cost? (2026 Pricing) | ReplacementGuide',
  metaDescription: 'Exterminator costs average $150-$400 per visit. See pricing by pest type, what affects cost, and when DIY pest control is good enough.',
  professional: 'Exterminator',
  intro: `Nobody wants to make this call... but sometimes you have to. A single exterminator visit typically costs $150 to $400, though ongoing plans and severe infestations can change that number a lot. The type of pest matters more than almost anything else when it comes to pricing.`,
  averageCost: { low: 150, high: 400, unit: 'per visit' },
  costFactors: [
    {
      factor: 'Type of pest',
      detail: 'Ants and spiders are on the cheap end ($100-$250). Termites ($500-$2500 for treatment) and bed bugs ($1000-$5000 for whole-home heat treatment) are on the expensive end. Rodent removal falls in the middle at $200-$600.',
    },
    {
      factor: 'Size of the home',
      detail: 'Most companies price by square footage. A 1,200 sq ft home costs less to treat than a 3,000 sq ft home simply because it takes less product and less time.',
    },
    {
      factor: 'Severity of infestation',
      detail: 'A few ants in the kitchen is a quick visit. A colony of carpenter ants in the wall framing is a multi-day treatment. The worse the problem, the more visits and product required.',
    },
    {
      factor: 'One-time vs. ongoing plan',
      detail: 'A single treatment runs $150-$400. Quarterly plans cost $100-$200 per visit ($400-$800/year) but prevent problems from coming back. In pest-heavy areas (the South, Pacific Northwest), ongoing plans are usually worth it.',
    },
    {
      factor: 'Treatment method',
      detail: 'Standard chemical spray is cheapest. Baiting systems for termites cost more. Heat treatment for bed bugs is the most expensive option but the most effective.',
    },
  ],
  commonJobs: [
    { job: 'General pest treatment (ants, spiders, roaches)', costRange: '$150-$300', timeEstimate: '30-60 minutes' },
    { job: 'Rodent removal and exclusion', costRange: '$200-$600', timeEstimate: '1-3 visits' },
    { job: 'Termite inspection', costRange: '$75-$150', timeEstimate: '45-90 minutes' },
    { job: 'Termite treatment (liquid barrier)', costRange: '$500-$2500', timeEstimate: '1 day' },
    { job: 'Bed bug treatment (heat, whole home)', costRange: '$1000-$5000', timeEstimate: '1 day' },
    { job: 'Wasp or hornet nest removal', costRange: '$100-$400', timeEstimate: '30-60 minutes' },
    { job: 'Quarterly pest prevention plan', costRange: '$100-$200 per visit', timeEstimate: '20-30 minutes' },
    { job: 'Wildlife removal (raccoons, squirrels)', costRange: '$200-$800', timeEstimate: '1-5 visits' },
  ],
  whenToHire: `Call an exterminator for termites (always), bed bugs (DIY almost never works), large rodent infestations, and any pest you can't identify. If you've tried store-bought treatments for 2 weeks with no improvement, it's time to call a pro. Also call immediately if you see signs of structural damage from wood-destroying insects.`,
  whenToDIY: `For minor ant problems, a quality bait station from the hardware store works just as well as what most exterminators use. Same for occasional spiders... a perimeter spray around your foundation handles them. Mouse traps work fine for 1-2 mice. Keeping a clean house, sealing entry points, and removing standing water prevents most pest problems before they start.`,
  howToSave: [
    'Start with a quarterly plan instead of one-time treatments. The per-visit cost is lower and prevention is cheaper than reaction.',
    'Seal entry points yourself (caulk gaps, install door sweeps, repair screens) before the exterminator comes. This makes treatments more effective.',
    'Get a free termite inspection when buying a home. Most companies offer them to get your business if treatment is needed.',
    'Ask about the warranty. Good pest companies guarantee their work and will come back for free if the problem returns within a set period.',
    'Compare at least 2-3 companies. Pricing for the same service can vary by 50% or more in the same area.',
  ],
  redFlags: [
    'They diagnose a severe problem based on a quick visual inspection without a thorough assessment. Especially suspicious with termites.',
    'Pushing a long-term contract with no cancellation option. Month-to-month or quarterly plans with easy cancellation are the industry standard now.',
    'They can\'t tell you what chemicals they\'re using. You have a right to know what\'s being applied in your home.',
    'Claiming you need whole-home fumigation for a problem that could be handled with targeted treatment. Fumigation is a last resort, not a first step.',
    'No license number on their truck, business card, or estimate. Pest control operators must be licensed in every state.',
  ],
  relatedProducts: [
    { category: 'home', slug: 'sump-pump', name: 'Sump Pump' },
    { category: 'home', slug: 'windows', name: 'Windows' },
  ],
}
