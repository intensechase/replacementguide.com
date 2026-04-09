// Import detailed content for high-value pages
import { content as roof } from './roof'
import { content as windows } from './windows'
import { content as furnace } from './furnace'
import { content as airConditioner } from './air-conditioner'
import { content as sumpPump } from './sump-pump'
import { content as waterHeater } from './water-heater'
import { content as septicTank } from './septic-tank'
import { content as carpet } from './carpet'
import { content as toilet } from './toilet'
import { content as garageDoor } from './garage-door'
import { content as garbageDisposal } from './garbage-disposal'
import { content as sewerLine } from './sewer-line'
import { content as frenchDrain } from './french-drain'
import { content as wellPump } from './well-pump'
import { content as waterSoftener } from './water-softener'
import { content as tanklessWaterHeater } from './tankless-water-heater'
import { content as garageDoorOpener } from './garage-door-opener'
import { content as circuitBreaker } from './circuit-breaker'
import { content as laminateFlooring } from './laminate-flooring'
import { content as sprayFoamInsulation } from './spray-foam-insulation'
import { content as garageDoorSpring } from './garage-door-spring'
import { content as gutters } from './gutters'
import { content as acCompressor } from './ac-compressor'
import { content as ductwork } from './ductwork'
import { content as vinylSiding } from './vinyl-siding'
import { content as metalRoof } from './metal-roof'
import { content as slateRoof } from './slate-roof'
import { content as boiler } from './boiler'
import { content as poolPump } from './pool-pump'
import { content as heatPump } from './heat-pump'
import { content as battery } from './battery'
import { content as tires } from './tires'
import { content as brakePads } from './brake-pads'
import { content as windshieldWipers } from './windshield-wipers'
import { content as sparkPlugs } from './spark-plugs'
import { content as mattress } from './mattress'
import { content as dishwasher } from './dishwasher'
import { content as refrigerator } from './refrigerator'
import { content as washingMachine } from './washing-machine'
import { content as dryer } from './dryer'

export interface ProductContent {
  slug: string
  lifespanDetail: string
  warningSigns: { sign: string; detail: string }[]
  repairOrReplace: string
  maintenanceTips: string[]
  costBreakdown: {
    replaceLow: number
    replaceHigh: number
    repairLow: number
    repairHigh: number
    laborPercent: string
  }
  recommendedProducts?: { name: string; description: string; priceRange: string; amazonUrl: string }[]
  commonRepairs?: { repair: string; cost: string; notes: string }[]
  insuranceCoverage?: string
  financingOptions?: string
  sizingGuide?: string
  bestBrands?: { name: string; knownFor: string }[]
  installationTime?: string
}

const contentMap: Record<string, ProductContent> = {
  'roof': roof,
  'windows': windows,
  'furnace': furnace,
  'air-conditioner': airConditioner,
  'sump-pump': sumpPump,
  'water-heater': waterHeater,
  'septic-tank': septicTank,
  'carpet': carpet,
  'toilet': toilet,
  'garage-door': garageDoor,
  'garbage-disposal': garbageDisposal,
  'sewer-line': sewerLine,
  'french-drain': frenchDrain,
  'well-pump': wellPump,
  'water-softener': waterSoftener,
  'tankless-water-heater': tanklessWaterHeater,
  'garage-door-opener': garageDoorOpener,
  'circuit-breaker': circuitBreaker,
  'laminate-flooring': laminateFlooring,
  'spray-foam-insulation': sprayFoamInsulation,
  'garage-door-spring': garageDoorSpring,
  'gutters': gutters,
  'ac-compressor': acCompressor,
  'ductwork': ductwork,
  'vinyl-siding': vinylSiding,
  'metal-roof': metalRoof,
  'slate-roof': slateRoof,
  'boiler': boiler,
  'pool-pump': poolPump,
  'heat-pump': heatPump,
  'battery': battery,
  'tires': tires,
  'brake-pads': brakePads,
  'windshield-wipers': windshieldWipers,
  'spark-plugs': sparkPlugs,
  'mattress': mattress,
  'dishwasher': dishwasher,
  'refrigerator': refrigerator,
  'washing-machine': washingMachine,
  'dryer': dryer,
}

export function getProductContent(slug: string): ProductContent | null {
  return contentMap[slug] || null
}
