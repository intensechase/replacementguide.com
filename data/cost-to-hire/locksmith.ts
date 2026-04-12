export const guide = {
  slug: 'locksmith',
  title: 'How Much Does a Locksmith Cost?',
  metaTitle: 'How Much Does a Locksmith Cost? (2026 Pricing) | ReplacementGuide',
  metaDescription: 'Locksmith costs average $75-$250 per visit. See real pricing for lockouts, rekeying, lock changes, and how to avoid locksmith scams.',
  professional: 'Locksmith',
  intro: `Getting locked out is stressful enough without worrying about getting ripped off. A legitimate locksmith visit runs $75 to $250 for most jobs, but this is an industry with a serious scam problem. Knowing what things should cost protects you from predatory pricing when you're in a vulnerable spot.`,
  averageCost: { low: 75, high: 250, unit: 'per visit' },
  costFactors: [
    {
      factor: 'Time of day',
      detail: 'Daytime lockouts cost $75-$150. After midnight, expect $150-$300. Lockouts always seem to happen at the worst possible time... that\'s just how it goes.',
    },
    {
      factor: 'Type of lock',
      detail: 'Standard pin tumbler locks are quick and cheap to work with. High-security locks (Medeco, Abloy, Mul-T-Lock) cost more because they require specialized tools and training.',
    },
    {
      factor: 'Residential vs. commercial vs. automotive',
      detail: 'Home lockouts are cheapest ($75-$150). Car lockouts run $75-$200 depending on the vehicle. Commercial work costs more due to higher-security hardware.',
    },
    {
      factor: 'Travel distance',
      detail: 'Most locksmiths include 10-15 miles in their service call fee. Beyond that, you\'re paying for drive time. In rural areas, travel charges can be significant.',
    },
    {
      factor: 'Parts and hardware',
      detail: 'If locks need to be replaced rather than picked or rekeyed, the hardware cost is added. A quality deadbolt costs $50-$200. Smart locks run $150-$400 installed.',
    },
  ],
  commonJobs: [
    { job: 'Home lockout (standard lock)', costRange: '$75-$150', timeEstimate: '10-30 minutes' },
    { job: 'Car lockout', costRange: '$75-$200', timeEstimate: '10-30 minutes' },
    { job: 'Rekey locks (per lock)', costRange: '$15-$30 per lock', timeEstimate: '5-15 minutes per lock' },
    { job: 'Replace a deadbolt', costRange: '$100-$250', timeEstimate: '20-45 minutes' },
    { job: 'Install a smart lock', costRange: '$150-$400', timeEstimate: '30-60 minutes' },
    { job: 'Make duplicate keys', costRange: '$3-$20 per key', timeEstimate: '5-10 minutes' },
    { job: 'Rekey entire house (5-6 locks)', costRange: '$100-$200', timeEstimate: '45-90 minutes' },
    { job: 'Broken key extraction', costRange: '$75-$175', timeEstimate: '10-30 minutes' },
  ],
  whenToHire: `Call a locksmith when you're locked out and there's no safe way to get in yourself, when you move into a new home (rekey everything), after a break-in or attempted break-in, or when you've lost the only key to a lock. A locksmith is also the right call for upgrading from a basic knob lock to a proper deadbolt.`,
  whenToDIY: `You can rekey your own locks with a $12 rekeying kit from the hardware store if you're handy... it takes about 10 minutes per lock once you get the hang of it. Replacing a deadbolt or doorknob is a basic screwdriver job. Making spare keys at a hardware store kiosk costs $2-$5. Smart locks are designed for homeowner installation and come with step-by-step guides.`,
  howToSave: [
    'Get the total price (including service call fee) over the phone before they come out. A legitimate locksmith will give you a firm quote.',
    'Rekey instead of replacing locks. Rekeying changes the key that operates the lock without replacing the hardware. It costs a fraction of new locks.',
    'Call during business hours when possible. After-hours premiums are steep.',
    'When moving into a new home, have all locks rekeyed at once. The per-lock cost drops significantly when done in bulk.',
    'Keep a spare key with a trusted neighbor or in a lockbox. Prevention is the cheapest locksmith visit.',
  ],
  redFlags: [
    'They quote $15-$35 on the phone but show up and claim the lock is "high security" and charge $200-$400. This is the most common locksmith scam.',
    'No company name on the van or uniform. Legitimate locksmiths have branded vehicles.',
    'They want to drill the lock immediately instead of trying to pick it first. Drilling destroys the lock and means you have to buy a new one from them.',
    'Cash only, no receipt. Legitimate businesses accept cards and provide itemized receipts.',
    'They can\'t show a state license or business registration. Many states require locksmith licensing.',
  ],
  relatedProducts: [
    { category: 'home', slug: 'garage-door', name: 'Garage Door' },
    { category: 'home', slug: 'windows', name: 'Windows' },
  ],
}
