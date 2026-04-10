export const article = {
  slug: 'why-is-my-water-bill-so-high',
  title: 'Why Is My Water Bill So High?',
  metaTitle: 'Why Is My Water Bill So High? 10 Common Causes (2026)',
  metaDescription: 'Water bill higher than usual? Here are 10 common causes of high water bills, from running toilets to hidden leaks, and how to find and fix each one.',
  publishDate: '2026-04-10',
  category: 'bills' as const,
  intro: `A sudden jump in your water bill usually means one thing: water is going somewhere you don't intend. The average American household uses about 300 gallons per day. If your bill spiked without a change in habits, there's likely a leak or a fixture that's running when it shouldn't be. The good news is that most causes are findable and fixable without a plumber.`,
  sections: [
    {
      heading: 'A Running Toilet (The #1 Culprit)',
      content: `A toilet that runs constantly or cycles on and off can waste 200+ gallons per day... that's 6,000 gallons per month and $30-$70 on your water bill. And it's often silent enough that you don't notice.\n\nThe test: put a few drops of food coloring in the toilet tank. Wait 15 minutes without flushing. If the color appears in the bowl, the flapper is leaking... water is seeping from the tank into the bowl, and the fill valve is constantly replenishing it.\n\nThe fix: a new flapper costs $5-$8 at any hardware store and takes 5 minutes to replace. This single fix solves the most common cause of high water bills. If the fill valve itself is running (water sound even when the tank is full), replace that too... $8-$12 for a Fluidmaster fill valve, 15 minutes to install.`,
    },
    {
      heading: 'A Leak You Can\'t See',
      content: `Underground water line leaks, slab leaks, and leaks inside walls can waste thousands of gallons before you notice anything. The water goes into the ground or between walls... not onto a visible surface.\n\nThe meter test: turn off every water fixture and appliance in the house (faucets, toilets, dishwasher, washing machine, ice maker, irrigation). Go to your water meter and check if it's still moving. If the meter dial is turning with everything off, you have a leak somewhere between the meter and your house... or inside the house.\n\nIf the meter shows a leak: check the toilet flappers first (most common), then look under sinks, around the water heater, and in the basement for any signs of moisture. If you can't find the source, call a plumber with leak detection equipment ($150-$300 for the visit).`,
    },
    {
      heading: 'Irrigation System Running Too Much or Leaking',
      content: `If you have a sprinkler system, it's one of the largest water consumers on your property. A system that runs too long, waters during rain, or has a broken head or cracked line can waste thousands of gallons per month.\n\nCheck your irrigation controller settings... someone may have set it to water daily instead of every 2-3 days, or the run times may be excessive. Most lawns need 1 inch of water per week, not per day.\n\nWalk the yard while the system runs. Look for sprinkler heads that are broken (spraying water straight up or flooding one area), missing (water gushing from the pipe), or misaligned (spraying the sidewalk or house instead of the lawn). A single broken head can waste 10-15 gallons per minute.`,
    },
    {
      heading: 'Dripping Faucets',
      content: `A faucet that drips once per second wastes about 3,000 gallons per year. Two or three dripping faucets in the house add up to a noticeable bill increase.\n\nMost faucet drips are caused by a worn cartridge or O-ring... a $5-$20 part that takes 15-30 minutes to replace. On Moen faucets, you can get a free replacement cartridge by calling their warranty line. This is one of the easiest and cheapest fixes in home maintenance.`,
    },
    {
      heading: 'A Leaking Water Heater',
      content: `Water heaters can develop slow leaks from the T&P valve, drain valve, or supply connections. A small drip at the bottom of the tank may not seem like much, but over a month it adds up.\n\nCheck around and under your water heater for any moisture, rust stains, or mineral deposits (white/green crusty buildup on fittings). Even condensation on the tank during heavy use can contribute to water loss.\n\nA dripping T&P valve ($20 replacement) or a loose drain valve (tighten or cap it) are quick fixes. Water leaking from the tank body itself means the tank has corroded... that's a replacement, not a repair.`,
    },
    {
      heading: 'The Water Softener Is Cycling Too Often',
      content: `Water softeners use 40-80 gallons of water per regeneration cycle. If the softener is regenerating too frequently (daily instead of every 3-5 days), it's wasting water.\n\nCheck the regeneration settings. Many softeners are set on a timer that regenerates on a fixed schedule regardless of actual usage. Switching to a "demand" or "metered" regeneration setting (regenerates based on actual water used) reduces water waste significantly.\n\nAlso check that the hardness setting matches your actual water hardness. An oversized hardness setting causes the softener to use more salt and more water per regeneration than necessary.`,
    },
    {
      heading: 'Rate Increases or Seasonal Rates',
      content: `Many water utilities have tiered pricing: the more you use, the higher the rate per gallon. If your usage crept above a tier threshold, the bill can jump disproportionately.\n\nSome utilities also have seasonal rates (higher in summer when outdoor watering increases demand). And sewer charges are typically based on winter water usage... if your winter usage was high, your sewer rate for the whole year may be higher.\n\nCheck your bill for the rate per unit (CCF, HCF, or gallons) and compare it to previous bills. The utility's website usually shows the current rate schedule.`,
    },
    {
      heading: 'What to Do About It',
      content: `Start with the meter test. Turn everything off, check the meter. If it's moving, you have a leak. If it's not, your usage is higher than you realize (irrigation, long showers, extra laundry).\n\nCheck every toilet with the food coloring test. This catches the most common hidden water waster.\n\nWalk the house and check under every sink, around the water heater, and near the washing machine for any drips or moisture.\n\nIf you have irrigation: walk the system while it runs. Check for broken heads, misaligned spray, and soggy areas that indicate underground leaks.\n\nIf you can't find anything: call your water utility. Many offer free leak investigation services and can tell you if the leak is between the meter and your house (your responsibility) or on their side of the meter (their responsibility).\n\nA plumber with leak detection equipment ($150-$300) can find hidden leaks inside walls, under slabs, or underground using acoustic sensors and thermal cameras.`,
    },
  ],
  relatedProducts: [
    { category: 'home', slug: 'toilet', name: 'Toilet' },
    { category: 'home', slug: 'faucet', name: 'Faucet' },
    { category: 'home', slug: 'water-heater', name: 'Water Heater' },
    { category: 'home', slug: 'water-softener', name: 'Water Softener' },
    { category: 'home', slug: 'water-filter', name: 'Water Filter' },
    { category: 'outdoor', slug: 'sprinkler-system', name: 'Sprinkler System' },
  ],
  relatedGuides: [
    { type: 'troubleshoot' as const, slug: 'toilet-running-constantly', name: 'Toilet Running Constantly' },
    { type: 'troubleshoot' as const, slug: 'water-heater-leaking', name: 'Water Heater Leaking' },
    { type: 'insurance' as const, slug: 'water-damage', name: 'Does Insurance Cover Water Damage?' },
  ],
}
