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
}

export function getProductContent(slug: string): ProductContent | null {
  return contentMap[slug] || null
}
