export const guide = {
  slug: 'furnace-not-turning-on',
  title: 'Furnace Not Turning On',
  metaTitle: 'Furnace Not Turning On — Troubleshooting Guide (2026) | ReplacementGuide',
  metaDescription: 'Furnace won\'t turn on? Walk through these steps before calling an HVAC tech. Some fixes are free, but one issue means you need to replace it immediately.',
  relatedProduct: { category: 'home', slug: 'furnace', name: 'Furnace' },
  intro: `No heat in the dead of winter is a genuine emergency. Before you call and pay for an after-hours service call, let's check the easy stuff. A lot of "dead furnace" situations turn out to be something you can fix in under five minutes.`,
  steps: [
    {
      title: 'Check the thermostat',
      detail: 'Make sure it\'s set to "heat" and the target temperature is set above the current room temperature. If it\'s battery powered, dead batteries are a common culprit. Also check that someone didn\'t accidentally switch it to "off" or "cool."',
      fix: 'Set to heat, bump the temp up 5 degrees above room temp, replace batteries. Wait a couple minutes for the furnace to respond... there\'s usually a short delay.',
    },
    {
      title: 'Check the circuit breaker and power switch',
      detail: 'Even gas furnaces need electricity to run. Check your breaker panel for a tripped breaker. Also... there\'s usually a light switch or toggle on or near the furnace itself. It looks like a regular light switch and people turn it off by accident all the time.',
      fix: 'Flip the breaker off and back on. Make sure the furnace power switch is on. If the breaker trips again immediately, leave it off and call a tech.',
    },
    {
      title: 'Check the gas valve',
      detail: 'Follow the gas line to your furnace. There\'s a valve handle on the pipe... the handle should be parallel to the pipe (open). If it\'s perpendicular (crosswise), the gas is shut off. This gets bumped closed during maintenance or if someone was working nearby.',
      fix: 'Turn the handle so it\'s parallel to the gas pipe. If you smell gas at any point, don\'t touch anything... leave the house and call your gas company.',
    },
    {
      title: 'Check the pilot light or igniter',
      detail: 'Older furnaces have a standing pilot light that can blow out. Newer furnaces use a hot surface igniter or electronic ignition. Look through the small window on the front of the furnace... you should see a flame or a glowing igniter when the furnace tries to start.',
      fix: 'For pilot lights, follow the relighting instructions on the furnace label. For electronic ignition, if you don\'t see the igniter glow when the furnace tries to start, it\'s likely burned out... a $20-40 part that\'s fairly easy to replace if you\'re handy. Tons of YouTube videos for your specific model.',
    },
    {
      title: 'Check the air filter',
      detail: 'A completely clogged filter can cause the furnace to overheat and shut down on its safety limit switch. Pull the filter out and look at it.',
      fix: 'If the filter is totally caked with dust, replace it and reset the furnace by turning it off for 30 seconds then back on. If this was the problem, the furnace should fire up within a few minutes. Set a reminder to check the filter monthly.',
    },
    {
      title: 'Clean the flame sensor',
      detail: 'The flame sensor is a thin metal rod that sits in the burner flame. It tells the furnace that gas actually ignited. When it gets coated with carbon buildup, it can\'t sense the flame and the furnace shuts down as a safety measure. This is one of the most common furnace repairs.',
      fix: 'Turn off power to the furnace. Remove the flame sensor (usually one screw). Gently rub it with fine steel wool or an emery cloth until the metal is shiny. Reinstall it. This alone fixes the problem a surprising amount of the time.',
    },
  ],
  whenToReplace: `If a tech tells you the heat exchanger is cracked, stop using the furnace immediately. A cracked heat exchanger can leak carbon monoxide into your home. This is not a repair... it's a replacement. If your furnace is 15-20+ years old, it's at the end of its life anyway and a new unit will be significantly more efficient.`,
  whenToCallPro: `Call an HVAC tech if you smell gas (actually, call the gas company first), if the furnace keeps shutting down after you've checked the basics, or if you see error codes flashing on the circuit board. Also call immediately if your CO detector goes off... get out of the house first, then call.`,
  recommendedProducts: [
    { name: 'Universal Furnace Ignitor', description: 'The ignitor is one of the most common furnace failures... when it cracks or burns out, the burners can\'t light. Universal fit works with most brands.', priceRange: '$15-$30', amazonUrl: 'https://www.amazon.com/s?k=universal+furnace+hot+surface+ignitor&tag=replacementgu-20' },
    { name: 'Furnace Flame Sensor', description: 'If your furnace starts then shuts off after a few seconds, a dirty or failed flame sensor is usually why. Cleaning it with steel wool works, but having a spare on hand doesn\'t hurt.', priceRange: '$8-$15', amazonUrl: 'https://www.amazon.com/s?k=universal+furnace+flame+sensor&tag=replacementgu-20' },
    { name: 'AstroAI Digital Multimeter', description: 'Lets you test the ignitor, flame sensor, and thermostat so you know exactly which part needs replacing... no guessing required.', priceRange: '$15-$25', amazonUrl: 'https://www.amazon.com/s?k=AstroAI+digital+multimeter&tag=replacementgu-20' },
  ],
}
