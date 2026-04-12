// Home product subcategories — maps product slugs to subcategory groupings

export interface HomeSubcategory {
  name: string
  slug: string
  icon: string
  description: string
}

export const homeSubcategories: HomeSubcategory[] = [
  { name: 'HVAC & Heating', slug: 'hvac', icon: '🌡️', description: 'Furnaces, air conditioners, heat pumps, and climate control' },
  { name: 'Plumbing', slug: 'plumbing', icon: '🔧', description: 'Water heaters, toilets, faucets, drains, and pipes' },
  { name: 'Appliances', slug: 'appliances', icon: '🏗️', description: 'Refrigerators, washers, dryers, dishwashers, and ovens' },
  { name: 'Electrical & Safety', slug: 'electrical', icon: '⚡', description: 'Panels, breakers, outlets, switches, and detectors' },
  { name: 'Flooring', slug: 'flooring', icon: '🪵', description: 'Hardwood, laminate, vinyl, and carpet' },
  { name: 'Roofing & Exterior', slug: 'exterior', icon: '🏠', description: 'Roofs, siding, gutters, paint, and insulation' },
  { name: 'Kitchen', slug: 'kitchen', icon: '🍳', description: 'Ovens, microwaves, garbage disposals, and kitchen fixtures' },
  { name: 'Bathroom', slug: 'bathroom', icon: '🚿', description: 'Showers, exhaust fans, bath accessories, and fixtures' },
  { name: 'Garage & Entry', slug: 'garage', icon: '🚗', description: 'Garage doors, openers, remotes, and entry hardware' },
  { name: 'Cleaning & Small Appliances', slug: 'cleaning', icon: '🧹', description: 'Vacuums, filters, and small household appliances' },
]

// Maps each home product slug to a subcategory slug
export const homeSubcategoryMap: Record<string, string> = {
  // HVAC & Heating
  'furnace': 'hvac',
  'air-conditioner': 'hvac',
  'thermostat': 'hvac',
  'hvac-air-filter': 'hvac',
  'heat-pump': 'hvac',
  'boiler': 'hvac',
  'ceiling-fan': 'hvac',
  'ac-compressor': 'hvac',
  'ductwork': 'hvac',
  'evaporator-coil': 'hvac',
  'blower-motor': 'hvac',
  'furnace-ignitor': 'hvac',
  'flame-sensor': 'hvac',
  'thermocouple': 'hvac',
  'gas-valve': 'hvac',
  'expansion-tank': 'hvac',
  'condensate-pump': 'hvac',
  'thermostat-batteries': 'hvac',
  'ac-capacitor': 'hvac',
  'whole-house-fan': 'hvac',
  'attic-fan': 'hvac',
  'air-purifier-filter': 'hvac',
  'dehumidifier': 'hvac',
  'humidifier-filter': 'hvac',

  // Plumbing
  'water-heater': 'plumbing',
  'tankless-water-heater': 'plumbing',
  'toilet': 'plumbing',
  'toilet-fill-valve': 'plumbing',
  'toilet-wax-ring': 'plumbing',
  'toilet-handle': 'plumbing',
  'faucet': 'plumbing',
  'sump-pump': 'plumbing',
  'sump-pump-float-switch': 'plumbing',
  'water-softener': 'plumbing',
  'water-filter': 'plumbing',
  'septic-tank': 'plumbing',
  'sewer-line': 'plumbing',
  'well-pump': 'plumbing',
  'french-drain': 'plumbing',
  'water-heater-anode-rod': 'plumbing',
  'dip-tube': 'plumbing',
  'pressure-relief-valve': 'plumbing',
  'shut-off-valve': 'plumbing',
  'backflow-preventer': 'plumbing',
  'p-trap': 'plumbing',
  'hose-bib': 'plumbing',
  'sillcock': 'plumbing',
  'washing-machine-hose': 'plumbing',

  // Appliances
  'refrigerator': 'appliances',
  'washing-machine': 'appliances',
  'dryer': 'appliances',
  'dishwasher': 'appliances',
  'chest-freezer': 'appliances',
  'refrigerator-water-filter': 'appliances',
  'refrigerator-water-line': 'appliances',
  'refrigerator-shelf': 'appliances',
  'ice-maker-filter': 'appliances',
  'dishwasher-drain-hose': 'appliances',
  'dishwasher-spray-arm': 'appliances',
  'dishwasher-filter': 'appliances',
  'dryer-vent-hose': 'appliances',
  'dryer-drum-belt': 'appliances',
  'washer-lid-switch': 'appliances',
  'washer-agitator': 'appliances',

  // Electrical & Safety
  'electrical-panel': 'electrical',
  'circuit-breaker': 'electrical',
  'gfci-outlet': 'electrical',
  'smoke-detector': 'electrical',
  'smoke-detector-battery': 'electrical',
  'carbon-monoxide-detector': 'electrical',
  'fire-extinguisher': 'electrical',
  'fire-extinguisher-replacement': 'electrical',
  'light-switch': 'electrical',
  'dimmer-switch': 'electrical',
  'surge-protector': 'electrical',
  'smart-doorbell': 'electrical',
  'doorbell-transformer': 'electrical',
  'recessed-light': 'electrical',
  'motion-sensor-light': 'electrical',
  'flood-light': 'electrical',

  // Flooring
  'carpet': 'flooring',
  'hardwood-floors': 'flooring',
  'vinyl-plank-flooring': 'flooring',
  'laminate-flooring': 'flooring',

  // Roofing & Exterior
  'roof': 'exterior',
  'metal-roof': 'exterior',
  'slate-roof': 'exterior',
  'windows': 'exterior',
  'window-screen': 'exterior',
  'vinyl-siding': 'exterior',
  'stucco': 'exterior',
  'gutters': 'exterior',
  'exterior-paint': 'exterior',
  'interior-paint': 'exterior',
  'insulation': 'exterior',
  'spray-foam-insulation': 'exterior',
  'chimney-cap': 'exterior',
  'weather-stripping-door': 'exterior',

  // Kitchen
  'microwave': 'kitchen',
  'oven': 'kitchen',
  'oven-igniter': 'kitchen',
  'garbage-disposal': 'kitchen',
  'garbage-disposal-splash-guard': 'kitchen',
  'garbage-disposal-flange': 'kitchen',
  'brita-filter': 'kitchen',
  'range-hood-filter': 'kitchen',
  'stove-drip-pans': 'kitchen',
  'kitchen-sponge': 'kitchen',
  'microwave-turntable': 'kitchen',
  'sink-drain': 'kitchen',
  'cabinet-hardware': 'kitchen',
  'drawer-slides': 'kitchen',

  // Bathroom
  'shower-valve': 'bathroom',
  'shower-head': 'bathroom',
  'shower-door-seal': 'bathroom',
  'bathtub-drain': 'bathroom',
  'bathroom-exhaust-fan': 'bathroom',
  'bath-fan-motor': 'bathroom',
  'bath-towels': 'bathroom',
  'bath-mat': 'bathroom',
  'blinds': 'bathroom',

  // Garage & Entry
  'garage-door': 'garage',
  'garage-door-opener': 'garage',
  'garage-door-spring': 'garage',
  'garage-door-remote': 'garage',
  'garage-door-seal': 'garage',
  'door-knob': 'garage',
  'deadbolt': 'garage',

  // Cleaning & Small Appliances
  'vacuum-cleaner': 'cleaning',
  'vacuum-filter': 'cleaning',
  'vacuum-belt': 'cleaning',
  'vacuum-hose': 'cleaning',
  'vacuum-bag': 'cleaning',
  'dyson-vacuum-filter': 'cleaning',
  'shark-vacuum-filter': 'cleaning',
  'roomba-battery': 'cleaning',
  'roomba-brush': 'cleaning',
}

export function getHomeSubcategory(slug: string): string {
  return homeSubcategoryMap[slug] || 'other'
}
