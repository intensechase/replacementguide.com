export const guide = {
  slug: 'sump-pump-not-working',
  title: 'Sump Pump Not Working',
  metaTitle: 'Sump Pump Not Working — What to Check (2026) | ReplacementGuide',
  metaDescription: 'Sump pump not turning on or not pumping water? Here\'s what to check step by step, common causes, and when you need a new pump.',
  relatedProduct: { category: 'home', slug: 'sump-pump', name: 'Sump Pump' },
  intro: `A sump pump that isn't working is an emergency waiting to happen... especially if rain is in the forecast. Most sump pump failures are caused by simple issues you can fix in minutes. Let's go through the checks from easiest to most serious.`,
  steps: [
    {
      title: 'Check that it\'s plugged in and has power',
      detail: 'This sounds obvious, but it\'s the #1 cause of sump pump "failure." The pump may have been accidentally unplugged, or the GFCI outlet it\'s connected to may have tripped. Sump pumps are required to be on GFCI-protected circuits, and GFCIs trip from moisture and humidity... common in basements.',
      fix: 'Check the plug. If it\'s on a GFCI outlet, press the "reset" button on the outlet. If the GFCI keeps tripping, the pump motor may have a ground fault (moisture in the motor)... that\'s a replacement situation.',
    },
    {
      title: 'Check the float switch',
      detail: 'The float switch tells the pump when to turn on. If the float is stuck (tangled on the discharge pipe, wedged against the pit wall, or blocked by debris), the pump doesn\'t know the water level is rising. Pour a bucket of water into the pit and watch the float.',
      fix: 'Free the float if it\'s stuck. Rearrange the discharge pipe if the float is tangling on it. Clean debris from around the float. The float should move freely up and down. If it still doesn\'t activate the pump, the float switch itself may need replacement ($15-$30 part).',
    },
    {
      title: 'Check the discharge line for clogs or freezing',
      detail: 'The pipe that carries water outside can get clogged with debris or freeze in winter. If the discharge is blocked, the pump runs but water has nowhere to go... it cycles back into the pit and the pump runs continuously without emptying.',
      fix: 'Disconnect the discharge line from the pump and check for blockages. In winter, check where the line exits the house... ice can form at the outlet. Insulating the discharge pipe where it exits the house helps prevent freezing. A frozen discharge line is a common cause of pump burnout.',
    },
    {
      title: 'Check the inlet screen and pit for debris',
      detail: 'The bottom of the pump has an inlet screen that can get clogged with gravel, silt, and debris from the sump pit. A clogged inlet means the pump runs but can\'t pull water.',
      fix: 'Unplug the pump and lift it out of the pit. Clean the inlet screen. While you\'re at it, clean the bottom of the sump pit... gravel and sediment accumulate over time and can clog the pump.',
    },
    {
      title: 'Listen to the pump when it should be running',
      detail: 'Pour water into the pit until the float activates. Listen: if the motor hums but nothing pumps, the impeller may be jammed or broken. If there\'s no sound at all, the motor is dead.',
      fix: 'A humming pump with no water output usually means a jammed impeller ($10-$30 if you can clear the jam, or $200-$400 for pump replacement if the impeller is broken). A silent pump with power means the motor has failed... time for a new pump.',
    },
    {
      title: 'Check the check valve on the discharge line',
      detail: 'The check valve prevents water that\'s been pumped up the discharge line from flowing back into the pit when the pump turns off. If the check valve is installed backward or has failed, the pump empties the pit, then the water flows right back down... and the pump runs again. Endlessly.',
      fix: 'Make sure the check valve arrow points AWAY from the pump (toward the exit). If the valve is stuck open or the flap inside is broken, replace it ($15-$25). A failed check valve causes the pump to cycle constantly, which burns out the motor prematurely.',
    },
  ],
  whenToReplace: `Sump pumps last 7 to 10 years. If yours is in that range and having problems, replacement ($200-$600 installed) is smarter than repair. A dead motor, burned-out pump, or cracked housing all mean it's time for a new one. If your pump runs constantly during rain but can't keep up, you may need a larger pump (1/3 HP to 1/2 HP upgrade) or a secondary backup pump.`,
  whenToCallPro: `Call a plumber if water is actively rising in the basement and you can't get the pump working... this is a time-sensitive emergency. Also call if the pump is hardwired (not plugged in) and you can't diagnose the electrical issue, or if you need to upsize the pump or discharge line, which may require modifying the plumbing.`,
  recommendedProducts: [
    { name: 'Sump Pump Float Switch', description: 'If the pump has power but won\'t turn on when water rises, the float switch is usually the problem. A replacement switch is a quick fix that saves you from buying a whole new pump.', priceRange: '$15-$30', amazonUrl: 'https://www.amazon.com/s?k=sump+pump+float+switch+replacement&tag=replacementgu-20' },
    { name: 'Wayne Battery Backup Sump Pump', description: 'When the power goes out during a storm, your main pump is useless... which is exactly when you need it most. A battery backup kicks in automatically and keeps your basement dry.', priceRange: '$150-$300', amazonUrl: 'https://www.amazon.com/s?k=Wayne+battery+backup+sump+pump&tag=replacementgu-20' },
    { name: 'Sump Pump Check Valve', description: 'Prevents water from flowing back into the pit after the pump shuts off. If yours is stuck or installed backward, the pump cycles endlessly and burns out fast.', priceRange: '$10-$20', amazonUrl: 'https://www.amazon.com/s?k=sump+pump+check+valve+1.5+inch&tag=replacementgu-20' },
  ],
}
