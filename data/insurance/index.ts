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

export const guides: InsuranceGuide[] = [
  pipeBurst,
  sewerLine,
  plumbing,
  furnace,
  ac,
  roof,
]

export function getGuide(slug: string): InsuranceGuide | null {
  return guides.find(g => g.slug === slug) || null
}
