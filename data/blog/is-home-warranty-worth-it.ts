export const article = {
  slug: 'is-home-warranty-worth-it',
  title: 'Is a Home Warranty Worth It? (What It Actually Covers)',
  metaTitle: 'Is a Home Warranty Worth It? What It Covers & Doesn\'t (2026)',
  metaDescription: 'Should you buy a home warranty? Here\'s what they actually cover, what they don\'t, the real costs, and an honest breakdown of when they make sense.',
  publishDate: '2026-04-22',
  category: 'money' as const,
  intro: `Home warranties cost $300-$600/year plus a $75-$125 service fee per repair visit. Whether that's worth it depends on the age of your home's systems, your savings, and your tolerance for surprise repair bills. Here's the honest answer... not the sales pitch.`,
  sections: [
    {
      heading: 'What a Home Warranty Actually Covers',
      content: `A home warranty covers home systems and appliances that break down from normal wear and tear. This is exactly what homeowners insurance does NOT cover.\n\nTypically covered systems: HVAC (furnace, AC, heat pump), plumbing (pipes, faucets, water heater, toilets), electrical (panel, wiring, outlets, switches), ductwork, and the garage door opener.\n\nTypically covered appliances: refrigerator, oven/range, dishwasher, built-in microwave, garbage disposal, washing machine, dryer.\n\nOptional add-ons (extra cost): pool/spa equipment, septic system, well pump, roof leak repair, second AC unit, and standalone freezer.\n\nWhat it does NOT cover: the house structure (roof, walls, foundation, windows, doors), pre-existing conditions, cosmetic damage, code compliance upgrades, pest damage, and anything not "properly maintained."`,
    },
    {
      heading: 'When It\'s Worth It',
      content: `The warranty pays for itself when you have one major repair that costs more than the annual premium + service fee.\n\nYou should consider a warranty if:\n\n- Your home's major systems are 8-15+ years old (past manufacturer warranty, approaching end of life)\n- You don't have $3,000-$7,000 in accessible savings for an emergency HVAC or water heater replacement\n- You're buying an older home and don't know the condition of the systems\n- You want predictable costs rather than surprise repair bills\n\nThe sweet spot: homes that are 10-25 years old with original systems. At this age, the probability of a major failure is high enough that the warranty math strongly favors having coverage.`,
    },
    {
      heading: 'When It\'s NOT Worth It',
      content: `You probably don't need a warranty if:\n\n- Your home is under 5 years old (systems are still under manufacturer warranty)\n- You recently replaced major systems (new HVAC, new water heater, new appliances)\n- You have $5,000-$10,000 in accessible emergency savings\n- You're handy and can do basic repairs yourself\n- You prefer to choose your own contractors and control the repair process\n\nThe math: if you pay $500/year for a warranty and only make small claims (garbage disposal, faucet cartridge), you're spending $500 + $75 service fee = $575 for repairs that would have cost $200-$400 out of pocket. The warranty lost you money that year.\n\nOver 5 years without a major claim, you've spent $2,500-$3,000 on the warranty. That money in a savings account could cover most of the major repair when it eventually happens.`,
    },
    {
      heading: 'The Honest Downsides',
      content: `You don't pick the contractor. The warranty company dispatches whoever is in their network. Quality varies. Some are excellent; some are the lowest bidders. If you have a trusted HVAC company or plumber, you can't use them (unless the warranty company can't send someone in a reasonable timeframe and authorizes an outside contractor).\n\nClaim denials happen. "Pre-existing condition" and "improper maintenance" are the most common denial reasons. Keep maintenance records (furnace tune-up receipts, filter change records) to protect yourself.\n\nReplacement units are basic. If your warranty covers a full AC replacement, they'll install a builder-grade unit... not the high-efficiency model you might have chosen. The coverage is "like kind and quality" in function, not in brand or features.\n\nCode compliance costs aren't covered. When a 20-year-old furnace is replaced, current building codes may require vent upgrades, electrical changes, or a new condensate drain. These costs ($500-$2,000) come out of your pocket, on top of the service fee.\n\nWait times during peak season. When every AC in the region fails during a July heat wave, warranty contractors are overwhelmed. Wait times of 3-7 days are common. In an emergency, you may need to pay out of pocket and seek reimbursement.`,
    },
    {
      heading: 'The Alternative: Self-Insure',
      content: `Instead of paying $500/year for a warranty, put that $500 into a dedicated "home repair" savings account. After 5 years, you have $2,500. After 10 years, $5,000. That covers most major repairs without the service fees, contractor limitations, or claim denials.\n\nThe risk: a $5,000 AC replacement in year 2, before you've saved enough. If that would be financially devastating, the warranty provides peace of mind during the savings buildup years.\n\nA hybrid approach: get the warranty for the first 3-5 years of owning an older home (while you build savings and learn the home's systems), then drop it once your emergency fund can cover a major repair.`,
    },
    {
      heading: 'Bottom Line',
      content: `A home warranty is worth it for homeowners with aging systems, limited savings, and low risk tolerance. It's not worth it for homeowners with newer systems, healthy savings, or a preference for controlling the repair process.\n\nIf you do get one: read the contract (not just the marketing), keep maintenance records, and understand the coverage limits and exclusions before you need to file a claim. The worst time to learn what your warranty doesn't cover is when your furnace dies in January.`,
    },
  ],
  relatedProducts: [
    { category: 'home', slug: 'air-conditioner', name: 'Air Conditioner' },
    { category: 'home', slug: 'furnace', name: 'Furnace' },
    { category: 'home', slug: 'water-heater', name: 'Water Heater' },
    { category: 'home', slug: 'dishwasher', name: 'Dishwasher' },
  ],
  relatedGuides: [
    { type: 'insurance' as const, slug: 'home-warranty-vs-insurance', name: 'Home Warranty vs Homeowners Insurance' },
    { type: 'insurance' as const, slug: 'appliance-repair', name: 'Does Insurance Cover Appliance Repair?' },
  ],
}
