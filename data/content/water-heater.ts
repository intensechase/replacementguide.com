export const content = {
  slug: 'water-heater',
  lifespanDetail: `Tank water heaters last 8 to 12 years, and water quality is the single biggest factor that determines where you land in that range. Hard water (high mineral content) is a killer. Calcium and magnesium settle to the bottom of the tank and form a layer of sediment that insulates the water from the burner. The heater works harder, runs longer, and the tank overheats in spots... that's what causes the rumbling noises and eventually eats through the tank lining. If you have hard water and don't flush the tank annually, expect 6 to 8 years, not 12. The anode rod is the unsung hero of your water heater. It's a metal rod inside the tank designed to corrode so the tank doesn't. Most homeowners don't even know it exists. On a standard water heater, the anode rod is consumed in 3 to 5 years. Once it's gone, the tank itself starts corroding from the inside out. Replacing the anode rod ($20 to $50 for the part, $100 to $200 if you pay someone) can extend the water heater's life by 2 to 3 years. Temperature setting matters too. Most heaters are set to 140 degrees from the factory, but 120 degrees is sufficient for most households. The lower temperature reduces mineral buildup, saves energy, and puts less thermal stress on the tank. Gas water heaters tend to last slightly less than electric ones (8 to 10 vs 10 to 12 years) because the gas burner creates more thermal stress on the tank bottom.`,
  warningSigns: [
    { sign: 'Rusty or discolored hot water', detail: 'Rusty water coming only from the hot side means the tank is corroding inside. If it\'s from both hot and cold, the problem might be your pipes instead.' },
    { sign: 'Rumbling or popping noises', detail: 'Sediment buildup on the tank bottom hardens and traps water underneath that boils and pops... the tank is overheating in those spots and working much harder than it should.' },
    { sign: 'Leaking around the base', detail: 'Any water pooling around the bottom of the tank means the inner liner has cracked from corrosion. This isn\'t repairable... the tank will eventually fail completely, potentially flooding the area.' },
    { sign: 'Inconsistent water temperature', detail: 'Water that fluctuates between hot and lukewarm suggests a failing heating element (electric) or thermocouple (gas), or heavy sediment reducing efficiency.' },
    { sign: 'Age over 10 years', detail: 'Check the serial number on the manufacturer\'s label... the first two digits usually indicate the year of manufacture. Past 10 years, start planning for replacement even if it seems fine.' },
    { sign: 'Metallic taste or smell in hot water', detail: 'The anode rod is likely fully consumed and the tank itself has started corroding, releasing metal particles into the water.' },
  ],
  repairOrReplace: `Water heater repairs make sense on younger units. A thermocouple replacement ($50 to $150), heating element ($100 to $300), or thermostat ($100 to $200)... these are reasonable fixes on a unit under 8 years old. Replacing the anode rod on a 5-year-old unit is one of the best investments you can make in your home's plumbing. But once the tank itself is the problem... leaking, heavy corrosion, rusty water... it's replacement time. Tank integrity isn't repairable. A new tank water heater runs $800 to $2,500 installed. A standard 40-gallon gas unit is around $800 to $1,200. A 50-gallon or high-efficiency model pushes $1,500 to $2,000. Electric units cost slightly less for the heater but may need electrical upgrades for a new high-efficiency model. Tankless water heaters are worth considering if you're replacing anyway. They cost $2,000 to $4,500 installed but last 20+ years (double a tank unit) and only heat water on demand, saving 20 to 30% on water heating costs. The upfront cost is higher, but if you plan to stay in the home 10+ years, the math works in your favor. One important note: a leaking water heater is an emergency, not a "schedule it next week" situation. A 40-gallon tank that lets go can dump 40 gallons of hot water in minutes, causing thousands in water damage. If you see any sign of leaking, move quickly.`,
  maintenanceTips: [
    'Flush the tank once a year by connecting a garden hose to the drain valve at the bottom and running a few gallons until the water runs clear... this removes sediment buildup.',
    'Check the anode rod every 2 to 3 years by unscrewing it from the top of the tank. If it\'s less than half an inch thick or coated in calcium, replace it.',
    'Test the temperature and pressure relief (TPR) valve annually by lifting the lever and letting it snap back... water should briefly flow through the discharge pipe. If it doesn\'t, the valve needs replacement.',
    'Set the thermostat to 120 degrees... it\'s hot enough for everything you need, reduces mineral buildup, saves 6 to 10% on water heating costs, and reduces scalding risk.',
    'Insulate the tank and the first 6 feet of hot water pipe with foam insulation... a $25 water heater blanket can reduce heat loss by 25 to 45%.',
  ],
  costBreakdown: {
    replaceLow: 800,
    replaceHigh: 2500,
    repairLow: 50,
    repairHigh: 300,
    laborPercent: '40-55%',
  },
  recommendedProducts: [
    { name: 'Camco Magnesium Anode Rod (44" x 3/4")', description: 'Extends tank life by 2-3 years by sacrificing itself instead of the tank walls, the single best maintenance investment for any water heater.', priceRange: '$20-$35', amazonUrl: '' },
    { name: 'Camco Water Heater Flush Kit with Hose', description: 'Makes the annual sediment flush easy by connecting directly to the drain valve, removing the buildup that causes rumbling and premature tank failure.', priceRange: '$15-$25', amazonUrl: '' },
    { name: 'Frost King Tubular Pipe Insulation (6ft, 3/4")', description: 'Reduces heat loss from hot water pipes by up to 45%, saving energy and keeping water hotter from the tank to the faucet.', priceRange: '$3-$8', amazonUrl: '' },
  ],
}
