import { ComparisonGuide } from './index'

export const guide: ComparisonGuide = {
  slug: 'gas-vs-electric-oven',
  title: 'Gas vs Electric Oven',
  metaTitle: 'Gas vs Electric Oven: Cooking Performance, Cost, and Installation',
  metaDescription: 'Compare gas and electric ovens on cooking performance, purchase price, operating cost, and installation to find the right oven for your kitchen.',
  optionA: {
    name: 'Gas Oven',
    relatedProduct: { category: 'home', slug: 'oven' },
  },
  optionB: {
    name: 'Electric Oven',
    relatedProduct: { category: 'home', slug: 'oven' },
  },
  intro: 'The gas vs electric oven debate comes up every time someone remodels a kitchen or replaces a range. Professional chefs tend to prefer gas stovetops, but the oven side of the equation is less clear-cut. Both have genuine strengths depending on what you cook.',
  comparison: [
    {
      category: 'Cost',
      rows: [
        {
          factor: 'Purchase Price',
          optionA: 'Similar price range to electric at most tiers. Gas ranges start around $500 and go up from there.',
          optionB: 'Entry-level electric ovens are slightly cheaper. The widest selection of budget models is electric.',
        },
        {
          factor: 'Operating Cost',
          optionA: 'Natural gas is cheaper than electricity in most areas, so gas ovens cost less to run per hour of use.',
          optionB: 'Higher energy cost per use. The difference is modest for most households... maybe $20 to $50 per year.',
        },
        {
          factor: 'Installation Cost',
          optionA: 'Requires a gas line to the kitchen. If you do not already have one, running a new line costs $200 to $1,000.',
          optionB: 'Needs a 240-volt outlet. Most kitchens have one, but adding one runs $200 to $400 if needed.',
        },
      ],
    },
    {
      category: 'Cooking Performance',
      rows: [
        {
          factor: 'Even Heating',
          optionA: 'Gas ovens tend to have hot spots because the flame creates uneven heat distribution. Rotating pans helps.',
          optionB: 'Electric ovens provide more consistent, even heat. Better for baking where temperature uniformity matters.',
        },
        {
          factor: 'Moisture',
          optionA: 'Gas combustion produces moisture inside the oven. This can be good for roasting meats but tricky for crispy baked goods.',
          optionB: 'Dry heat environment. Better for getting crispy crusts on bread and pastries.',
        },
        {
          factor: 'Preheating',
          optionA: 'Takes a bit longer to preheat since gas heats air rather than surfaces. Usually 10 to 15 minutes.',
          optionB: 'Heats up faster, especially convection models. Most reach target temperature in 7 to 12 minutes.',
        },
        {
          factor: 'Broiling',
          optionA: 'Gas broilers provide intense, adjustable flame. Great for searing and charring when you want that direct heat.',
          optionB: 'Electric broilers heat evenly but may not reach the same intensity. Adequate for most home cooking needs.',
        },
      ],
    },
    {
      category: 'Practical Considerations',
      rows: [
        {
          factor: 'Safety',
          optionA: 'Open flame and gas leak potential require a working carbon monoxide detector. Not ideal for homes with very young children.',
          optionB: 'No combustion or gas leak concerns. Residual heat from coils or glass tops is the main safety consideration.',
        },
        {
          factor: 'Stovetop Preference',
          optionA: 'Gas burners offer instant heat adjustment and visual flame feedback. Most home cooks find them more responsive.',
          optionB: 'Smooth electric cooktops are easier to clean. Induction models heat as fast as gas with more precise temperature control.',
        },
        {
          factor: 'Reliability',
          optionA: 'Gas ovens have fewer electronic components and can work during power outages with manual ignition.',
          optionB: 'More reliant on electronics but generally very reliable. Will not work at all during a power outage.',
        },
      ],
    },
  ],
  verdict: 'For the oven specifically, electric tends to bake more evenly... which matters if you do a lot of baking. For the stovetop, gas gives you better control. Many serious home cooks actually prefer a dual-fuel range that combines a gas stovetop with an electric oven.',
  chooseA: 'Go gas if you already have a gas line and prefer responsive stovetop cooking. It is also the practical choice in areas where natural gas is significantly cheaper than electricity.',
  chooseB: 'Choose electric if even baking is your priority or you do not have a gas hookup. Induction cooktops in particular offer the speed of gas with easier cleanup.',
}
