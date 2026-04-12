import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'fleas',
  title: 'How to Get Rid of Fleas in Your House',
  metaTitle: 'How to Get Rid of Fleas in Your House — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Fleas in your home? Learn how to break the flea life cycle, treat your house and yard, protect your pets, and prevent re-infestation.',
  intro: `The fleas you see jumping around are only about 5% of the problem. The other 95% are eggs, larvae, and pupae hiding in your carpets, furniture, and pet bedding. Killing adult fleas without addressing the life cycle means they'll be back in 2 to 3 weeks. You have to treat everything at once.`,
  signs: [
    { sign: 'Pets scratching excessively', detail: 'If your dog or cat is scratching, biting, or chewing their fur more than usual... especially around the tail, belly, and behind the ears... check for fleas. Part the fur and look for tiny, dark brown insects moving quickly through the coat.' },
    { sign: 'Flea dirt on pets', detail: 'Small black specks in your pet\'s fur that look like ground pepper. Place some on a wet paper towel... if it turns reddish-brown, it\'s flea dirt (digested blood), confirming flea activity.' },
    { sign: 'Bites on humans', detail: 'Flea bites on humans appear as small red bumps, usually around ankles and lower legs. They\'re intensely itchy and often appear in clusters of 3 to 4 bites.' },
    { sign: 'Fleas jumping on white socks', detail: 'Walk through your home wearing white socks and look down after a few minutes. Fleas are attracted to the warmth and movement and will jump onto the socks, where they\'re easy to spot against the white fabric.' },
    { sign: 'Tiny white eggs in carpet and bedding', detail: 'Flea eggs are oval, white, and about the size of a grain of salt. They fall off your pet and accumulate in carpets, pet beds, and furniture. Run your hand through carpet fibers near where your pet sleeps and look closely.' },
    { sign: 'Tapeworm segments in pet stool', detail: 'Pets get tapeworms by swallowing fleas during grooming. If you see small, white, rice-like segments near your pet\'s rear end or in their stool... they have fleas (and need deworming medication from the vet).' },
  ],
  diyTreatments: [
    { method: 'Vacuum everything aggressively', detail: 'Vacuum all carpets, rugs, upholstered furniture, and pet bedding daily for at least 2 weeks. Vacuuming picks up eggs and larvae and triggers pupae to hatch (making them vulnerable to treatments). Dispose of the vacuum bag or empty the canister outside after each session.', cost: '$0' },
    { method: 'Treat pets with vet-recommended flea medication', detail: 'Apply a topical treatment like Frontline or give an oral medication like NexGard. Treat ALL pets in the home at the same time... untreated pets reinfest treated ones. This is non-negotiable... you cannot solve a flea problem without treating the source.', cost: '$15 to $50 per pet per month' },
    { method: 'Indoor flea spray with IGR', detail: 'Spray carpets, baseboards, under furniture, and pet rest areas with a flea spray containing an IGR (insect growth regulator). The IGR prevents eggs and larvae from developing into adults. One application lasts 4 to 7 months.', cost: '$15 to $25 per can' },
    { method: 'Wash all bedding and fabrics', detail: 'Wash pet bedding, throw blankets, couch covers, and human bedding in hot water (at least 130 degrees F) and dry on high heat. Do this at least once a week during treatment.', cost: '$0 (just utility costs)' },
    { method: 'Diatomaceous earth for carpets', detail: 'Sprinkle food-grade DE lightly on carpets and let it sit for 24 to 48 hours before vacuuming. The microscopic particles dehydrate flea larvae and adults. Don\'t apply too heavily... a light dusting is more effective.', cost: '$10 to $15 per bag' },
  ],
  preventionTips: [
    'Keep all pets on year-round flea prevention medication... even indoor pets.',
    'Wash pet bedding weekly in hot water.',
    'Vacuum high-traffic areas and pet rest spots at least twice a week.',
    'Mow your lawn regularly and keep shrubs trimmed... fleas thrive in tall, shaded grass.',
    'Treat your yard with beneficial nematodes in spring... they eat flea larvae in the soil.',
    'Check pets for fleas after walks in wooded areas or visits to dog parks.',
  ],
  whenToCallPro: `If you've been treating for 4 weeks and fleas keep coming back, or if you have a severe infestation across multiple rooms, professional treatment can save you time and frustration. Pros use commercial-grade IGR products and can treat hard-to-reach areas like under baseboards and inside furniture. A single professional treatment ($200 to $400 for an average home) combined with consistent pet treatment usually resolves even stubborn infestations within 4 to 6 weeks.`,
  proCost: { low: 200, high: 400 },
  recommendedProducts: [
    { name: 'Precor 2625 Premise Spray', description: 'Professional-grade flea spray with IGR (methoprene) that prevents flea development for up to 7 months. Spray carpets, furniture, and pet areas.', priceRange: '$18 to $25', amazonUrl: 'https://www.amazon.com/s?k=Precor+2625+Premise+Spray+Flea&tag=replacementgu-20' },
    { name: 'Adams Flea & Tick Carpet Powder', description: 'Carpet treatment powder with linalool and nylar IGR. Sprinkle, wait 1 hour, vacuum. Kills fleas and prevents eggs from hatching for 365 days.', priceRange: '$10 to $15', amazonUrl: 'https://www.amazon.com/s?k=Adams+Flea+Tick+Carpet+Powder&tag=replacementgu-20' },
    { name: 'Flea Comb (Fine-Toothed)', description: 'Stainless steel fine-toothed comb for checking pets. Dip in soapy water between strokes to kill captured fleas. Also great for monitoring treatment progress.', priceRange: '$5 to $8', amazonUrl: 'https://www.amazon.com/s?k=Flea+Comb+Fine+Tooth+Stainless+Steel&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'bed-bugs', name: 'Bed Bugs' },
    { slug: 'ants', name: 'Ants' },
    { slug: 'mosquitoes', name: 'Mosquitoes' },
  ],
}
