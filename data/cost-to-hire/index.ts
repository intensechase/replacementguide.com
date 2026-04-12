export interface CostToHireGuide {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  professional: string
  intro: string
  averageCost: { low: number; high: number; unit: string }
  costFactors: { factor: string; detail: string }[]
  commonJobs: { job: string; costRange: string; timeEstimate: string }[]
  whenToHire: string
  whenToDIY: string
  howToSave: string[]
  redFlags: string[]
  relatedProducts: { category: string; slug: string; name: string }[]
}

import { guide as plumber } from './plumber'
import { guide as electrician } from './electrician'
import { guide as hvacTechnician } from './hvac-technician'
import { guide as roofer } from './roofer'
import { guide as painter } from './painter'
import { guide as exterminator } from './exterminator'
import { guide as handyman } from './handyman'
import { guide as locksmith } from './locksmith'
import { guide as carpetCleaner } from './carpet-cleaner'
import { guide as treeService } from './tree-service'
import { guide as foundationRepair } from './foundation-repair'
import { guide as applianceRepair } from './appliance-repair'
import { guide as garageDoorRepair } from './garage-door-repair'
import { guide as chimneySweep } from './chimney-sweep'
import { guide as windowCleaner } from './window-cleaner'

export const guides: CostToHireGuide[] = [
  plumber,
  electrician,
  hvacTechnician,
  roofer,
  painter,
  exterminator,
  handyman,
  locksmith,
  carpetCleaner,
  treeService,
  foundationRepair,
  applianceRepair,
  garageDoorRepair,
  chimneySweep,
  windowCleaner,
]

export function getGuide(slug: string): CostToHireGuide | null {
  return guides.find(g => g.slug === slug) || null
}
