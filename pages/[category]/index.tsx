import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { products, type Product } from '@/data/products'

const CATEGORY_INFO: Record<string, { title: string; description: string; icon: string }> = {
  home: { title: 'Home', description: 'Appliances, systems, and materials in your home', icon: '🏠' },
  auto: { title: 'Auto', description: 'Car parts, tires, and vehicle components', icon: '🚗' },
  personal: { title: 'Personal', description: 'Everyday items and personal products', icon: '🪥' },
  outdoor: { title: 'Outdoor', description: 'Yard, deck, driveway, and exterior products', icon: '🏡' },
}

interface Props {
  category: string
  info: { title: string; description: string; icon: string }
  items: Product[]
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

  return { props: { category, info, items } }
}

function formatLifespan(p: Product): string {
  if (p.lifespanUnit === 'miles') {
    return `${(p.lifespanMin / 1000).toFixed(0)}-${(p.lifespanMax / 1000).toFixed(0)}K miles`
  }
  if (p.lifespanUnit === 'months') {
    return `${p.lifespanMin}-${p.lifespanMax} months`
  }
  return `${p.lifespanMin}-${p.lifespanMax} years`
}

export default function CategoryPage({ category, info, items }: Props) {
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
        </div>

        {/* Product list */}
        <div className="grid gap-3">
          {items.map(item => (
            <Link
              key={item.slug}
              href={`/${category}/${item.slug}`}
              className="flex items-center justify-between border border-slate-200 rounded-lg px-5 py-4 hover:border-slate-400 hover:shadow-sm transition-all group"
            >
              <div>
                <h2 className="font-medium text-slate-800 group-hover:text-emerald-600 transition-colors">{item.name}</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Replacement cost: ${item.costLow.toLocaleString()}-${item.costHigh.toLocaleString()}
                </p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className="text-sm font-semibold text-slate-700">{formatLifespan(item)}</span>
                <p className="text-xs text-slate-400">average lifespan</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
