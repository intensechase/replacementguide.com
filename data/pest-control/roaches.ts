import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'roaches',
  title: 'How to Get Rid of Roaches',
  metaTitle: 'How to Get Rid of Roaches — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Roaches in your home? Learn the signs of infestation, effective DIY treatments, prevention strategies, and when to call a professional exterminator.',
  intro: `Seeing one roach means there are dozens you haven't seen. Roaches breed fast... a single German cockroach can produce 300,000 offspring in a year under ideal conditions. The key is acting immediately, because every day you wait gives them time to multiply.`,
  signs: [
    { sign: 'Live roaches at night', detail: 'Roaches are nocturnal. If you turn on a kitchen or bathroom light and see them scatter, you have an active infestation. Seeing roaches during the day means the population is large enough that some are being pushed out of hiding.' },
    { sign: 'Droppings', detail: 'Small roaches leave droppings that look like ground pepper or coffee grounds. Larger species leave cylindrical pellets. Check under sinks, behind refrigerators, and inside cabinets.' },
    { sign: 'Egg casings (oothecae)', detail: 'Dark brown, oval-shaped casings about 1/4 to 1/2 inch long. Each one holds 10 to 50 eggs depending on species. Finding these means they\'re actively breeding in your home.' },
    { sign: 'Musty odor', detail: 'A large roach infestation produces a distinct oily, musty smell. If your kitchen or bathroom has a persistent stale odor you can\'t trace to anything else... roaches are a likely culprit.' },
    { sign: 'Smear marks', detail: 'In areas with moisture, roaches leave irregular brown smear marks on walls and floors as they crawl. Check along baseboards and where walls meet floors.' },
    { sign: 'Damage to food packaging', detail: 'Roaches eat almost anything... food, glue, paper, leather. Irregular holes in food packaging, especially cardboard, are a telltale sign.' },
  ],
  diyTreatments: [
    { method: 'Gel bait', detail: 'Apply small pea-sized dots of roach gel bait in cracks, under sinks, behind appliances, and along baseboards. Roaches eat the bait, return to the nest, die, and other roaches eat the remains... spreading the poison through the colony. This is the single most effective DIY method.', cost: '$8 to $15 per tube' },
    { method: 'Boric acid powder', detail: 'Dust a very thin layer of boric acid in cracks, behind outlet covers, and under appliances. Roaches walk through it and ingest it while grooming. Too much powder and they\'ll avoid it... you want barely visible dusting.', cost: '$5 to $10 per bottle' },
    { method: 'IGR (Insect Growth Regulator)', detail: 'Spray or station that prevents juvenile roaches from maturing and reproducing. Use alongside gel bait for a one-two punch. Gentrol is the most common brand. Takes 2 to 4 weeks to see full results.', cost: '$12 to $20 per can' },
    { method: 'Sticky traps for monitoring', detail: 'Place glue traps behind appliances and under sinks to monitor activity levels. They won\'t eliminate an infestation, but they tell you where roaches are most active and whether your treatment is working.', cost: '$5 to $10 for a 12-pack' },
    { method: 'Deep clean and eliminate moisture', detail: 'Fix leaky pipes, dry out under-sink areas, and deep clean behind and under all kitchen appliances. Roaches need water more than food... eliminating moisture sources is critical.', cost: '$0 (just effort)' },
  ],
  preventionTips: [
    'Fix every leaky faucet and pipe... roaches can survive a month without food but only a week without water.',
    'Never leave dirty dishes in the sink overnight.',
    'Store food in sealed containers and wipe down counters every night.',
    'Take out garbage daily and keep outdoor cans away from the house.',
    'Seal cracks around pipes, outlets, and baseboards with caulk.',
    'Don\'t stack cardboard boxes... roaches love the glue and dark spaces.',
  ],
  whenToCallPro: `If you've been using gel bait and boric acid for 3 to 4 weeks and you're still seeing roaches daily, you likely have a large infestation in the walls that needs professional treatment. German cockroaches in particular can be extremely stubborn. Professionals have access to stronger products and can treat inside wall voids. For apartments and multi-unit buildings, you almost always need a pro because roaches travel between units.`,
  proCost: { low: 150, high: 500 },
  recommendedProducts: [
    { name: 'Advion Cockroach Gel Bait', description: 'Professional-grade gel bait that exterminators actually use. Apply small dots in cracks and crevices. One tube treats an average kitchen.', priceRange: '$25 to $35 for 4 tubes', amazonUrl: 'https://www.amazon.com/s?k=Advion+Cockroach+Gel+Bait&tag=replacementgu-20' },
    { name: 'Harris Boric Acid Roach Powder', description: 'Food-grade boric acid with a puffer tip for precise application. Dust lightly in cracks and behind appliances.', priceRange: '$5 to $10', amazonUrl: 'https://www.amazon.com/s?k=Harris+Boric+Acid+Roach+Powder&tag=replacementgu-20' },
    { name: 'Gentrol IGR Point Source', description: 'Insect growth regulator discs that prevent roach reproduction. Place under sinks and behind appliances alongside your bait treatment.', priceRange: '$15 to $25 for 20 discs', amazonUrl: 'https://www.amazon.com/s?k=Gentrol+IGR+Point+Source&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'ants', name: 'Ants' },
    { slug: 'silverfish', name: 'Silverfish' },
    { slug: 'bed-bugs', name: 'Bed Bugs' },
  ],
}
