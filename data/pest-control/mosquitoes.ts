import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'mosquitoes',
  title: 'How to Get Rid of Mosquitoes in Your Yard',
  metaTitle: 'How to Get Rid of Mosquitoes in Your Yard — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Mosquitoes ruining your backyard? Learn how to eliminate breeding sites, effective yard treatments, prevention tips, and when professional spraying is worth it.',
  intro: `Mosquitoes don't just appear out of nowhere... they breed in standing water, and a single bottle cap of stagnant water is enough to produce hundreds of larvae. The good news is that eliminating breeding sites on your property can reduce mosquito populations by 70% to 80% without spending a dime.`,
  signs: [
    { sign: 'Persistent biting outdoors', detail: 'If you can\'t sit outside for 10 minutes without getting bitten, mosquitoes are breeding nearby. They typically don\'t travel far from where they hatch... most species stay within 200 to 300 feet of their breeding site.' },
    { sign: 'Buzzing around doors and windows', detail: 'Mosquitoes are attracted to CO2 and light. If they\'re clustering around your entry points at dusk, you have a significant local population.' },
    { sign: 'Larvae in standing water', detail: 'Check birdbaths, plant saucers, clogged gutters, old tires, and any container holding water. Mosquito larvae look like tiny wriggling commas just below the surface. If you see them, that\'s a confirmed breeding site.' },
    { sign: 'Bites at dusk and dawn', detail: 'Most mosquito species are most active during the 30 minutes before and after sunset and sunrise. If biting is concentrated during these times, you have a classic mosquito problem versus other biting insects.' },
    { sign: 'Resting mosquitoes in shaded areas', detail: 'During the day, mosquitoes rest in cool, shaded spots... under decks, in dense shrubs, and in tall grass. Shake a bush near your house and see if mosquitoes fly out.' },
  ],
  diyTreatments: [
    { method: 'Eliminate standing water', detail: 'Walk your entire property and dump, drain, or cover every container that holds water. Flip over buckets, clean gutters, change birdbath water twice a week, drill drainage holes in tire swings. This single step eliminates more mosquitoes than any spray.', cost: '$0' },
    { method: 'Mosquito dunks (BTI)', detail: 'Drop these biological larvicide donuts into water features, rain barrels, ponds, and drainage ditches you can\'t drain. The bacteria (BTI) kills mosquito larvae but is harmless to fish, birds, pets, and humans. Each dunk treats up to 100 square feet of water for 30 days.', cost: '$8 to $15 for a 6-pack' },
    { method: 'Yard barrier spray', detail: 'Spray bifenthrin or permethrin-based insecticide on shrubs, fences, under decks, and along shaded areas where mosquitoes rest. Kills on contact and provides 2 to 4 weeks of residual protection. Spray in the evening to protect pollinators.', cost: '$15 to $25 per bottle' },
    { method: 'Oscillating fans on patios', detail: 'Mosquitoes are weak fliers... a basic box fan or oscillating fan on your patio creates enough airflow to keep them away. This is surprisingly effective and costs nothing to set up if you already have a fan.', cost: '$20 to $40 for a fan' },
  ],
  preventionTips: [
    'Clean gutters at least twice a year... clogged gutters are the most overlooked breeding site.',
    'Change birdbath water every 2 to 3 days or add a mosquito dunk.',
    'Keep grass mowed short and trim shrubs to reduce shaded resting areas.',
    'Repair or replace torn window and door screens.',
    'Store boats, wheelbarrows, and other equipment upside down or under cover.',
    'Stock ornamental ponds with mosquitofish (Gambusia)... each fish eats up to 200 larvae per day.',
  ],
  whenToCallPro: `Professional mosquito spraying services typically cost $75 to $150 per treatment and last 2 to 3 weeks. It's worth it if you're hosting outdoor events, live near wetlands you can't control, or have tried DIY methods for a full season without results. Some companies offer season-long plans for $350 to $700 that include treatments every 3 weeks from spring through fall. Ask about their products... barrier sprays using bifenthrin are standard and effective.`,
  proCost: { low: 350, high: 700 },
  recommendedProducts: [
    { name: 'Summit Mosquito Dunks (20-pack)', description: 'BTI larvicide that kills mosquito larvae in standing water. Safe for pets, fish, wildlife, and humans. Each dunk lasts 30 days.', priceRange: '$12 to $20', amazonUrl: 'https://www.amazon.com/s?k=Summit+Mosquito+Dunks+20+Pack&tag=replacementgu-20' },
    { name: 'Cutter Backyard Bug Control Spray', description: 'Hose-end sprayer with permethrin for yard barrier treatment. Covers up to 5,000 square feet. Apply to shrubs, fences, and shaded areas.', priceRange: '$10 to $15', amazonUrl: 'https://www.amazon.com/s?k=Cutter+Backyard+Bug+Control+Spray&tag=replacementgu-20' },
    { name: 'Thermacell Patio Shield', description: 'Creates a 15-foot mosquito-free zone using allethrin mats. No spray, no flame, no smell. Great for patios and decks.', priceRange: '$20 to $30', amazonUrl: 'https://www.amazon.com/s?k=Thermacell+Patio+Shield+Mosquito+Repellent&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'gnats', name: 'Gnats' },
    { slug: 'wasps', name: 'Wasps' },
    { slug: 'fleas', name: 'Fleas' },
  ],
}
