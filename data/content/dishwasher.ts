export const content = {
  slug: 'dishwasher',
  lifespanDetail: `Dishwashers last 9 to 12 years on average, with some well-maintained units pushing past 15. Bosch dishwashers consistently outlast the competition... their simpler European engineering and stainless steel tubs hold up where plastic tub models fail. Running it daily versus weekly matters less than people think. What actually kills dishwashers is hard water buildup, food debris clogging the filter, and neglecting the door gasket.

The spray arms are the workhorse of the machine. They spin and blast water at your dishes through small holes that gradually clog with mineral deposits and food particles. When those holes clog, cleaning performance drops and the pump works harder to compensate... which shortens its life. Running a dishwasher cleaner monthly (Affresh or Finish) dissolves the buildup before it becomes a problem.

The filter at the bottom of the tub is the single most neglected component. Modern dishwashers (post-2010) mostly use manual filters that need to be cleaned every 2 to 4 weeks. Older models had self-cleaning grinders (like a mini garbage disposal) but manufacturers switched to manual filters because they're quieter. If you've never cleaned your dishwasher filter and your dishes aren't getting clean... that's probably why.

The door gasket (rubber seal around the door) dries out and cracks over time, leading to leaks. Wiping it down monthly and keeping it free of food debris extends its life significantly. A cracked gasket is a cheap fix if caught early... an ignored leak warps your flooring and turns into a much bigger problem.

One thing most people don't realize: pre-rinsing dishes is actually bad for modern dishwashers. The detergent needs food particles to activate properly. Scrape off large chunks, but leave the film... the dishwasher is designed to handle it.`,
  warningSigns: [
    { sign: 'Dishes not getting clean', detail: 'The most common complaint and usually the first sign of trouble. Before assuming the dishwasher is dying, check the basics: clean the filter, inspect the spray arms for clogged holes, and make sure you\'re using fresh detergent (it loses effectiveness after 3 months). If all that checks out and dishes are still dirty... the pump or motor is losing pressure.' },
    { sign: 'Water not draining', detail: 'Standing water in the bottom after a cycle means the drain pump is failing, the drain hose is kinked or clogged, or the garbage disposal knockout plug was never removed (common after a new disposal install). Check the easy stuff first... but a failing drain pump is a $150-$350 repair that signals the dishwasher is aging.' },
    { sign: 'Rust inside the tub', detail: 'If you have a plastic tub dishwasher and the racks are rusting, that\'s a rack issue (tine tips lose their vinyl coating). If you see rust on the tub itself or the door interior... the protective coating has failed and exposed metal is corroding. This contaminates your dishes and is not repairable. Time for a new unit.' },
    { sign: 'Cracks in the door seal', detail: 'Inspect the rubber gasket around the door. Cracks, tears, or hardened sections mean water is escaping or about to. A new gasket costs $100-$200 installed and is worth replacing... but if the dishwasher is over 8 years old with other issues, it\'s a sign of overall age.' },
    { sign: 'Unusual noises', detail: 'A healthy dishwasher hums. Grinding means something is caught in the pump or the pump bearings are failing. Loud buzzing means the motor is straining. Banging or knocking during cycles means the spray arm is hitting dishes (loading issue) or a component has come loose.' },
    { sign: 'Water leaking from the door or base', detail: 'Door leaks are usually the gasket. Base leaks are more serious... could be a cracked tub, failed pump seal, or loose hose connection. Put a flashlight under the unit and run a cycle to find the source. Base leaks from the pump or tub usually mean replacement.' },
  ],
  repairOrReplace: `Dishwashers are mid-range on the repair-vs-replace scale. A new dishwasher costs $400 to $1,200 installed, so repairs under $250 on a unit less than 7 years old generally make sense. The door latch is the most common repair ($50 to $150) and absolutely worth fixing... it's a $15 part and 30 minutes of work. Spray arm replacement ($50 to $100) is another easy one. The door gasket ($100 to $200 installed) is worth replacing if it's the only problem.

Where it gets dicey is the control board ($200 to $400) and the drain pump ($150 to $350). If either of those fails on a dishwasher over 8 years old, you're spending half the cost of a new unit on a machine that's already past its midlife. And the new unit comes with a full warranty and better energy efficiency.

Rule of thumb: if the repair costs more than 50% of a new dishwasher and the unit is over 7 years old, replace it. If it's a Bosch or Miele under 7 years old, the repair is almost always worth it because those machines have long lifespans and the remaining years justify the investment.`,
  maintenanceTips: [
    'Clean the filter every 2 to 4 weeks... pull it out from the bottom of the tub, rinse it under hot water, and scrub with an old toothbrush. This is the #1 thing you can do to keep a dishwasher running well.',
    'Run a dishwasher cleaner (Affresh or Finish) once a month on an empty hot cycle to dissolve mineral buildup in the spray arms and pump.',
    'Wipe down the door gasket monthly with a damp cloth to remove food debris and prevent mold... pay attention to the folds where gunk hides.',
    'Don\'t pre-rinse dishes. Scrape off large food chunks, but leave the film. Modern detergent needs food particles to activate enzymes properly.',
    'Check the spray arms every few months for clogged holes... use a toothpick to clear mineral deposits from the water jets.',
    'Use rinse aid. It\'s not a marketing gimmick... it reduces water spots and helps dishes dry faster, which reduces moisture sitting in the tub between cycles.',
  ],
  costBreakdown: {
    replaceLow: 400,
    replaceHigh: 1200,
    repairLow: 50,
    repairHigh: 400,
    laborPercent: '25-40%',
  },
  recommendedProducts: [
    { name: 'Affresh Dishwasher Cleaner (6-Pack)', description: 'Monthly tablets that dissolve mineral buildup and food residue inside the pump, spray arms, and tub walls. Drop one in and run an empty hot cycle... the difference in cleaning performance is noticeable.', priceRange: '$8-$12', amazonUrl: 'https://www.amazon.com/s?k=Affresh+dishwasher+cleaner+6+pack&tag=replacementgu-20' },
    { name: 'Universal Dishwasher Door Gasket', description: 'Replacement rubber seal for the door that prevents leaks and water damage. Check your model number before ordering... most brands use slightly different gasket profiles.', priceRange: '$15-$40', amazonUrl: 'https://www.amazon.com/s?k=dishwasher+door+gasket+replacement&tag=replacementgu-20' },
    { name: 'Finish Jet-Dry Rinse Aid', description: 'Reduces water spots and improves drying performance. If your dishes come out with a cloudy film or water droplets... rinse aid fixes that. Fill the rinse aid dispenser and forget about it for a month.', priceRange: '$5-$10', amazonUrl: 'https://www.amazon.com/s?k=Finish+Jet+Dry+rinse+aid&tag=replacementgu-20' },
  ],
  commonRepairs: [
    { repair: 'Replace door latch', cost: '$50-$150', notes: 'The door latch mechanism wears out from daily open/close cycles. When it fails, the dishwasher won\'t start because it can\'t confirm the door is sealed. Usually a $15-$30 part and a straightforward DIY fix with a screwdriver.' },
    { repair: 'Clean or replace spray arms', cost: '$50-$100', notes: 'Clogged spray arm holes are the #1 cause of dishes not getting clean. Remove the arms, soak in vinegar, and clear holes with a toothpick. If the arms are cracked or warped, replacements are $15-$30 each.' },
    { repair: 'Replace door gasket', cost: '$100-$200', notes: 'A cracked or hardened door gasket causes leaks around the door frame. The gasket itself is $20-$50 and installation takes 30-60 minutes. Catch this early before water damages your flooring.' },
    { repair: 'Replace drain pump', cost: '$150-$350', notes: 'The drain pump removes water after each cycle. When it fails, water stands in the bottom of the tub. Parts are $50-$100 but accessing the pump requires removing the lower panel and some disassembly. A pro repair makes sense here.' },
    { repair: 'Replace control board', cost: '$200-$400', notes: 'The electronic control board manages all cycles and functions. When it fails, the dishwasher may not start, may stop mid-cycle, or buttons may not respond. Expensive repair... weigh it against the age of the unit before committing.' },
  ],
  insuranceCoverage: `Homeowners insurance covers your dishwasher if it's damaged by a covered peril... fire, lightning, falling tree, burst pipe flooding the kitchen. Standard dwelling coverage applies since the dishwasher is a built-in appliance. What's NOT covered: mechanical failure from age, wear and tear, a pump that burns out, or a control board that dies. Those are maintenance issues, not insurable events. Equipment breakdown endorsement (also called mechanical breakdown coverage) is an add-on some insurers offer that covers sudden mechanical failure of appliances... this would cover a dishwasher pump seizing or a control board frying. It's usually $25-$50/year added to your policy. Home warranty plans are the other option... $300-$600/year with a $75-$100 service call fee. They cover appliance breakdown but have caps and exclusions.`,
  financingOptions: `Most dishwashers fall in the $400-$1,200 range installed, which is manageable for most budgets without financing. That said, big box stores (Home Depot, Lowe's) offer 12-18 months interest-free financing on appliance purchases over $299... that's a reasonable option if you want to spread the cost without paying interest. Don't finance through the manufacturer's credit card unless you can pay it off within the promotional period... the deferred interest rates are typically 25-29% and they charge it retroactively on the full original balance if you miss the deadline.`,
  bestBrands: [
    { name: 'Bosch', knownFor: 'The gold standard for dishwashers. Quietest operation in the industry (38-44 dB), stainless steel tubs, and exceptional reliability. The 300 series is the best value. The 500 and 800 series add features but the 300 does the core job beautifully.' },
    { name: 'KitchenAid', knownFor: 'Best drying performance thanks to a heated dry option and a fan-assisted dry system. Solid cleaning and a more premium feel than Whirlpool (which owns KitchenAid). The KDTE series is their sweet spot.' },
    { name: 'Whirlpool', knownFor: 'Best value in the category. Reliable, widely available, and parts are easy to find. Not as quiet or stylish as Bosch, but gets dishes clean and lasts. The WDT750 series is their most popular model for a reason.' },
    { name: 'Samsung', knownFor: 'Feature-rich with smart home integration, AutoRelease door for better drying, and sleek design. Good performance but Samsung appliance reliability has been inconsistent... check reviews on the specific model, not just the brand.' },
    { name: 'LG', knownFor: 'Good mid-range option with QuadWash spray arms that provide better coverage than standard designs. Quiet operation and competitive pricing. The LG LDTH7972 series offers strong performance for the price.' },
  ],
  installationTime: `A dishwasher swap takes 1 to 2 hours. The old one slides out, the new one slides in, and you connect three things: hot water supply line, drain hose (usually to the garbage disposal or sink drain), and the electrical connection. Most big box stores include basic installation with purchase ($100-$200 value) and haul away the old unit. DIY installation is absolutely doable if you're comfortable with basic plumbing. The hardest part is usually adjusting the leveling legs to get a flush fit under the countertop. Make sure you have a 6-foot dishwasher supply line and a drain hose... they don't always come with the new unit.`,
}
