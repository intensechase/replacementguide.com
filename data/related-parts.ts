// Maps parent products to their parts/accessories pages, and vice versa.
// Used for internal linking between product pages.

export interface RelatedPart {
  slug: string
  name: string
  category: string
  relationship: 'part' | 'parent' | 'sibling'
}

// Parent slug → array of part slugs
const parentToPartsMap: Record<string, { slug: string; name: string; category: string }[]> = {
  // TOILET
  'toilet': [
    { slug: 'toilet-fill-valve', name: 'Toilet Fill Valve', category: 'home' },
    { slug: 'toilet-wax-ring', name: 'Toilet Wax Ring', category: 'home' },
    { slug: 'toilet-handle', name: 'Toilet Handle', category: 'home' },
  ],
  // FURNACE
  'furnace': [
    { slug: 'furnace-ignitor', name: 'Furnace Ignitor', category: 'home' },
    { slug: 'flame-sensor', name: 'Flame Sensor', category: 'home' },
    { slug: 'thermocouple', name: 'Thermocouple', category: 'home' },
    { slug: 'blower-motor', name: 'Blower Motor', category: 'home' },
    { slug: 'gas-valve', name: 'Gas Valve', category: 'home' },
    { slug: 'expansion-tank', name: 'Expansion Tank', category: 'home' },
  ],
  // AIR CONDITIONER
  'air-conditioner': [
    { slug: 'ac-capacitor', name: 'AC Capacitor', category: 'home' },
    { slug: 'evaporator-coil', name: 'Evaporator Coil', category: 'home' },
    { slug: 'condensate-pump', name: 'Condensate Pump', category: 'home' },
    { slug: 'air-purifier-filter', name: 'Air Purifier Filter', category: 'home' },
  ],
  // GARAGE DOOR
  'garage-door': [
    { slug: 'garage-door-seal', name: 'Garage Door Seal', category: 'home' },
    { slug: 'garage-door-spring', name: 'Garage Door Spring', category: 'home' },
  ],
  // GARAGE DOOR OPENER
  'garage-door-opener': [
    { slug: 'garage-door-remote', name: 'Garage Door Remote', category: 'home' },
  ],
  // WATER HEATER
  'water-heater': [
    { slug: 'water-heater-anode-rod', name: 'Water Heater Anode Rod', category: 'home' },
    { slug: 'dip-tube', name: 'Dip Tube', category: 'home' },
    { slug: 'pressure-relief-valve', name: 'Pressure Relief Valve', category: 'home' },
    { slug: 'thermocouple', name: 'Thermocouple', category: 'home' },
    { slug: 'gas-valve', name: 'Gas Valve', category: 'home' },
  ],
  // SUMP PUMP
  'sump-pump': [
    { slug: 'sump-pump-float-switch', name: 'Sump Pump Float Switch', category: 'home' },
  ],
  // GARBAGE DISPOSAL
  'garbage-disposal': [
    { slug: 'garbage-disposal-splash-guard', name: 'Garbage Disposal Splash Guard', category: 'home' },
    { slug: 'garbage-disposal-flange', name: 'Garbage Disposal Flange', category: 'home' },
  ],
  // DISHWASHER
  'dishwasher': [
    { slug: 'dishwasher-spray-arm', name: 'Dishwasher Spray Arm', category: 'home' },
    { slug: 'dishwasher-drain-hose', name: 'Dishwasher Drain Hose', category: 'home' },
    { slug: 'dishwasher-filter', name: 'Dishwasher Filter', category: 'home' },
  ],
  // WASHING MACHINE
  'washing-machine': [
    { slug: 'washing-machine-hose', name: 'Washing Machine Hose', category: 'home' },
    { slug: 'washer-lid-switch', name: 'Washer Lid Switch', category: 'home' },
    { slug: 'washer-agitator', name: 'Washer Agitator', category: 'home' },
  ],
  // DRYER
  'dryer': [
    { slug: 'dryer-vent-hose', name: 'Dryer Vent Hose', category: 'home' },
    { slug: 'dryer-drum-belt', name: 'Dryer Drum Belt', category: 'home' },
  ],
  // REFRIGERATOR
  'refrigerator': [
    { slug: 'refrigerator-water-filter', name: 'Refrigerator Water Filter', category: 'home' },
    { slug: 'refrigerator-shelf', name: 'Refrigerator Shelf', category: 'home' },
    { slug: 'refrigerator-water-line', name: 'Refrigerator Water Line', category: 'home' },
    { slug: 'ice-maker-filter', name: 'Ice Maker Filter', category: 'home' },
  ],
  // MICROWAVE
  'microwave': [
    { slug: 'microwave-turntable', name: 'Microwave Turntable', category: 'home' },
  ],
  // VACUUM CLEANER
  'vacuum-cleaner': [
    { slug: 'vacuum-belt', name: 'Vacuum Belt', category: 'home' },
    { slug: 'vacuum-filter', name: 'Vacuum Filter', category: 'home' },
    { slug: 'vacuum-hose', name: 'Vacuum Hose', category: 'home' },
    { slug: 'vacuum-bag', name: 'Vacuum Bag', category: 'home' },
    { slug: 'dyson-vacuum-filter', name: 'Dyson Vacuum Filter', category: 'home' },
    { slug: 'shark-vacuum-filter', name: 'Shark Vacuum Filter', category: 'home' },
    { slug: 'roomba-battery', name: 'Roomba Battery', category: 'home' },
    { slug: 'roomba-brush', name: 'Roomba Brush', category: 'home' },
  ],
  // SMOKE DETECTOR
  'smoke-detector': [
    { slug: 'smoke-detector-battery', name: 'Smoke Detector Battery', category: 'home' },
  ],
  // THERMOSTAT
  'thermostat': [
    { slug: 'thermostat-batteries', name: 'Thermostat Batteries', category: 'home' },
  ],
  // OVEN
  'oven': [
    { slug: 'oven-igniter', name: 'Oven Igniter', category: 'home' },
    { slug: 'stove-drip-pans', name: 'Stove Drip Pans', category: 'home' },
  ],
  // SPRINKLER SYSTEM
  'sprinkler-system': [
    { slug: 'sprinkler-head', name: 'Sprinkler Head', category: 'outdoor' },
    { slug: 'backflow-preventer', name: 'Backflow Preventer', category: 'home' },
  ],
  // GRILL
  'grill': [
    { slug: 'grill-thermometer', name: 'Grill Thermometer', category: 'outdoor' },
    { slug: 'grill-ignitor', name: 'Grill Ignitor', category: 'outdoor' },
  ],
  // POOL PUMP
  'pool-pump': [
    { slug: 'pool-filter-cartridge', name: 'Pool Filter Cartridge', category: 'outdoor' },
  ],
  // FAUCET
  'faucet': [
    { slug: 'sink-drain', name: 'Sink Drain', category: 'home' },
    { slug: 'p-trap', name: 'P-Trap', category: 'home' },
    { slug: 'shut-off-valve', name: 'Shut Off Valve', category: 'home' },
  ],
  // SMART DOORBELL
  'smart-doorbell': [
    { slug: 'doorbell-transformer', name: 'Doorbell Transformer', category: 'home' },
  ],
  // CEILING FAN / LIGHTING
  'ceiling-fan': [
    { slug: 'light-switch', name: 'Light Switch', category: 'home' },
    { slug: 'dimmer-switch', name: 'Dimmer Switch', category: 'home' },
  ],
  // DEHUMIDIFIER
  'dehumidifier': [
    { slug: 'humidifier-filter', name: 'Humidifier Filter', category: 'home' },
  ],
  // FIRE EXTINGUISHER
  'fire-extinguisher': [
    { slug: 'fire-extinguisher-replacement', name: 'Fire Extinguisher (Replacement)', category: 'home' },
  ],
}

// Sibling groups — items that should link to each other
const siblingGroups: { slug: string; name: string; category: string }[][] = [
  // Toilet parts link to each other
  [
    { slug: 'toilet-fill-valve', name: 'Toilet Fill Valve', category: 'home' },
    { slug: 'toilet-wax-ring', name: 'Toilet Wax Ring', category: 'home' },
    { slug: 'toilet-handle', name: 'Toilet Handle', category: 'home' },
  ],
  // Furnace/HVAC parts
  [
    { slug: 'furnace-ignitor', name: 'Furnace Ignitor', category: 'home' },
    { slug: 'flame-sensor', name: 'Flame Sensor', category: 'home' },
    { slug: 'thermocouple', name: 'Thermocouple', category: 'home' },
    { slug: 'blower-motor', name: 'Blower Motor', category: 'home' },
  ],
  // Vacuum parts
  [
    { slug: 'vacuum-belt', name: 'Vacuum Belt', category: 'home' },
    { slug: 'vacuum-filter', name: 'Vacuum Filter', category: 'home' },
    { slug: 'vacuum-hose', name: 'Vacuum Hose', category: 'home' },
    { slug: 'vacuum-bag', name: 'Vacuum Bag', category: 'home' },
  ],
  // Dishwasher parts
  [
    { slug: 'dishwasher-spray-arm', name: 'Dishwasher Spray Arm', category: 'home' },
    { slug: 'dishwasher-drain-hose', name: 'Dishwasher Drain Hose', category: 'home' },
    { slug: 'dishwasher-filter', name: 'Dishwasher Filter', category: 'home' },
  ],
  // Plumbing basics
  [
    { slug: 'sink-drain', name: 'Sink Drain', category: 'home' },
    { slug: 'p-trap', name: 'P-Trap', category: 'home' },
    { slug: 'shut-off-valve', name: 'Shut Off Valve', category: 'home' },
    { slug: 'hose-bib', name: 'Hose Bib', category: 'home' },
    { slug: 'sillcock', name: 'Sillcock', category: 'home' },
  ],
  // Electrical
  [
    { slug: 'light-switch', name: 'Light Switch', category: 'home' },
    { slug: 'dimmer-switch', name: 'Dimmer Switch', category: 'home' },
    { slug: 'gfci-outlet', name: 'GFCI Outlet', category: 'home' },
    { slug: 'surge-protector', name: 'Surge Protector', category: 'home' },
  ],
  // Door hardware
  [
    { slug: 'door-knob', name: 'Door Knob', category: 'home' },
    { slug: 'deadbolt', name: 'Deadbolt', category: 'home' },
    { slug: 'cabinet-hardware', name: 'Cabinet Hardware', category: 'home' },
  ],
  // Bathroom
  [
    { slug: 'shower-head', name: 'Shower Head', category: 'home' },
    { slug: 'shower-valve', name: 'Shower Valve', category: 'home' },
    { slug: 'shower-door-seal', name: 'Shower Door Seal', category: 'home' },
    { slug: 'bathtub-drain', name: 'Bathtub Drain', category: 'home' },
    { slug: 'bathroom-exhaust-fan', name: 'Bathroom Exhaust Fan', category: 'home' },
    { slug: 'bath-fan-motor', name: 'Bath Fan Motor', category: 'home' },
  ],
  // Weatherproofing
  [
    { slug: 'weather-stripping-door', name: 'Weather Stripping (Door)', category: 'home' },
    { slug: 'window-screen', name: 'Window Screen', category: 'home' },
    { slug: 'garage-door-seal', name: 'Garage Door Seal', category: 'home' },
  ],
  // Lighting
  [
    { slug: 'recessed-light', name: 'Recessed Light', category: 'home' },
    { slug: 'flood-light', name: 'Flood Light', category: 'home' },
    { slug: 'motion-sensor-light', name: 'Motion Sensor Light', category: 'home' },
  ],
]

// Build reverse map: part slug → parent
const partToParentMap: Record<string, { slug: string; name: string; category: string }> = {}
for (const [parentSlug, parts] of Object.entries(parentToPartsMap)) {
  // We need the parent name — derive from slug
  for (const part of parts) {
    partToParentMap[part.slug] = { slug: parentSlug, name: '', category: 'home' }
  }
}

// Parent name lookup (populated at runtime from products array)
const PARENT_NAMES: Record<string, string> = {
  'toilet': 'Toilet', 'furnace': 'Furnace', 'air-conditioner': 'Air Conditioner (Central)',
  'garage-door': 'Garage Door', 'garage-door-opener': 'Garage Door Opener',
  'water-heater': 'Water Heater (Tank)', 'sump-pump': 'Sump Pump',
  'garbage-disposal': 'Garbage Disposal', 'dishwasher': 'Dishwasher',
  'washing-machine': 'Washing Machine', 'dryer': 'Dryer', 'refrigerator': 'Refrigerator',
  'microwave': 'Microwave', 'vacuum-cleaner': 'Vacuum Cleaner',
  'smoke-detector': 'Smoke Detector', 'thermostat': 'Thermostat',
  'oven': 'Oven/Range', 'sprinkler-system': 'Sprinkler System',
  'grill': 'Grill (Gas)', 'pool-pump': 'Pool Pump', 'faucet': 'Faucet',
  'smart-doorbell': 'Doorbell (Smart)', 'ceiling-fan': 'Ceiling Fan',
  'dehumidifier': 'Dehumidifier', 'fire-extinguisher': 'Fire Extinguisher',
}

export function getRelatedParts(slug: string): RelatedPart[] {
  const results: RelatedPart[] = []
  const seen = new Set<string>()
  seen.add(slug)

  // If this is a parent, add its parts
  const parts = parentToPartsMap[slug]
  if (parts) {
    for (const part of parts) {
      if (!seen.has(part.slug)) {
        results.push({ ...part, relationship: 'part' })
        seen.add(part.slug)
      }
    }
  }

  // If this is a part, add its parent
  const parent = partToParentMap[slug]
  if (parent) {
    const parentName = PARENT_NAMES[parent.slug] || parent.slug
    if (!seen.has(parent.slug)) {
      results.push({ slug: parent.slug, name: parentName, category: parent.category, relationship: 'parent' })
      seen.add(parent.slug)
    }
  }

  // Add siblings (other parts in the same group)
  for (const group of siblingGroups) {
    const inGroup = group.find(g => g.slug === slug)
    if (inGroup) {
      for (const sibling of group) {
        if (!seen.has(sibling.slug)) {
          results.push({ ...sibling, relationship: 'sibling' })
          seen.add(sibling.slug)
        }
      }
    }
  }

  return results
}
