import type { PestGuide } from './index'

export const guide: PestGuide = {
  slug: 'spiders',
  title: 'How to Get Rid of Spiders',
  metaTitle: 'How to Get Rid of Spiders — Complete Guide (2026) | ReplacementGuide',
  metaDescription: 'Spiders taking over your house? Learn how to reduce spider populations, remove webs, seal entry points, and when to worry about dangerous species.',
  intro: `Most house spiders are harmless and actually eat other pests... but nobody wants to walk through webs or find one in the shower. The key to fewer spiders is reducing what attracts them: other insects. Control the bugs, and the spiders will move on.`,
  signs: [
    { sign: 'Webs in corners and windowsills', detail: 'Different species build different webs. Tangled cobwebs in corners are from house spiders. Funnel-shaped webs near ground level are from funnel weavers. Orb-shaped webs near outdoor lights are from garden spiders catching night-flying insects.' },
    { sign: 'Egg sacs', detail: 'Small, round silk pouches tucked into web corners, behind furniture, or in dark closets. Each sac can contain 100 to 300 spiderlings. If you\'re finding egg sacs regularly, there\'s a breeding population in your home.' },
    { sign: 'Live spiders in dark, undisturbed areas', detail: 'Check basements, garages, closets, under furniture, and behind stored boxes. Spiders prefer quiet areas where they won\'t be disturbed and where other insects travel.' },
    { sign: 'Shed exoskeletons', detail: 'Spiders molt as they grow, leaving behind translucent husks that look like dead spiders. Finding multiple shed skins means spiders are living and growing in your home.' },
    { sign: 'Insect prey remains in webs', detail: 'Dried-out insect carcasses wrapped in silk and hanging in webs indicate active feeding. If the webs are full of prey, your home has an insect problem that\'s sustaining the spider population.' },
    { sign: 'Brown recluse or black widow sightings', detail: 'Brown recluses have a violin-shaped marking on their back and hide in undisturbed areas like boxes and shoes. Black widows have a red hourglass on their underside and prefer garages and woodpiles. If you identify either species, take it seriously.' },
  ],
  diyTreatments: [
    { method: 'Remove webs and egg sacs regularly', detail: 'Use a vacuum with a hose attachment to remove webs, egg sacs, and spiders. Do this weekly in problem areas. Dispose of the vacuum bag or empty the canister outside immediately... spiders can crawl back out.', cost: '$0' },
    { method: 'Residual insecticide spray', detail: 'Spray a residual insecticide (bifenthrin or deltamethrin) along baseboards, in corners, behind furniture, and around windows and doors. This creates a kill zone that eliminates spiders and their prey. Reapply every 60 to 90 days.', cost: '$10 to $20 per bottle' },
    { method: 'Sticky traps', detail: 'Place glue boards along walls, behind furniture, and in closets. Spiders walk along edges and get caught. This is also the best way to identify what species you have and monitor activity levels over time.', cost: '$5 to $10 for a 12-pack' },
    { method: 'Reduce outdoor lighting', detail: 'Outdoor lights attract flying insects, which attract spiders. Switch to yellow or sodium vapor bulbs that are less attractive to insects, or move lights away from doors and windows.', cost: '$5 to $15 for replacement bulbs' },
    { method: 'Seal entry points', detail: 'Caulk gaps around windows, doors, pipes, and where utility lines enter. Install or repair door sweeps and window screens. Spiders follow insects inside through the same gaps.', cost: '$10 to $25 for supplies' },
  ],
  preventionTips: [
    'Keep the perimeter of your home clear of leaf litter, mulch, and woodpiles where spiders nest.',
    'Shake out shoes, gloves, and clothing stored in garages or closets before wearing.',
    'Use sealed plastic storage bins instead of cardboard boxes... spiders love cardboard.',
    'Keep indoor humidity below 50% with dehumidifiers... this discourages both spiders and their prey.',
    'Vacuum regularly, especially in corners, under furniture, and along baseboards.',
    'Trim vegetation at least 12 inches away from your home\'s exterior walls.',
  ],
  whenToCallPro: `For common house spiders, you probably don't need a pro. But if you've identified brown recluse or black widow spiders in your home, professional treatment is strongly recommended. Brown recluses in particular can be extremely difficult to eliminate because they hide in wall voids and don't walk through treated surfaces as reliably as other spiders. A pro can apply dust into wall voids and set up monitoring to verify elimination. If you're seeing more than 5 to 10 spiders per week despite consistent DIY efforts, a one-time professional treatment ($150 to $300) can reset the situation.`,
  proCost: { low: 150, high: 400 },
  recommendedProducts: [
    { name: 'Ortho Home Defense Indoor Insect Killer', description: 'Residual spray with bifenthrin for indoor use along baseboards and corners. Kills spiders and their insect prey for up to 12 months.', priceRange: '$10 to $18', amazonUrl: 'https://www.amazon.com/s?k=Ortho+Home+Defense+Indoor+Insect+Killer&tag=replacementgu-20' },
    { name: 'Catchmaster Spider & Insect Glue Traps', description: 'Non-toxic glue boards for monitoring and catching spiders. Place along walls and in dark corners. Also useful for identifying species.', priceRange: '$8 to $12 for 12 traps', amazonUrl: 'https://www.amazon.com/s?k=Catchmaster+Spider+Insect+Glue+Traps&tag=replacementgu-20' },
    { name: 'Web Out Cobweb Eliminator Spray', description: 'Spray on surfaces where spiders build webs. Leaves a residue that prevents new web attachment for up to 6 months. Great for eaves, porches, and garage corners.', priceRange: '$10 to $15', amazonUrl: 'https://www.amazon.com/s?k=Web+Out+Cobweb+Eliminator+Spray&tag=replacementgu-20' },
  ],
  relatedPests: [
    { slug: 'ants', name: 'Ants' },
    { slug: 'silverfish', name: 'Silverfish' },
    { slug: 'stink-bugs', name: 'Stink Bugs' },
  ],
}
