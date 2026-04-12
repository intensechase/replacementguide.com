export const guide = {
  slug: 'roofer',
  title: 'How Much Does a Roofer Cost?',
  metaTitle: 'How Much Does a Roofer Cost? (2026 Pricing) | ReplacementGuide',
  metaDescription: 'Roofer costs range from $300 for minor repairs to $15,000+ for a full replacement. See real pricing by job type, what affects the cost, and how to save.',
  professional: 'Roofer',
  intro: `Roofing costs cover a huge range because the jobs are so different. Patching a few shingles might cost $300, but a full roof replacement can run $8,000 to $15,000 or more. The key is understanding what kind of work you actually need... not every leak means a new roof.`,
  averageCost: { low: 300, high: 1500, unit: 'per job (repairs)' },
  costFactors: [
    {
      factor: 'Roof size and pitch',
      detail: 'Roofers measure in "squares" (100 sq ft). A typical home is 20-35 squares. Steep roofs require safety equipment and take longer, adding 20-40% to labor costs.',
    },
    {
      factor: 'Material type',
      detail: 'Asphalt shingles are the cheapest ($3-$5/sq ft installed). Metal runs $7-$14/sq ft. Tile and slate can hit $15-$25/sq ft. Material choice is the single biggest cost driver on a full replacement.',
    },
    {
      factor: 'Layers and tear-off',
      detail: 'If your existing roof has 2 layers already, building code requires a full tear-off before new shingles. That adds $1,000-$3,000 in labor and disposal.',
    },
    {
      factor: 'Damage to decking',
      detail: 'Once old shingles come off, rotten plywood underneath needs to be replaced. This is common and adds $50-$100 per sheet (plus labor). Most reroofs find at least a few bad spots.',
    },
    {
      factor: 'Geographic location and season',
      detail: 'Roofing is more expensive in areas with high demand (Florida after hurricane season, hail-prone areas of Texas and Colorado). Late spring and summer are peak season with higher prices.',
    },
    {
      factor: 'Permits and code compliance',
      detail: 'Most full replacements require a permit ($100-$500). Updated codes might also require new underlayment, ice and water shield, or improved ventilation... all adding cost.',
    },
  ],
  commonJobs: [
    { job: 'Repair a few missing shingles', costRange: '$150-$500', timeEstimate: '1-3 hours' },
    { job: 'Fix a small leak', costRange: '$300-$1000', timeEstimate: '2-4 hours' },
    { job: 'Replace flashing around a chimney', costRange: '$300-$800', timeEstimate: '2-4 hours' },
    { job: 'Replace a section of roof (partial)', costRange: '$1000-$3000', timeEstimate: '1 day' },
    { job: 'Full roof replacement (asphalt, 2000 sq ft)', costRange: '$7000-$14000', timeEstimate: '1-3 days' },
    { job: 'Full roof replacement (metal, 2000 sq ft)', costRange: '$14000-$28000', timeEstimate: '3-5 days' },
    { job: 'Install ridge vent', costRange: '$300-$600', timeEstimate: '2-4 hours' },
    { job: 'Gutter installation (whole house)', costRange: '$1000-$2500', timeEstimate: '1 day' },
  ],
  whenToHire: `Always hire a licensed roofer for anything beyond a single shingle replacement. Working on a roof is genuinely dangerous, and improper repairs cause leaks that damage everything below. If you see water stains on ceilings, shingles in the yard after a storm, or daylight through the attic... get a pro up there. Insurance claims for storm damage also require a professional assessment.`,
  whenToDIY: `Honestly, very little roofing work is safe for DIY. You can replace a single tab shingle on a low-pitch roof if you're comfortable on a ladder and understand the overlap pattern. Cleaning gutters and keeping debris off the roof are good maintenance tasks. But anything involving flashing, valleys, or large areas... leave it to someone with fall protection.`,
  howToSave: [
    'Get at least 3 quotes for any roofing job. Pricing varies more in roofing than almost any other trade.',
    'Schedule in the off-season (late fall or winter in most areas). Roofers are hungry for work and prices drop.',
    'If insurance is covering storm damage, get your own independent quote before the insurance adjuster visits.',
    'Ask about manufacturer warranties vs. workmanship warranties. The cheapest bid means nothing if the work fails in 2 years.',
    'Consider architectural shingles over 3-tab. They cost slightly more but last 25-30 years vs. 15-20, so the per-year cost is actually lower.',
  ],
  redFlags: [
    'They show up at your door after a storm offering "free inspections." Storm chasers are notorious for shoddy work and disappearing before warranty claims.',
    'Asking for full payment before the job starts. A deposit of 25-30% is normal... 100% upfront is not.',
    'No written contract specifying materials, scope, timeline, and warranty terms.',
    'They want to install new shingles over existing damaged ones to save you money. This is a shortcut that voids most manufacturer warranties.',
    'Can\'t provide proof of workers\' comp insurance. Roofing is dangerous work and you\'re liable if an uninsured worker gets hurt on your property.',
  ],
  relatedProducts: [
    { category: 'home', slug: 'roof', name: 'Roof' },
    { category: 'home', slug: 'windows', name: 'Windows' },
  ],
}
