export interface ComparisonGuide {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  optionA: {
    name: string
    relatedProduct?: { category: string; slug: string }
  }
  optionB: {
    name: string
    relatedProduct?: { category: string; slug: string }
  }
  intro: string
  comparison: {
    category: string
    rows: { factor: string; optionA: string; optionB: string }[]
  }[]
  verdict: string
  chooseA: string
  chooseB: string
}

import { guide as tanklessVsTank } from './tankless-vs-tank-water-heater'
import { guide as gasVsElectricDryer } from './gas-vs-electric-dryer'
import { guide as asphaltVsMetalRoof } from './asphalt-vs-metal-roof'
import { guide as hardwoodVsLaminate } from './hardwood-vs-laminate-flooring'
import { guide as vinylVsHardwood } from './vinyl-vs-hardwood-flooring'
import { guide as centralAcVsHeatPump } from './central-ac-vs-heat-pump'
import { guide as woodVsCompositeDeck } from './wood-vs-composite-deck'
import { guide as gasVsElectricOven } from './gas-vs-electric-oven'
import { guide as asphaltVsConcreteDriveway } from './asphalt-vs-concrete-driveway'
import { guide as topLoadVsFrontLoad } from './top-load-vs-front-load-washer'

export const comparisonGuides: ComparisonGuide[] = [
  tanklessVsTank,
  gasVsElectricDryer,
  asphaltVsMetalRoof,
  hardwoodVsLaminate,
  vinylVsHardwood,
  centralAcVsHeatPump,
  woodVsCompositeDeck,
  gasVsElectricOven,
  asphaltVsConcreteDriveway,
  topLoadVsFrontLoad,
]

export function getGuide(slug: string): ComparisonGuide | undefined {
  return comparisonGuides.find((g) => g.slug === slug)
}
