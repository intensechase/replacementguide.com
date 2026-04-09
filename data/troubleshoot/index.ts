export interface TroubleshootGuide {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  relatedProduct: { category: string; slug: string; name: string }
  intro: string
  steps: { title: string; detail: string; fix: string }[]
  whenToReplace: string
  whenToCallPro: string
}

import { guide as waterHeaterLeaking } from './water-heater-leaking'
import { guide as acNotWorking } from './ac-not-working'
import { guide as garageDoorWontOpen } from './garage-door-wont-open'
import { guide as furnaceNotTurningOn } from './furnace-not-turning-on'
import { guide as acBlowingWarmAir } from './ac-blowing-warm-air'
import { guide as furnaceBlowingColdAir } from './furnace-blowing-cold-air'
import { guide as toiletWontFlush } from './toilet-wont-flush'
import { guide as circuitBreakerKeepsTripping } from './circuit-breaker-keeps-tripping'
import { guide as garbageDisposalHumming } from './garbage-disposal-humming'
import { guide as dishwasherNotDraining } from './dishwasher-not-draining'
import { guide as dryerNotHeating } from './dryer-not-heating'
import { guide as refrigeratorNotCooling } from './refrigerator-not-cooling'
import { guide as washingMachineNotSpinning } from './washing-machine-not-spinning'

export const guides: TroubleshootGuide[] = [
  waterHeaterLeaking,
  acNotWorking,
  garageDoorWontOpen,
  furnaceNotTurningOn,
  acBlowingWarmAir,
  furnaceBlowingColdAir,
  toiletWontFlush,
  circuitBreakerKeepsTripping,
  garbageDisposalHumming,
  dishwasherNotDraining,
  dryerNotHeating,
  refrigeratorNotCooling,
  washingMachineNotSpinning,
]

export function getGuide(slug: string): TroubleshootGuide | null {
  return guides.find(g => g.slug === slug) || null
}
