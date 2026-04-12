import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'mice',
  title: 'How to Get Rid of Mice',
  metaTitle: 'How to Get Rid of Mice — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Mice in your house? Here are the signs to look for, DIY treatment methods that actually work, prevention tips, and when to call an exterminator.',
  intro: `One mouse is never just one mouse. If you've spotted droppings, heard scratching in the walls, or found chewed-up food packaging... you've got a problem that won't solve itself. The good news is most mouse infestations can be handled without an exterminator if you catch them early enough.`,
  signs: [
    { sign: 'Droppings', detail: 'Small, dark pellets about the size of a grain of rice. You\'ll find them along walls, under sinks, inside cabinets, and near food sources. A single mouse produces 50 to 75 droppings per day.' },
    { sign: 'Gnaw marks', detail: 'Mice chew constantly to keep their teeth worn down. Look for small, rough-edged holes in food packaging, baseboards, drywall, and even electrical wiring. Fresh gnaw marks are lighter in color.' },
    { sign: 'Scratching sounds at night', detail: 'Mice are most active between dusk and dawn. Scratching or scurrying in walls, ceilings, or under floors is a classic sign... especially in winter when they move indoors.' },
    { sign: 'Nesting material', detail: 'Shredded paper, fabric, insulation, or plant matter tucked into quiet corners. Check behind appliances, inside storage boxes, and in garage clutter.' },
    { sign: 'Grease marks along walls', detail: 'Mice run the same paths repeatedly, leaving dark smudge marks from the oils in their fur. These rub marks appear along baseboards and around entry holes.' },
    { sign: 'Musty ammonia smell', detail: 'Mouse urine has a strong, stale smell that builds up over time. If a room or cabinet has a persistent musty odor... especially near food storage... investigate.' },
  ],
  diyTreatments: [
    { method: 'Snap traps', detail: 'Still the most effective mouse trap after 100+ years. Place them perpendicular to walls with the trigger end touching the baseboard. Use peanut butter as bait... not cheese. Set at least 6 to 12 traps for a moderate infestation.', cost: '$1 to $3 per trap' },
    { method: 'Seal entry points', detail: 'Mice can squeeze through a hole the size of a dime. Fill gaps around pipes, vents, and foundations with steel wool stuffed into the hole and sealed over with caulk. Mice can\'t chew through steel wool.', cost: '$10 to $25 for steel wool and caulk' },
    { method: 'Bait stations', detail: 'Tamper-resistant plastic boxes that hold rodenticide. Place them along walls and near entry points. These are safer around kids and pets than loose bait, but the mice die in walls and can cause odor. Use as a backup to traps.', cost: '$15 to $30 for a 4-pack' },
    { method: 'Peppermint oil deterrent', detail: 'Soak cotton balls in peppermint oil and place them near entry points. It won\'t eliminate an existing infestation, but some evidence suggests it discourages mice from entering. Reapply every 2 weeks.', cost: '$8 to $12 per bottle' },
  ],
  preventionTips: [
    'Store all food in glass or metal containers... mice chew right through plastic and cardboard.',
    'Take out trash daily and use cans with tight-fitting lids.',
    'Seal any gap larger than 1/4 inch around your foundation, pipes, and utility lines.',
    'Keep firewood at least 20 feet from the house and 5 inches off the ground.',
    'Trim tree branches that hang within 4 feet of your roof.',
    'Declutter storage areas... mice love undisturbed piles of stuff for nesting.',
  ],
  whenToCallPro: `If you've set traps for 2 weeks and you're still catching mice, or if you're finding droppings in multiple rooms, you're dealing with a larger infestation than DIY can handle. Also call a pro if you hear mice in your walls but can't find entry points... they might be coming in through your attic or crawl space. Professionals can do a full exclusion (sealing every entry point) and set up monitoring stations.`,
  proCost: { low: 200, high: 600 },
  recommendedProducts: [
    { name: 'Victor M154 Metal Pedal Snap Traps (12-pack)', description: 'The classic wood-base snap trap. Cheap, reliable, reusable. Set a dozen at once for best results.', priceRange: '$10 to $15', amazonUrl: 'https://www.amazon.com/s?k=Victor+Metal+Pedal+Snap+Trap+12+Pack&tag=replacementgu-20' },
    { name: 'Xcluder Rodent Control Steel Wool Fill Fabric', description: 'Stainless steel wool designed specifically for sealing gaps. Mice can\'t chew through it. Stuff it into holes and cover with caulk.', priceRange: '$12 to $18', amazonUrl: 'https://www.amazon.com/s?k=Xcluder+Rodent+Control+Steel+Wool&tag=replacementgu-20' },
    { name: 'Tomcat Bait Station with Bromethalin', description: 'Tamper-resistant bait station safe to use around kids and pets. Place along walls near activity areas.', priceRange: '$15 to $25', amazonUrl: 'https://www.amazon.com/s?k=Tomcat+Bait+Station+Bromethalin&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'rats', name: 'Rats' },
    { slug: 'carpenter-ants', name: 'Carpenter Ants' },
    { slug: 'silverfish', name: 'Silverfish' },
  ],
}
