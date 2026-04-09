export const content = {
  slug: 'septic-tank',
  lifespanDetail: `Septic systems last 20 to 40 years, and that's a wide range because there are multiple components that age differently. The tank itself (concrete, fiberglass, or polyethylene) can last 40+ years if it's structurally sound. Concrete tanks eventually develop cracks from soil movement and tree roots. Fiberglass and poly tanks resist corrosion but can shift in the ground if the water table rises. The drain field is usually what fails first... and it's also the most expensive part to replace. The drain field is a network of perforated pipes buried in gravel trenches where liquid effluent seeps into the soil for natural filtration. Once the soil in the drain field becomes saturated with biomat (a bacterial layer that clogs the soil pores), it can't absorb water anymore... and that's when you get sewage surfacing in your yard. Soil type has a huge impact. Sandy, well-draining soil can support a drain field for 30+ years. Heavy clay soil may clog in 15 to 20. Household size directly correlates to system stress... a 3-bedroom septic designed for a family of four will struggle if you're running 6 people through it. What goes down the drain matters more than people realize. Antibacterial soaps, bleach, paint, grease, and "flushable" wipes all damage or overwhelm the bacterial ecosystem in the tank that breaks down solids. Regular pumping every 3 to 5 years removes accumulated sludge before it overflows into the drain field... this single maintenance step is the difference between a 20-year system and a 40-year system.`,
  warningSigns: [
    { sign: 'Slow drains throughout the house', detail: 'One slow drain is a clog in that line. But when every drain in the house is slow simultaneously... the septic tank is full or the drain field is failing.' },
    { sign: 'Sewage smell in the yard', detail: 'If you smell rotten eggs or sewage near the tank or drain field area, effluent is reaching the surface... the system is either overloaded or the drain field is saturated.' },
    { sign: 'Standing water over the drain field', detail: 'Wet, soggy patches in the yard over the drain field lines, especially during dry weather, means the soil can no longer absorb effluent.' },
    { sign: 'Unusually lush green grass over the tank', detail: 'Grass that\'s dramatically greener over the septic area is being fertilized by effluent that\'s too close to the surface... the system isn\'t processing waste at the proper depth.' },
    { sign: 'Gurgling sounds in pipes', detail: 'Gurgling from drains and toilets when water is running elsewhere in the house indicates the system is struggling to accept more water.' },
    { sign: 'Sewage backup into the house', detail: 'The worst-case scenario. If sewage is coming back up through the lowest drains in the house, the tank is full or the outlet is blocked. This is an emergency.' },
    { sign: 'Pump alarm going off (if applicable)', detail: 'Systems with a pump chamber have an alarm that sounds when the effluent level is too high... this means the pump has failed or the drain field can\'t accept more water.' },
  ],
  repairOrReplace: `Septic repairs range from simple to "you're basically installing a new system." A pump replacement in a pump-assisted system runs $500 to $1,500. Replacing a cracked baffle (the component that directs flow inside the tank) costs $200 to $500. These are worth doing regardless of system age because the alternative is much worse. If the tank itself has failed (major cracks, structural collapse), a new tank costs $1,500 to $5,000 depending on size and material. Concrete tanks are cheapest, fiberglass and poly cost more but resist corrosion. If the drain field has failed, that's where the real money is. A new drain field runs $3,000 to $10,000 depending on soil conditions, size requirements, and local permitting. In some cases, the original drain field location is permanently damaged and you need to install in a new area of your property... which can push costs to $10,000 to $20,000 if site work is extensive. Before committing to full replacement, have the system professionally inspected with a camera. Sometimes what looks like drain field failure is actually a clogged outlet baffle or a full tank that just needs pumping. A $300 pump-out is obviously better than a $10,000 drain field. Also worth knowing: some states and counties offer low-interest loans for septic replacement because failing systems pollute groundwater. Check with your local health department before paying full price out of pocket.`,
  maintenanceTips: [
    'Pump the tank every 3 to 5 years... a family of 4 with a 1,000-gallon tank should pump every 3 years. Pumping costs $300 to $500 and prevents the single most common cause of drain field failure.',
    'Never drive vehicles or heavy equipment over the drain field... the weight compresses the soil and crushes the distribution pipes.',
    'Spread laundry loads throughout the week rather than doing 6 loads on Saturday... the surge of water can overwhelm the drain field and prevent proper treatment.',
    'Don\'t pour grease, paint, chemicals, or "flushable" wipes down the drain... they kill the bacteria that break down solids in the tank and clog the drain field.',
    'Plant only grass over the drain field... tree and shrub roots invade and clog the perforated pipes. Keep trees at least 30 feet away from all septic components.',
    'Keep a record of where your tank and drain field are located... many homeowners can\'t find their own system when it\'s time for maintenance, which leads to skipping pumping.',
  ],
  costBreakdown: {
    replaceLow: 3000,
    replaceHigh: 10000,
    repairLow: 200,
    repairHigh: 1500,
    laborPercent: '50-60%',
  },
}
