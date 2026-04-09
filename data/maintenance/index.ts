import { guide as changeOil } from './change-oil'
import { guide as changeTransmissionFluid } from './change-transmission-fluid'
import { guide as changeFurnaceFilter } from './change-furnace-filter'
import { guide as changeBrakeFluid } from './change-brake-fluid'
import { guide as cleanDryerVent } from './clean-dryer-vent'
import { guide as replaceTires } from './replace-tires'
import { guide as replaceWindshieldWipers } from './replace-windshield-wipers'
import { guide as pumpSepticTank } from './pump-septic-tank'
import { guide as changeAirFilterHouse } from './change-air-filter-house'
import { guide as sealDriveway } from './seal-driveway'

export interface MaintenanceGuide {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  frequency: string
  detail: string
  factors: { factor: string; detail: string }[]
  signs: string[]
  recommendedProducts: { name: string; description: string; priceRange: string; amazonUrl: string }[]
  relatedProduct: { category: string; slug: string; name: string }
}

export const maintenanceGuides: MaintenanceGuide[] = [
  cleanDryerVent,
  changeOil,
  changeTransmissionFluid,
  changeFurnaceFilter,
  changeBrakeFluid,
  replaceTires,
  replaceWindshieldWipers,
  pumpSepticTank,
  changeAirFilterHouse,
  sealDriveway,
]

export function getMaintenanceGuide(slug: string): MaintenanceGuide | null {
  return maintenanceGuides.find(g => g.slug === slug) || null
}
