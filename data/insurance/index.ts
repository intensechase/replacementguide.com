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

export const guides: InsuranceGuide[] = []

export function getGuide(slug: string): InsuranceGuide | null {
  return guides.find(g => g.slug === slug) || null
}
