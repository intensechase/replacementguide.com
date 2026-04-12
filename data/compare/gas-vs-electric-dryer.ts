import { ComparisonGuide } from './index'

export const guide: ComparisonGuide = {
  slug: 'gas-vs-electric-dryer',
  title: 'Gas vs Electric Dryer',
  metaTitle: 'Gas vs Electric Dryer: Cost, Efficiency, and Installation Compared',
  metaDescription: 'Compare gas and electric dryers on purchase price, operating cost, drying speed, and installation requirements to find the right fit for your laundry setup.',
  optionA: {
    name: 'Gas Dryer',
    relatedProduct: { category: 'home', slug: 'dryer' },
  },
  optionB: {
    name: 'Electric Dryer',
    relatedProduct: { category: 'home', slug: 'dryer' },
  },
  intro: 'Choosing between gas and electric often comes down to what hookups you already have in your laundry room. But if you are building new or renovating, it is worth looking at the full picture. The cost difference over a dryer\'s lifetime might surprise you.',
  comparison: [
    {
      category: 'Cost',
      rows: [
        {
          factor: 'Purchase Price',
          optionA: 'Usually $50 to $150 more than the same model in electric. The gas components add to manufacturing cost.',
          optionB: 'Slightly cheaper upfront. The most affordable dryers on the market are almost always electric.',
        },
        {
          factor: 'Operating Cost',
          optionA: 'Natural gas is cheaper than electricity in most areas. Expect to save $30 to $50 per year compared to a standard electric dryer.',
          optionB: 'Costs more per load to run in most markets. Over 10 years that adds up to a few hundred dollars more than gas.',
        },
        {
          factor: 'Installation Cost',
          optionA: 'Needs a gas line and proper venting. If you do not already have a gas hookup, adding one can cost $200 to $500.',
          optionB: 'Requires a 240-volt outlet. Most homes have one in the laundry area already... if not, an electrician can add one for $200 to $350.',
        },
      ],
    },
    {
      category: 'Performance',
      rows: [
        {
          factor: 'Drying Speed',
          optionA: 'Heats up faster and runs hotter, so loads typically finish 10 to 15 minutes sooner. Noticeable with larger loads.',
          optionB: 'Takes a bit longer per cycle. Not a huge deal for most people, but it adds up if you do a lot of laundry.',
        },
        {
          factor: 'Heat and Fabric Care',
          optionA: 'Produces a moist heat that can be gentler on some fabrics. Clothes tend to come out slightly less static-prone.',
          optionB: 'Dry heat can be harder on delicate fabrics over time. Using a lower heat setting helps but extends drying time.',
        },
        {
          factor: 'Lifespan',
          optionA: 'Same 10 to 14 year average as electric. Gas components can fail but are generally repairable.',
          optionB: 'Same 10 to 14 year range. Heating elements are the most common part to replace and they are inexpensive.',
        },
      ],
    },
    {
      category: 'Practical Considerations',
      rows: [
        {
          factor: 'Ventilation',
          optionA: 'Must be vented outside. No exceptions... gas dryers produce combustion byproducts that need to exit your home.',
          optionB: 'Standard models need venting too, but ventless condensation and heat pump dryers are available if you cannot vent outside.',
        },
        {
          factor: 'Safety',
          optionA: 'Small risk of gas leaks. Keep a carbon monoxide detector nearby and make sure connections are inspected regularly.',
          optionB: 'No combustion concerns. The main risk is a clogged lint trap or vent causing overheating, which applies to both types.',
        },
        {
          factor: 'Availability of Models',
          optionA: 'Fewer options on the market. Not every model comes in a gas version, so your selection is somewhat limited.',
          optionB: 'Wider selection across all price points and brands. You will have more features and styles to choose from.',
        },
      ],
    },
  ],
  verdict: 'If you already have a gas hookup, a gas dryer will save you money over time and dry clothes a bit faster. If you only have an electric outlet... or you want the simplest possible setup... electric is the way to go. The lifetime cost difference is real but not dramatic.',
  chooseA: 'Pick a gas dryer if you already have a gas line in your laundry room and you do a lot of laundry. The faster cycles and lower operating cost make it worth the slightly higher purchase price.',
  chooseB: 'Go electric if you do not have gas hookups or you want the widest range of models to choose from. Ventless electric options also give you flexibility on where you put the dryer.',
}
