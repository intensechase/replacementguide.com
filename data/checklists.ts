export interface ChecklistItem {
  task: string
  detail: string
  link?: { href: string; label: string }
}

export interface SeasonalChecklist {
  slug: string
  season: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  icon: string
  sections: {
    name: string
    items: ChecklistItem[]
  }[]
}

export const checklists: SeasonalChecklist[] = [
  {
    slug: 'spring',
    season: 'Spring',
    title: 'Spring Home Maintenance Checklist',
    metaTitle: 'Spring Home Maintenance Checklist (2026) | ReplacementGuide',
    metaDescription: 'Complete spring maintenance checklist for your home. Inspect the roof, service the AC, check the deck, and everything else you should do before summer hits.',
    intro: `Winter is hard on a house. Spring is when you find out how hard. A couple hours walking around your property now can save you thousands later... and most of this stuff takes 15 minutes or less.`,
    icon: '🌱',
    sections: [
      {
        name: 'Exterior',
        items: [
          { task: 'Inspect the roof for missing or damaged shingles', detail: 'Use binoculars from the ground. Look for curling, cracking, or bare spots where granules have washed away. Winter ice dams and wind do real damage.', link: { href: '/home/roof', label: 'Roof Replacement Guide' } },
          { task: 'Clean gutters and downspouts', detail: 'Clogged gutters cause fascia rot, foundation issues, and basement flooding. Flush them with a hose after clearing debris.', link: { href: '/home/gutters', label: 'Gutter Replacement Guide' } },
          { task: 'Inspect the deck for rot or loose boards', detail: 'Push a screwdriver into any soft spots. If it sinks in easily, the board is rotting. Check the ledger board where the deck meets the house... that\'s the most critical connection.', link: { href: '/outdoor/deck', label: 'Deck Replacement Guide' } },
          { task: 'Check siding and exterior paint', detail: 'Look for cracks, gaps, peeling paint, and any spots where water could get behind the siding. Caulk gaps around windows and doors.', link: { href: '/home/vinyl-siding', label: 'Vinyl Siding Guide' } },
          { task: 'Inspect the driveway for cracks', detail: 'Fill small cracks now before they become big ones. Asphalt cracks let water in, which freezes and makes everything worse next winter.', link: { href: '/outdoor/driveway', label: 'Driveway Replacement Guide' } },
          { task: 'Check the fence for damage', detail: 'Winter ground movement can shift fence posts. Push on each one... if it wobbles, reset it before the whole section leans.', link: { href: '/outdoor/fence', label: 'Fence Replacement Guide' } },
        ],
      },
      {
        name: 'HVAC & Comfort',
        items: [
          { task: 'Schedule an AC tune-up', detail: 'Do this before it gets hot and everyone\'s booked solid. A tune-up catches low refrigerant, dirty coils, and worn parts before they become a no-cooling emergency.', link: { href: '/cost-to-hire/hvac-technician', label: 'HVAC Repair Costs' } },
          { task: 'Replace the HVAC air filter', detail: 'If you haven\'t changed it since fall, it\'s overdue. A dirty filter makes your system work harder and your air quality worse.', link: { href: '/home/hvac-air-filter', label: 'HVAC Air Filter Guide' } },
          { task: 'Test the air conditioner', detail: 'Turn it on before you actually need it. Let it run for 30 minutes and check that cold air is coming from all vents.', link: { href: '/home/air-conditioner', label: 'AC Replacement Guide' } },
          { task: 'Check the thermostat', detail: 'Switch from heat to cool mode. If you have a programmable thermostat, update the schedule for warmer weather.', link: { href: '/home/thermostat', label: 'Thermostat Replacement Guide' } },
        ],
      },
      {
        name: 'Plumbing & Water',
        items: [
          { task: 'Turn on outdoor faucets and check for leaks', detail: 'If you shut off hose bibs for winter, turn them back on and check for drips or burst pipes inside the wall.', link: { href: '/home/hose-bib', label: 'Hose Bib Guide' } },
          { task: 'Inspect the sump pump', detail: 'Pour a bucket of water into the pit. The pump should kick on, move the water out, and shut off. If it doesn\'t, fix it before the spring rains hit.', link: { href: '/home/sump-pump', label: 'Sump Pump Guide' } },
          { task: 'Check the water heater for rust or leaks', detail: 'Look at the base of the tank for water stains or corrosion. If your unit is over 8 years old, this is the year to start budgeting for a replacement.', link: { href: '/home/water-heater', label: 'Water Heater Guide' } },
          { task: 'Test all toilets for running water', detail: 'A running toilet wastes 200+ gallons per day. Drop food coloring in the tank... if color appears in the bowl without flushing, the flapper needs replacing.', link: { href: '/troubleshoot/toilet-running-constantly', label: 'Toilet Running Fix' } },
        ],
      },
      {
        name: 'Safety',
        items: [
          { task: 'Test smoke detectors and replace batteries', detail: 'Press the test button on every detector. Replace any that are over 10 years old... they lose sensitivity even if the battery is fine.', link: { href: '/home/smoke-detector', label: 'Smoke Detector Guide' } },
          { task: 'Test carbon monoxide detectors', detail: 'Same drill. CO detectors only last 5-7 years. Check the manufacture date on the back.', link: { href: '/home/carbon-monoxide-detector', label: 'CO Detector Guide' } },
          { task: 'Check fire extinguishers', detail: 'Make sure the pressure gauge is in the green zone and the pin is intact. Replace any extinguisher over 12 years old.', link: { href: '/home/fire-extinguisher', label: 'Fire Extinguisher Guide' } },
        ],
      },
    ],
  },
  {
    slug: 'summer',
    season: 'Summer',
    title: 'Summer Home Maintenance Checklist',
    metaTitle: 'Summer Home Maintenance Checklist (2026) | ReplacementGuide',
    metaDescription: 'Summer home maintenance checklist. Keep the AC running, protect outdoor surfaces, and tackle projects while the weather cooperates.',
    intro: `Summer is the best time for outdoor projects and the worst time for your AC to die. Stay ahead of both with this checklist... most of it is quick visual inspections that catch problems while they're still cheap to fix.`,
    icon: '☀️',
    sections: [
      {
        name: 'Cooling & Energy',
        items: [
          { task: 'Check AC performance monthly', detail: 'The air coming from your vents should be 15-20 degrees cooler than the room temperature. If the gap is smaller, something\'s off.', link: { href: '/troubleshoot/ac-blowing-warm-air', label: 'AC Blowing Warm Air Fix' } },
          { task: 'Change the HVAC filter', detail: 'In summer, your AC runs constantly. Change the filter every 30-60 days instead of the usual 90. A clogged filter can freeze the evaporator coil.', link: { href: '/home/hvac-air-filter', label: 'HVAC Air Filter Guide' } },
          { task: 'Clean around the outdoor AC unit', detail: 'Clear any vegetation, debris, or mulch within 2 feet of the condenser. It needs airflow to work efficiently.', link: { href: '/home/air-conditioner', label: 'AC Replacement Guide' } },
          { task: 'Check ceiling fan direction', detail: 'Ceiling fans should spin counterclockwise in summer to push air down. Flip the switch on the motor housing if needed.', link: { href: '/home/ceiling-fan', label: 'Ceiling Fan Guide' } },
          { task: 'Inspect windows and weather stripping', detail: 'Hold a lit candle near window edges on a windy day. If the flame flickers, you\'re losing cooled air and wasting money.', link: { href: '/home/windows', label: 'Window Replacement Guide' } },
        ],
      },
      {
        name: 'Outdoor Living',
        items: [
          { task: 'Seal or stain the deck', detail: 'If water doesn\'t bead on the surface anymore, the sealant is gone. Reapply every 1-3 years depending on your climate and sun exposure.', link: { href: '/outdoor/deck', label: 'Deck Replacement Guide' } },
          { task: 'Inspect the grill', detail: 'Check burners for blockages, clean the grates, and look for rust on the firebox. A grill that heats unevenly or has holes in the bottom is done.', link: { href: '/outdoor/grill', label: 'Grill Replacement Guide' } },
          { task: 'Check sprinkler system coverage', detail: 'Run each zone and walk the yard. Look for broken heads, dry spots, and runoff that\'s watering the sidewalk instead of the lawn.', link: { href: '/outdoor/sprinkler-system', label: 'Sprinkler System Guide' } },
          { task: 'Inspect outdoor furniture', detail: 'Tighten any loose bolts. Check for rust, cracked plastic, or fraying fabric. A wobbly chair is a lawsuit waiting to happen.', link: { href: '/outdoor/outdoor-furniture', label: 'Outdoor Furniture Guide' } },
        ],
      },
      {
        name: 'Pest Prevention',
        items: [
          { task: 'Check for ant trails and entry points', detail: 'Ants are most active in summer. Seal cracks around the foundation and where pipes enter the house. Bait stations work better than spray.', link: { href: '/pest-control/ants', label: 'How to Get Rid of Ants' } },
          { task: 'Eliminate standing water for mosquitoes', detail: 'Dump anything that holds water: plant saucers, old tires, bird baths (refresh weekly), clogged gutters. Mosquitoes breed in as little as a bottle cap of water.', link: { href: '/pest-control/mosquitoes', label: 'How to Get Rid of Mosquitoes' } },
          { task: 'Inspect for wasp nests', detail: 'Check eaves, porch ceilings, and outdoor light fixtures. Small nests (golf ball size) are easy to knock down early. Large ones need a professional.', link: { href: '/pest-control/wasps', label: 'How to Get Rid of Wasps' } },
        ],
      },
      {
        name: 'Interior',
        items: [
          { task: 'Deep clean the refrigerator coils', detail: 'Pull the fridge out and vacuum the coils on the back or bottom. Dusty coils make the compressor work harder and die sooner.', link: { href: '/home/refrigerator', label: 'Refrigerator Replacement Guide' } },
          { task: 'Run the garbage disposal with ice and salt', detail: 'Toss a cup of ice cubes and a handful of coarse salt in, then run the disposal. It cleans the blades and breaks up buildup.', link: { href: '/home/garbage-disposal', label: 'Garbage Disposal Guide' } },
          { task: 'Check the dryer vent', detail: 'Go outside and make sure the vent flap opens when the dryer is running. Clean the full vent line at least once a year... lint buildup is a fire hazard.', link: { href: '/home/dryer', label: 'Dryer Replacement Guide' } },
        ],
      },
    ],
  },
  {
    slug: 'fall',
    season: 'Fall',
    title: 'Fall Home Maintenance Checklist',
    metaTitle: 'Fall Home Maintenance Checklist (2026) | ReplacementGuide',
    metaDescription: 'Fall home maintenance checklist. Prep the furnace, winterize plumbing, clean gutters, and get your home ready before the cold hits.',
    intro: `Fall maintenance is really winter prep. Everything on this list is about preventing the expensive problems that show up in January when it's 10 degrees out and every contractor in town is booked for 3 weeks.`,
    icon: '🍂',
    sections: [
      {
        name: 'Heating',
        items: [
          { task: 'Schedule a furnace tune-up', detail: 'Do this in September or early October before the rush. A technician checks the heat exchanger, burners, and safety controls. A cracked heat exchanger leaks carbon monoxide... not something to skip.', link: { href: '/home/furnace', label: 'Furnace Replacement Guide' } },
          { task: 'Replace the furnace filter', detail: 'Start the heating season with a fresh filter. Set a reminder to check it monthly through winter.', link: { href: '/home/hvac-air-filter', label: 'HVAC Air Filter Guide' } },
          { task: 'Test the thermostat in heat mode', detail: 'Switch to heat and make sure warm air comes from the vents within a few minutes. If you have a smart thermostat, update the schedule for shorter days.', link: { href: '/home/thermostat', label: 'Thermostat Replacement Guide' } },
          { task: 'Bleed radiators if you have hot water heat', detail: 'Air trapped in radiators prevents them from heating fully. Use a radiator key to release trapped air until water starts flowing out.', link: { href: '/home/boiler', label: 'Boiler Replacement Guide' } },
          { task: 'Check the chimney and fireplace', detail: 'If you burn wood, get the chimney swept before the first fire of the season. Creosote buildup is a chimney fire waiting to happen.', link: { href: '/cost-to-hire/chimney-sweep', label: 'Chimney Sweep Costs' } },
        ],
      },
      {
        name: 'Exterior & Weatherproofing',
        items: [
          { task: 'Clean gutters after the leaves fall', detail: 'Wait until most leaves are down, then do a thorough cleaning. Clogged gutters cause ice dams, which cause roof leaks and fascia damage.', link: { href: '/home/gutters', label: 'Gutter Replacement Guide' } },
          { task: 'Inspect the roof before winter', detail: 'This is your last chance to fix problems before ice and snow make everything worse. Look for loose flashing, damaged shingles, and gaps around vents.', link: { href: '/home/roof', label: 'Roof Replacement Guide' } },
          { task: 'Caulk and seal around windows and doors', detail: 'Check the caulk around every window and door frame. Cracked or missing caulk means cold drafts and higher heating bills all winter.', link: { href: '/home/windows', label: 'Window Replacement Guide' } },
          { task: 'Check weather stripping on exterior doors', detail: 'Close the door on a piece of paper. If you can pull it out easily, the weather stripping needs replacing. It\'s a $10 fix that saves real money on heating.', link: { href: '/home/weather-stripping-door', label: 'Weather Stripping Guide' } },
          { task: 'Inspect exterior paint and touch up', detail: 'Bare wood exposed to winter moisture rots fast. Touch up any peeling or chipped spots before the first freeze.', link: { href: '/home/exterior-paint', label: 'Exterior Paint Guide' } },
        ],
      },
      {
        name: 'Plumbing & Water',
        items: [
          { task: 'Shut off and drain outdoor faucets', detail: 'Turn off the interior shut-off valve for each hose bib, then open the outdoor faucet to drain any remaining water. Frozen pipes burst and cause thousands in damage.', link: { href: '/home/hose-bib', label: 'Hose Bib Guide' } },
          { task: 'Insulate exposed pipes', detail: 'Wrap foam insulation around any pipes in unheated spaces... crawlspaces, garages, and along exterior walls. Pipe insulation costs $1-$3 per foot and takes minutes.', link: { href: '/cost-to-hire/plumber', label: 'Plumber Costs' } },
          { task: 'Drain the water heater', detail: 'Flush 2-3 gallons from the drain valve to clear sediment buildup. This extends the tank\'s life and improves heating efficiency.', link: { href: '/home/water-heater', label: 'Water Heater Guide' } },
          { task: 'Winterize sprinkler system', detail: 'Blow out the lines with compressed air to prevent frozen and cracked pipes underground. Most irrigation companies offer this as a fall service.', link: { href: '/outdoor/sprinkler-system', label: 'Sprinkler System Guide' } },
        ],
      },
      {
        name: 'Safety',
        items: [
          { task: 'Test smoke and CO detectors', detail: 'Change batteries when you change the clocks. With the furnace running and windows sealed, CO detection is critical.', link: { href: '/home/smoke-detector', label: 'Smoke Detector Guide' } },
          { task: 'Check the fire extinguisher', detail: 'Make sure it\'s accessible and the gauge reads full. With holiday cooking and space heaters coming, you want this ready.', link: { href: '/home/fire-extinguisher', label: 'Fire Extinguisher Guide' } },
        ],
      },
    ],
  },
  {
    slug: 'winter',
    season: 'Winter',
    title: 'Winter Home Maintenance Checklist',
    metaTitle: 'Winter Home Maintenance Checklist (2026) | ReplacementGuide',
    metaDescription: 'Winter home maintenance checklist. Protect your pipes, monitor the furnace, prevent ice dams, and handle snow season without expensive surprises.',
    intro: `Winter maintenance is mostly about monitoring and reacting. If you did your fall prep, you're in good shape. If you didn't... some of these items become urgent. Either way, a little attention during the cold months prevents the big repair bills.`,
    icon: '❄️',
    sections: [
      {
        name: 'Heating & Energy',
        items: [
          { task: 'Check the furnace filter monthly', detail: 'Your furnace runs almost nonstop in winter. A dirty filter reduces airflow, drives up bills, and can cause the system to overheat and shut down.', link: { href: '/home/hvac-air-filter', label: 'HVAC Air Filter Guide' } },
          { task: 'Monitor heating bills for spikes', detail: 'A sudden jump in your gas or electric bill often means the furnace is working harder than it should. Could be a dirty filter, failing blower motor, or duct leak.', link: { href: '/home/furnace', label: 'Furnace Replacement Guide' } },
          { task: 'Keep vents and radiators clear', detail: 'Don\'t block supply or return vents with furniture, curtains, or rugs. Blocked airflow forces the system to work harder and heats your home unevenly.', link: { href: '/home/ductwork', label: 'Ductwork Guide' } },
          { task: 'Reverse ceiling fans to clockwise', detail: 'Running fans clockwise on low speed pushes warm air (which rises to the ceiling) back down into the room. Saves about 10% on heating.', link: { href: '/home/ceiling-fan', label: 'Ceiling Fan Guide' } },
        ],
      },
      {
        name: 'Pipes & Water',
        items: [
          { task: 'Prevent frozen pipes', detail: 'On nights below 20 degrees, let faucets on exterior walls drip slightly. Open cabinet doors under sinks to let warm air reach the pipes.', link: { href: '/cost-to-hire/plumber', label: 'Plumber Costs' } },
          { task: 'Know where your main water shut-off is', detail: 'If a pipe bursts, you need to shut off the water in seconds, not minutes. Find the valve now and make sure it turns. A stuck valve is worse than no valve.', link: { href: '/home/shut-off-valve', label: 'Shut Off Valve Guide' } },
          { task: 'Check for ice dams on the roof', detail: 'Icicles hanging from the eaves look pretty but signal ice dams. Water backs up behind the dam and leaks under the shingles into your attic and walls.', link: { href: '/home/roof', label: 'Roof Replacement Guide' } },
          { task: 'Test the sump pump', detail: 'Winter thaws and snowmelt can overwhelm a basement. Test the pump monthly by pouring water into the pit. Keep a backup battery or secondary pump if your area loses power frequently.', link: { href: '/home/sump-pump', label: 'Sump Pump Guide' } },
        ],
      },
      {
        name: 'Exterior',
        items: [
          { task: 'Clear snow away from the foundation', detail: 'Piled-up snow against the house melts and seeps into the basement. Keep a 1-2 foot gap between snowbanks and the foundation.', link: { href: '/cost-to-hire/foundation-repair', label: 'Foundation Repair Costs' } },
          { task: 'Check the garage door seal', detail: 'Cold air leaking under the garage door wastes heat and can freeze pipes in an attached garage. Replace the bottom seal if it\'s cracked or doesn\'t sit flat.', link: { href: '/home/garage-door-seal', label: 'Garage Door Seal Guide' } },
          { task: 'Inspect the attic for condensation', detail: 'On a cold day, check the attic for frost or moisture on the underside of the roof deck. This means warm, humid air from the house is leaking in... a sign of poor ventilation or air sealing.', link: { href: '/home/insulation', label: 'Insulation Guide' } },
        ],
      },
      {
        name: 'Indoor Projects',
        items: [
          { task: 'Plan spring projects now', detail: 'Winter is the best time to get quotes for big jobs like roofing, painting, or deck replacement. Contractors are less busy and more likely to offer competitive pricing.', link: { href: '/cost-to-hire/roofer', label: 'Roofer Costs' } },
          { task: 'Inspect the water heater', detail: 'Check for rust, leaks, and unusual noises. If your water heater is 8-10 years old, start researching replacements so you\'re not making a panic decision when it fails.', link: { href: '/home/water-heater', label: 'Water Heater Guide' } },
          { task: 'Test all GFCIs', detail: 'Press the test button on every GFCI outlet. The power should cut immediately. Press reset to restore it. A GFCI that doesn\'t trip is not protecting you.', link: { href: '/home/gfci-outlet', label: 'GFCI Outlet Guide' } },
        ],
      },
    ],
  },
]

export function getChecklist(slug: string): SeasonalChecklist | null {
  return checklists.find(c => c.slug === slug) || null
}
