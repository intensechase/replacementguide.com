import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'wasps',
  title: 'How to Get Rid of Wasps',
  metaTitle: 'How to Get Rid of Wasps — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Wasps nesting around your home? Learn how to safely remove nests, DIY treatment options, prevention tips, and when to call a professional.',
  intro: `A few wasps cruising around your patio are annoying. A nest under your eaves or inside a wall void is a problem that gets worse every week... a mature yellow jacket colony can have 5,000 workers by late summer. Here's how to handle it safely and which situations require a pro.`,
  signs: [
    { sign: 'Visible paper nests', detail: 'Paper wasps build open, umbrella-shaped nests under eaves, porch ceilings, and deck railings. They\'re usually gray and you can see the honeycomb cells. These nests start small in spring and grow through summer.' },
    { sign: 'Wasps entering a hole in your house', detail: 'Yellow jackets and hornets often nest inside wall voids, attics, and underground. If you see wasps repeatedly entering and exiting the same hole in your siding, soffit, or ground... there\'s a nest behind it.' },
    { sign: 'Increased wasp activity near food', detail: 'Wasps are attracted to protein in spring (they\'re feeding larvae) and sugar in late summer (colony is winding down). Heavy wasp presence around your grill, garbage, or outdoor dining means a nest is nearby.' },
    { sign: 'Aggressive behavior near a specific area', detail: 'Wasps become defensive when you get within 10 to 15 feet of their nest. If wasps buzz you aggressively in the same spot every time, look for a nest nearby.' },
    { sign: 'Chewed wood surfaces', detail: 'Paper wasps scrape wood fibers from fences, decks, and unpainted wood to build their nests. You\'ll see small stripped patches on wood surfaces with a sandpapered appearance.' },
    { sign: 'Ground holes with wasp traffic', detail: 'Yellow jackets commonly nest underground in abandoned rodent burrows. A steady stream of wasps going in and out of a hole in your yard is a ground nest... and they can be very aggressive if disturbed.' },
  ],
  diyTreatments: [
    { method: 'Aerosol wasp spray (for visible nests)', detail: 'Spray the nest at dusk or dawn when all wasps are inside and less active. Stand 15 to 20 feet away and soak the nest. Wait 24 hours, then knock it down. For paper wasp nests under eaves, this is usually all you need.', cost: '$5 to $10 per can' },
    { method: 'Dust treatment for wall voids', detail: 'For nests inside walls, puff insecticidal dust (like Delta Dust) into the entry hole using a hand duster. The wasps track the dust into the nest. Don\'t seal the hole yet... wait 2 to 3 days for the colony to die, then seal it.', cost: '$15 to $25 for dust and duster' },
    { method: 'Wasp traps', detail: 'Hang commercial wasp traps or make DIY traps from 2-liter bottles baited with sugar water, fruit juice, or meat. These reduce the number of foraging wasps but won\'t eliminate a nest. Best used as a supplement to nest removal.', cost: '$8 to $15 for reusable traps' },
    { method: 'Soap and water for small nests', detail: 'Mix 2 tablespoons of dish soap in a spray bottle of water. The soap clogs their breathing pores and kills them quickly. This works well for small paper wasp nests with 10 to 20 visible wasps. Not recommended for large nests.', cost: '$0' },
  ],
  preventionTips: [
    'Seal gaps in siding, soffits, and around window frames in early spring before queens start nesting.',
    'Hang fake wasp nests (decoys) under eaves... wasps are territorial and avoid areas with existing colonies.',
    'Keep garbage cans sealed with tight-fitting lids and rinse recycling containers.',
    'Avoid leaving sugary drinks or pet food outdoors.',
    'Paint or stain bare wood surfaces... wasps prefer unpainted wood for nest-building material.',
    'Inspect your property in April and May when nests are small and easy to remove.',
  ],
  whenToCallPro: `Call a professional if the nest is inside a wall void, in your attic, or underground where you can't safely reach it. Also call for any nest larger than a softball... at that point the colony has hundreds of workers and removal carries real sting risk. People with bee or wasp allergies should never attempt DIY removal. Professional removal typically takes 30 minutes to an hour and includes a guarantee.`,
  proCost: { low: 100, high: 400 },
  recommendedProducts: [
    { name: 'Raid Wasp & Hornet Killer Spray', description: 'Sprays up to 22 feet for safe distance from the nest. Kills on contact. Use at dusk for best results.', priceRange: '$5 to $8', amazonUrl: 'https://www.amazon.com/s?k=Raid+Wasp+Hornet+Killer+Spray&tag=replacementgu-20' },
    { name: 'Delta Dust Insecticide with Hand Duster', description: 'Waterproof insecticidal dust for treating wall voids and ground nests. Lasts up to 8 months. Apply into entry holes with the included bellows duster.', priceRange: '$20 to $30', amazonUrl: 'https://www.amazon.com/s?k=Delta+Dust+Insecticide+Hand+Duster&tag=replacementgu-20' },
    { name: 'RESCUE! Reusable Yellowjacket Trap', description: 'Non-toxic attractant trap that catches yellow jackets. Reusable design... just empty and refill the bait. Hang near outdoor dining areas.', priceRange: '$8 to $15', amazonUrl: 'https://www.amazon.com/s?k=RESCUE+Reusable+Yellowjacket+Trap&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'mosquitoes', name: 'Mosquitoes' },
    { slug: 'spiders', name: 'Spiders' },
    { slug: 'ants', name: 'Ants' },
  ],
}
