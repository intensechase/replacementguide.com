export const guide = {
  slug: 'ac-not-working',
  title: 'AC Not Working at All',
  metaTitle: 'AC Not Working — Troubleshooting Guide (2026) | ReplacementGuide',
  metaDescription: 'AC completely dead? Walk through these checks before calling an HVAC tech. Could be something simple you can fix in 5 minutes.',
  relatedProduct: { category: 'home', slug: 'air-conditioner', name: 'Air Conditioner' },
  intro: `Your AC won't turn on and it's 95 degrees. Before you call anyone, let's rule out the easy stuff... you'd be surprised how often the fix is something embarrassingly simple. Work through these steps in order.`,
  steps: [
    {
      title: 'Check your thermostat settings',
      detail: 'This sounds obvious but it catches people all the time. Make sure it\'s set to "cool" (not "heat" or "off"), the temperature is set below the current room temperature, and the batteries aren\'t dead if it\'s a battery-powered thermostat.',
      fix: 'Set to cool, drop the target temp 5 degrees below room temp, replace batteries if needed. Wait 5 minutes... some thermostats have a delay to protect the compressor.',
    },
    {
      title: 'Check the circuit breaker',
      detail: 'Your AC system usually has two breakers... one for the indoor air handler/furnace and one for the outdoor condenser. Either one tripping will kill the whole system. A breaker that\'s tripped might look like it\'s on but is actually in the middle position.',
      fix: 'Flip both breakers fully off, then back on. If one trips again immediately, leave it off and call a pro... you have an electrical issue. If it stays on, try the AC again.',
    },
    {
      title: 'Check the air filter',
      detail: 'A completely clogged air filter restricts airflow so badly that the system can freeze up, overheat, and shut itself down as a safety measure. Pull the filter out and look at it.',
      fix: 'If you can\'t see light through the filter, replace it. After putting in a fresh filter, give the system 30 minutes to reset before turning it back on. If it froze up, you might need to let it thaw for a few hours with just the fan running.',
    },
    {
      title: 'Look at the outdoor unit',
      detail: 'Go outside and check the condenser unit. Is the fan spinning? Is it buried in leaves, grass clippings, or debris? Is a bush growing into it? The unit needs at least 2 feet of clearance on all sides to breathe.',
      fix: 'Clear any debris. Hose off the fins gently (not a pressure washer). If the fan isn\'t spinning at all but you can hear a humming sound, the capacitor is probably blown... that\'s a common and relatively cheap repair for a tech.',
    },
    {
      title: 'Check for a blown capacitor',
      detail: 'The capacitor is what gives the compressor and fan motors the jolt they need to start. When it fails, you might hear a humming or clicking sound from the outdoor unit but nothing actually runs. Capacitors fail constantly in hot weather.',
      fix: 'This is a $150-250 repair for an HVAC tech and usually takes about 20 minutes. It\'s one of the most common AC repairs. Don\'t try to replace it yourself unless you\'re comfortable with electrical work... capacitors store a charge that can shock you.',
    },
    {
      title: 'Listen for the compressor',
      detail: 'If the fan runs but the compressor doesn\'t kick on (you\'d hear or feel a deeper hum/vibration), the compressor itself might be dead. This is the expensive part of your AC system.',
      fix: 'A compressor replacement on a central AC unit runs $1,500-2,500 installed. If your system is more than 10 years old, it usually makes more sense to replace the entire outdoor unit or the whole system rather than sinking that money into aging equipment.',
    },
  ],
  whenToReplace: `If the compressor is dead and your system is over 10 years old, replacement is almost always the better call. Same if you're still running R-22 refrigerant (phased out... refills are extremely expensive now). A new system will be more efficient and comes with a warranty.`,
  whenToCallPro: `Call an HVAC tech if the breaker keeps tripping (electrical issue), if the outdoor unit hums but nothing spins (capacitor or compressor), or if the system runs but produces zero cooling. Also call if you smell anything burning... shut the system off first, then call.`,
  recommendedProducts: [
    { name: 'AC Capacitor (35/5 MFD)', description: 'The most commonly replaced AC part... when the outdoor unit hums but won\'t start, a blown capacitor is usually the culprit. Match the MFD rating on your old one.', priceRange: '$12-$25', amazonUrl: 'https://www.amazon.com/s?k=AC+capacitor+35+5+MFD+370V&tag=replacementgu-20' },
    { name: 'AC Contactor', description: 'The relay that sends power to the compressor and fan motor. If it\'s pitted or burnt, the outdoor unit won\'t kick on at all.', priceRange: '$10-$20', amazonUrl: 'https://www.amazon.com/s?k=AC+contactor+2+pole+30+amp&tag=replacementgu-20' },
    { name: 'AC Condensate Drain Line Cleaning Kit', description: 'Clogged condensate lines cause shutdowns on a lot of systems. This kit clears the line so water drains properly and the safety switch doesn\'t trip.', priceRange: '$8-$15', amazonUrl: 'https://www.amazon.com/s?k=AC+condensate+drain+line+cleaning+kit&tag=replacementgu-20' },
  ],
}
