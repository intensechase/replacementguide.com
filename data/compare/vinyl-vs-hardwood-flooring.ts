import { ComparisonGuide } from './index'

export const guide: ComparisonGuide = {
  slug: 'vinyl-vs-hardwood-flooring',
  title: 'Vinyl Plank vs Hardwood Flooring',
  metaTitle: 'Vinyl Plank vs Hardwood Flooring: Which Should You Install?',
  metaDescription: 'Compare vinyl plank and hardwood flooring on cost, water resistance, durability, and looks to find the right flooring choice for every room in your home.',
  optionA: {
    name: 'Vinyl Plank Flooring',
    relatedProduct: { category: 'home', slug: 'vinyl-plank-flooring' },
  },
  optionB: {
    name: 'Hardwood Flooring',
    relatedProduct: { category: 'home', slug: 'hardwood-floors' },
  },
  intro: 'Vinyl plank flooring has become one of the most popular alternatives to hardwood... and for good reason. It handles moisture, costs less, and installs faster. But hardwood still has qualities that vinyl cannot match. Here is an honest look at both.',
  comparison: [
    {
      category: 'Cost',
      rows: [
        {
          factor: 'Material Cost',
          optionA: 'Runs $2 to $7 per square foot. Even premium luxury vinyl plank (LVP) costs less than mid-range hardwood.',
          optionB: 'Typically $6 to $15 per square foot for materials alone. Species, grade, and plank width all affect pricing.',
        },
        {
          factor: 'Installation Cost',
          optionA: 'Click-lock vinyl is easy to DIY. Professional installation adds $1 to $3 per square foot if needed.',
          optionB: 'Professional installation is recommended at $3 to $8 per square foot. Not a typical weekend project.',
        },
        {
          factor: 'Replacement Cost',
          optionA: 'Cannot be refinished... when it wears out in 10 to 20 years, you replace the whole floor. But the cost to replace is low.',
          optionB: 'Refinishing costs $3 to $5 per square foot and buys you another decade or more. Full replacement is rarely needed.',
        },
      ],
    },
    {
      category: 'Performance',
      rows: [
        {
          factor: 'Water Resistance',
          optionA: 'Fully waterproof. You can install it in bathrooms, kitchens, and basements without worry.',
          optionB: 'Very vulnerable to water. Standing moisture causes warping, staining, and potential mold underneath.',
        },
        {
          factor: 'Durability',
          optionA: 'Resists scratches and dents well. The wear layer protects against everyday damage from pets and furniture.',
          optionB: 'Softer species dent easily. Scratches happen but can be sanded out during refinishing.',
        },
        {
          factor: 'Lifespan',
          optionA: 'Lasts 10 to 20 years before it needs replacing. The wear layer eventually shows its age.',
          optionB: 'Can last 25 to 100 years with proper care and periodic refinishing. Few flooring materials come close.',
        },
      ],
    },
    {
      category: 'Practical Considerations',
      rows: [
        {
          factor: 'Appearance',
          optionA: 'Modern LVP looks realistic... but it is still a printed image on a vinyl core. Visible up close and underfoot.',
          optionB: 'Nothing matches real wood grain and natural variation. Hardwood develops a patina over time that many people love.',
        },
        {
          factor: 'Installation',
          optionA: 'Floats over most subfloors with minimal prep. No acclimation needed. A room can be done in a few hours.',
          optionB: 'Needs proper acclimation, flat subfloors, and skilled installation. Expect a multi-day project for a full home.',
        },
        {
          factor: 'Comfort and Feel',
          optionA: 'Softer and warmer underfoot than you might expect. Some products include built-in underlayment for extra cushion.',
          optionB: 'Solid and substantial feel. The weight and sound of real wood underfoot is part of its appeal.',
        },
      ],
    },
  ],
  verdict: 'Vinyl plank wins on practicality... it is cheaper, waterproof, and easier to install. Hardwood wins on longevity, looks, and home value. If you are choosing between them, ask yourself whether durability or character matters more to you.',
  chooseA: 'Vinyl plank is the right call for basements, kitchens, bathrooms, or anywhere moisture is a concern. It is also the smarter pick if you have pets or want to keep costs down.',
  chooseB: 'Choose hardwood for living rooms, bedrooms, and spaces where you want the look and feel of real wood. It is a long-term investment that adds real value to your home.',
}
