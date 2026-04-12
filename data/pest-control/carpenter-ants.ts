import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'carpenter-ants',
  title: 'How to Get Rid of Carpenter Ants',
  metaTitle: 'How to Get Rid of Carpenter Ants — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Carpenter ants damaging your home? Learn how to identify them, locate the nest, treatment options, and when structural damage requires a professional.',
  intro: `Carpenter ants don't eat wood like termites do... they excavate it to build their nests, pushing out piles of sawdust-like debris called frass. A mature colony of 10,000 to 50,000 ants can cause serious structural damage over several years. Catching them early is the difference between a $50 fix and a $5,000 repair.`,
  signs: [
    { sign: 'Large black ants indoors', detail: 'Carpenter ants are 1/4 to 1/2 inch long... much bigger than regular ants. They\'re usually black, though some species are reddish-brown. Seeing even a few large ants inside during winter is a red flag... they shouldn\'t be active unless they\'re nesting in your walls.' },
    { sign: 'Piles of wood shavings (frass)', detail: 'Fine, sawdust-like debris below window sills, door frames, or baseboards. Unlike termite frass (which is pellet-shaped), carpenter ant frass looks like pencil shavings mixed with insect body parts. This is the most definitive sign.' },
    { sign: 'Faint rustling sounds in walls', detail: 'Tap on wall studs and door frames near suspected areas. A colony of carpenter ants makes a dry rustling or crinkling sound, especially at night when they\'re most active. It\'s subtle... a quiet room helps.' },
    { sign: 'Winged ants emerging indoors', detail: 'Carpenter ant swarmers (winged reproductives) appearing inside your home in spring means there\'s a mature colony in the structure. A mature colony takes 3 to 6 years to produce swarmers... so the nest isn\'t new.' },
    { sign: 'Trails of ants at night', detail: 'Carpenter ants forage primarily at night. Go out with a flashlight after dark and look for trails along your foundation, siding, tree branches touching the house, and utility lines.' },
    { sign: 'Soft, damaged wood', detail: 'Press a screwdriver into window sills, door frames, and porch supports. If the wood gives easily or feels spongy, carpenter ants (or moisture damage attracting them) may be the cause. They prefer wood already softened by moisture.' },
  ],
  diyTreatments: [
    { method: 'Locate the nest', detail: 'Follow ant trails at night with a flashlight to find where they enter the structure. Look for frass accumulation. Tap walls and listen for rustling. The nest is usually in moist wood... around leaky windows, bathrooms, rooflines, or where wood contacts soil.', cost: '$0 (just time and a flashlight)' },
    { method: 'Bait with protein and sugar baits', detail: 'Carpenter ants prefer protein in spring and sugar in summer. Place gel bait or bait stations along their trails. Use Advance Carpenter Ant Bait (granular) near outdoor trails. Workers carry bait back to the colony, including to the queen.', cost: '$15 to $25 for bait' },
    { method: 'Dust treatment into wall voids', detail: 'If you can locate the nest behind a wall, drill a small 1/8-inch hole and puff boric acid or diatomaceous earth directly into the void using a hand duster. The ants track the dust through the colony. This is the most effective DIY method for wall nests.', cost: '$10 to $20 for dust and duster' },
    { method: 'Fix the moisture problem', detail: 'Carpenter ants nest in moist wood. Fix the leak, replace the rotted wood, and improve ventilation. Without moisture, the wood becomes less attractive for nesting. This addresses the root cause, not just the symptom.', cost: '$0 to $200+ depending on the repair' },
  ],
  preventionTips: [
    'Fix roof leaks, plumbing leaks, and any source of chronic moisture immediately.',
    'Replace water-damaged or rotting wood... especially around windows, doors, and soffits.',
    'Store firewood at least 20 feet from the house and never inside the garage.',
    'Trim tree branches and shrubs so nothing touches or overhangs the house.',
    'Seal cracks and gaps where utility lines enter the home.',
    'Ensure crawl spaces and attics have proper ventilation to prevent moisture buildup.',
  ],
  whenToCallPro: `If you can't locate the nest, if you're seeing swarmers indoors, or if you've found structural damage, call a professional. Carpenter ant colonies often have satellite nests in addition to the main colony, and missing one means the problem comes back. A professional can use thermal imaging or moisture meters to locate nests inside walls without opening them up. They'll also inspect for related moisture issues and can treat wall voids more thoroughly than DIY methods allow.`,
  proCost: { low: 250, high: 700 },
  recommendedProducts: [
    { name: 'Advance Carpenter Ant Bait (8 oz)', description: 'Granular protein-based bait specifically formulated for carpenter ants. Scatter along outdoor trails and near nest entrances. Workers carry it back to the colony.', priceRange: '$18 to $25', amazonUrl: 'https://www.amazon.com/s?k=Advance+Carpenter+Ant+Bait&tag=replacementgu-20' },
    { name: 'Boric Acid Powder with Puffer Applicator', description: 'Dust into wall voids through small drill holes to treat hidden nests. The fine powder clings to ants and is carried through the colony.', priceRange: '$10 to $15', amazonUrl: 'https://www.amazon.com/s?k=Boric+Acid+Powder+Puffer+Applicator&tag=replacementgu-20' },
    { name: 'Moisture Meter', description: 'Pin-type moisture meter to identify damp wood where carpenter ants are likely to nest. Readings above 20% moisture content are a red flag.', priceRange: '$15 to $30', amazonUrl: 'https://www.amazon.com/s?k=Pin+Type+Wood+Moisture+Meter&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'ants', name: 'Ants' },
    { slug: 'termites', name: 'Termites' },
    { slug: 'mice', name: 'Mice' },
  ],
}
