import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { comparisonGuides, getGuide, type ComparisonGuide } from '@/data/compare'

interface Props {
  guide: ComparisonGuide
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: comparisonGuides.map(g => ({ params: { slug: g.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const guide = getGuide(params?.slug as string)
  if (!guide) return { notFound: true }
  return { props: { guide } }
}

export default function ComparePage({ guide }: Props) {
  const g = guide

  return (
    <>
      <Head>
        <title>{g.metaTitle}</title>
        <meta name="description" content={g.metaDescription} />
        <link rel="canonical" href={`https://replacementguide.com/compare/${g.slug}`} />
        <meta property="og:title" content={g.title} />
        <meta property="og:description" content={g.metaDescription} />
        <meta property="og:url" content={`https://replacementguide.com/compare/${g.slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://replacementguide.com' },
            { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://replacementguide.com/compare' },
            { '@type': 'ListItem', position: 3, name: g.title },
          ],
        }) }} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/compare" className="hover:text-slate-800 transition-colors">Compare</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">{g.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{g.title}</h1>

        {/* Intro */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-8">
          <p className="text-slate-700 leading-relaxed">{g.intro}</p>
        </div>

        {/* Comparison Tables */}
        {g.comparison.map((section, si) => (
          <section key={si} className="mb-8">
            <h2 className="text-xl font-bold mb-4">{section.category}</h2>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                <span>Factor</span>
                <span>{g.optionA.name}</span>
                <span>{g.optionB.name}</span>
              </div>
              {/* Rows */}
              {section.rows.map((row, ri) => (
                <div key={ri} className={`grid grid-cols-3 px-4 py-3 text-sm ${ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                  <span className="font-medium text-slate-800">{row.factor}</span>
                  <span className="text-slate-600">{row.optionA}</span>
                  <span className="text-slate-600">{row.optionB}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Verdict */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">The Verdict</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="text-slate-700 leading-relaxed">{g.verdict}</p>
          </div>
        </section>

        {/* Choose A / Choose B */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="font-semibold text-emerald-800 mb-2">Choose {g.optionA.name} if...</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{g.chooseA}</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-800 mb-2">Choose {g.optionB.name} if...</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{g.chooseB}</p>
          </div>
        </div>

        {/* Related Product Links */}
        {(g.optionA.relatedProduct || g.optionB.relatedProduct) && (
          <section className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-xl font-bold mb-4">Related Replacement Guides</h2>
            <div className="grid gap-3">
              {g.optionA.relatedProduct && (
                <Link
                  href={`/${g.optionA.relatedProduct.category}/${g.optionA.relatedProduct.slug}`}
                  className="block border border-slate-200 rounded-xl p-5 hover:border-slate-400 transition-colors group"
                >
                  <p className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">{g.optionA.name} Replacement Guide</p>
                  <p className="text-sm text-slate-500 mt-1">Lifespan, cost, warning signs, and repair vs replace &rarr;</p>
                </Link>
              )}
              {g.optionB.relatedProduct && g.optionB.relatedProduct.slug !== g.optionA.relatedProduct?.slug && (
                <Link
                  href={`/${g.optionB.relatedProduct.category}/${g.optionB.relatedProduct.slug}`}
                  className="block border border-slate-200 rounded-xl p-5 hover:border-slate-400 transition-colors group"
                >
                  <p className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">{g.optionB.name} Replacement Guide</p>
                  <p className="text-sm text-slate-500 mt-1">Lifespan, cost, warning signs, and repair vs replace &rarr;</p>
                </Link>
              )}
            </div>
          </section>
        )}

        <p className="text-xs text-slate-400 mt-10 text-center">
          Costs and specs are averages. Your actual numbers depend on your home, location, and specific products.
        </p>
      </div>
    </>
  )
}
