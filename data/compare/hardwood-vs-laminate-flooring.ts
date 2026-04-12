import { ComparisonGuide } from './index'

export const guide: ComparisonGuide = {
  slug: 'hardwood-vs-laminate-flooring',
  title: 'Hardwood vs Laminate Flooring',
  metaTitle: 'Hardwood vs Laminate Flooring: Real Differences in Cost and Quality',
  metaDescription: 'Compare hardwood and laminate flooring on cost, durability, water resistance, and appearance to choose the right flooring for your home and lifestyle.',
  optionA: {
    name: 'Hardwood Flooring',
    relatedProduct: { category: 'home', slug: 'hardwood-floors' },
  },
  optionB: {
    name: 'Laminate Flooring',
    relatedProduct: { category: 'home', slug: 'laminate-flooring' },
  },
  intro: 'Hardwood has been the gold standard in flooring for centuries, but laminate has come a long way. Today\'s laminate can look remarkably close to real wood... at a fraction of the price. The question is whether the differences still matter for your situation.',
  comparison: [
    {
      category: 'Cost',
      rows: [
        {
          factor: 'Material Cost',
          optionA: 'Typically $6 to $15 per square foot for materials. Exotic species and wider planks push the price higher.',
          optionB: 'Usually $3 to $8 per square foot. You can floor a large room for what hardwood would cost in a small one.',
        },
        {
          factor: 'Installation Cost',
          optionA: 'Professional installation runs $3 to $8 per square foot. Nailing or gluing down takes skill and time.',
          optionB: 'Click-lock systems make DIY installation realistic. Professional install runs $2 to $5 per square foot if you prefer.',
        },
        {
          factor: 'Long-Term Value',
          optionA: 'Adds real value to your home. Hardwood floors are consistently listed as a top feature by home buyers.',
          optionB: 'Does not add the same resale value as hardwood. Buyers can usually tell the difference and price accordingly.',
        },
      ],
    },
    {
      category: 'Performance',
      rows: [
        {
          factor: 'Durability',
          optionA: 'Can dent and scratch, especially softer species like pine. But damage adds character over time to many homeowners.',
          optionB: 'The wear layer resists scratches well. However, once that layer wears through, the floor cannot be repaired.',
        },
        {
          factor: 'Water Resistance',
          optionA: 'Not water friendly at all. Standing water warps and stains hardwood... spills need to be cleaned up quickly.',
          optionB: 'Better than hardwood but not waterproof. The core can swell if water seeps into seams. Not ideal for bathrooms.',
        },
        {
          factor: 'Refinishing',
          optionA: 'Can be sanded and refinished 3 to 5 times over its lifetime. This is the main reason hardwood lasts 25 to 100 years.',
          optionB: 'Cannot be refinished. When it wears out or gets damaged, the only option is replacement.',
        },
      ],
    },
    {
      category: 'Practical Considerations',
      rows: [
        {
          factor: 'Appearance',
          optionA: 'Natural grain patterns that are unique to every plank. The look and feel of real wood is hard to fully replicate.',
          optionB: 'Printed patterns repeat every few planks. High-end laminate looks convincing from a distance but less so up close.',
        },
        {
          factor: 'Installation Ease',
          optionA: 'Best left to professionals unless you have experience. Requires acclimation, proper subfloor prep, and specialized tools.',
          optionB: 'Floating click-lock installation is genuinely DIY-friendly. Most people can handle a room in a weekend.',
        },
        {
          factor: 'Comfort Underfoot',
          optionA: 'Solid and warm with a natural feel. Can be cold without radiant heat but generally comfortable.',
          optionB: 'Can feel hollow or plasticky underfoot. A good underlayment helps, but it does not match the feel of real wood.',
        },
      ],
    },
  ],
  verdict: 'Hardwood is the better long-term investment if you can afford it... it lasts longer, looks better, and adds real value to your home. Laminate is a smart choice when budget matters or you need flooring in a space that gets heavy use from kids and pets.',
  chooseA: 'Go with hardwood if you are investing in a home you plan to keep for a long time. The ability to refinish it means your floors can look fresh for decades.',
  chooseB: 'Laminate makes sense for tight budgets, rental properties, or rooms where you want a wood look without worrying about every scratch and spill.',
}
