import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'ants',
  title: 'How to Get Rid of Ants',
  metaTitle: 'How to Get Rid of Ants — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Ants invading your kitchen? Learn how to identify the species, eliminate the colony with bait, seal entry points, and prevent them from coming back.',
  intro: `Killing the ants you can see is satisfying but useless... there are thousands more in the colony you can't see. The only way to actually solve an ant problem is to get bait back to the queen. Here's how to do it right without wasting money on sprays that make things worse.`,
  signs: [
    { sign: 'Ant trails', detail: 'A visible line of ants marching between a food source and their nest. They follow pheromone trails, so you\'ll see them taking the exact same path. Follow the trail in both directions to find where they\'re entering and what they\'re after.' },
    { sign: 'Small piles of dirt or debris', detail: 'Ants push excavated soil out of their nest openings. Look for tiny mounds of fine dirt near your foundation, along sidewalks, and in cracks in your driveway.' },
    { sign: 'Ants around food and water', detail: 'Scouts appear near sugar, grease, or pet food. Even a few ants near your kitchen sink or dishwasher means they\'ve found a water source and marked the path for others.' },
    { sign: 'Winged ants indoors', detail: 'Flying ants inside your home (especially in spring) means there\'s a mature colony nearby... possibly inside your walls. Don\'t confuse them with termites... ant wings are different sizes, termite wings are equal length.' },
    { sign: 'Rustling sounds in walls', detail: 'Large colonies of carpenter ants make a faint rustling or crinkling sound inside walls, especially at night. Tap on suspicious wall areas and listen for movement.' },
  ],
  diyTreatments: [
    { method: 'Liquid ant bait stations', detail: 'Place bait stations along ant trails and near entry points. The ants carry the slow-acting poison back to the colony and feed it to the queen. Don\'t kill the ants on the trail... you want them alive to carry bait home. Takes 3 to 7 days to see results.', cost: '$5 to $10 per pack' },
    { method: 'Borax and sugar bait (homemade)', detail: 'Mix 1/2 cup sugar, 1.5 tablespoons borax, and 1.5 cups warm water. Soak cotton balls in the mixture and place near trails. This works well for sugar-feeding species. Replace every 2 days.', cost: '$3 to $5 for borax' },
    { method: 'Seal entry points', detail: 'Caulk cracks around windows, doors, pipes, and where the foundation meets the siding. Ants follow the same paths, so sealing their entry point forces them to find another route... or give up.', cost: '$5 to $15 for caulk' },
    { method: 'Outdoor perimeter spray', detail: 'Apply a residual insecticide spray around your home\'s foundation, focusing on entry points, window frames, and door thresholds. This creates a barrier that kills ants before they get inside. Reapply every 2 to 3 months.', cost: '$10 to $20 per bottle' },
  ],
  preventionTips: [
    'Wipe down counters and sweep floors daily... even small crumbs attract scouts.',
    'Store sugar, honey, and syrup in sealed containers or the refrigerator.',
    'Fix dripping faucets and eliminate standing water... ants need moisture.',
    'Keep pet food bowls clean and don\'t leave them out overnight.',
    'Trim bushes and tree branches that touch your house... ants use them as bridges.',
    'Move mulch at least 12 inches away from your foundation.',
  ],
  whenToCallPro: `If you've been baiting for 2 to 3 weeks and ants keep coming, there may be multiple colonies or the nest is inside your walls. Carpenter ants in particular require professional treatment because they nest inside structural wood and can cause real damage over time. If you're seeing large black ants (1/4 to 1/2 inch) with sawdust-like debris near walls, call a pro... that's likely a carpenter ant colony.`,
  proCost: { low: 150, high: 400 },
  recommendedProducts: [
    { name: 'TERRO T300B Liquid Ant Bait Stations (6-pack)', description: 'Borax-based liquid bait that workers carry back to the colony. The most popular ant bait for a reason... it works on most common species.', priceRange: '$8 to $12', amazonUrl: 'https://www.amazon.com/s?k=TERRO+T300B+Liquid+Ant+Bait+Stations&tag=replacementgu-20' },
    { name: 'Ortho Home Defense Perimeter Spray', description: 'Residual spray for outdoor foundation treatment. Creates a barrier that lasts 2 to 3 months. Comes with a wand applicator for easy use.', priceRange: '$10 to $18', amazonUrl: 'https://www.amazon.com/s?k=Ortho+Home+Defense+Perimeter+Spray&tag=replacementgu-20' },
    { name: 'Advion Ant Gel Bait', description: 'Professional-grade gel bait for indoor use. Apply small dots along trails and in cracks. Works on most ant species including stubborn ones that ignore sugar baits.', priceRange: '$20 to $30 for 4 tubes', amazonUrl: 'https://www.amazon.com/s?k=Advion+Ant+Gel+Bait&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'carpenter-ants', name: 'Carpenter Ants' },
    { slug: 'termites', name: 'Termites' },
    { slug: 'roaches', name: 'Roaches' },
  ],
}
