export interface InsuranceGuide {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  relatedProducts: { category: string; slug: string; name: string }[]
  quickAnswer: string
  coveredScenarios: { scenario: string; detail: string }[]
  notCoveredScenarios: { scenario: string; detail: string }[]
  homeWarrantyNote: string
  howToFileClaim: string[]
  tipsBeforeYouNeedIt: string[]
  realWorldExamples: { situation: string; covered: boolean; explanation: string }[]
}

import { guide as pipeBurst } from './pipe-burst'
import { guide as sewerLine } from './sewer-line'
import { guide as plumbing } from './plumbing'
import { guide as furnace } from './furnace'
import { guide as ac } from './ac'
import { guide as roof } from './roof'
import { guide as electrical } from './electrical'
import { guide as applianceRepair } from './appliance-repair'
import { guide as waterHeater } from './water-heater'
import { guide as septicSystem } from './septic-system'
import { guide as garageDoor } from './garage-door'
import { guide as waterDamage } from './water-damage'
import { guide as mold } from './mold'
import { guide as foundationRepair } from './foundation-repair'
import { guide as treeRemoval } from './tree-removal'
import { guide as windDamage } from './wind-damage'
import { guide as termiteDamage } from './termite-damage'
import { guide as notCovered } from './not-covered'
import { guide as homeWarrantyVsInsurance } from './home-warranty-vs-insurance'

export const guides: InsuranceGuide[] = [
  pipeBurst,
  sewerLine,
  plumbing,
  electrical,
  applianceRepair,
  furnace,
  ac,
  waterHeater,
  septicSystem,
  garageDoor,
  roof,
  waterDamage,
  mold,
  foundationRepair,
  treeRemoval,
  windDamage,
  termiteDamage,
  notCovered,
  homeWarrantyVsInsurance,
]

export function getGuide(slug: string): InsuranceGuide | null {
  return guides.find(g => g.slug === slug) || null
}
