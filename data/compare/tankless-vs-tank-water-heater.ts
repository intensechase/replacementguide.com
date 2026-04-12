import { ComparisonGuide } from './index'

export const guide: ComparisonGuide = {
  slug: 'tankless-vs-tank-water-heater',
  title: 'Tankless vs Tank Water Heater',
  metaTitle: 'Tankless vs Tank Water Heater: Which Is Right for Your Home?',
  metaDescription: 'Honest comparison of tankless and tank water heaters covering cost, lifespan, efficiency, and installation so you can pick the best fit for your household.',
  optionA: {
    name: 'Tank Water Heater',
    relatedProduct: { category: 'home', slug: 'water-heater' },
  },
  optionB: {
    name: 'Tankless Water Heater',
    relatedProduct: { category: 'home', slug: 'tankless-water-heater' },
  },
  intro: 'This is one of the most common questions homeowners face when their water heater starts showing its age. Both types get the job done... they just go about it differently. Your household size, budget, and hot water habits will determine which one actually makes sense for you.',
  comparison: [
    {
      category: 'Cost',
      rows: [
        {
          factor: 'Upfront Cost',
          optionA: 'Typically $800 to $2,500 installed. Parts are widely available and most plumbers can handle the job without any special training.',
          optionB: 'Usually $1,500 to $4,500 installed. The unit itself costs more, and installation often requires electrical or gas line upgrades.',
        },
        {
          factor: 'Monthly Operating Cost',
          optionA: 'Heats water 24/7 to keep the tank ready... so you are paying to maintain temperature even when nobody is using hot water.',
          optionB: 'Only heats water on demand, which can cut energy bills by 24 to 34 percent for average households.',
        },
        {
          factor: 'Long-Term Value',
          optionA: 'Lower buy-in but shorter lifespan means you will likely replace it at least once more than a tankless unit over 20 years.',
          optionB: 'Higher upfront cost but the energy savings and longer lifespan often make up the difference over time.',
        },
      ],
    },
    {
      category: 'Performance',
      rows: [
        {
          factor: 'Hot Water Supply',
          optionA: 'Stores 40 to 80 gallons of hot water ready to go. Works great until the tank empties... then you are waiting 30 to 60 minutes for recovery.',
          optionB: 'Endless hot water as long as you stay within the flow rate. Running multiple fixtures at once can push smaller units past their limit though.',
        },
        {
          factor: 'Lifespan',
          optionA: 'Averages 8 to 12 years with proper maintenance. Sediment buildup and tank corrosion are the usual causes of failure.',
          optionB: 'Typically lasts 15 to 20 years. Replaceable parts mean you can often extend that even further.',
        },
        {
          factor: 'Space Requirements',
          optionA: 'Needs a dedicated floor area for the tank... usually a closet, basement corner, or garage spot.',
          optionB: 'Mounts on a wall and takes up very little space. A real advantage in smaller homes or condos.',
        },
      ],
    },
    {
      category: 'Practical Considerations',
      rows: [
        {
          factor: 'Installation Complexity',
          optionA: 'Straightforward swap if you already have a tank unit. Most installs take 2 to 3 hours.',
          optionB: 'May need a larger gas line, new venting, or an electrical panel upgrade. Retrofitting can add $500 to $2,000 to the project.',
        },
        {
          factor: 'Maintenance',
          optionA: 'Flush the tank once a year and replace the anode rod every 3 to 5 years. Pretty simple stuff.',
          optionB: 'Needs annual descaling in hard water areas. The process is not difficult but it is an extra step most people forget about.',
        },
        {
          factor: 'Cold Climate Performance',
          optionA: 'Handles cold inlet water fine since the tank has time to heat it. Consistent performance year-round.',
          optionB: 'Incoming water temperature affects output. In very cold climates, you may need a larger unit to compensate.',
        },
      ],
    },
  ],
  verdict: 'Neither option is universally better. Tank water heaters win on simplicity and upfront cost, while tankless units offer long-term savings and endless hot water. The right choice depends on how long you plan to stay in your home and how much hot water your household actually uses.',
  chooseA: 'Go with a tank water heater if you want the lowest upfront cost and a simple installation. It is the practical choice for most households, especially if you plan to move within 5 to 10 years.',
  chooseB: 'A tankless unit makes sense if you are staying put long enough to recoup the investment... typically 7 to 10 years. It is also worth it if you frequently run out of hot water or need to save space.',
}
