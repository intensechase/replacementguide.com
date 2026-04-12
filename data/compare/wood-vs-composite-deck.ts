import { ComparisonGuide } from './index'

export const guide: ComparisonGuide = {
  slug: 'wood-vs-composite-deck',
  title: 'Wood vs Composite Deck',
  metaTitle: 'Wood vs Composite Decking: Cost, Maintenance, and Lifespan Compared',
  metaDescription: 'Compare wood and composite decking on cost, maintenance, durability, and appearance to decide which material is right for your outdoor space.',
  optionA: {
    name: 'Wood Deck',
    relatedProduct: { category: 'outdoor', slug: 'deck' },
  },
  optionB: {
    name: 'Composite Deck',
  },
  intro: 'Wood decks have been the standard for generations, but composite decking keeps getting better and more popular. The trade-off is straightforward... wood costs less upfront but needs regular work, while composite costs more but takes care of itself.',
  comparison: [
    {
      category: 'Cost',
      rows: [
        {
          factor: 'Material Cost',
          optionA: 'Pressure-treated lumber runs $2 to $5 per square foot. Cedar and redwood cost $5 to $10. Very budget-friendly.',
          optionB: 'Typically $8 to $20 per square foot for materials. Premium brands with capped polymer push even higher.',
        },
        {
          factor: 'Maintenance Cost',
          optionA: 'Staining or sealing every 1 to 3 years at $500 to $1,500 per application. This adds up significantly over the deck\'s life.',
          optionB: 'Occasional cleaning with soap and water. No staining, sealing, or sanding needed. Annual maintenance cost is nearly zero.',
        },
        {
          factor: 'Lifetime Cost',
          optionA: 'Lower upfront but the ongoing maintenance can make total cost comparable to composite over 20 years.',
          optionB: 'Higher initial investment but minimal ongoing expense. Over 25 years, many homeowners come out ahead.',
        },
      ],
    },
    {
      category: 'Durability',
      rows: [
        {
          factor: 'Lifespan',
          optionA: 'Pressure-treated wood lasts 10 to 15 years. Cedar and redwood can reach 15 to 25 years with good maintenance.',
          optionB: 'Most composite decking lasts 25 to 50 years. Warranties on premium brands can be 25 years or more.',
        },
        {
          factor: 'Weather Resistance',
          optionA: 'Vulnerable to rot, warping, and splitting without regular sealing. Moisture is wood\'s biggest enemy.',
          optionB: 'Resists moisture, rot, and insect damage. Some fading occurs in the first year but then stabilizes.',
        },
        {
          factor: 'Splinters and Safety',
          optionA: 'Wood develops splinters as it ages... not ideal if kids run around barefoot on the deck.',
          optionB: 'Smooth surface with no splinters. Stays comfortable for bare feet, though it can get hot in direct sun.',
        },
      ],
    },
    {
      category: 'Practical Considerations',
      rows: [
        {
          factor: 'Appearance',
          optionA: 'Natural wood grain that weathers into a silver-gray patina. Many people find the aging process charming.',
          optionB: 'Consistent color and texture that mimics wood. Looks good but lacks the organic variation of real wood.',
        },
        {
          factor: 'Eco-Friendliness',
          optionA: 'Renewable resource, but pressure-treating chemicals are not great for the environment. Disposal is also a concern.',
          optionB: 'Most composite boards contain recycled plastic and wood fibers. Less waste in the long run since it lasts longer.',
        },
        {
          factor: 'Repairability',
          optionA: 'Individual boards can be replaced easily and cheaply. Matching stain color is the only tricky part.',
          optionB: 'Board replacement is possible but matching color to weathered existing boards can be difficult.',
        },
      ],
    },
  ],
  verdict: 'Wood is still the right choice if upfront budget is tight and you do not mind the upkeep. Composite makes more sense as a set-it-and-forget-it solution... especially if you factor in the staining and sealing costs over time.',
  chooseA: 'Choose wood if you want the lowest entry cost or you genuinely enjoy maintaining your deck as a seasonal project. Natural wood also wins if authentic appearance matters most to you.',
  chooseB: 'Go composite if you want minimal maintenance and a longer lifespan. It is especially worth it if you have kids, do not want to deal with annual staining, or plan to stay in your home long-term.',
}
