export const content = {
  slug: 'air-conditioner',
  lifespanDetail: `Central air conditioning units last 15 to 20 years, but the actual number you get depends heavily on maintenance and environment. The compressor is the heart of the system and the most expensive component... if it fails, you're usually looking at replacement rather than repair. Regular maintenance is the biggest factor. Systems that get annual professional tune-ups and have clean filters consistently outlast neglected ones by 3 to 5 years. The refrigerant type in your system matters more now than ever. If your AC uses R-22 (Freon), which was standard in units made before 2010, you're in a tough spot. R-22 was phased out of production in 2020, and the remaining supply gets more expensive every year. A single R-22 recharge that used to cost $150 now runs $400 to $800. If you have an R-22 system that needs refrigerant, it's almost always smarter to replace with a modern R-410A or R-454B system rather than keep feeding expensive refrigerant into aging equipment. Coastal climates are rough on AC units... salt air corrodes the condenser coils and cabinet, taking 3 to 5 years off the typical lifespan. Hot, humid climates like the Gulf Coast also push systems harder since they run 8 to 10 months per year compared to 4 to 5 months in the Midwest. Oversized units are a common problem... a system that's too big for the house cools quickly but short-cycles, never properly dehumidifying and wearing out components faster from the constant on-off stress.`,
  warningSigns: [
    { sign: 'Weak airflow from vents', detail: 'If air coming from your vents feels weaker than it used to, the compressor may be failing or ductwork could have developed a significant leak.' },
    { sign: 'Warm air despite thermostat setting', detail: 'The system is running but the air isn\'t cold... this points to low refrigerant (a leak), a failing compressor, or a bad expansion valve.' },
    { sign: 'Strange smells when running', detail: 'A musty smell means mold in the ductwork or on the evaporator coil. A burning smell could indicate fried wiring or an overheating motor... shut it down and call for service.' },
    { sign: 'Moisture or leaking around the unit', detail: 'Water pooling near the indoor unit usually means a clogged condensate drain... easy fix. But refrigerant leaks near the outdoor unit are serious and expensive.' },
    { sign: 'Unusual sounds', detail: 'Grinding, squealing, or chattering from the outdoor unit means the compressor or fan motor is struggling. Banging can indicate a loose or broken part inside the compressor.' },
    { sign: 'Electric bills climbing', detail: 'A system losing efficiency works harder to achieve the same temperature... if your summer electric bill has jumped 20%+ without rate changes, the AC is likely the culprit.' },
    { sign: 'Frequent repairs', detail: 'If you\'ve called for service more than twice in the last 12 months, the system is telling you something. Parts availability also gets harder on units over 15 years old.' },
  ],
  repairOrReplace: `For AC systems under 10 years old, most repairs are worth doing. Capacitor replacement ($150 to $300), fan motor ($200 to $500), or a contactor ($100 to $250)... these are normal wear items. Even an evaporator coil replacement ($600 to $1,200) makes sense on a newer unit. The line in the sand is the compressor. A new compressor costs $1,500 to $3,000 installed, and at that price point, you need to weigh the age of the rest of the system. On a 12-year-old unit, that compressor replacement is a gamble because other components are aging too. The R-22 question changes the math entirely. If your system uses R-22 and needs any significant repair, replace the whole thing. You'll spend $3,000 to $7,000 on a new system depending on size and efficiency (SEER rating). A 14 SEER unit is the minimum standard. 16 to 20 SEER units cost more upfront but use 20 to 40% less electricity. For a house that spends $200/month on cooling, that's $40 to $80/month in savings. The payback period on a high-efficiency unit is typically 5 to 8 years. If you're also replacing the furnace, do both together... you'll save on labor and get a properly matched system. Mismatched indoor and outdoor units lose efficiency and can void warranties. Best time to buy: late fall or early spring when HVAC companies offer off-season discounts.`,
  maintenanceTips: [
    'Change the filter every 1 to 3 months during cooling season... a dirty filter makes the system work 15% harder and can freeze the evaporator coil.',
    'Clean the outdoor condenser unit annually... shut off power, spray the coils with a garden hose from inside out to remove dirt, grass clippings, and debris.',
    'Keep at least 2 feet of clearance around the outdoor unit... trim back bushes, don\'t stack things against it, and keep mulch away from the base.',
    'Have the system professionally serviced once a year in spring... they\'ll check refrigerant levels, clean the coils, test electrical connections, and catch problems early.',
    'Clear the condensate drain line by flushing it with a cup of white vinegar every few months... a clogged drain causes water damage and can shut the system down.',
    'Install a programmable thermostat if you haven\'t already... raising the temp just 3 degrees when you\'re away reduces cooling costs by about 10%.',
  ],
  costBreakdown: {
    replaceLow: 3000,
    replaceHigh: 7000,
    repairLow: 100,
    repairHigh: 1200,
    laborPercent: '55-65%',
  },
  recommendedProducts: [
    { name: 'Nu-Calgon Evap Foam No Rinse Coil Cleaner', description: 'Restores airflow and efficiency by dissolving dirt and grime from evaporator and condenser coils without rinsing.', priceRange: '$10-$18', amazonUrl: 'https://www.amazon.com/s?k=Nu-Calgon+Evap+Foam+coil+cleaner&tag=replacementgu-20' },
    { name: 'Honeywell Home T6 Pro Programmable Thermostat', description: 'Reduces cooling costs by 10% by automatically raising the temperature when you are away, which also reduces compressor wear.', priceRange: '$60-$100', amazonUrl: 'https://www.amazon.com/s?k=Honeywell+T6+Pro+programmable+thermostat&tag=replacementgu-20' },
    { name: 'AC-Safe Condensate Drain Line Cleaning Tool', description: 'Clears the clogged condensate drain that causes water damage and system shutdowns, the most common summer AC service call.', priceRange: '$8-$15', amazonUrl: 'https://www.amazon.com/s?k=AC-Safe+condensate+drain+cleaning+tool&tag=replacementgu-20' },
  ],
}
