import { ComparisonGuide } from './index'

export const guide: ComparisonGuide = {
  slug: 'asphalt-vs-metal-roof',
  title: 'Asphalt Shingles vs Metal Roof',
  metaTitle: 'Asphalt Shingles vs Metal Roof: Cost, Lifespan, and Value Compared',
  metaDescription: 'Compare asphalt shingles and metal roofing on cost, durability, maintenance, and energy efficiency to decide which roof material fits your home and budget.',
  optionA: {
    name: 'Asphalt Shingles',
    relatedProduct: { category: 'home', slug: 'roof' },
  },
  optionB: {
    name: 'Metal Roof',
    relatedProduct: { category: 'home', slug: 'metal-roof' },
  },
  intro: 'Asphalt shingles cover the vast majority of American homes for a reason... they work well and they are affordable. But metal roofing has been gaining ground, especially with homeowners who want something that lasts longer. Here is how they actually stack up.',
  comparison: [
    {
      category: 'Cost',
      rows: [
        {
          factor: 'Upfront Cost',
          optionA: 'Typically $5,000 to $15,000 for a full roof. Asphalt is the most affordable roofing material by a wide margin.',
          optionB: 'Usually $10,000 to $25,000 or more. Standing seam panels cost more than corrugated, and the labor is specialized.',
        },
        {
          factor: 'Maintenance Cost',
          optionA: 'Individual shingles can be replaced cheaply. Expect to spend on minor repairs as the roof ages past 15 years.',
          optionB: 'Very little ongoing cost. Occasional fastener tightening and keeping debris out of panel seams is about it.',
        },
        {
          factor: 'Resale Value',
          optionA: 'Buyers expect asphalt... it will not add a premium but a worn roof will definitely hurt your sale price.',
          optionB: 'Can add 1 to 6 percent to home value according to some studies. The long remaining lifespan is attractive to buyers.',
        },
      ],
    },
    {
      category: 'Durability',
      rows: [
        {
          factor: 'Lifespan',
          optionA: 'Averages 20 to 30 years. Higher-end architectural shingles can push toward the upper end with proper ventilation.',
          optionB: 'Lasts 40 to 70 years depending on the metal and coating. Some copper and zinc roofs exceed 100 years.',
        },
        {
          factor: 'Weather Resistance',
          optionA: 'Handles moderate weather well. High winds can lift shingles, and hail can cause granule loss and cracking.',
          optionB: 'Excellent in wind, rain, and snow. Metal panels shed snow easily and resist hail better... though large hail can dent some metals.',
        },
        {
          factor: 'Fire Resistance',
          optionA: 'Class A fire rating with proper underlayment. Not fireproof on its own but meets building code requirements.',
          optionB: 'Non-combustible. Metal roofing is one of the safest options in wildfire-prone areas.',
        },
      ],
    },
    {
      category: 'Practical Considerations',
      rows: [
        {
          factor: 'Energy Efficiency',
          optionA: 'Absorbs heat. Lighter colors help, but asphalt roofs generally contribute to higher attic temperatures in summer.',
          optionB: 'Reflects solar heat and can reduce cooling costs by 10 to 25 percent. A meaningful difference in hot climates.',
        },
        {
          factor: 'Installation',
          optionA: 'Almost any roofing contractor can install asphalt shingles. Quick turnaround... most jobs finish in 1 to 3 days.',
          optionB: 'Requires specialized installers. Fewer contractors do metal roofing, and the work takes longer.',
        },
        {
          factor: 'Noise',
          optionA: 'Quiet during rain and hail. The shingle layers absorb sound effectively.',
          optionB: 'Can be louder during heavy rain. Proper underlayment and insulation reduce this, but it is still noticeable in some homes.',
        },
      ],
    },
  ],
  verdict: 'Asphalt shingles remain the practical choice for most homeowners... affordable, reliable, and easy to install. Metal roofing is a long-term investment that pays off if you plan to stay in your home for decades. The gap in upfront cost is significant, so your timeline matters.',
  chooseA: 'Asphalt makes sense if budget is a priority or you plan to sell within 15 to 20 years. It is a proven material that any roofer can work with.',
  chooseB: 'Go with metal if you want a roof that could outlast your mortgage. It is also the stronger choice in areas with extreme weather, wildfires, or heavy snowfall.',
}
