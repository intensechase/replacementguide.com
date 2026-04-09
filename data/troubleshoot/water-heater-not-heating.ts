export const guide = {
  slug: 'water-heater-not-heating',
  title: 'Water Heater Not Heating',
  metaTitle: 'Water Heater Not Heating — No Hot Water Fix (2026) | ReplacementGuide',
  metaDescription: 'No hot water? Here\'s what to check on your gas or electric water heater, step by step, before calling a plumber.',
  relatedProduct: { category: 'home', slug: 'water-heater', name: 'Water Heater' },
  intro: `No hot water is one of those problems you notice immediately. Before you assume the worst, there are several simple checks that fix most cases. The approach is different for gas vs electric water heaters, so identify which type you have first... gas heaters have a burner access panel at the bottom and a gas line. Electric heaters have no flame and connect to a breaker in your electrical panel.`,
  steps: [
    {
      title: 'Gas: Check the pilot light',
      detail: 'Look through the viewing window at the bottom of the water heater. You should see a small blue flame. If there\'s no flame, the pilot is out... which means no burner ignition and no hot water.',
      fix: 'Follow the relighting instructions on the label (usually: turn gas knob to "pilot," hold down the knob, press the igniter button, hold for 30-60 seconds, then turn to "on"). If the pilot won\'t stay lit, see our pilot light troubleshooting guide... the thermocouple probably needs cleaning or replacement ($10-$15 part).',
    },
    {
      title: 'Electric: Check the breaker',
      detail: 'Electric water heaters run on a dedicated 240V double breaker. Check your electrical panel... the breaker might be tripped (in the middle position between on and off). This is the #1 cause of no hot water on electric heaters.',
      fix: 'Flip the breaker fully off, then back on. If it trips again immediately, there\'s an electrical issue (short in the element or wiring)... call an electrician. If it stays on, give the heater 1-2 hours to heat up.',
    },
    {
      title: 'Check the thermostat setting',
      detail: 'Someone may have accidentally turned the thermostat down. On gas heaters, there\'s a temperature dial on the gas valve. On electric heaters, the thermostats are behind access panels on the side of the tank (upper and lower).',
      fix: 'Set the thermostat to 120°F (the recommended setting). On electric heaters, you\'ll need a screwdriver to access the thermostats behind the panels. TURN OFF THE BREAKER before opening electric water heater panels... there\'s 240V exposed in there.',
    },
    {
      title: 'Electric: Reset the high-temperature cutoff',
      detail: 'Electric water heaters have a safety switch (red reset button) behind the upper access panel. If the water overheated, this switch trips and kills power to the heating elements. No power, no hot water.',
      fix: 'TURN OFF THE BREAKER FIRST. Remove the upper access panel and insulation. Press the red reset button firmly... you\'ll feel it click. Replace the panel, turn the breaker back on, and wait 1-2 hours. If it trips again, the thermostat is faulty and needs replacement ($20-$30 part, $100-$200 installed).',
    },
    {
      title: 'Gas: Listen for the burner igniting',
      detail: 'Turn up the thermostat slightly. You should hear a click (igniter) followed by a whoosh (burner igniting). Look through the viewing window... you should see a blue flame across the burner.',
      fix: 'If the pilot is lit but the burner doesn\'t ignite: the gas valve or thermostat on the gas valve may be faulty ($100-$300 to replace). If the burner ignites but the flame is yellow or orange instead of blue, the burner is dirty... clogged burner ports reduce heating efficiency.',
    },
    {
      title: 'Check if you\'re just running out of hot water faster',
      detail: 'If you\'re getting SOME hot water but it runs out quickly, the problem is different from NO hot water. On electric heaters, one of two heating elements may have failed... the lower element heats the bulk of the water, and if it dies, you only get hot water from the smaller upper element.',
      fix: 'For electric: test the elements with a multimeter ($15-$20 tool). A dead element costs $10-$20 for the part and $100-$250 to have installed. For gas: sediment buildup at the bottom of the tank insulates the water from the burner. Flushing the tank (connecting a garden hose to the drain valve) removes sediment and restores heating efficiency.',
    },
  ],
  whenToReplace: `If the water heater is over 10 years old and you're facing a $200+ repair (gas valve, multiple elements, thermostat), seriously consider replacement instead. A new tank water heater costs $800-$2,500 installed. You're putting repair money into a unit that's near end of life, and the next component will fail soon too. Also replace if you see rust in the hot water (tank is corroding internally) or water leaking from the tank body.`,
  whenToCallPro: `Call a plumber if: you smell gas at any point, the breaker keeps tripping (electrical hazard), you're not comfortable working with gas connections or 240V electricity, or the pilot light won't stay lit after replacing the thermocouple. A diagnostic service call ($75-$150) is cheaper than guessing wrong and buying parts you don't need.`,
}
