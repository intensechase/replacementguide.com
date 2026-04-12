export const guide = {
  slug: 'dryer-not-heating',
  title: 'Dryer Running but Not Heating',
  metaTitle: 'Dryer Not Heating — Troubleshooting Guide (2026) | ReplacementGuide',
  metaDescription: 'Dryer tumbles but clothes stay wet? Here\'s what to check. The most common cause is also a fire hazard you should fix immediately.',
  relatedProduct: { category: 'home', slug: 'dryer', name: 'Dryer' },
  intro: `The dryer tumbles fine but your clothes come out just as wet as they went in. Before you start shopping for a new dryer, check these things. The number one cause is something you should be dealing with anyway because it's a fire hazard.`,
  steps: [
    {
      title: 'Clean the lint trap and check the vent hose',
      detail: 'This is the most common cause of a dryer not heating and it\'s also the leading cause of house fires from dryers. Pull out the lint screen... is it packed? More importantly, pull the dryer away from the wall and check the flexible vent hose. Disconnect it and look inside. Then go outside and check the vent hood where it exits your house.',
      fix: 'Clean the lint screen (obviously). Disconnect the vent hose from both ends and clean it out. A dryer vent cleaning brush kit ($15-20) is the best tool for this. Check the exterior vent hood... birds love to nest in these. If the vent run is long or has multiple bends, get it professionally cleaned. A clogged vent causes the dryer to overheat and trip the thermal fuse.',
    },
    {
      title: 'Check the circuit breaker (electric dryers)',
      detail: 'This is a sneaky one. Electric dryers use a 240-volt circuit with two breakers that are connected together. If one breaker trips but the other doesn\'t, the dryer will run (the motor gets power) but the heating element won\'t work (it needs both legs of the 240v circuit).',
      fix: 'Look at your breaker panel and find the double breaker for the dryer. Flip both sides fully off, then fully on. If one side trips again, you have an electrical issue... call an electrician.',
    },
    {
      title: 'Check the gas supply (gas dryers)',
      detail: 'If you have a gas dryer, make sure the gas supply valve behind the dryer is open. The valve handle should be parallel to the gas line (open). If it\'s perpendicular, the gas is off.',
      fix: 'Turn the valve to the open position. If the gas is on but the dryer still won\'t heat, the gas valve solenoids inside the dryer might be failing... they\'re a common wear part. You might notice the igniter glow but the gas never lights.',
    },
    {
      title: 'Check the thermal fuse',
      detail: 'The thermal fuse is a safety device that blows if the dryer overheats (usually from a clogged vent). Once it blows, the dryer won\'t heat until the fuse is replaced. It\'s a one-time-use part. On most dryers, it\'s on the blower housing or exhaust duct inside the dryer.',
      fix: 'You\'ll need to open the dryer cabinet to access it. The fuse is a small, flat device you can test with a multimeter for continuity. No continuity = blown fuse. Replacement fuses are $5-15. But here\'s the important part... also fix whatever caused the overheat (almost always a clogged vent) or the new fuse will blow too.',
    },
    {
      title: 'Check the heating element (electric) or igniter (gas)',
      detail: 'Electric dryers have a heating element that can burn out over time. You\'ll see a visible break in the coil if it\'s failed. Gas dryers have an igniter that can crack or wear out. If the igniter doesn\'t glow, it can\'t light the gas.',
      fix: 'Both are replaceable parts. Heating elements run $20-50, igniters $15-30. There are model-specific replacement videos for virtually every dryer out there. If you can use a screwdriver and disconnect a wire harness, you can do this.',
    },
  ],
  whenToReplace: `If the motor is failing (grinding noises, burning smell) or the drum bearings are shot (loud squealing), repairs start approaching the cost of a new dryer. A dryer that's 12+ years old with a dead heating element and a clogged vent history... it might be time. New dryers with moisture sensors are much better at not over-drying and reducing fire risk.`,
  whenToCallPro: `Get your dryer vent professionally cleaned if the vent run is longer than 15 feet or has more than two elbows... a brush kit won't fully clear it. Call an appliance tech if you're not comfortable opening the dryer cabinet or working with electrical components. And if you smell gas from a gas dryer, shut off the gas valve and call for service.`,
  recommendedProducts: [
    { name: 'Dryer Heating Element', description: 'The most common cause of an electric dryer not heating. Universal elements fit many models... just match the wattage and shape to your dryer.', priceRange: '$20-$45', amazonUrl: 'https://www.amazon.com/s?k=dryer+heating+element+replacement&tag=replacementgu-20' },
    { name: 'Dryer Thermal Fuse', description: 'If your dryer stopped heating suddenly, the thermal fuse probably blew from a clogged vent. It\'s a one-time part... replace it, then clean the vent so it doesn\'t blow again.', priceRange: '$5-$12', amazonUrl: 'https://www.amazon.com/s?k=dryer+thermal+fuse+replacement&tag=replacementgu-20' },
    { name: 'Dryer Vent Cleaning Kit', description: 'A lint-clogged vent is the #1 cause of dryer heating failures and a serious fire hazard. This brush kit reaches up to 12 feet into the vent line to clear it out.', priceRange: '$15-$25', amazonUrl: 'https://www.amazon.com/s?k=dryer+vent+cleaning+brush+kit&tag=replacementgu-20' },
  ],
}
