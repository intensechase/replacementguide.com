export const article = {
  slug: 'how-to-clean-ac-coils',
  title: 'How to Clean AC Coils (Condenser and Evaporator)',
  metaTitle: 'How to Clean AC Coils — DIY Guide (2026)',
  metaDescription: 'Learn how to clean your AC condenser and evaporator coils yourself. Improves cooling, reduces energy bills, and extends your system\'s life.',
  publishDate: '2026-04-25',
  category: 'how-to' as const,
  intro: `Dirty AC coils are the #1 cause of reduced cooling performance and high energy bills. The condenser coils (outside unit) and evaporator coils (inside unit) transfer heat... and when they're coated in dirt, pollen, dust, and grime, they can't do their job. Cleaning the condenser coils yourself takes 20 minutes and a garden hose. The evaporator coils are a bit more involved but still DIY-able. Together, clean coils can reduce your cooling costs by 10-25%.`,
  sections: [
    {
      heading: 'The Condenser Coils (Outside Unit) — Easy DIY',
      content: `The condenser is the large box outside your house with a fan on top. The coils are the metal fins that wrap around the outside of the unit. They release heat from the refrigerant into the outdoor air.\n\nWhen these fins get coated with dirt, grass clippings, cottonwood, pollen, and debris, airflow is restricted and the unit can't release heat efficiently. The compressor works harder, runs longer, and uses more electricity.\n\nYou can see the dirt buildup by looking at the fins from outside. Shine a flashlight through the fins from inside the unit... if you can barely see light, they're clogged.`,
    },
    {
      heading: 'How to Clean Condenser Coils',
      content: `Turn off the AC at the thermostat, then shut off power at the disconnect box near the outdoor unit (a pull-out switch or breaker). Never work on the unit with power on.\n\nRemove large debris (leaves, twigs, grass clippings) from around and on top of the unit by hand.\n\nRinse the coils with a garden hose from the INSIDE out. This is important... spray from inside the unit outward through the fins. Spraying from outside pushes dirt deeper into the fins. Use moderate pressure... not a pressure washer, which can flatten the delicate aluminum fins.\n\nFor heavy buildup, spray commercial coil cleaner ($8-$15 from any hardware store) onto the fins, let it foam for 10-15 minutes, then rinse from inside out. The foam loosens baked-on grime that water alone can't remove.\n\nStraighten any bent fins with a fin comb ($10) or a butter knife. Bent fins block airflow just like dirt does.\n\nClear 2 feet of clearance around all sides of the unit. Trim bushes, move stored items, and keep mulch or landscaping from encroaching.`,
    },
    {
      heading: 'The Evaporator Coils (Inside Unit) — More Advanced',
      content: `The evaporator coils are inside your home, usually in the air handler or furnace cabinet. They absorb heat from indoor air as the blower pushes air across them. These coils get coated with dust and (in humid climates) develop mold and biofilm.\n\nAccessing evaporator coils requires removing an access panel on the air handler. Some units make this easy (thumbscrews, removable panel). Others require a sheet metal screw and may be difficult to access. If you can't see or reach the coils, this is where a professional tune-up ($80-$150) earns its value.`,
    },
    {
      heading: 'How to Clean Evaporator Coils',
      content: `Turn off the system at the thermostat and breaker.\n\nRemove the access panel to expose the coils. They look like an A-frame or slab of tightly packed fins with copper tubes running through them.\n\nFor light dust: use a soft brush (a paintbrush works) to gently remove dust from the coil surface. Brush in the direction of the fins, not across them.\n\nFor heavier buildup: spray no-rinse evaporator coil cleaner ($8-$12) directly onto the coils. The foam breaks down dirt and drips into the drain pan below. No rinsing needed... the condensation during normal AC operation rinses the residue.\n\nWhile you're there: check the condensate drain pan and drain line. Pour a cup of bleach or vinegar into the drain line to prevent algae/mold clogs. A clogged drain line causes water to back up and overflow... potentially causing water damage.\n\nReassemble, restore power, and run the AC. You should notice improved airflow and cooler air within 30 minutes.`,
    },
    {
      heading: 'How Often to Clean',
      content: `Condenser coils (outside): once per year in spring, before cooling season starts. If you have cottonwood trees or heavy pollen, a quick rinse every 4-6 weeks during peak season helps.\n\nEvaporator coils (inside): once per year during your annual HVAC maintenance. If you DIY, spring is the best time.\n\nIf you have a professional HVAC tune-up done annually ($80-$150), both coil cleanings are typically included in the service. This is one of the main things they do during a tune-up.`,
    },
    {
      heading: 'What NOT to Do',
      content: `Don't use a pressure washer on the condenser. The high pressure flattens the aluminum fins, which restricts airflow worse than the dirt did.\n\nDon't use bleach or harsh chemicals on the coils. Use only HVAC-specific coil cleaner. Harsh chemicals can corrode the aluminum fins and copper tubes.\n\nDon't bend or damage the fins while cleaning. The fins are thin aluminum and bend easily. Bent fins restrict airflow. A fin comb straightens them, but prevention is easier.\n\nDon't skip the evaporator coils and only clean the condenser. Both sets of coils need to be clean for the system to work efficiently. A clean condenser with dirty evaporator coils still runs inefficiently.`,
    },
  ],
  relatedProducts: [
    { category: 'home', slug: 'air-conditioner', name: 'Air Conditioner' },
    { category: 'home', slug: 'ac-compressor', name: 'AC Compressor' },
    { category: 'home', slug: 'hvac-air-filter', name: 'HVAC Air Filter' },
  ],
  relatedGuides: [
    { type: 'troubleshoot' as const, slug: 'ac-not-working', name: 'AC Not Working' },
    { type: 'troubleshoot' as const, slug: 'ac-blowing-warm-air', name: 'AC Blowing Warm Air' },
  ],
}
