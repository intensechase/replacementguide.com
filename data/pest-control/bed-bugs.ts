import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'bed-bugs',
  title: 'How to Get Rid of Bed Bugs',
  metaTitle: 'How to Get Rid of Bed Bugs — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Bed bugs in your home? Learn the signs of infestation, DIY treatment options, prevention tips, and when professional heat treatment is the way to go.',
  intro: `Bed bugs are one of the hardest household pests to eliminate on your own. They hide in cracks thinner than a credit card, they can survive months without feeding, and they're resistant to most over-the-counter sprays. But catching them early makes a massive difference... here's what to look for and what actually works.`,
  signs: [
    { sign: 'Bite marks in clusters or lines', detail: 'Red, itchy welts that appear in groups of 3 to 5, often in a line or zigzag pattern. They typically show up on arms, shoulders, neck, and face... anywhere exposed while sleeping. About 30% of people don\'t react to bites at all, so absence of bites doesn\'t mean absence of bugs.' },
    { sign: 'Blood spots on sheets', detail: 'Small reddish-brown spots on your sheets or pillowcases from crushed bed bugs or from bites that bled slightly. Check when you first wake up, before making the bed.' },
    { sign: 'Dark fecal spots', detail: 'Tiny black or dark brown dots on your mattress seams, box spring, and headboard. These are bed bug droppings... digested blood. They bleed into fabric like a marker dot when smeared with a wet cloth.' },
    { sign: 'Shed skins', detail: 'Bed bugs molt 5 times before reaching adulthood. You\'ll find translucent, light brown exoskeletons in mattress seams, behind headboards, and in crevices near the bed.' },
    { sign: 'Live bugs in mattress seams', detail: 'Adult bed bugs are about the size of an apple seed, flat and oval-shaped, reddish-brown. Pull back your mattress seams and check with a flashlight. Also check the corners of your box spring.' },
    { sign: 'Sweet, musty odor', detail: 'A heavy infestation produces a distinct sweet, slightly musty smell from the bugs\' scent glands. If your bedroom has an unusual odor you can\'t explain... inspect the bed.' },
  ],
  diyTreatments: [
    { method: 'Mattress encasements', detail: 'Zip your mattress and box spring into bed bug-proof encasements. This traps any bugs inside (they\'ll die within about 12 months) and creates a smooth surface where new bugs can\'t hide. Leave encasements on for at least 18 months.', cost: '$25 to $50 per encasement' },
    { method: 'Diatomaceous earth (DE)', detail: 'Food-grade DE applied in a thin layer around bed legs, along baseboards, and in cracks near the bed. The microscite particles damage the bugs\' waxy coating and dehydrate them. Takes 7 to 14 days to kill. Use a puffer for light, even application.', cost: '$10 to $15 per bag' },
    { method: 'CimeXa dust', detail: 'A silica-based desiccant that\'s more effective than DE. Apply with a hand duster into cracks, behind outlet plates, and along mattress seams. Remains effective for up to 10 years if undisturbed. This is what many pros use.', cost: '$15 to $25 per bottle' },
    { method: 'High-heat laundering', detail: 'Wash all bedding, curtains, and clothing near the bed on the hottest setting. Then dry on high heat for at least 30 minutes. Bed bugs die at 120 degrees F. For items that can\'t be washed, run them through a hot dryer cycle.', cost: '$0 (just utility costs)' },
    { method: 'Bed bug interceptor traps', detail: 'Plastic dishes that go under each bed leg. Bugs climbing up from the floor get trapped in the outer moat. Also catches bugs trying to leave the bed. Great for monitoring whether your treatment is working.', cost: '$8 to $15 for a 4-pack' },
  ],
  preventionTips: [
    'Inspect hotel mattress seams and headboards before unpacking when traveling.',
    'Never bring used furniture home without a thorough inspection... especially mattresses and upholstered items.',
    'Keep your bed away from walls and don\'t let bedding touch the floor.',
    'Reduce clutter around and under your bed to eliminate hiding spots.',
    'Use bed bug interceptor traps under bed legs as an early warning system.',
    'After traveling, wash and dry all clothing on high heat before putting it away.',
  ],
  whenToCallPro: `Be honest with yourself... bed bugs are the one pest where DIY has a low success rate for moderate to heavy infestations. If you're finding bugs in multiple rooms, if your mattress seams are spotted with fecal marks, or if you've been treating for 4 weeks without improvement, call a professional. Heat treatment (raising the room to 130 degrees F for several hours) is the most effective single-visit option, though it's expensive. Chemical treatment from a pro typically requires 2 to 3 visits over 4 to 6 weeks.`,
  proCost: { low: 500, high: 2500 },
  recommendedProducts: [
    { name: 'SureGuard Mattress Encasement', description: 'Waterproof, bed bug-proof zippered encasement. Lab tested to block bed bugs. Keep it on for at least 18 months.', priceRange: '$25 to $45', amazonUrl: 'https://www.amazon.com/s?k=SureGuard+Mattress+Encasement+Bed+Bug&tag=replacementgu-20' },
    { name: 'CimeXa Insecticide Dust', description: 'Silica gel desiccant used by professionals. More effective and longer-lasting than diatomaceous earth. Apply with a hand duster.', priceRange: '$15 to $25', amazonUrl: 'https://www.amazon.com/s?k=CimeXa+Insecticide+Dust&tag=replacementgu-20' },
    { name: 'EcoPest Bed Bug Interceptor Traps (8-pack)', description: 'Place under bed legs to catch bugs traveling to and from your bed. Also works as a monitoring tool to track treatment progress.', priceRange: '$10 to $18', amazonUrl: 'https://www.amazon.com/s?k=EcoPest+Bed+Bug+Interceptor+Traps&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'fleas', name: 'Fleas' },
    { slug: 'roaches', name: 'Roaches' },
    { slug: 'silverfish', name: 'Silverfish' },
  ],
}
