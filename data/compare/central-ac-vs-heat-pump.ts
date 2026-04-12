import { ComparisonGuide } from './index'

export const guide: ComparisonGuide = {
  slug: 'central-ac-vs-heat-pump',
  title: 'Central AC vs Heat Pump',
  metaTitle: 'Central AC vs Heat Pump: Efficiency, Cost, and Climate Compared',
  metaDescription: 'Compare central air conditioning and heat pumps on upfront cost, energy efficiency, heating ability, and climate suitability to pick the right system for your home.',
  optionA: {
    name: 'Central Air Conditioning',
    relatedProduct: { category: 'home', slug: 'air-conditioner' },
  },
  optionB: {
    name: 'Heat Pump',
    relatedProduct: { category: 'home', slug: 'heat-pump' },
  },
  intro: 'Central AC and heat pumps look almost identical from the outside and work on the same basic principle. The key difference is that a heat pump can reverse the process to heat your home too. Whether that extra capability is worth it depends on where you live.',
  comparison: [
    {
      category: 'Cost',
      rows: [
        {
          factor: 'Upfront Cost',
          optionA: 'Typically $3,000 to $7,000 installed. You will still need a separate furnace or heating system on top of this.',
          optionB: 'Usually $4,000 to $8,000 installed. More expensive as a single unit, but it handles both heating and cooling.',
        },
        {
          factor: 'Operating Cost',
          optionA: 'Efficient for cooling but you are paying to run a separate heating system in winter. Total HVAC costs depend on both units.',
          optionB: 'Extremely efficient in moderate climates... 2 to 3 times more efficient than electric resistance heating. One system covers both seasons.',
        },
        {
          factor: 'Available Rebates',
          optionA: 'Fewer incentives available since AC-only units are not part of most energy efficiency programs.',
          optionB: 'Federal tax credits and local utility rebates are widely available for heat pumps right now. That can knock $2,000 or more off the price.',
        },
      ],
    },
    {
      category: 'Performance',
      rows: [
        {
          factor: 'Cooling Ability',
          optionA: 'Excellent. Central AC is purpose-built for cooling and performs well even in extreme heat.',
          optionB: 'Comparable cooling performance. Most homeowners would not notice a difference in cooling between the 2 systems.',
        },
        {
          factor: 'Heating Ability',
          optionA: 'None. You need a separate furnace, boiler, or other heating system for winter.',
          optionB: 'Heats efficiently down to about 25 to 30 degrees F. Below that, most heat pumps need backup heating to keep up.',
        },
        {
          factor: 'Lifespan',
          optionA: 'Averages 15 to 20 years since it only runs during cooling season. Less wear overall.',
          optionB: 'Typically 10 to 15 years because it runs year-round. The compressor handles double the workload of a cooling-only unit.',
        },
      ],
    },
    {
      category: 'Practical Considerations',
      rows: [
        {
          factor: 'Climate Suitability',
          optionA: 'Works everywhere you need cooling. Pairs with whatever heating system makes sense for your region.',
          optionB: 'Ideal in mild to moderate climates. In areas with harsh winters, you will likely need a supplemental heat source.',
        },
        {
          factor: 'Installation',
          optionA: 'Standard installation that most HVAC companies handle routinely. Uses existing ductwork.',
          optionB: 'Similar installation process. Uses the same ductwork and outdoor unit placement as central AC.',
        },
        {
          factor: 'Environmental Impact',
          optionA: 'Cooling only... your carbon footprint depends on whatever heating system you pair it with.',
          optionB: 'Significantly lower carbon footprint when it replaces gas or oil heating. One of the most efficient ways to heat a home.',
        },
      ],
    },
  ],
  verdict: 'In mild and moderate climates, heat pumps are hard to beat... one system for heating and cooling with excellent efficiency. In regions with brutal winters, a central AC paired with a gas furnace is still the more reliable combination.',
  chooseA: 'Stick with central AC if you live in an area with very cold winters and already have a furnace you are happy with. It is a proven cooling solution at a lower upfront cost.',
  chooseB: 'A heat pump makes sense in moderate climates where winter temps rarely drop below freezing. It is also worth considering if you want to reduce your reliance on natural gas or heating oil.',
}
