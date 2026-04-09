export const content = {
  slug: 'refrigerator',
  lifespanDetail: `Refrigerators last 10 to 18 years depending heavily on the style and complexity of the unit. Top-freezer models are the longevity champions... 15 to 18 years is common because the design is simple with fewer parts to fail. Bottom-freezer models split the difference at 12 to 16 years. French door and side-by-side refrigerators look great but average 10 to 14 years because they have more moving parts, more seals, ice makers, water dispensers, and more complex electronics.

The compressor is the heart of the refrigerator. It's the component that circulates refrigerant and actually creates cold air. When the compressor fails on a fridge over 10 years old, it's almost always time to replace the whole unit... the repair costs $400 to $1,000+ and you're putting that money into a machine that's already past its midlife.

Condenser coils on the back or bottom of the fridge accumulate dust and pet hair over time. When they're dirty, the compressor works harder to maintain temperature... like trying to breathe through a clogged filter. Cleaning them every 6 to 12 months with a coil brush is the single most impactful maintenance task for refrigerator longevity.

Temperature consistency matters. The fridge should hold 37°F and the freezer should hold 0°F. Fluctuations beyond a few degrees mean something is wrong... either the thermostat, the door seal, or the defrost system. A $5 refrigerator thermometer tells you exactly what's happening inside.

Smart fridges with touchscreens and Wi-Fi add cool features but also add failure points. That touchscreen is a computer that can die, and replacement panels cost $400-$800. Sometimes simpler is better for an appliance you need to last 15 years.`,
  warningSigns: [
    { sign: 'Food spoiling faster than usual', detail: 'If milk is going bad before the expiration date or produce is wilting within days, the fridge isn\'t maintaining proper temperature. Put a thermometer inside... if it\'s above 40°F consistently, the cooling system is struggling. This is often the first sign of compressor or thermostat trouble.' },
    { sign: 'Motor running constantly', detail: 'You should hear the compressor cycle on and off throughout the day. If it\'s running non-stop, it can\'t reach target temperature and is working overtime to compensate. Common causes: dirty condenser coils, failing compressor, bad door gasket letting warm air in, or thermostat issues.' },
    { sign: 'Frost buildup in freezer', detail: 'Modern freezers are frost-free. If ice is building up on the walls or ceiling of the freezer, the automatic defrost system has failed... either the defrost heater, defrost thermostat, or defrost timer. Food gets freezer-burned faster and the unit works harder.' },
    { sign: 'Water pooling under crisper drawers', detail: 'Water collecting inside the fridge usually means the defrost drain is clogged. Ice melts during the defrost cycle and should drain into a pan underneath the fridge where it evaporates. When the drain clogs (usually with ice or food debris), water backs up inside the fridge.' },
    { sign: 'Loud buzzing or clicking', detail: 'A fridge makes some noise... a gentle hum from the compressor and occasional clicks when it cycles on and off are normal. Loud buzzing means the compressor is straining. Repeated clicking (every few minutes) means the compressor is trying to start and failing... this is often a relay or compressor issue.' },
    { sign: 'Warm spots inside the fridge', detail: 'Uneven cooling means air isn\'t circulating properly. The evaporator fan (inside the freezer) blows cold air into the fridge section through vents. If the fan fails or vents are blocked by frost, some areas stay warm while others are fine.' },
    { sign: 'Excessive condensation on the exterior', detail: 'Sweating on the outside of the fridge means the anti-condensation heaters (built into the walls between the doors) have failed. It\'s not a critical failure, but it indicates aging components and can cause water damage to surrounding cabinets.' },
  ],
  repairOrReplace: `Refrigerator repairs get expensive fast because accessing internal components often requires significant disassembly. The key question is always: what failed, and how old is the unit?

Repairs that make sense: replacing a door gasket ($50-$150), fixing the ice maker ($200-$400), clearing a clogged defrost drain ($100-$200), and replacing the evaporator fan ($150-$400). These are all under $400 and don't touch the core cooling system.

Repairs that rarely make sense on older units: compressor replacement ($400-$1,000+), sealed system repair (anything involving refrigerant), and control board replacement ($200-$500). If the compressor fails on a fridge over 10 years old, the repair is half the cost of a new fridge and you're gambling on other components lasting.

The 50% rule works well here. If the repair costs more than 50% of a comparable new fridge and the unit is past its midlife, replace it. A new fridge also uses 40-50% less electricity than a model from 10+ years ago... the energy savings offset part of the replacement cost over time.

One exception: if you have a built-in or counter-depth fridge that cost $3,000+, repairs up to $800-$1,000 can make sense even on older units because the replacement cost is so high.`,
  maintenanceTips: [
    'Clean the condenser coils every 6 to 12 months with a coil brush... pull the fridge out from the wall (coils on back) or remove the kick plate (coils on bottom). This is the #1 maintenance task for fridge longevity.',
    'Check the door gaskets by closing the door on a dollar bill... if you can pull it out easily, the seal is weak and warm air is leaking in. Replace gaskets when they\'re cracked or loose.',
    'Keep the fridge at 37°F and the freezer at 0°F. Use a thermometer to verify... the built-in temperature dial is often inaccurate.',
    'Don\'t overpack the fridge. Air needs to circulate around food to maintain even temperature. Leave space between items and don\'t block the air vents between the freezer and fridge sections.',
    'Replace the water filter every 6 months if your fridge has a water/ice dispenser. A clogged filter reduces water flow and makes the dispenser work harder.',
    'Clean the drip pan under the fridge annually... it collects condensation from the defrost cycle and can grow mold if neglected.',
  ],
  costBreakdown: {
    replaceLow: 800,
    replaceHigh: 3000,
    repairLow: 50,
    repairHigh: 1000,
    laborPercent: '30-45%',
  },
  recommendedProducts: [
    { name: 'Refrigerator Thermometer (2-Pack)', description: 'Put one in the fridge and one in the freezer to verify actual temperatures. The built-in thermostat dial is notoriously inaccurate... a $10 thermometer tells you if your food is being stored safely at 37°F and 0°F.', priceRange: '$8-$15', amazonUrl: 'https://www.amazon.com/s?k=refrigerator+thermometer+2+pack&tag=replacementgu-20' },
    { name: 'Condenser Coil Cleaning Brush', description: 'A long, flexible brush designed to clean dust and pet hair from refrigerator condenser coils. Use it every 6-12 months to keep the compressor running efficiently and prevent overheating.', priceRange: '$8-$15', amazonUrl: 'https://www.amazon.com/s?k=refrigerator+condenser+coil+cleaning+brush&tag=replacementgu-20' },
    { name: 'Refrigerator Water Filter Replacement', description: 'If your fridge has a water dispenser or ice maker, the filter should be replaced every 6 months. A clogged filter affects water taste, ice quality, and flow rate. Check your fridge model for the correct filter type.', priceRange: '$15-$45', amazonUrl: 'https://www.amazon.com/s?k=refrigerator+water+filter+replacement+universal&tag=replacementgu-20' },
  ],
  commonRepairs: [
    { repair: 'Replace evaporator fan', cost: '$150-$400', notes: 'The evaporator fan circulates cold air from the freezer into the fridge section. When it fails, the freezer stays cold but the fridge warms up. You\'ll often hear it making unusual noises before it dies completely.' },
    { repair: 'Replace compressor', cost: '$400-$1,000+', notes: 'The most expensive repair and often the one that ends a fridge\'s life. The compressor circulates refrigerant through the cooling system. Replacement requires a certified technician to handle refrigerant. On a fridge over 10 years old... this repair rarely makes financial sense.' },
    { repair: 'Replace thermostat', cost: '$100-$250', notes: 'The thermostat controls when the compressor cycles on and off. When it fails, the fridge runs too cold, not cold enough, or the compressor runs constantly. A relatively straightforward repair that\'s worth doing on most units.' },
    { repair: 'Fix water dispenser', cost: '$100-$300', notes: 'Water dispenser issues are usually a failed water inlet valve ($50-$100 part) or a frozen water line. The valve controls water flow to the dispenser and ice maker. Frozen lines can sometimes be fixed by defrosting, but recurring freezing indicates a deeper issue.' },
    { repair: 'Replace ice maker', cost: '$200-$400', notes: 'Ice makers are one of the most failure-prone components in modern refrigerators. Replacement is straightforward but the parts are pricey. Some homeowners just turn off the broken ice maker and use ice trays... it doesn\'t affect the rest of the fridge.' },
  ],
  insuranceCoverage: `Your refrigerator is covered under the personal property section of your homeowners policy if it's damaged by a covered peril... fire, lightning, vandalism, a tree falling on the house, or water damage from a burst pipe. What homeowners insurance will NOT cover: the compressor dying from old age, a control board frying from normal wear, or any mechanical failure from age and use. That's maintenance, not an insurable event. Equipment breakdown coverage (also called mechanical breakdown endorsement) is an add-on that some insurers offer for $25-$75/year. This covers sudden mechanical failure of appliances and electronics... including compressor failure, motor burnout, and electrical component failure. If you have a high-end fridge ($2,000+), this endorsement can be worth the cost. Home warranty plans ($300-$600/year plus $75-$125 service call fee) also cover refrigerator breakdown but often have payout caps of $1,500-$3,000 per appliance.`,
  financingOptions: `A refrigerator is one of the bigger appliance purchases at $800 to $3,000+ installed. Most big box stores (Home Depot, Lowe's, Best Buy) offer 12 to 24 months interest-free financing on purchases over $299-$499. This is the best option if you need to spread the cost... just make absolutely sure you pay it off before the promotional period ends, because deferred interest at 25-29% APR on the full original balance is brutal. Scratch-and-dent deals can save 20-40% on high-end models... cosmetic damage on the side that goes against the wall doesn't affect performance. Floor models are another option at 15-25% off.`,
  bestBrands: [
    { name: 'LG', knownFor: 'Best French door refrigerators on the market. Their linear compressor technology is quieter and more efficient than conventional compressors. The InstaView (knock to see inside) is a genuinely useful feature. Strong reliability ratings across the lineup.' },
    { name: 'Whirlpool', knownFor: 'Most reliable brand overall according to repair technician surveys. Not the flashiest features, but Whirlpool fridges just work and keep working. Parts are widely available and affordable. The WRF535SMH is one of the best-selling French doors for a reason.' },
    { name: 'Samsung', knownFor: 'Best features and technology... Bespoke customizable panels, Family Hub touchscreen, FlexZone convertible compartments. Impressive innovation but Samsung appliance reliability has been inconsistent. Research the specific model before buying.' },
    { name: 'GE', knownFor: 'Solid all-around performer with a wide range of styles and price points. GE Profile series offers premium features at mid-range prices. Good customer support and widely available parts. The GE Profile PVD28BYNFS is a standout.' },
    { name: 'Frigidaire', knownFor: 'Best budget option for a reliable fridge. Their Gallery line offers good features at lower prices than competitors. EvenTemp cooling system works well. Not as refined as LG or Whirlpool, but a strong value play... especially for top-freezer and side-by-side models.' },
  ],
  installationTime: `Refrigerator delivery and installation is typically included with purchase from big box stores or offered for $100 to $200. The delivery team brings the new fridge in, removes packaging, connects the water line (if applicable), and levels it. They'll usually haul away the old fridge too. Total time on-site is 30 to 60 minutes. Important: if the fridge was transported on its side (common for tight doorways or stairs), let it stand upright for 24 hours before plugging it in. This allows the compressor oil to settle back into the compressor... running it immediately can damage the compressor. If it was transported upright, you can plug it in right away but wait 24 hours before loading food so it reaches proper temperature.`,
}
