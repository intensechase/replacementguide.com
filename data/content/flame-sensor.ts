export const content = {
  slug: 'flame-sensor',
  lifespanDetail: `Flame sensors last 3 to 5 years before they need cleaning or replacement, though some last longer in clean-burning furnaces. The flame sensor is a thin metallic rod (usually 2 to 4 inches long) mounted near the furnace burners. Its job is simple but critical... it detects whether gas has actually ignited after the gas valve opens. If the sensor doesn't detect a flame within 4 to 7 seconds, the furnace control board shuts the gas valve to prevent unburned gas from flooding your home. It's a small safety device that prevents explosions.

The sensor works by conducting a tiny electrical current (measured in microamps) through the flame. A properly burning flame allows about 2 to 6 microamps to flow through the sensor to ground. When the control board detects this current, it knows the flame is present and keeps the gas flowing. No current means no flame, and the system shuts down.

The reason flame sensors fail is almost always the same thing: carbon buildup. Every combustion process produces small amounts of carbon residue, and this residue slowly coats the metal rod. As the coating thickens, the sensor's ability to conduct that tiny microamp signal degrades. Eventually the coating is thick enough that the control board can't read the flame signal... even though the burners are lit and burning fine. The furnace lights, runs for 3 to 7 seconds, then shuts off because the sensor can't confirm the flame.

This is why cleaning is always the first fix. A light sanding with fine-grit sandpaper (220-grit or emery cloth) removes the carbon buildup and restores conductivity. A 5-minute cleaning can save you a $150 to $300 service call. Most HVAC technicians will tell you that flame sensor cleaning is one of the most common furnace service calls they get... and one of the easiest for homeowners to handle themselves.

If cleaning no longer restores reliable operation, the sensor itself has degraded and needs replacement. Replacement sensors cost $5 to $15 for the part. The entire job (removing 1 screw, pulling the old sensor, inserting the new one) takes under 10 minutes.`,
  warningSigns: [
    { sign: 'Furnace lights then shuts off after 3 to 7 seconds', detail: 'The classic flame sensor symptom. You hear the ignitor click, see the burners light, then the whole thing shuts down seconds later. The furnace may try this cycle 3 times before locking out. This is the control board shutting the gas valve because the sensor isn\'t confirming a flame.' },
    { sign: 'Furnace flashes an error code for flame failure', detail: 'Most modern furnaces have a small LED on the control board that blinks error codes. A flame failure code (check your manual... common codes are 2 blinks or 4 blinks depending on the brand) points directly to the flame sensor or ignition system.' },
    { sign: 'Furnace locks out and won\'t restart without a power cycle', detail: 'After 3 failed ignition attempts, most furnaces enter a lockout mode. You have to turn the furnace off for 30 to 60 seconds (thermostat off or flip the breaker) to reset it. If it locks out repeatedly, the flame sensor is the most likely culprit.' },
    { sign: 'Intermittent heating... works sometimes, fails other times', detail: 'A flame sensor with partial carbon buildup might work when it\'s clean enough to conduct and fail when conditions slightly change. Cold days (when the furnace runs more) tend to expose a marginal sensor because the carbon builds up faster with more burn cycles.' },
    { sign: 'Furnace runs normally for a while then starts short-cycling', detail: 'The sensor may work fine early in the season when carbon buildup is minimal but start failing mid-winter after hundreds of cycles have deposited more residue. You get weeks of normal operation followed by increasingly frequent shutdowns.' },
    { sign: 'Yellow or orange burner flames instead of blue', detail: 'While this can indicate other combustion issues, a dirty flame sensor often coexists with dirty burners. If the flame color is wrong and the furnace is also short-cycling, both the burners and flame sensor likely need cleaning.' },
  ],
  repairOrReplace: `Always try cleaning first. In 80% of cases, a dirty flame sensor is the entire problem and a 5-minute cleaning fixes it completely. Here's how:

Turn off the furnace at the thermostat and the breaker. Locate the flame sensor... it's a thin metal rod mounted with a single 1/4-inch hex screw near the burner assembly, usually with a single wire connected to it. Remove the screw, gently pull the sensor out, and lightly sand the metal rod with 220-grit sandpaper or fine emery cloth until the metal is shiny. Don't use anything coarser than 220-grit... you want to remove carbon, not grind down the rod. Wipe off dust, reinstall, and test.

If cleaning works but the problem comes back within a few weeks, the sensor is degrading and should be replaced. A new flame sensor costs $5 to $15. Match the part to your furnace model number (printed on a sticker inside the furnace panel). Most are universal-fit within a brand, so you mainly need to match the brand and connector type.

For definitive diagnosis, an HVAC technician can measure the microamp output with a multimeter. A healthy sensor reads 2 to 6 microamps in the flame. Below 1.5 microamps means the sensor is failing. Below 0.5 microamps and it needs replacement regardless of how clean it looks.

One important note: flame sensor symptoms are nearly identical to a bad ignitor. The difference is timing. If the burners never light at all (you hear clicking but see no flame), the ignitor is the problem. If the burners light and then shut off after a few seconds, it's the flame sensor. Knowing this saves you from replacing the wrong part.`,
  maintenanceTips: [
    'Clean the flame sensor with 220-grit sandpaper or fine emery cloth once per year, ideally before heating season starts. This takes 5 minutes and prevents the most common furnace failure of the winter.',
    'When cleaning the sensor, inspect the wire and connector for corrosion or damage. A corroded connector can mimic a bad sensor because the electrical signal can\'t pass through the corroded connection.',
    'Keep the burner area clean. Dust and debris on the burners leads to incomplete combustion, which produces more carbon and coats the sensor faster. Vacuum the burner area with a shop vac during your annual sensor cleaning.',
    'Check for a blue flame. A clean-burning furnace produces blue flames with small yellow tips. Mostly yellow or orange flames mean the gas-to-air ratio is off... this produces more carbon residue and accelerates flame sensor fouling.',
  ],
  costBreakdown: {
    replaceLow: 5,
    replaceHigh: 15,
    repairLow: 0,
    repairHigh: 5,
    laborPercent: 'DIY replacement takes 10 minutes with a 1/4-inch nut driver. Professional HVAC service call for flame sensor cleaning or replacement runs $75 to $200, with most of that being the trip charge and labor... the part itself is under $15.',
  },
  recommendedProducts: [
    { name: 'White-Rodgers Universal Flame Sensor', description: 'Fits most Goodman, Amana, Janitrol, and other furnaces that use White-Rodgers controls. Universal design with adjustable mounting bracket. The most commonly needed replacement sensor for residential furnaces.', priceRange: '$5-$12', amazonUrl: 'https://www.amazon.com/s?k=White+Rodgers+universal+flame+sensor&tag=replacementgu-20' },
    { name: 'Honeywell Flame Sensor Replacement', description: 'Compatible with Honeywell-controlled furnaces across multiple brands. Includes mounting hardware and wire connector. Honeywell controls are found in millions of furnaces from Carrier, Bryant, Lennox, and others.', priceRange: '$8-$15', amazonUrl: 'https://www.amazon.com/s?k=Honeywell+furnace+flame+sensor+replacement&tag=replacementgu-20' },
    { name: '220-Grit Emery Cloth for Flame Sensor Cleaning', description: 'A sheet of fine emery cloth is all you need to clean a flame sensor. Cut a small strip, wrap it around the sensor rod, and gently rub until the metal shines. One sheet lasts years of annual cleanings.', priceRange: '$3-$6', amazonUrl: 'https://www.amazon.com/s?k=220+grit+emery+cloth+sheet&tag=replacementgu-20' },
  ],
  commonRepairs: [
    { repair: 'Clean flame sensor with sandpaper', cost: '$0-$5 DIY', notes: 'The first thing to try and fixes 80% of flame sensor issues. Sand the rod with 220-grit until shiny, reinstall, and test. Takes 5 minutes.' },
    { repair: 'Replace flame sensor', cost: '$5-$15 DIY', notes: 'When cleaning no longer works or the sensor is visibly corroded or cracked. One screw, one wire connector, 10 minutes. Match the part to your furnace model number.' },
    { repair: 'Professional flame sensor service call', cost: '$75-$200', notes: 'An HVAC tech will clean or replace the sensor, test microamp output, and inspect the ignition system. Most of the cost is the service call... the repair itself is quick.' },
    { repair: 'Replace flame sensor wire/connector', cost: '$5-$10 DIY', notes: 'If the wire or connector is corroded, a new wire harness restores the electrical connection. Sometimes the sensor is fine but the wire is the problem.' },
    { repair: 'Ignitor replacement (commonly misdiagnosed)', cost: '$15-$40 DIY', notes: 'If you replaced the flame sensor and the furnace still won\'t stay lit, the hot surface ignitor may also be failing. Common to replace both at the same time.' },
  ],
  bestBrands: [
    { name: 'White-Rodgers (Emerson)', knownFor: 'The most widely used flame sensor manufacturer in residential furnaces. Their universal sensors fit a huge range of models. Inexpensive and reliable... the go-to brand for DIY replacement.' },
    { name: 'Honeywell', knownFor: 'Controls a massive share of the furnace component market. Honeywell flame sensors are factory-installed in furnaces from Carrier, Bryant, Lennox, and many others. Replacement sensors are widely available and well-documented.' },
    { name: 'Carrier', knownFor: 'OEM flame sensors for Carrier and Bryant furnaces. If you have a Carrier furnace and want the exact factory part, their sensors run $10 to $15. Carrier parts are also available through HVAC supply houses.' },
    { name: 'Rheem', knownFor: 'OEM flame sensors for Rheem and Ruud furnaces. Their sensors are model-specific with the correct mounting angle and wire length for Rheem furnace designs. Available directly from Rheem parts distributors and Amazon.' },
  ],
  installationTime: `Replacing a flame sensor takes 5 to 10 minutes. Turn off the furnace at the thermostat and flip the breaker. Remove the furnace access panel (usually the lower panel). Locate the flame sensor... it's a thin metal rod mounted near the burners with a single 1/4-inch hex screw and one wire connector.

Disconnect the wire by gently pulling the spade connector off the sensor terminal. Don't yank the wire itself. Remove the single mounting screw with a 1/4-inch nut driver or socket. Pull the old sensor out.

Insert the new sensor in the same position, making sure the rod extends into the burner flame path. Tighten the mounting screw (don't overtighten... it just needs to be snug). Reconnect the wire. Replace the access panel, turn the breaker back on, and set the thermostat to call for heat.

Watch the furnace go through its ignition cycle. The ignitor should glow, gas should flow, burners should light, and the furnace should stay running past the 7-second mark. If it stays lit, the repair is complete.

If you're cleaning rather than replacing: same removal process, sand the rod with 220-grit sandpaper until it's shiny, wipe off the dust, and reinstall. The whole cleaning process takes about 5 minutes once you've found the sensor.

One tip: take a photo of the sensor's position before removing it. This makes it easy to mount the new one at the exact same angle and depth.`,
}
