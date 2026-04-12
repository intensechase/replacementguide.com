import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'silverfish',
  title: 'How to Get Rid of Silverfish',
  metaTitle: 'How to Get Rid of Silverfish — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Silverfish in your bathroom or basement? Learn the signs, effective treatments, how to reduce humidity, and when to call a professional.',
  intro: `Silverfish are those silvery, teardrop-shaped bugs that dart away when you turn on the bathroom light. They've been around for 400 million years... longer than dinosaurs... so they're excellent survivors. They thrive in humid, dark environments and eat paper, glue, clothing, and even wallpaper paste.`,
  signs: [
    { sign: 'Fast-moving silvery insects', detail: 'Silverfish are 1/2 to 1 inch long, wingless, with a distinctive fish-like wiggling movement. They\'re silver to light gray and covered in tiny scales. You\'ll usually spot them darting across bathroom or kitchen floors at night.' },
    { sign: 'Irregular holes in paper and fabric', detail: 'Silverfish feed on starches, sugars, and cellulose. Look for irregular, surface-level feeding damage on books, wallpaper, stored clothing, and cardboard boxes. The damage pattern is uneven, not clean-cut like moth damage.' },
    { sign: 'Yellow stains on paper and fabric', detail: 'Silverfish leave yellowish stains from their scales and excrement on light-colored materials. If stored books or linens have unexplained yellow discoloration, silverfish may be feeding on them.' },
    { sign: 'Shed scales', detail: 'Tiny, shiny, almost translucent scales that look like miniature fish scales. You\'ll find them in sinks, bathtubs (silverfish fall in and can\'t climb out), and on shelving where they travel.' },
    { sign: 'Presence in humid areas', detail: 'Silverfish need 75% or higher humidity. If you\'re finding them consistently in bathrooms, basements, laundry rooms, or under kitchen sinks, you have a moisture issue that\'s supporting them.' },
    { sign: 'Damage to wallpaper', detail: 'Silverfish eat the starch paste behind wallpaper, causing it to peel or bubble. If wallpaper is lifting in humid rooms without an obvious moisture source on the wall itself, check for silverfish.' },
  ],
  diyTreatments: [
    { method: 'Reduce humidity', detail: 'This is the single most important step. Use dehumidifiers to keep indoor humidity below 50%. Fix leaky pipes, improve bathroom ventilation, and run exhaust fans during and after showers. Without high humidity, silverfish populations crash.', cost: '$30 to $200 for a dehumidifier' },
    { method: 'Diatomaceous earth', detail: 'Apply food-grade DE in thin layers behind baseboards, inside wall outlets (turn off power first), under sinks, and in crawl spaces. The microscopic particles damage the silverfish\'s waxy coating, causing dehydration. Leave undisturbed for best results.', cost: '$10 to $15 per bag' },
    { method: 'Boric acid powder', detail: 'Dust lightly in cracks, behind toilet tanks, under sinks, and in closets. Silverfish walk through it and are killed within a few days. Very effective for long-term control in dry, undisturbed areas.', cost: '$5 to $10 per bottle' },
    { method: 'Sticky traps', detail: 'Place glue traps along baseboards in bathrooms, basements, and closets. They catch silverfish overnight and help you monitor how bad the problem is and whether your treatments are working.', cost: '$5 to $10 for a 12-pack' },
    { method: 'Remove food sources', detail: 'Store books, photos, and important papers in sealed plastic bins rather than cardboard boxes. Use airtight containers for cereal, flour, and pasta. Remove old newspapers and magazines from storage areas.', cost: '$0 to $30 for storage bins' },
  ],
  preventionTips: [
    'Keep indoor humidity below 50% using dehumidifiers and proper ventilation.',
    'Seal cracks around baseboards, pipes, and where walls meet floors.',
    'Store paper goods, books, and clothing in sealed plastic containers... not cardboard.',
    'Fix leaky pipes and faucets immediately.',
    'Ventilate bathrooms with exhaust fans that actually vent to the outside.',
    'Declutter basements and closets to reduce hiding spots.',
  ],
  whenToCallPro: `Silverfish rarely require professional treatment if you address the humidity problem. But if you have a large, established population in wall voids or your home has chronic moisture issues you can't resolve, a pest control professional can apply residual sprays and dust inside walls. This is also worth considering if silverfish are damaging valuable books, documents, or textiles. Professional treatment for silverfish typically runs on the lower end since it's straightforward work.`,
  proCost: { low: 150, high: 350 },
  recommendedProducts: [
    { name: 'Dekko Silverfish Paks', description: 'Boric acid packets designed to attract and kill silverfish. Place them in bookshelves, drawers, closets, and under sinks. Each pak lasts several months.', priceRange: '$8 to $12 per box', amazonUrl: 'https://www.amazon.com/s?k=Dekko+Silverfish+Paks&tag=replacementgu-20' },
    { name: 'Pro Breeze Dehumidifier', description: 'Compact dehumidifier for bathrooms and small rooms. Removes up to 9 ounces of water per day. Quiet operation with auto shut-off when the tank is full.', priceRange: '$40 to $60', amazonUrl: 'https://www.amazon.com/s?k=Pro+Breeze+Dehumidifier+Small+Room&tag=replacementgu-20' },
    { name: 'Harris Diatomaceous Earth (Food Grade)', description: 'Food-grade DE with powder duster included. Apply in thin layers behind baseboards and under appliances. Safe around pets and children.', priceRange: '$10 to $15', amazonUrl: 'https://www.amazon.com/s?k=Harris+Diatomaceous+Earth+Food+Grade&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'roaches', name: 'Roaches' },
    { slug: 'spiders', name: 'Spiders' },
    { slug: 'carpenter-ants', name: 'Carpenter Ants' },
  ],
}
