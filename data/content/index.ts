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
}

export function getProductContent(slug: string): ProductContent | null {
  return contentMap[slug] || null
}
