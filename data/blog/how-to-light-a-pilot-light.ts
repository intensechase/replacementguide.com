export const article = {
  slug: 'how-to-light-a-pilot-light',
  title: 'How to Light a Pilot Light (Furnace, Water Heater, Fireplace)',
  metaTitle: 'How to Light a Pilot Light — Step by Step (2026)',
  metaDescription: 'Step-by-step guide to relighting a pilot light on your furnace, water heater, or gas fireplace. Safety tips, what to check, and when to call for help.',
  publishDate: '2026-04-27',
  category: 'how-to' as const,
  intro: `A pilot light that goes out is usually not a big deal... it happens from drafts, a momentary gas interruption, or a dirty thermocouple. Relighting it takes 2-3 minutes. But gas appliances demand respect, so let's do this safely. If you smell gas strongly at any point, stop what you're doing, leave the house, and call your gas company from outside.`,
  sections: [
    {
      heading: 'Before You Start: Safety Check',
      content: `Sniff around the appliance. A faint gas smell is normal when the pilot is out (a tiny amount of gas was released when it extinguished). A STRONG gas smell means gas has been accumulating... don't light anything. Open windows, leave the house, and call the gas company.\n\nIf there's no strong gas smell, wait 5 minutes before attempting to relight. This allows any residual gas near the pilot assembly to dissipate. Gas is heavier than air, so it settles at floor level.\n\nLocate the gas control knob on the appliance. It typically has three positions: ON, OFF, and PILOT. You'll be working with this knob throughout the process.`,
    },
    {
      heading: 'Relighting a Water Heater Pilot',
      content: `Find the gas control valve on the front of the water heater (lower section). It has a dial and usually a separate button for the piezo igniter.\n\nTurn the gas knob to OFF. Wait 5 minutes for any gas to clear.\n\nTurn the knob to PILOT. Press the knob in (or press the separate pilot button, depending on your model) and hold it down. This manually opens the gas valve to the pilot burner only.\n\nWhile holding the knob/button down, press the piezo igniter button repeatedly until you see a flame through the viewing window at the bottom of the tank. If your water heater doesn't have a piezo igniter (older models), use a long-reach lighter or long match to light the pilot through the access opening.\n\nKeep holding the knob/button for 30-60 seconds after the pilot lights. This heats the thermocouple, which tells the gas valve the pilot is lit. If you release too soon, the pilot goes out.\n\nRelease the knob. The pilot should stay lit. Turn the knob from PILOT to ON. You should hear the main burner ignite within a few minutes as the water heater begins heating.`,
    },
    {
      heading: 'Relighting a Furnace Pilot',
      content: `Many modern furnaces (last 15-20 years) use electronic ignition, not a standing pilot light. If your furnace has a standing pilot, it's likely an older model.\n\nFind the pilot assembly inside the furnace cabinet. Remove the access panel (usually the lower panel). The pilot assembly is near the burners... a small tube with a flame.\n\nThe process is the same as the water heater: gas knob to OFF, wait 5 minutes, turn to PILOT, press and hold, light with the igniter or a long lighter, hold for 30-60 seconds, release, turn to ON.\n\nIf your furnace has electronic ignition and isn't starting: the problem is different from a pilot light. Check the thermostat settings, make sure the power switch on the furnace is on, and check the breaker. If none of that works, the ignitor or control board may need professional attention.`,
    },
    {
      heading: 'Relighting a Gas Fireplace Pilot',
      content: `Gas fireplaces have a pilot assembly accessible behind the lower vent panel or behind a decorative screen. The gas control is usually hidden behind a panel at the bottom of the fireplace.\n\nThe process is similar: find the gas control (ON/OFF/PILOT), turn to OFF, wait 5 minutes, turn to PILOT, press and hold the knob while pressing the igniter, hold for 30-60 seconds after the pilot lights, then release and turn to ON.\n\nSome gas fireplaces have a wall switch or remote that controls the main burner. The pilot must be lit before the switch or remote will work.\n\nIf you have a direct-vent gas fireplace (sealed glass front), the pilot and controls may be harder to access. Check the owner's manual for your specific model.`,
    },
    {
      heading: 'If the Pilot Won\'t Stay Lit',
      content: `If the pilot lights but goes out as soon as you release the knob, the thermocouple isn't sensing the flame. Three common causes:\n\nThe thermocouple is dirty. The tip (which sits in the pilot flame) has carbon buildup that insulates it from the heat. Turn off the gas, let everything cool, and lightly sand the thermocouple tip with fine sandpaper or emery cloth until it's shiny. Try again.\n\nThe thermocouple is out of position. The tip needs to be directly in the pilot flame... engulfed by it, not just near it. Gently bend it so the tip is centered in the flame.\n\nThe thermocouple is dead. They last 5-10 years. A universal replacement costs $10-$15 at any hardware store and takes 15 minutes to swap: one nut at the gas valve, one bracket clip at the pilot assembly.\n\nIf a new thermocouple doesn't fix it, the gas valve itself may be faulty ($100-$300 repair by a professional).`,
    },
    {
      heading: 'When to Call a Professional',
      content: `Call your gas company or an HVAC technician if:\n\n- You smell a strong gas odor that doesn't dissipate\n- The pilot won't stay lit after replacing the thermocouple\n- You see soot, scorch marks, or discoloration around the pilot area\n- The pilot flame is yellow or orange instead of blue (indicates incomplete combustion)\n- You're not comfortable working around gas appliances\n- The appliance is in a hard-to-access location\n\nA service call to relight a pilot and diagnose any issues costs $75-$150. If the thermocouple needs replacement, total cost is $100-$200 including the part and labor. This is one of the cheapest HVAC service calls.`,
    },
  ],
  relatedProducts: [
    { category: 'home', slug: 'furnace', name: 'Furnace' },
    { category: 'home', slug: 'water-heater', name: 'Water Heater' },
    { category: 'home', slug: 'thermostat', name: 'Thermostat' },
  ],
  relatedGuides: [
    { type: 'troubleshoot' as const, slug: 'pilot-light-wont-stay-lit', name: 'Pilot Light Won\'t Stay Lit' },
    { type: 'troubleshoot' as const, slug: 'furnace-not-turning-on', name: 'Furnace Not Turning On' },
  ],
}
