import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'rats',
  title: 'How to Get Rid of Rats',
  metaTitle: 'How to Get Rid of Rats — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Rats in your home or yard? Learn the signs, effective trapping and exclusion methods, prevention tips, and when to call a professional exterminator.',
  intro: `Rats are smarter, more cautious, and more destructive than mice. They can gnaw through plastic pipes, chew electrical wiring (causing house fires), and contaminate food with over 35 diseases. A single pair can produce up to 1,500 offspring in a year... so speed matters.`,
  signs: [
    { sign: 'Droppings larger than rice', detail: 'Rat droppings are 1/2 to 3/4 inch long with blunt ends (Norway rats) or pointed ends (roof rats). Much larger than mouse droppings. A single rat produces about 40 droppings per night, usually concentrated near food sources and along travel routes.' },
    { sign: 'Gnaw marks on hard materials', detail: 'Rats chew through wood, plastic, aluminum, and even mild steel. Look for gnaw marks on pipes, door frames, food containers, and electrical wires. Rat teeth marks are rougher and wider than mouse marks.' },
    { sign: 'Grease marks and runways', detail: 'Rats run the same paths every night, leaving dark, greasy rub marks along walls, pipes, and beams. In dusty areas, you\'ll see clear footpaths. These runways are the best places to set traps.' },
    { sign: 'Burrows near foundations', detail: 'Norway rats dig burrows near foundations, under sheds, along fences, and in gardens. Burrow openings are 2 to 4 inches in diameter with smooth, worn edges and packed soil around the entrance.' },
    { sign: 'Sounds in walls and ceilings', detail: 'Rats are louder than mice... expect thumping, scratching, and squeaking. Norway rats tend to be in lower floors and basements. Roof rats prefer attics and upper floors.' },
    { sign: 'Damaged food packaging', detail: 'Rats tear into food bags and boxes with ragged, large holes... much messier than the small, clean holes mice make. Check pantries, pet food bags, and bird seed storage.' },
  ],
  diyTreatments: [
    { method: 'Snap traps (rat-sized)', detail: 'Use rat-sized snap traps... mouse traps are too small and will just injure the rat without killing it. Place them along walls and runways with the trigger end against the baseboard. Bait with peanut butter or a piece of dried fruit tied to the trigger. Set at least 12 traps.', cost: '$3 to $5 per trap' },
    { method: 'Exclusion (sealing entry points)', detail: 'Rats can squeeze through a hole the size of a quarter. Seal openings with hardware cloth (1/4-inch mesh), sheet metal, or concrete. Steel wool works temporarily but rats can eventually pull it out. Focus on where pipes and wires enter, foundation cracks, and gaps under doors.', cost: '$20 to $60 for materials' },
    { method: 'Electronic rat traps', detail: 'Battery-powered traps that deliver a lethal electric shock. More humane than snap traps and very effective. The rat enters, touches a metal plate, and is killed instantly. Easy to empty without touching the rat.', cost: '$30 to $50 per trap' },
    { method: 'Remove food and water sources', detail: 'Secure all food in metal or glass containers. Fix leaky outdoor faucets. Remove fallen fruit from yards. Bring in pet food at night. Secure garbage cans with bungee cords. Eliminating food sources makes traps much more effective because rats have no alternatives.', cost: '$0 to $30' },
  ],
  preventionTips: [
    'Seal any opening larger than 1/2 inch with hardware cloth or sheet metal.',
    'Trim tree branches at least 4 feet from your roof... roof rats are excellent climbers.',
    'Store birdseed and pet food in metal containers with tight lids.',
    'Keep compost bins enclosed and turn them regularly.',
    'Remove dense ground cover like ivy near your foundation... rats use it for cover.',
    'Install door sweeps on exterior doors and repair any damaged vent screens.',
  ],
  whenToCallPro: `If you're catching rats but the problem isn't improving after 2 to 3 weeks, you likely have a larger colony or they're entering from a spot you haven't found. Rats are neophobic (they avoid new things), so they can take days to approach traps. A professional can do a full exclusion inspection, identify entry points you missed, and set up a comprehensive trapping and monitoring program. For commercial properties or rat problems in sewer lines, professional service is really the only option.`,
  proCost: { low: 300, high: 800 },
  recommendedProducts: [
    { name: 'Victor M144 Power Kill Rat Trap (4-pack)', description: 'Heavy-duty snap trap designed for rats. Larger killing bar and stronger spring than mouse traps. Easy to set and bait.', priceRange: '$12 to $18', amazonUrl: 'https://www.amazon.com/s?k=Victor+Power+Kill+Rat+Trap&tag=replacementgu-20' },
    { name: 'Victor M250S Electronic Rat Trap', description: 'Delivers a high-voltage shock that kills rats instantly. Green light confirms the kill. Runs on 4 AA batteries and gets 50+ kills per set.', priceRange: '$35 to $50', amazonUrl: 'https://www.amazon.com/s?k=Victor+Electronic+Rat+Trap&tag=replacementgu-20' },
    { name: 'Hardware Cloth 1/4-inch Mesh (3ft x 10ft)', description: 'Galvanized wire mesh for sealing entry points. Rats can\'t chew through it. Cut to size with tin snips and secure with screws or staples.', priceRange: '$15 to $25', amazonUrl: 'https://www.amazon.com/s?k=Hardware+Cloth+Quarter+Inch+Mesh+Galvanized&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'mice', name: 'Mice' },
    { slug: 'roaches', name: 'Roaches' },
    { slug: 'carpenter-ants', name: 'Carpenter Ants' },
  ],
}
