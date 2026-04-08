import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { products, type Product } from '@/data/products'

const CATEGORY_NAMES: Record<string, string> = {
  home: 'Home', auto: 'Auto', personal: 'Personal', outdoor: 'Outdoor',
}

interface Props {
  product: Product
  related: Product[]
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: products.map(p => ({ params: { category: p.category, product: p.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const category = params?.category as string
  const slug = params?.product as string

  const product = products.find(p => p.category === category && p.slug === slug)
  if (!product) return { notFound: true }

  const related = products
    .filter(p => p.category === category && p.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6)

  return { props: { product, related } }
}

function formatLifespan(p: Product): string {
  if (p.lifespanUnit === 'miles') return `${(p.lifespanMin / 1000).toFixed(0)}-${(p.lifespanMax / 1000).toFixed(0)}K miles`
  if (p.lifespanUnit === 'months') return `${p.lifespanMin}-${p.lifespanMax} months`
  return `${p.lifespanMin}-${p.lifespanMax} years`
}

function formatCost(low: number, high: number): string {
  return `$${low.toLocaleString()} - $${high.toLocaleString()}`
}

export default function ProductPage({ product, related }: Props) {
  const p = product
  const catName = CATEGORY_NAMES[p.category]
  const lifespan = formatLifespan(p)

  return (
    <>
      <Head>
        <title>When to Replace Your {p.name} — Lifespan, Warning Signs &amp; Cost | ReplacementGuide</title>
        <meta name="description" content={`How long does a ${p.name.toLowerCase()} last? Average lifespan is ${lifespan}. Learn the warning signs, repair vs replace costs, and when it's time for a new one.`} />
        <link rel="canonical" href={`https://replacementguide.com/${p.category}/${p.slug}`} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href={`/${p.category}`} className="hover:text-slate-800 transition-colors">{catName}</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">{p.name}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">When to Replace Your {p.name}</h1>
        <p className="text-slate-500 mb-8">Average lifespan, warning signs, and whether to repair or replace.</p>

        {/* Quick answer box */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-emerald-600 uppercase tracking-wider mb-1">Average Lifespan</p>
              <p className="text-xl font-bold text-slate-800">{lifespan}</p>
            </div>
            <div>
              <p className="text-xs text-emerald-600 uppercase tracking-wider mb-1">Replacement Cost</p>
              <p className="text-xl font-bold text-slate-800">{formatCost(p.costLow, p.costHigh)}</p>
            </div>
            <div>
              <p className="text-xs text-emerald-600 uppercase tracking-wider mb-1">Category</p>
              <p className="text-xl font-bold text-slate-800">{catName}</p>
            </div>
          </div>
        </div>

        {/* How Long Does It Last */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How Long Does a {p.name} Last?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            The average {p.name.toLowerCase()} lasts {lifespan}. That said... yours might last longer or shorter depending on how it was installed, how often you maintain it, the brand, and your local conditions.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            If your {p.name.toLowerCase()} is approaching the {p.lifespanUnit === 'years' ? `${p.lifespanMin}-year` : p.lifespanUnit === 'miles' ? `${(p.lifespanMin/1000).toFixed(0)}K-mile` : `${p.lifespanMin}-month`} mark, start paying attention. You don&apos;t need to replace it immediately... but you should know the warning signs.
          </p>
        </section>

        {/* Warning Signs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Warning Signs It&apos;s Time to Replace</h2>
          <p className="text-slate-500 text-sm mb-4">If you&apos;re seeing two or more of these, it&apos;s time to start shopping.</p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-amber-500 mt-0.5">⚠️</span>
                <span>It&apos;s past its average lifespan ({lifespan})</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-amber-500 mt-0.5">⚠️</span>
                <span>Repairs are becoming more frequent... you&apos;ve called someone twice in the last year</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-amber-500 mt-0.5">⚠️</span>
                <span>Performance has noticeably declined compared to when it was new</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-amber-500 mt-0.5">⚠️</span>
                <span>Your energy or utility bills have been creeping up without explanation</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-amber-500 mt-0.5">⚠️</span>
                <span>It&apos;s making unusual noises, leaking, or showing visible wear</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Repair or Replace */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Should You Repair or Replace?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The general rule: if the repair costs more than 50% of what a new {p.name.toLowerCase()} would cost... replace it. You&apos;re throwing money at something that&apos;s on its way out.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-semibold text-blue-800 mb-3">🔧 Repair if...</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• It&apos;s less than {Math.floor(p.lifespanMin * 0.6)} {p.lifespanUnit} old</li>
                <li>• This is the first major issue</li>
                <li>• Repair cost is under {formatCost(Math.floor(p.costLow * 0.3), Math.floor(p.costHigh * 0.3))}</li>
                <li>• The rest of the unit is in good shape</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-semibold text-red-800 mb-3">🔄 Replace if...</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• It&apos;s past {p.lifespanMin} {p.lifespanUnit}</li>
                <li>• This is the second or third repair</li>
                <li>• Repair quote is over {formatCost(Math.floor(p.costLow * 0.5), Math.floor(p.costHigh * 0.5))}</li>
                <li>• Newer models would save you money on energy</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-slate-50 rounded-xl p-5">
            <p className="text-sm text-slate-600">
              <strong>Replacement cost:</strong> A new {p.name.toLowerCase()} typically costs {formatCost(p.costLow, p.costHigh)} installed. Prices vary by region, brand, and complexity of installation.
            </p>
          </div>
        </section>

        {/* How to Extend Its Life */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How to Make It Last Longer</h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-0.5">✓</span>
              <span>Follow the manufacturer&apos;s recommended maintenance schedule</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-0.5">✓</span>
              <span>Address small problems early... before they become expensive ones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-0.5">✓</span>
              <span>Keep records of when it was installed and any repairs done</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-0.5">✓</span>
              <span>Use it within its designed capacity... don&apos;t overwork it</span>
            </li>
          </ul>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-xl font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {related.map(r => (
                <Link
                  key={r.slug}
                  href={`/${r.category}/${r.slug}`}
                  className="border border-slate-200 rounded-lg px-4 py-3 hover:border-slate-400 transition-colors group"
                >
                  <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-600 block">{r.name}</span>
                  <span className="text-xs text-slate-400">{formatLifespan(r)}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <p className="text-xs text-slate-400 mt-10 text-center">
          Lifespans and costs are averages based on industry data. Your results may vary based on brand, usage, climate, and maintenance. Consult a professional for specific advice.
        </p>
      </div>
    </>
  )
}
