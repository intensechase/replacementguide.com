export const guide = {
  slug: 'appliance-repair',
  title: 'How Much Does Appliance Repair Cost?',
  metaTitle: 'How Much Does Appliance Repair Cost? (2026 Pricing) | ReplacementGuide',
  metaDescription: 'Appliance repair costs $100-$400 per visit on average. See pricing by appliance, when repair makes sense vs. replacement, and how to save on service calls.',
  professional: 'Appliance Repair Technician',
  intro: `Before you haul that broken washer to the curb, it's worth knowing what a repair actually costs. Most appliance service calls run $100 to $400 including parts. Sometimes that's a bargain compared to buying new... and sometimes the repair costs more than the appliance is worth. Knowing the difference saves you money either way.`,
  averageCost: { low: 100, high: 400, unit: 'per visit' },
  costFactors: [
    {
      factor: 'Type of appliance',
      detail: 'Refrigerator compressor repairs are expensive ($300-$600+). A washing machine lid switch replacement is cheap ($100-$175). The complexity of the appliance and the part that failed drive the cost more than anything.',
    },
    {
      factor: 'Diagnostic fee',
      detail: 'Most companies charge $50-$100 just to show up and diagnose the problem. This usually gets applied to the repair if you proceed. If you don\'t, you still owe the diagnostic fee.',
    },
    {
      factor: 'Brand and availability of parts',
      detail: 'Common brands (Whirlpool, GE, Samsung) have readily available parts. European brands (Bosch, Miele) and high-end appliances often need specialty parts that cost more and take longer to arrive.',
    },
    {
      factor: 'Age of the appliance',
      detail: 'Parts for appliances over 10-12 years old can be discontinued or hard to find. The general rule: if the repair costs more than 50% of a new appliance, replace it.',
    },
    {
      factor: 'Warranty status',
      detail: 'Many appliances have a 1-year manufacturer warranty. Some parts (like compressors) have extended warranties of 5-10 years. Check before you pay out of pocket.',
    },
  ],
  commonJobs: [
    { job: 'Refrigerator not cooling (thermostat/fan)', costRange: '$150-$350', timeEstimate: '30-60 minutes' },
    { job: 'Washing machine not spinning (lid switch/coupler)', costRange: '$100-$250', timeEstimate: '30-60 minutes' },
    { job: 'Dryer not heating (heating element)', costRange: '$150-$300', timeEstimate: '30-60 minutes' },
    { job: 'Dishwasher not draining (pump/motor)', costRange: '$150-$350', timeEstimate: '45-90 minutes' },
    { job: 'Oven not heating (element/igniter)', costRange: '$150-$300', timeEstimate: '30-60 minutes' },
    { job: 'Refrigerator compressor replacement', costRange: '$300-$600', timeEstimate: '2-3 hours' },
    { job: 'Washing machine leak (hose/pump seal)', costRange: '$100-$250', timeEstimate: '30-60 minutes' },
    { job: 'Ice maker not working', costRange: '$100-$250', timeEstimate: '30-60 minutes' },
  ],
  whenToHire: `Call a repair tech when the appliance is under warranty, when it's less than 8 years old, or when the repair is clearly cheaper than replacement. Gas appliances (gas dryer, gas oven, gas water heater) should always be repaired by a qualified tech because gas leaks are dangerous. Also call if you've diagnosed the problem online but the repair requires pulling the unit out and accessing internal parts.`,
  whenToDIY: `Many common appliance repairs are surprisingly simple. Replacing a dryer heating element, swapping a dishwasher spray arm, changing a refrigerator water filter, and cleaning lint from a dryer vent are all doable with basic tools and a YouTube video. The model number is your best friend... look it up, find the parts diagram, and check repair forums before paying someone $200 to replace a $15 part.`,
  howToSave: [
    'Always ask if the diagnostic fee is applied toward the repair. Most reputable companies credit it.',
    'Look up the problem online before calling. If you can identify the likely part, you\'ll know if the quote is reasonable. AppliancePartsPros and RepairClinic have great troubleshooting tools.',
    'Buy the part yourself and have the tech install it. Some technicians are fine with this and you save the parts markup (typically 30-50%).',
    'Check your manufacturer warranty and any extended warranty you may have purchased. Compressor warranties on refrigerators often last 5-10 years.',
    'Use the 50% rule: if the repair costs more than 50% of a new appliance, put that money toward a replacement instead.',
  ],
  redFlags: [
    'They quote a repair without diagnosing the problem first. A technician needs to see the appliance to give an accurate quote.',
    'The repair quote is close to the price of a new appliance. A good tech will tell you when replacement makes more sense.',
    'They don\'t carry common parts in their truck. Experienced techs stock frequently needed parts and can finish most repairs in 1 visit.',
    'No warranty on the repair work. Reputable companies guarantee their labor for at least 30-90 days.',
    'They push for replacing the entire appliance without attempting to diagnose the problem. Some companies get kickbacks for selling new units.',
  ],
  relatedProducts: [
    { category: 'home', slug: 'refrigerator', name: 'Refrigerator' },
    { category: 'home', slug: 'washing-machine', name: 'Washing Machine' },
    { category: 'home', slug: 'dryer', name: 'Dryer' },
    { category: 'home', slug: 'dishwasher', name: 'Dishwasher' },
  ],
}
