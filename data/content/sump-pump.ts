export const content = {
  slug: 'sump-pump',
  lifespanDetail: `Sump pumps last 7 to 10 years on average, making them one of the shorter-lived home systems... and one of the most critical to replace on time. The lifespan varies a lot based on how often the pump runs. A pump in a home with a high water table that kicks on several times a day is working vastly harder than one in a dry basement that only runs during heavy spring rains. If yours runs frequently, expect closer to 5 to 7 years. The type of pump matters too. Submersible pumps (the kind that sit inside the sump pit, submerged in water) tend to last longer because the water cools the motor. Pedestal pumps (motor sits above the pit on a stand) run hotter and typically wear out sooner. Water quality is a factor people overlook... if your groundwater carries sediment, iron, or other debris, it wears down the impeller and clogs the intake screen faster. Power reliability is the wild card. A sump pump is useless during a power outage, which is exactly when you're most likely to need it during a heavy storm. Battery backup systems ($200 to $500) or water-powered backup pumps are worth considering as insurance. The switch mechanism is often what fails first... float switches get stuck, and the pump either runs continuously (burning out the motor) or doesn't turn on at all. Testing your pump quarterly by pouring a bucket of water into the pit takes 30 seconds and can save you from a flooded basement.`,
  warningSigns: [
    { sign: 'Strange noises during operation', detail: 'Grinding, rattling, or thunking sounds mean the motor bearings are worn or something is caught in the impeller... both lead to failure soon.' },
    { sign: 'Running constantly', detail: 'A pump that never shuts off has a stuck float switch, an undersized pump for the water volume, or a check valve that\'s failed and letting water flow back into the pit.' },
    { sign: 'Not turning on', detail: 'Pour water into the pit... if the float rises and nothing happens, either the switch has failed, the motor is dead, or there\'s a power issue. Test the outlet with another device first.' },
    { sign: 'Visible rust or corrosion', detail: 'Heavy rust on the pump body or discharge pipe means the unit is corroding from the inside out... replacement is imminent.' },
    { sign: 'Vibrating excessively', detail: 'A pump that shakes and vibrates has likely sucked in hard debris that damaged or bent the impeller... it\'s no longer moving water efficiently and is straining the motor.' },
    { sign: 'Age over 7 years', detail: 'Even if it seems fine, a sump pump past 7 years is borrowed time. The cost of replacement ($200 to $600) is nothing compared to a flooded basement ($10,000 to $50,000 in damage).' },
    { sign: 'Irregular cycling', detail: 'Turning on and off rapidly or at random intervals usually means the float switch is failing or the check valve is letting water back into the pit after each cycle.' },
  ],
  repairOrReplace: `This is the one home system where the answer is almost always "replace, don't repair." Here's why: the pump itself costs $100 to $300 for a quality submersible unit. Labor to install runs another $100 to $300. So total replacement is $200 to $600. Now compare that to the cost of a repair... a new float switch runs $50 to $100 plus a service call ($75 to $150). A motor repair, if it's even available, costs nearly as much as a new pump. The math just doesn't work for repairing sump pumps. The only "repair" that makes sense is replacing the check valve ($20 to $50 part, $100 to $200 installed), which prevents water in the discharge pipe from flowing back into the pit when the pump shuts off. If the pump itself is under 5 years old and a bad check valve is the problem, fix that and move on. But if the motor is struggling, the pump is noisy, or it's past 7 years... replace the whole thing. Don't wait for it to fail during a storm. A proactive replacement on a dry Tuesday afternoon costs $200 to $600. An emergency plumber visit on a Saturday night during a flood costs $500 to $1,000 plus whatever water damage happens before they arrive. Spend the extra $150 to $300 on a battery backup system. The primary pump fails exactly when you need it most... during power outages from heavy storms.`,
  maintenanceTips: [
    'Test the pump quarterly by slowly pouring a 5-gallon bucket of water into the pit... the pump should kick on, remove the water, and shut off within about 15 seconds.',
    'Clean the pump intake screen and pit once a year... remove the pump, clear any debris from the pit, and rinse the screen to keep water flowing freely.',
    'Check the discharge pipe outside to make sure it\'s not clogged, frozen, or directing water back toward the foundation.',
    'Test the battery backup system (if you have one) every 3 months by disconnecting the primary pump and triggering the backup with water.',
    'Listen for the check valve clicking when the pump shuts off... if you hear water rushing back into the pit, the check valve needs replacement.',
    'Consider a water alarm ($15 to $30) placed on the floor near the pit... it screams if water reaches the sensor, giving you a heads-up before the pump actually fails.',
  ],
  costBreakdown: {
    replaceLow: 200,
    replaceHigh: 600,
    repairLow: 50,
    repairHigh: 200,
    laborPercent: '40-50%',
  },
}
