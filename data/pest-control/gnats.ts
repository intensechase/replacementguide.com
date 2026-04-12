import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'gnats',
  title: 'How to Get Rid of Gnats',
  metaTitle: 'How to Get Rid of Gnats — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Gnats swarming your kitchen or houseplants? Learn how to identify the type, eliminate breeding sources, and prevent them from coming back.',
  intro: `"Gnats" is a catch-all term for several tiny flying insects... fungus gnats, drain flies, and phorid flies all get lumped together. Figuring out which one you have is the key to getting rid of them, because each type breeds in a completely different place.`,
  signs: [
    { sign: 'Tiny flies around houseplants', detail: 'Fungus gnats breed in moist potting soil. You\'ll see them hovering just above the soil surface or crawling on it. They\'re dark-bodied, about 1/8 inch long, and fly in weak, erratic patterns.' },
    { sign: 'Flies near drains and bathrooms', detail: 'Drain flies (also called moth flies) have fuzzy, moth-like wings and cluster near sink and shower drains. They\'re breeding in the organic film inside your pipes.' },
    { sign: 'Swarms near windows', detail: 'Gnats are attracted to light and often cluster at windows trying to get out. If you see a cloud of tiny flies at a window, follow their trail back to find the breeding source.' },
    { sign: 'Small flies near garbage or compost', detail: 'Phorid flies (also called humpback flies) breed in decaying organic matter. They run quickly across surfaces before flying and are often found near garbage cans, dirty mop buckets, and compost bins.' },
    { sign: 'Larvae in potting soil', detail: 'Part the top inch of potting soil and look for tiny, translucent worm-like larvae with black heads. These are fungus gnat larvae feeding on organic matter and root hairs in the soil.' },
  ],
  diyTreatments: [
    { method: 'Let soil dry out (fungus gnats)', detail: 'Fungus gnats need moist soil to breed. Let the top 1 to 2 inches of potting soil dry completely between waterings. This kills larvae and prevents egg-laying. Most houseplants tolerate this just fine.', cost: '$0' },
    { method: 'Sticky yellow traps', detail: 'Place yellow sticky traps near houseplants and on kitchen counters. Gnats are attracted to the yellow color and get stuck. These won\'t eliminate the breeding source but dramatically reduce the adult population while you address it.', cost: '$5 to $8 for 20 traps' },
    { method: 'BTI mosquito dunks in plant water', detail: 'Break a piece of mosquito dunk (BTI bacteria) into your watering can and let it soak for 30 minutes. Water your plants with this solution. BTI kills fungus gnat larvae in the soil without harming the plant. Repeat for 2 to 3 waterings.', cost: '$8 to $12 for a pack' },
    { method: 'Clean drains with enzyme cleaner', detail: 'For drain flies, pour enzyme-based drain gel down affected drains nightly for a week. The enzymes break down the organic film where larvae develop. Follow with a drain brush for best results.', cost: '$10 to $20 for drain gel' },
    { method: 'Hydrogen peroxide soil drench', detail: 'Mix 1 part 3% hydrogen peroxide with 4 parts water and pour through affected plant soil. It fizzes on contact with larvae and kills them without harming roots. Let soil dry before the next watering.', cost: '$3 to $5 per bottle' },
  ],
  preventionTips: [
    'Water houseplants from the bottom (set pots in a tray of water for 30 minutes) to keep the soil surface dry.',
    'Use well-draining potting mix with perlite... dense, moisture-retaining soil invites fungus gnats.',
    'Clean kitchen drains weekly with hot water and a drain brush.',
    'Don\'t let fruit, vegetables, or compost scraps sit on the counter.',
    'Empty and clean mop buckets, pet water bowls, and plant saucers regularly.',
    'Cover potting soil with a 1/2-inch layer of sand or perlite to block egg-laying.',
  ],
  whenToCallPro: `Gnats rarely require professional treatment. If you've addressed all moisture sources, treated drains, dried out plant soil, and you're still seeing gnats after 2 to 3 weeks, there may be a hidden moisture source... a slow pipe leak, condensation on HVAC ducts, or standing water in a floor drain you don't use. A plumber might be more useful than an exterminator in that case. For commercial kitchens or restaurants with persistent drain fly problems, professional drain treatment services ($100 to $250) can handle it.`,
  proCost: { low: 100, high: 250 },
  recommendedProducts: [
    { name: 'Gideal Yellow Sticky Traps (20-pack)', description: 'Dual-sided sticky traps for catching fungus gnats and other small flying insects. Stick them in plant pots or hang near problem areas.', priceRange: '$6 to $10', amazonUrl: 'https://www.amazon.com/s?k=Yellow+Sticky+Traps+Fungus+Gnats&tag=replacementgu-20' },
    { name: 'Summit Mosquito Dunks (BTI)', description: 'Break a piece into your watering can to kill fungus gnat larvae in potting soil. Safe for plants, pets, and people.', priceRange: '$8 to $15', amazonUrl: 'https://www.amazon.com/s?k=Summit+Mosquito+Dunks+BTI&tag=replacementgu-20' },
    { name: 'InVade Bio Drain Gel', description: 'Enzyme drain treatment for drain fly breeding sites. Apply nightly for a week. Breaks down the organic biofilm larvae feed on.', priceRange: '$15 to $25', amazonUrl: 'https://www.amazon.com/s?k=InVade+Bio+Drain+Gel&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'fruit-flies', name: 'Fruit Flies' },
    { slug: 'mosquitoes', name: 'Mosquitoes' },
    { slug: 'ants', name: 'Ants' },
  ],
}
