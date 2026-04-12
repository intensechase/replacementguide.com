export const guide = {
  slug: 'ac-blowing-warm-air',
  title: 'AC Running but Blowing Warm Air',
  metaTitle: 'AC Blowing Warm Air — Troubleshooting Guide (2026) | ReplacementGuide',
  metaDescription: 'AC running but not cooling? Here\'s what to check before calling HVAC. Could be a dirty filter or something that means it\'s time for a new system.',
  relatedProduct: { category: 'home', slug: 'air-conditioner', name: 'Air Conditioner' },
  intro: `Your AC is running, the fan is blowing... but the air isn't cold. This is almost more frustrating than it not working at all. The good news is several of these causes are things you can check and fix yourself. Let's go through them.`,
  steps: [
    {
      title: 'Verify the thermostat is set to cool',
      detail: 'Check that the thermostat is set to "cool" and not "heat" or "fan only." If it\'s set to fan only, it\'ll blow air without any cooling. Also make sure the set temperature is well below room temp.',
      fix: 'Switch to cool mode and set the temperature at least 5 degrees below the current room temperature. Give it 10 minutes... the system needs time to start producing cold air.',
    },
    {
      title: 'Check and replace the air filter',
      detail: 'A dirty air filter restricts airflow over the evaporator coil, which can cause the coil to freeze over. When it thaws, you get warm air and water everywhere. Pull the filter out and look at it.',
      fix: 'Replace it if it\'s dirty. If the coil has already frozen (you\'ll see ice on the copper lines near the indoor unit), turn the system to "fan only" for 2-3 hours to let it thaw completely. Then turn cooling back on with the fresh filter.',
    },
    {
      title: 'Check the outdoor unit',
      detail: 'Go look at the condenser unit outside. Is the fan spinning? Put your hand over the top... you should feel warm air being blown out. If the fan isn\'t running, the system can\'t reject heat and your indoor air won\'t get cold.',
      fix: 'If the outdoor unit isn\'t running at all, check the breaker for it (it has its own breaker separate from the indoor unit). If the breaker is fine but the unit won\'t start, you likely need a tech... it could be a capacitor, contactor, or compressor issue.',
    },
    {
      title: 'Look for signs of a refrigerant leak',
      detail: 'Check the copper lines running from your outdoor unit to the indoor unit. If the larger (insulated) line has ice forming on it, that\'s a sign of low refrigerant. You might also notice the system running constantly without ever reaching the set temperature.',
      fix: 'Refrigerant leaks need a professional. A tech will find and fix the leak, then recharge the system. If you\'re told it needs "a pound or two" every year, the leak isn\'t fixed... insist they find and repair the actual leak.',
    },
    {
      title: 'Check for a frozen evaporator coil',
      detail: 'Open the access panel on your indoor unit (or look at the area where the refrigerant lines connect). If you see a block of ice, the evaporator coil is frozen. This can be caused by low refrigerant, a bad blower motor, or restricted airflow.',
      fix: 'Turn off cooling and run the fan only for several hours until all ice melts. Check the filter and make sure all vents in the house are open. If it freezes again after thawing, you need a tech to check refrigerant levels and airflow.',
    },
  ],
  whenToReplace: `If your system uses R-22 refrigerant (common in units made before 2010) and it needs a recharge, seriously consider replacing the whole system. R-22 is no longer manufactured and costs $100-200 per pound now... a recharge can cost more than a monthly payment on a new system. Any unit over 15 years old with a major refrigerant leak is better replaced than repaired.`,
  whenToCallPro: `Call a tech if the outdoor unit won't run, if you see ice on the refrigerant lines, or if you've checked everything here and still get warm air. Refrigerant work requires specialized equipment and EPA certification... there's no DIY option for that part.`,
  recommendedProducts: [
    { name: 'HVAC Air Filter (MERV 8)', description: 'A clean filter is the easiest way to prevent frozen coils and warm air problems. Keep a few spares on hand so you never run a dirty one too long.', priceRange: '$8-$20', amazonUrl: 'https://www.amazon.com/s?k=HVAC+air+filter+MERV+8&tag=replacementgu-20' },
    { name: 'AC Fin Comb', description: 'Straightens bent condenser fins so your outdoor unit can move air properly. Bent fins are surprisingly common and hurt cooling performance more than you\'d think.', priceRange: '$8-$12', amazonUrl: 'https://www.amazon.com/s?k=AC+fin+comb+straightener&tag=replacementgu-20' },
    { name: 'Condensate Pump', description: 'If your AC condensate line can\'t drain by gravity, a pump moves the water out for you... prevents overflow shutdowns and water damage.', priceRange: '$30-$60', amazonUrl: 'https://www.amazon.com/s?k=HVAC+condensate+pump&tag=replacementgu-20' },
  ],
}
