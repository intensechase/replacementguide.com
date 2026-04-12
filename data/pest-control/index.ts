export interface PestGuide {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  signs: { sign: string; detail: string }[]
  diyTreatments: { method: string; detail: string; cost: string }[]
  preventionTips: string[]
  whenToCallPro: string
  proCost: { low: number; high: number }
  recommendedProducts: { name: string; description: string; priceRange: string; amazonUrl: string }[]
  relatedPests: { slug: string; name: string }[]
}

import { guide as mice } from './mice'
import { guide as roaches } from './roaches'
import { guide as bedBugs } from './bed-bugs'
import { guide as ants } from './ants'
import { guide as termites } from './termites'
import { guide as mosquitoes } from './mosquitoes'
import { guide as wasps } from './wasps'
import { guide as spiders } from './spiders'
import { guide as rats } from './rats'
import { guide as fleas } from './fleas'
import { guide as fruitFlies } from './fruit-flies'
import { guide as gnats } from './gnats'
import { guide as carpenterAnts } from './carpenter-ants'
import { guide as silverfish } from './silverfish'
import { guide as stinkBugs } from './stink-bugs'

export const guides: PestGuide[] = [
  mice,
  roaches,
  bedBugs,
  ants,
  termites,
  mosquitoes,
  wasps,
  spiders,
  rats,
  fleas,
  fruitFlies,
  gnats,
  carpenterAnts,
  silverfish,
  stinkBugs,
]

export function getGuide(slug: string): PestGuide | null {
  return guides.find(g => g.slug === slug) || null
}
