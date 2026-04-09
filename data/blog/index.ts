export interface BlogArticle {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  publishDate: string // YYYY-MM-DD
  category: 'bills' | 'emergency' | 'maintenance' | 'selling' | 'money' | 'how-to'
  intro: string
  sections: { heading: string; content: string }[]
  relatedProducts: { category: string; slug: string; name: string }[]
  relatedGuides?: { type: 'troubleshoot' | 'insurance' | 'maintenance'; slug: string; name: string }[]
}

// Dynamic imports — only published articles
const modules: Record<string, () => Promise<{ article: BlogArticle }>> = {
  'why-is-my-electric-bill-so-high': () => import('./why-is-my-electric-bill-so-high'),
  'why-is-my-gas-bill-so-high': () => import('./why-is-my-gas-bill-so-high'),
  'why-is-my-water-bill-so-high': () => import('./why-is-my-water-bill-so-high'),
}

// For static generation — load all at build time
import { article as electricBill } from './why-is-my-electric-bill-so-high'
import { article as gasBill } from './why-is-my-gas-bill-so-high'
import { article as waterBill } from './why-is-my-water-bill-so-high'
import { article as roofFinancing } from './roof-financing-options'
import { article as hvacFinancing } from './hvac-financing-options'
import { article as dryerVent } from './how-to-clean-dryer-vent'
import { article as basementFloods } from './what-to-do-when-basement-floods'
import { article as maintenanceChecklist } from './home-maintenance-checklist'
import { article as homeWarranty } from './best-home-warranty-companies'
import { article as homeWarrantyWorth } from './is-home-warranty-worth-it'
import { article as acCoils } from './how-to-clean-ac-coils'
import { article as pilotLight } from './how-to-light-a-pilot-light'
import { article as tires } from './how-often-to-replace-tires'
import { article as newWindows } from './do-new-windows-increase-home-value'
import { article as sealDriveway } from './how-often-to-seal-driveway'
import { article as windshieldWipers } from './how-often-to-replace-windshield-wipers'
import { article as hiddenCosts } from './hidden-costs-of-homeownership'
import { article as pillows } from './how-often-to-replace-pillows'
import { article as smokeDetectors } from './how-often-to-replace-smoke-detectors'
import { article as fridgeFilter } from './how-often-to-replace-refrigerator-water-filter'
import { article as mowerBlades } from './how-often-to-sharpen-lawn-mower-blades'
import { article as deckStain } from './how-often-to-stain-a-deck'
import { article as mulch } from './how-often-to-replace-mulch'
import { article as negotiateContractor } from './how-to-negotiate-with-contractor'
import { article as roofBeforeSelling } from './should-you-replace-roof-before-selling'
import { article as anodeRod } from './how-to-replace-water-heater-anode-rod'
import { article as carpetBeforeSelling } from './should-you-replace-carpet-before-selling'
import { article as bestTimeBuyAppliances } from './best-time-to-buy-appliances'
import { article as changeOil } from './how-often-to-change-oil'
import { article as rottenEggs } from './why-does-my-house-smell-like-rotten-eggs'
import { article as newHomeownerChecklist } from './new-homeowner-checklist'
import { article as transmissionFluid } from './how-often-to-change-transmission-fluid'
import { article as fixBeforeSelling } from './what-to-fix-before-selling-house'
import { article as furnaceFilter } from './how-often-to-change-furnace-filter'
import { article as findContractor } from './how-to-find-good-contractor'
import { article as brakeFluid } from './how-often-to-change-brake-fluid'

const allArticles: BlogArticle[] = [
  electricBill,
  gasBill,
  waterBill,
  dryerVent,
  basementFloods,
  maintenanceChecklist,
  hvacFinancing,
  roofFinancing,
  homeWarranty,
  homeWarrantyWorth,
  acCoils,
  pilotLight,
  tires,
  newWindows,
  sealDriveway,
  windshieldWipers,
  hiddenCosts,
  pillows,
  smokeDetectors,
  fridgeFilter,
  mowerBlades,
  deckStain,
  mulch,
  negotiateContractor,
  roofBeforeSelling,
  anodeRod,
  carpetBeforeSelling,
  bestTimeBuyAppliances,
  changeOil,
  rottenEggs,
  newHomeownerChecklist,
  transmissionFluid,
  fixBeforeSelling,
  furnaceFilter,
  findContractor,
  brakeFluid,
]

export function getAllArticles(): BlogArticle[] {
  const today = new Date().toISOString().slice(0, 10)
  return allArticles
    .filter(a => a.publishDate <= today)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
}

export function getAllSlugs(): string[] {
  return allArticles.map(a => a.slug)
}

export function getArticle(slug: string): BlogArticle | null {
  return allArticles.find(a => a.slug === slug) || null
}
