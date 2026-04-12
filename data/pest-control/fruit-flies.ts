import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'fruit-flies',
  title: 'How to Get Rid of Fruit Flies',
  metaTitle: 'How to Get Rid of Fruit Flies — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Fruit flies everywhere? Learn where they come from, how to trap them, eliminate breeding sites, and keep them from coming back.',
  intro: `Fruit flies seem to appear out of thin air... but they actually hitch a ride on produce from the grocery store. A single female lays up to 500 eggs on fermenting fruit, and those eggs hatch in just 24 hours. The good news is they're one of the easiest pests to eliminate once you find the breeding source.`,
  signs: [
    { sign: 'Small flies hovering near fruit', detail: 'Fruit flies are about 1/8 inch long with red or dark eyes and tan bodies. They hover around fruit bowls, kitchen sinks, and garbage cans. They\'re much smaller than house flies and don\'t fly fast.' },
    { sign: 'Flies near drains and garbage disposals', detail: 'Fruit flies breed in the organic film inside drains. If you see them concentrated around your kitchen sink or garbage disposal, the drain is likely a breeding site... not just the fruit on the counter.' },
    { sign: 'Rapid population explosion', detail: 'You notice 2 or 3 flies one day, and within a week there are 20 to 30. Their 8 to 10 day lifecycle means populations multiply fast. If numbers are growing quickly, there\'s an active breeding source nearby.' },
    { sign: 'Flies around recycling bins', detail: 'Unwashed bottles, cans, and containers in recycling bins are prime breeding sites. Even a thin film of beer, wine, or juice residue is enough.' },
    { sign: 'Presence near fermenting or overripe food', detail: 'Any soft, overripe, or fermenting produce... bananas, tomatoes, onions, potatoes... attracts fruit flies. Check the bottom of your fruit bowl where bruised fruit collects moisture.' },
  ],
  diyTreatments: [
    { method: 'Apple cider vinegar trap', detail: 'Pour 1/2 inch of apple cider vinegar into a glass, add a drop of dish soap (breaks surface tension so flies sink), and cover with plastic wrap. Poke 5 to 6 small holes with a toothpick. Flies enter but can\'t escape. Place 2 to 3 traps around the kitchen.', cost: '$0 (pantry items)' },
    { method: 'Find and remove the breeding source', detail: 'This is the most important step. Check all fruit, onions, potatoes, garbage cans, recycling, and drain covers. Throw away any overripe produce and clean all surfaces with hot soapy water. No breeding source means no new flies.', cost: '$0' },
    { method: 'Clean drains thoroughly', detail: 'Pour boiling water down kitchen drains, then scrub with a drain brush to remove the organic biofilm where eggs are laid. Follow up with a drain gel product that dissolves organic buildup. Do this daily for a week.', cost: '$5 to $10 for drain gel' },
    { method: 'Commercial fruit fly traps', detail: 'Pre-made traps use food-grade attractants to lure and trap fruit flies. They\'re convenient if you don\'t want to DIY. Place them near the kitchen sink and fruit storage areas.', cost: '$5 to $10 for a 2-pack' },
  ],
  preventionTips: [
    'Store ripe fruit in the refrigerator, not on the counter.',
    'Wash produce as soon as you bring it home to remove eggs that may already be on the surface.',
    'Take out kitchen garbage daily and use a can with a tight lid.',
    'Rinse recycling containers before putting them in the bin.',
    'Run the garbage disposal with cold water for 30 seconds after each use.',
    'Clean up spills immediately... even a small puddle of juice is a breeding site.',
  ],
  whenToCallPro: `You almost never need a professional for fruit flies. If you've removed all produce, cleaned every drain, emptied trash and recycling, and you're still seeing fruit flies after 2 weeks... there may be a hidden breeding source like a dropped piece of fruit behind an appliance, a slow drain leak under a sink, or fermenting residue in a floor crack. A thorough deep clean usually reveals the source. If you're in a commercial food service setting, a pest control company can do a drain treatment and inspection.`,
  proCost: { low: 100, high: 200 },
  recommendedProducts: [
    { name: 'BEAPCO Fruit Fly Traps (6-pack)', description: 'Non-toxic liquid bait traps that attract and drown fruit flies. Each trap lasts about 30 days. Discreet enough to leave on the counter.', priceRange: '$8 to $12', amazonUrl: 'https://www.amazon.com/s?k=BEAPCO+Fruit+Fly+Traps&tag=replacementgu-20' },
    { name: 'InVade Bio Drain Gel', description: 'Enzyme-based drain cleaner that breaks down the organic film where fruit flies breed. Pour 2 ounces down each drain nightly for a week.', priceRange: '$15 to $25', amazonUrl: 'https://www.amazon.com/s?k=InVade+Bio+Drain+Gel&tag=replacementgu-20' },
    { name: 'Drain Brush (Long Handle)', description: 'Flexible brush designed to scrub inside kitchen and bar drains. Removes biofilm buildup that drain cleaners alone miss.', priceRange: '$8 to $12', amazonUrl: 'https://www.amazon.com/s?k=Drain+Brush+Long+Handle+Kitchen&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'gnats', name: 'Gnats' },
    { slug: 'ants', name: 'Ants' },
    { slug: 'roaches', name: 'Roaches' },
  ],
}
