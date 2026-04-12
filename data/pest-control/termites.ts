import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'termites',
  title: 'Termite Treatment Guide',
  metaTitle: 'Termite Treatment Guide — Signs, Costs & DIY Options (2026) | ReplacementGuide',
  metaDescription: 'Worried about termites? Learn the warning signs, DIY monitoring options, professional treatment costs, and how to protect your home from structural damage.',
  intro: `Termites cause roughly $5 billion in property damage annually in the U.S., and most homeowner insurance policies don't cover it. The scary part is they can be eating your home for years before you notice. Early detection is everything... and honestly, professional treatment is almost always necessary for active infestations.`,
  signs: [
    { sign: 'Mud tubes on foundation walls', detail: 'Subterranean termites build pencil-width mud tubes from the ground up your foundation to reach wood. These tubes protect them from air exposure. Break one open... if you see small, white, ant-like insects inside, you have active termites.' },
    { sign: 'Hollow-sounding wood', detail: 'Tap on baseboards, door frames, and window sills. If the wood sounds hollow or papery, termites may have eaten it from the inside out. They leave a thin outer shell intact, so the surface can look fine while the interior is destroyed.' },
    { sign: 'Swarmers or discarded wings', detail: 'In spring, reproductive termites swarm to start new colonies. You\'ll find small winged insects or piles of shed wings near windows, doors, and light sources. Termite wings are all the same length... that\'s how you tell them from flying ants.' },
    { sign: 'Frass (drywood termite pellets)', detail: 'Drywood termites push small, six-sided fecal pellets out of tiny holes in wood. You\'ll find small piles of what looks like coarse sand or sawdust below infested wood. This is specific to drywood termites, common in southern states.' },
    { sign: 'Buckling or bubbling paint', detail: 'Paint that bubbles, peels, or appears water-damaged without any moisture source can indicate termites feeding just below the surface. Press on the area... if it gives easily, the wood behind it is compromised.' },
    { sign: 'Tight-fitting doors or windows', detail: 'Termite damage warps wood as they eat through it. Doors and windows that suddenly stick or won\'t close properly... especially in older homes... can be a sign of termite damage to the framing.' },
  ],
  diyTreatments: [
    { method: 'Termite monitoring stations', detail: 'Install in-ground monitoring stations every 10 feet around your home\'s perimeter. Check them monthly. They contain wood that attracts termites... if you find activity, you can add bait cartridges or call a pro before damage gets serious.', cost: '$40 to $80 for a starter kit' },
    { method: 'Borate wood treatment', detail: 'Spray or brush borate solution (like Bora-Care) onto exposed wood in crawl spaces, attics, and unfinished basements. Borate penetrates the wood and kills termites that feed on it. This is a preventive treatment... it won\'t stop an active infestation in walls.', cost: '$30 to $60 per gallon' },
    { method: 'Reduce wood-to-ground contact', detail: 'Remove any wood debris, mulch, or stored lumber touching your foundation. Replace wood lattice with plastic. Ensure at least 6 inches of clearance between soil and any wood siding or framing.', cost: '$0 to $50 depending on materials' },
    { method: 'Fix moisture issues', detail: 'Termites need moisture. Fix leaky pipes, improve drainage around your foundation, clean gutters, and make sure crawl spaces are ventilated. A dehumidifier in the crawl space can make the environment much less hospitable.', cost: '$0 to $200 for dehumidifier' },
  ],
  preventionTips: [
    'Maintain at least 6 inches of clearance between soil and wood siding on your home.',
    'Direct downspouts and grading away from the foundation to prevent moisture buildup.',
    'Store firewood at least 20 feet from the house and 5 inches off the ground.',
    'Remove dead trees, stumps, and wood debris from your yard.',
    'Use termite-resistant wood (pressure-treated, cedar, or redwood) for any ground-contact construction.',
    'Get a professional termite inspection every 1 to 2 years... it typically costs $75 to $150 and is worth every penny.',
  ],
  whenToCallPro: `Let's be real... if you have active termites, you need a professional. DIY monitoring and prevention are great, but eliminating an active colony requires either a liquid barrier treatment (like Termidor) or a professional bait system (like Sentricon). These products aren't available to consumers, and the application requires specialized equipment. The average home treatment takes 1 to 2 days and includes a warranty. Don't gamble with structural damage to save a few hundred dollars.`,
  proCost: { low: 500, high: 2500 },
  recommendedProducts: [
    { name: 'Spectracide Terminate Monitoring Stations (15-pack)', description: 'In-ground stations for early termite detection. Install around your perimeter and check monthly. Pop-up indicators tell you when termites are present.', priceRange: '$25 to $40', amazonUrl: 'https://www.amazon.com/s?k=Spectracide+Terminate+Termite+Detection+Stations&tag=replacementgu-20' },
    { name: 'Bora-Care Borate Wood Treatment', description: 'Professional-grade borate solution for treating exposed wood. Penetrates deep and provides long-term protection against termites, carpenter ants, and wood-boring beetles.', priceRange: '$50 to $70 per gallon', amazonUrl: 'https://www.amazon.com/s?k=Bora-Care+Borate+Wood+Treatment&tag=replacementgu-20' },
    { name: 'Moisture Meter for Wood', description: 'Digital pin-type meter that reads moisture content in wood. Readings above 20% create conditions termites love. Check your crawl space and framing regularly.', priceRange: '$15 to $30', amazonUrl: 'https://www.amazon.com/s?k=Digital+Wood+Moisture+Meter&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'carpenter-ants', name: 'Carpenter Ants' },
    { slug: 'ants', name: 'Ants' },
    { slug: 'silverfish', name: 'Silverfish' },
  ],
}
