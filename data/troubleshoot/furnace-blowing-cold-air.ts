export const guide = {
  slug: 'furnace-blowing-cold-air',
  title: 'Furnace Running but Blowing Cold Air',
  metaTitle: 'Furnace Blowing Cold Air — Troubleshooting Guide (2026) | ReplacementGuide',
  metaDescription: 'Furnace running but only blowing cold air? Check these common causes before calling an HVAC tech. Most are easy fixes.',
  relatedProduct: { category: 'home', slug: 'furnace', name: 'Furnace' },
  intro: `The furnace is running, you can hear it... but the air coming out of the vents is cold. This is usually a different problem than a furnace that won't turn on at all. Let's figure out what's going on.`,
  steps: [
    {
      title: 'Check the thermostat fan setting',
      detail: 'This is the number one cause of "my furnace blows cold air." Look at your thermostat... if the fan is set to "ON" instead of "AUTO," the blower runs continuously even when the furnace isn\'t actively heating. So between heating cycles, you get room-temperature air from the vents that feels cold.',
      fix: 'Switch the fan setting from "ON" to "AUTO." In auto mode, the fan only runs when the furnace is actually producing heat. This alone solves the problem for a surprising number of people.',
    },
    {
      title: 'Check the pilot light or igniter',
      detail: 'If the blower is running but the burners never light, you\'ll get nothing but cold air. Look through the inspection window on the furnace. You should see a flame when the furnace is trying to heat. If there\'s no flame, the gas isn\'t igniting.',
      fix: 'For standing pilot lights, follow the relighting instructions on the furnace label. For electronic ignition systems, if the igniter doesn\'t glow, it may need replacement ($20-40 part). If the igniter glows but the burners don\'t light, you likely have a gas supply issue.',
    },
    {
      title: 'Clean the flame sensor',
      detail: 'The flame sensor detects whether the burners actually lit. When it\'s dirty, it can\'t sense the flame, so the furnace shuts off the gas as a safety measure after a few seconds. You might notice the burners light briefly then go out.',
      fix: 'Turn off the furnace. Remove the flame sensor (thin metal rod, usually held by one screw). Clean it with fine steel wool until shiny. Put it back. This is one of the most common furnace fixes and costs you nothing.',
    },
    {
      title: 'Verify gas supply',
      detail: 'Check that the gas valve on the supply line to the furnace is open (handle parallel to the pipe). If you have other gas appliances like a stove or water heater, check if they\'re working... if nothing gas-powered works, the issue is your gas supply, not the furnace.',
      fix: 'Open the gas valve if it\'s closed. If you suspect a gas supply issue beyond a closed valve, call your gas utility company. If you smell gas, leave the house immediately and call from outside.',
    },
    {
      title: 'Check for a tripped limit switch',
      detail: 'The high limit switch is a safety device that shuts down the burners if the furnace overheats. The blower keeps running to cool things down, which means you get cold air. Overheating is almost always caused by restricted airflow... a clogged filter, closed vents, or a failing blower motor.',
      fix: 'Turn off the furnace and let it cool for 30 minutes. Check and replace the air filter. Make sure supply and return vents throughout the house aren\'t blocked by furniture or closed off. Restart the furnace. If the limit switch keeps tripping, call a tech.',
    },
    {
      title: 'Replace a dirty air filter',
      detail: 'A clogged filter forces the furnace to work harder, overheat, and trip the safety limit. The blower keeps running (cold air) while the burners stay off. This is the root cause behind a lot of "my furnace blows cold" complaints.',
      fix: 'Pull the filter and replace it. If you can\'t see light through it, it\'s way overdue. After replacing, give the furnace time to reset and try again. Going forward, check the filter every month during heating season.',
    },
  ],
  whenToReplace: `If the heat exchanger is cracked (a tech can check this with a camera or combustion analyzer), you need a new furnace. A cracked heat exchanger is a carbon monoxide risk and not worth repairing. If your furnace is 20+ years old and needing frequent repairs, the math usually favors replacement.`,
  whenToCallPro: `Call a tech if the burners light then go out repeatedly after you've cleaned the flame sensor, if you hear unusual noises from the furnace, or if you see error codes flashing on the control board. If your CO detector goes off, get everyone out of the house first... then call.`,
  recommendedProducts: [
    { name: 'HVAC Air Filter (MERV 8)', description: 'A clogged filter is the hidden cause behind most "furnace blows cold" complaints. Swap it every 1-3 months during heating season and you\'ll avoid a lot of headaches.', priceRange: '$8-$20', amazonUrl: 'https://www.amazon.com/s?k=HVAC+air+filter+MERV+8&tag=replacementgu-20' },
    { name: 'Honeywell Home Programmable Thermostat', description: 'If your thermostat is acting up or the fan setting keeps causing confusion, a reliable programmable thermostat makes everything simpler... and pays for itself in energy savings.', priceRange: '$25-$50', amazonUrl: 'https://www.amazon.com/s?k=Honeywell+Home+programmable+thermostat&tag=replacementgu-20' },
    { name: 'Furnace Flame Sensor', description: 'The flame sensor is the most common reason a furnace lights then shuts right off. Cleaning it works most of the time, but a new one is cheap insurance.', priceRange: '$8-$15', amazonUrl: 'https://www.amazon.com/s?k=universal+furnace+flame+sensor&tag=replacementgu-20' },
  ],
}
