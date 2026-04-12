// Cross-section linking: maps pages across product, troubleshoot, pest-control, insurance, and maintenance sections.
// Relationships are stored once and the lookup function makes them bidirectional.

export interface CrossLink {
  slug: string
  name: string
  section: 'product' | 'troubleshoot' | 'pest-control' | 'insurance' | 'maintenance' | 'cost-to-hire'
  category?: string // only for product pages
}

interface LinkEntry {
  section: string
  slug: string
  links: CrossLink[]
}

// All relationships defined in one direction — getCrossLinks() makes them bidirectional.
const linkMap: LinkEntry[] = [
  // ==================== PRODUCT → TROUBLESHOOT / INSURANCE / MAINTENANCE ====================

  // Toilet
  {
    section: 'product', slug: 'toilet',
    links: [
      { slug: 'toilet-wont-flush', name: 'Toilet Won\'t Flush', section: 'troubleshoot' },
      { slug: 'toilet-running-constantly', name: 'Toilet Running Constantly', section: 'troubleshoot' },
      { slug: 'plumbing', name: 'Insurance: Plumbing Repairs', section: 'insurance' },
    ],
  },
  {
    section: 'product', slug: 'toilet-fill-valve',
    links: [
      { slug: 'toilet-running-constantly', name: 'Toilet Running Constantly', section: 'troubleshoot' },
    ],
  },
  {
    section: 'product', slug: 'toilet-wax-ring',
    links: [
      { slug: 'toilet-wont-flush', name: 'Toilet Won\'t Flush', section: 'troubleshoot' },
    ],
  },

  // Water heater
  {
    section: 'product', slug: 'water-heater',
    links: [
      { slug: 'water-heater-leaking', name: 'Water Heater Leaking', section: 'troubleshoot' },
      { slug: 'water-heater-not-heating', name: 'Water Heater Not Heating', section: 'troubleshoot' },
      { slug: 'water-heater', name: 'Insurance: Water Heater', section: 'insurance' },
    ],
  },
  {
    section: 'product', slug: 'water-heater-anode-rod',
    links: [
      { slug: 'water-heater-not-heating', name: 'Water Heater Not Heating', section: 'troubleshoot' },
    ],
  },

  // Furnace
  {
    section: 'product', slug: 'furnace',
    links: [
      { slug: 'furnace-not-turning-on', name: 'Furnace Not Turning On', section: 'troubleshoot' },
      { slug: 'furnace-blowing-cold-air', name: 'Furnace Blowing Cold Air', section: 'troubleshoot' },
      { slug: 'pilot-light-wont-stay-lit', name: 'Pilot Light Won\'t Stay Lit', section: 'troubleshoot' },
      { slug: 'furnace', name: 'Insurance: Furnace', section: 'insurance' },
      { slug: 'change-furnace-filter', name: 'Change Furnace Filter Schedule', section: 'maintenance' },
    ],
  },
  {
    section: 'product', slug: 'furnace-ignitor',
    links: [
      { slug: 'furnace-not-turning-on', name: 'Furnace Not Turning On', section: 'troubleshoot' },
    ],
  },
  {
    section: 'product', slug: 'flame-sensor',
    links: [
      { slug: 'furnace-not-turning-on', name: 'Furnace Not Turning On', section: 'troubleshoot' },
    ],
  },
  {
    section: 'product', slug: 'thermocouple',
    links: [
      { slug: 'pilot-light-wont-stay-lit', name: 'Pilot Light Won\'t Stay Lit', section: 'troubleshoot' },
    ],
  },

  // AC
  {
    section: 'product', slug: 'air-conditioner',
    links: [
      { slug: 'ac-not-working', name: 'AC Not Working', section: 'troubleshoot' },
      { slug: 'ac-blowing-warm-air', name: 'AC Blowing Warm Air', section: 'troubleshoot' },
      { slug: 'ac', name: 'Insurance: AC', section: 'insurance' },
    ],
  },
  {
    section: 'product', slug: 'ac-capacitor',
    links: [
      { slug: 'ac-not-working', name: 'AC Not Working', section: 'troubleshoot' },
    ],
  },

  // Garage door
  {
    section: 'product', slug: 'garage-door',
    links: [
      { slug: 'garage-door-wont-open', name: 'Garage Door Won\'t Open', section: 'troubleshoot' },
      { slug: 'garage-door', name: 'Insurance: Garage Door', section: 'insurance' },
    ],
  },

  // Dishwasher
  {
    section: 'product', slug: 'dishwasher',
    links: [
      { slug: 'dishwasher-not-draining', name: 'Dishwasher Not Draining', section: 'troubleshoot' },
      { slug: 'appliance-repair', name: 'Insurance: Appliance Repair', section: 'insurance' },
    ],
  },

  // Refrigerator
  {
    section: 'product', slug: 'refrigerator',
    links: [
      { slug: 'refrigerator-not-cooling', name: 'Refrigerator Not Cooling', section: 'troubleshoot' },
    ],
  },

  // Washing machine
  {
    section: 'product', slug: 'washing-machine',
    links: [
      { slug: 'washing-machine-not-spinning', name: 'Washing Machine Not Spinning', section: 'troubleshoot' },
    ],
  },

  // Dryer
  {
    section: 'product', slug: 'dryer',
    links: [
      { slug: 'dryer-not-heating', name: 'Dryer Not Heating', section: 'troubleshoot' },
    ],
  },

  // Garbage disposal
  {
    section: 'product', slug: 'garbage-disposal',
    links: [
      { slug: 'garbage-disposal-humming', name: 'Garbage Disposal Humming', section: 'troubleshoot' },
      { slug: 'garbage-disposal-jammed', name: 'Garbage Disposal Jammed', section: 'troubleshoot' },
    ],
  },

  // Sump pump
  {
    section: 'product', slug: 'sump-pump',
    links: [
      { slug: 'sump-pump-not-working', name: 'Sump Pump Not Working', section: 'troubleshoot' },
      { slug: 'plumbing', name: 'Insurance: Plumbing Repairs', section: 'insurance' },
    ],
  },

  // Circuit breaker
  {
    section: 'product', slug: 'circuit-breaker',
    links: [
      { slug: 'circuit-breaker-keeps-tripping', name: 'Circuit Breaker Keeps Tripping', section: 'troubleshoot' },
    ],
  },

  // ==================== PEST CONTROL → PRODUCT ====================
  {
    section: 'pest-control', slug: 'mice',
    links: [
      { slug: 'weather-stripping-door', name: 'Weather Stripping (Door)', section: 'product', category: 'home' },
      { slug: 'door-knob', name: 'Door Knob', section: 'product', category: 'home' },
    ],
  },
  {
    section: 'pest-control', slug: 'termites',
    links: [
      { slug: 'deck', name: 'Deck (Wood)', section: 'product', category: 'outdoor' },
      { slug: 'fence', name: 'Fence (Wood)', section: 'product', category: 'outdoor' },
    ],
  },
  {
    section: 'pest-control', slug: 'mosquitoes',
    links: [
      { slug: 'sprinkler-head', name: 'Sprinkler Head', section: 'product', category: 'outdoor' },
      { slug: 'pool-filter-cartridge', name: 'Pool Filter Cartridge', section: 'product', category: 'outdoor' },
    ],
  },

  // ==================== COST TO HIRE → PRODUCT / TROUBLESHOOT ====================
  {
    section: 'cost-to-hire', slug: 'plumber',
    links: [
      { slug: 'water-heater', name: 'Water Heater Replacement Guide', section: 'product', category: 'home' },
      { slug: 'toilet', name: 'Toilet Replacement Guide', section: 'product', category: 'home' },
      { slug: 'water-heater-leaking', name: 'Water Heater Leaking', section: 'troubleshoot' },
      { slug: 'toilet-wont-flush', name: 'Toilet Won\'t Flush', section: 'troubleshoot' },
    ],
  },
  {
    section: 'cost-to-hire', slug: 'electrician',
    links: [
      { slug: 'electrical-panel', name: 'Electrical Panel Replacement Guide', section: 'product', category: 'home' },
      { slug: 'circuit-breaker', name: 'Circuit Breaker Replacement Guide', section: 'product', category: 'home' },
      { slug: 'circuit-breaker-keeps-tripping', name: 'Circuit Breaker Keeps Tripping', section: 'troubleshoot' },
    ],
  },
  {
    section: 'cost-to-hire', slug: 'hvac-technician',
    links: [
      { slug: 'air-conditioner', name: 'Air Conditioner Replacement Guide', section: 'product', category: 'home' },
      { slug: 'furnace', name: 'Furnace Replacement Guide', section: 'product', category: 'home' },
      { slug: 'ac-not-working', name: 'AC Not Working', section: 'troubleshoot' },
      { slug: 'furnace-not-turning-on', name: 'Furnace Not Turning On', section: 'troubleshoot' },
    ],
  },
  {
    section: 'cost-to-hire', slug: 'roofer',
    links: [
      { slug: 'roof', name: 'Roof Replacement Guide', section: 'product', category: 'home' },
    ],
  },
  {
    section: 'cost-to-hire', slug: 'exterminator',
    links: [
      { slug: 'termites', name: 'How to Get Rid of Termites', section: 'pest-control' },
      { slug: 'roaches', name: 'How to Get Rid of Roaches', section: 'pest-control' },
      { slug: 'mice', name: 'How to Get Rid of Mice', section: 'pest-control' },
    ],
  },
  {
    section: 'cost-to-hire', slug: 'appliance-repair',
    links: [
      { slug: 'refrigerator', name: 'Refrigerator Replacement Guide', section: 'product', category: 'home' },
      { slug: 'washing-machine', name: 'Washing Machine Replacement Guide', section: 'product', category: 'home' },
      { slug: 'dishwasher-not-draining', name: 'Dishwasher Not Draining', section: 'troubleshoot' },
      { slug: 'dryer-not-heating', name: 'Dryer Not Heating', section: 'troubleshoot' },
    ],
  },
  {
    section: 'cost-to-hire', slug: 'garage-door-repair',
    links: [
      { slug: 'garage-door', name: 'Garage Door Replacement Guide', section: 'product', category: 'home' },
      { slug: 'garage-door-wont-open', name: 'Garage Door Won\'t Open', section: 'troubleshoot' },
    ],
  },
  {
    section: 'cost-to-hire', slug: 'chimney-sweep',
    links: [
      { slug: 'furnace', name: 'Furnace Replacement Guide', section: 'product', category: 'home' },
      { slug: 'pilot-light-wont-stay-lit', name: 'Pilot Light Won\'t Stay Lit', section: 'troubleshoot' },
    ],
  },

  // ==================== TROUBLESHOOT → INSURANCE ====================
  {
    section: 'troubleshoot', slug: 'water-heater-leaking',
    links: [
      { slug: 'water-heater', name: 'Insurance: Water Heater', section: 'insurance' },
    ],
  },
  {
    section: 'troubleshoot', slug: 'ac-not-working',
    links: [
      { slug: 'ac', name: 'Insurance: AC', section: 'insurance' },
    ],
  },
  {
    section: 'troubleshoot', slug: 'furnace-not-turning-on',
    links: [
      { slug: 'furnace', name: 'Insurance: Furnace', section: 'insurance' },
    ],
  },
  {
    section: 'troubleshoot', slug: 'sump-pump-not-working',
    links: [
      { slug: 'plumbing', name: 'Insurance: Plumbing Repairs', section: 'insurance' },
    ],
  },
  {
    section: 'troubleshoot', slug: 'garage-door-wont-open',
    links: [
      { slug: 'garage-door', name: 'Insurance: Garage Door', section: 'insurance' },
    ],
  },
]

/**
 * Get all cross-links for a given page. Bidirectional: if A links to B, B also links back to A.
 */
export function getCrossLinks(section: string, slug: string): CrossLink[] {
  const results: CrossLink[] = []
  const seen = new Set<string>()

  for (const entry of linkMap) {
    const entryKey = `${entry.section}/${entry.slug}`

    // Forward: this entry is the current page → return its links
    if (entry.section === section && entry.slug === slug) {
      for (const link of entry.links) {
        const linkKey = `${link.section}/${link.slug}`
        if (!seen.has(linkKey)) {
          seen.add(linkKey)
          results.push(link)
        }
      }
    }

    // Reverse: one of this entry's links points to the current page → link back to the entry
    for (const link of entry.links) {
      if (link.section === section && link.slug === slug) {
        if (!seen.has(entryKey)) {
          seen.add(entryKey)
          // Build a CrossLink pointing back to the entry
          results.push(buildReverseLink(entry))
        }
      }
    }
  }

  return results
}

/** Build a CrossLink that points to the entry's own page. */
function buildReverseLink(entry: LinkEntry): CrossLink {
  // For product entries, we need to figure out the category
  if (entry.section === 'product') {
    // Category lookup from known products
    const categoryMap: Record<string, string> = {
      'toilet': 'home', 'toilet-fill-valve': 'home', 'toilet-wax-ring': 'home',
      'water-heater': 'home', 'water-heater-anode-rod': 'home',
      'furnace': 'home', 'furnace-ignitor': 'home', 'flame-sensor': 'home', 'thermocouple': 'home',
      'air-conditioner': 'home', 'ac-capacitor': 'home',
      'garage-door': 'home', 'dishwasher': 'home', 'refrigerator': 'home',
      'washing-machine': 'home', 'dryer': 'home', 'garbage-disposal': 'home',
      'sump-pump': 'home', 'circuit-breaker': 'home',
    }
    return {
      slug: entry.slug,
      name: formatProductName(entry.slug),
      section: 'product',
      category: categoryMap[entry.slug] || 'home',
    }
  }

  return {
    slug: entry.slug,
    name: formatSectionName(entry.section, entry.slug),
    section: entry.section as CrossLink['section'],
  }
}

/** Human-readable name from a slug. */
function formatProductName(slug: string): string {
  const names: Record<string, string> = {
    'toilet': 'Toilet Replacement Guide',
    'toilet-fill-valve': 'Toilet Fill Valve Replacement Guide',
    'toilet-wax-ring': 'Toilet Wax Ring Replacement Guide',
    'water-heater': 'Water Heater Replacement Guide',
    'water-heater-anode-rod': 'Water Heater Anode Rod Guide',
    'furnace': 'Furnace Replacement Guide',
    'furnace-ignitor': 'Furnace Ignitor Replacement Guide',
    'flame-sensor': 'Flame Sensor Replacement Guide',
    'thermocouple': 'Thermocouple Replacement Guide',
    'air-conditioner': 'Air Conditioner Replacement Guide',
    'ac-capacitor': 'AC Capacitor Replacement Guide',
    'garage-door': 'Garage Door Replacement Guide',
    'dishwasher': 'Dishwasher Replacement Guide',
    'refrigerator': 'Refrigerator Replacement Guide',
    'washing-machine': 'Washing Machine Replacement Guide',
    'dryer': 'Dryer Replacement Guide',
    'garbage-disposal': 'Garbage Disposal Replacement Guide',
    'sump-pump': 'Sump Pump Replacement Guide',
    'circuit-breaker': 'Circuit Breaker Replacement Guide',
    'weather-stripping-door': 'Weather Stripping Replacement Guide',
    'door-knob': 'Door Knob Replacement Guide',
    'deck': 'Deck Replacement Guide',
    'fence': 'Fence Replacement Guide',
    'sprinkler-head': 'Sprinkler Head Replacement Guide',
    'pool-filter-cartridge': 'Pool Filter Cartridge Replacement Guide',
    'electrical-panel': 'Electrical Panel Replacement Guide',
    'roof': 'Roof Replacement Guide',
  }
  return names[slug] || slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
}

function formatSectionName(section: string, slug: string): string {
  const names: Record<string, Record<string, string>> = {
    troubleshoot: {
      'toilet-wont-flush': 'Toilet Won\'t Flush',
      'toilet-running-constantly': 'Toilet Running Constantly',
      'water-heater-leaking': 'Water Heater Leaking',
      'water-heater-not-heating': 'Water Heater Not Heating',
      'furnace-not-turning-on': 'Furnace Not Turning On',
      'furnace-blowing-cold-air': 'Furnace Blowing Cold Air',
      'pilot-light-wont-stay-lit': 'Pilot Light Won\'t Stay Lit',
      'ac-not-working': 'AC Not Working',
      'ac-blowing-warm-air': 'AC Blowing Warm Air',
      'garage-door-wont-open': 'Garage Door Won\'t Open',
      'dishwasher-not-draining': 'Dishwasher Not Draining',
      'refrigerator-not-cooling': 'Refrigerator Not Cooling',
      'washing-machine-not-spinning': 'Washing Machine Not Spinning',
      'dryer-not-heating': 'Dryer Not Heating',
      'garbage-disposal-humming': 'Garbage Disposal Humming',
      'garbage-disposal-jammed': 'Garbage Disposal Jammed',
      'sump-pump-not-working': 'Sump Pump Not Working',
      'circuit-breaker-keeps-tripping': 'Circuit Breaker Keeps Tripping',
    },
    insurance: {
      'plumbing': 'Insurance: Plumbing Repairs',
      'water-heater': 'Insurance: Water Heater',
      'furnace': 'Insurance: Furnace',
      'ac': 'Insurance: AC',
      'garage-door': 'Insurance: Garage Door',
      'appliance-repair': 'Insurance: Appliance Repair',
    },
    maintenance: {
      'change-furnace-filter': 'Change Furnace Filter Schedule',
    },
    'pest-control': {
      'mice': 'How to Get Rid of Mice',
      'termites': 'How to Get Rid of Termites',
      'mosquitoes': 'How to Get Rid of Mosquitoes',
      'roaches': 'How to Get Rid of Roaches',
    },
    'cost-to-hire': {
      'plumber': 'How Much Does a Plumber Cost?',
      'electrician': 'How Much Does an Electrician Cost?',
      'hvac-technician': 'How Much Does HVAC Repair Cost?',
      'roofer': 'How Much Does a Roofer Cost?',
      'exterminator': 'How Much Does an Exterminator Cost?',
      'appliance-repair': 'How Much Does Appliance Repair Cost?',
      'garage-door-repair': 'How Much Does Garage Door Repair Cost?',
      'chimney-sweep': 'How Much Does a Chimney Sweep Cost?',
    },
  }
  return names[section]?.[slug] || slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
}

/** Helper to get the URL for a cross-link. */
export function getCrossLinkUrl(link: CrossLink): string {
  if (link.section === 'product') {
    return `/${link.category || 'home'}/${link.slug}`
  }
  return `/${link.section}/${link.slug}`
}
