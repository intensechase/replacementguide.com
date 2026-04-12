import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'stink-bugs',
  title: 'How to Get Rid of Stink Bugs',
  metaTitle: 'How to Get Rid of Stink Bugs — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Stink bugs invading your home? Learn why they come inside, how to remove them without triggering the smell, prevention tips, and when to call a pro.',
  intro: `Brown marmorated stink bugs don't bite, don't breed indoors, and don't cause structural damage. But they do invade homes by the hundreds in fall looking for a warm place to overwinter... and crushing them releases a smell that lingers for hours. The real solution is keeping them out before they get in.`,
  signs: [
    { sign: 'Shield-shaped bugs on sunny walls', detail: 'Stink bugs are about 3/4 inch long, brown, and shaped like a shield or heraldic emblem. In fall, they cluster on the warm, south-facing and west-facing walls of your home before finding a way inside.' },
    { sign: 'Bugs appearing indoors in fall and spring', detail: 'They enter homes in September through November and hide in walls, attics, and behind trim. On warm winter days or in spring, they "wake up" and emerge indoors, often near windows and lights.' },
    { sign: 'Buzzing near lights', detail: 'Stink bugs are attracted to light and fly clumsily, often buzzing loudly around lamps and overhead fixtures. They\'re slow and easy to catch but release their defensive odor if handled roughly.' },
    { sign: 'Unpleasant odor when disturbed', detail: 'The signature cilantro-meets-burnt-tire smell comes from glands on the underside of their thorax. If you\'re smelling it without crushing bugs, they may be releasing it defensively inside wall voids.' },
    { sign: 'Large numbers on exterior surfaces', detail: 'In fall, you might see dozens or hundreds of stink bugs on your siding, window screens, and around door frames. This "aggregation" behavior is triggered by shorter days and cooler temperatures.' },
  ],
  diyTreatments: [
    { method: 'Vacuum them up', detail: 'The simplest and most effective removal method for indoor stink bugs. Use a shop vac or a vacuum with a disposable bag... the smell can linger in the vacuum. Empty the canister or dispose of the bag outside immediately. Don\'t crush them.', cost: '$0 (use what you have)' },
    { method: 'Soapy water trap', detail: 'Fill a wide bowl with warm water and a squirt of dish soap. Place it under a desk lamp at night. Stink bugs are attracted to the light, land in the water, and the soap prevents them from climbing out. This catches the active ones without the smell.', cost: '$0' },
    { method: 'Seal entry points before fall', detail: 'Caulk around windows, doors, siding joints, and utility penetrations in August or early September... before stink bugs start looking for entry points. Replace damaged weather stripping and repair torn screens. This is by far the most effective long-term strategy.', cost: '$15 to $40 for caulk and weather stripping' },
    { method: 'Exterior residual spray', detail: 'In early fall, apply a residual insecticide (bifenthrin or deltamethrin) around windows, doors, eaves, and the south-facing walls of your home. This creates a barrier that kills stink bugs before they enter. Timing is critical... apply in September before they start clustering.', cost: '$15 to $25 per bottle' },
  ],
  preventionTips: [
    'Seal all exterior gaps and cracks by late August, before stink bug season begins.',
    'Install or repair window and door screens... even small tears let them in.',
    'Cover attic vents, weep holes, and chimney openings with fine mesh screening.',
    'Replace exterior lighting with yellow or sodium vapor bulbs that attract fewer insects.',
    'Don\'t squash stink bugs... the scent attracts more of them to the area.',
    'Check grocery bags and boxes for hitchhikers before bringing them inside.',
  ],
  whenToCallPro: `Professional treatment is really only necessary if you're seeing hundreds of stink bugs indoors each season, which means they're entering through gaps you haven't found. A pest control company can do a full exterior exclusion and apply commercial-grade residual barriers more thoroughly than DIY sprays. Some companies offer annual fall treatments for $150 to $300 that include perimeter spray and entry point inspection. For most homeowners, sealing the house properly eliminates 90% of the problem.`,
  proCost: { low: 150, high: 400 },
  recommendedProducts: [
    { name: 'Ortho Home Defense Insect Killer', description: 'Bifenthrin-based perimeter spray with a wand applicator. Apply around windows, doors, and foundation in early fall. Creates a barrier that lasts up to 12 months.', priceRange: '$12 to $18', amazonUrl: 'https://www.amazon.com/s?k=Ortho+Home+Defense+Insect+Killer+Perimeter&tag=replacementgu-20' },
    { name: 'DAP Silicone Plus Window and Door Caulk', description: 'Flexible silicone caulk for sealing gaps around windows and doors. Stays flexible through temperature changes, so it won\'t crack and re-open.', priceRange: '$6 to $10 per tube', amazonUrl: 'https://www.amazon.com/s?k=DAP+Silicone+Plus+Window+Door+Caulk&tag=replacementgu-20' },
    { name: 'RESCUE! Stink Bug Trap', description: 'Pheromone-baited trap that attracts and catches stink bugs without crushing them. Hang inside near windows or place in attics where they congregate.', priceRange: '$8 to $12', amazonUrl: 'https://www.amazon.com/s?k=RESCUE+Stink+Bug+Trap&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'spiders', name: 'Spiders' },
    { slug: 'ants', name: 'Ants' },
    { slug: 'silverfish', name: 'Silverfish' },
  ],
}
