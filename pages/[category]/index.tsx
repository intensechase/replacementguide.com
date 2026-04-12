import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { products, type Product } from '@/data/products'
import { homeSubcategories, homeSubcategoryMap, type HomeSubcategory } from '@/data/home-subcategories'

const CATEGORY_INFO: Record<string, { title: string; description: string; icon: string }> = {
  home: { title: 'Home', description: 'Appliances, systems, and materials in your home', icon: '🏠' },
  auto: { title: 'Auto', description: 'Car parts, tires, and vehicle components', icon: '🚗' },
  personal: { title: 'Personal', description: 'Everyday items and personal products', icon: '🪥' },
  outdoor: { title: 'Outdoor', description: 'Yard, deck, driveway, and exterior products', icon: '🏡' },
}

interface SubcategoryGroup {
  subcategory: HomeSubcategory
  items: Product[]
}

interface Props {
  category: string
  info: { title: string; description: string; icon: string }
  items: Product[]
  subcategoryGroups?: SubcategoryGroup[]
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.keys(CATEGORY_INFO).map(c => ({ params: { category: c } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const category = params?.category as string
  const info = CATEGORY_INFO[category]
  if (!info) return { notFound: true }

  const items = products
    .filter(p => p.category === category)
    .sort((a, b) => a.name.localeCompare(b.name))

  if (category === 'home') {
    const groups: SubcategoryGroup[] = homeSubcategories
      .map(sub => ({
        subcategory: sub,
        items: items.filter(p => (homeSubcategoryMap[p.slug] || 'other') === sub.slug)
          .sort((a, b) => a.name.localeCompare(b.name)),
      }))
      .filter(g => g.items.length > 0)

    // Catch any uncategorized items
    const categorized = new Set(Object.keys(homeSubcategoryMap))
    const uncategorized = items.filter(p => !categorized.has(p.slug))
    if (uncategorized.length > 0) {
      groups.push({
        subcategory: { name: 'Other', slug: 'other', icon: '📦', description: 'Other home products' },
        items: uncategorized,
      })
    }

    return { props: { category, info, items, subcategoryGroups: groups } }
  }

  return { props: { category, info, items } }
}

function formatLifespan(p: Product): string {
  const same = p.lifespanMin === p.lifespanMax
  const unit = p.lifespanUnit === 'weeks' && p.lifespanMin === 1 && same ? 'week' : p.lifespanUnit === 'months' && p.lifespanMin === 1 && same ? 'month' : p.lifespanUnit === 'years' && p.lifespanMin === 1 && same ? 'year' : p.lifespanUnit
  if (p.lifespanUnit === 'miles') {
    const min = `${(p.lifespanMin / 1000).toFixed(0)}K`
    const max = `${(p.lifespanMax / 1000).toFixed(0)}K`
    return same ? `${min} miles` : `${min}-${max} miles`
  }
  if (p.lifespanUnit === 'weeks') return same ? `${p.lifespanMin} ${unit}` : `${p.lifespanMin}-${p.lifespanMax} weeks`
  if (p.lifespanUnit === 'months') return same ? `${p.lifespanMin} ${unit}` : `${p.lifespanMin}-${p.lifespanMax} months`
  return same ? `${p.lifespanMin} ${unit}` : `${p.lifespanMin}-${p.lifespanMax} years`
}

function ProductRow({ item, category }: { item: Product; category: string }) {
  return (
    <Link
      href={`/${category}/${item.slug}`}
      className="flex items-center justify-between border border-slate-200 rounded-lg px-5 py-4 hover:border-slate-400 hover:shadow-sm transition-all group"
    >
      <div>
        <h3 className="font-medium text-slate-800 group-hover:text-emerald-600 transition-colors">{item.name}</h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Replacement cost: ${item.costLow.toLocaleString()}-${item.costHigh.toLocaleString()}
        </p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <span className="text-sm font-semibold text-slate-700">{formatLifespan(item)}</span>
        <p className="text-xs text-slate-400">average lifespan</p>
      </div>
    </Link>
  )
}

export default function CategoryPage({ category, info, items, subcategoryGroups }: Props) {
  return (
    <>
      <Head>
        <title>{info.title} Replacement Guides — When to Replace Everything in Your {info.title} | ReplacementGuide</title>
        <meta name="description" content={`How long does it last? When to replace it? Repair or replace? Guides for ${items.length}+ ${info.title.toLowerCase()} products.`} />
        <link rel="canonical" href={`https://replacementguide.com/${category}`} />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">{info.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <span className="text-4xl mb-3 block">{info.icon}</span>
          <h1 className="text-3xl font-bold mb-2">{info.title} Replacement Guides</h1>
          <p className="text-slate-500">{info.description}. How long they last, when to replace them, and whether to repair or replace.</p>
          <p className="text-sm text-slate-400 mt-2">{items.length} guides</p>
        </div>

        {/* Subcategorized view for home, flat list for others */}
        {subcategoryGroups ? (
          <>
            {/* Quick jump nav */}
            <div className="flex flex-wrap gap-2 mb-8">
              {subcategoryGroups.map(g => (
                <a
                  key={g.subcategory.slug}
                  href={`#${g.subcategory.slug}`}
                  className="text-xs border border-slate-200 rounded-full px-3 py-1.5 hover:border-slate-400 hover:bg-slate-50 transition-colors"
                >
                  <span className="mr-1">{g.subcategory.icon}</span>
                  {g.subcategory.name}
                  <span className="text-slate-400 ml-1">({g.items.length})</span>
                </a>
              ))}
            </div>

            {/* Subcategory sections */}
            {subcategoryGroups.map(g => (
              <section key={g.subcategory.slug} id={g.subcategory.slug} className="mb-10">
                <div className="mb-4">
                  <h2 className="text-xl font-bold">
                    <span className="mr-2">{g.subcategory.icon}</span>
                    {g.subcategory.name}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">{g.subcategory.description}</p>
                </div>
                <div className="grid gap-3">
                  {g.items.map(item => (
                    <ProductRow key={item.slug} item={item} category={category} />
                  ))}
                </div>
              </section>
            ))}
          </>
        ) : (
          <div className="grid gap-3">
            {items.map(item => (
              <ProductRow key={item.slug} item={item} category={category} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
