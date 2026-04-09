import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { maintenanceGuides, getMaintenanceGuide, type MaintenanceGuide } from '@/data/maintenance'

interface Props {
  guide: MaintenanceGuide
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: maintenanceGuides.map(g => ({ params: { slug: g.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const guide = getMaintenanceGuide(params?.slug as string)
  if (!guide) return { notFound: true }
  return { props: { guide } }
}

export default function MaintenancePage({ guide }: Props) {
  const g = guide

  return (
    <>
      <Head>
        <title>{g.metaTitle}</title>
        <meta name="description" content={g.metaDescription} />
        <link rel="canonical" href={`https://replacementguide.com/maintenance/${g.slug}`} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/maintenance" className="hover:text-slate-800 transition-colors">Maintenance</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">{g.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{g.title}</h1>

        {/* Quick answer */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
          <p className="text-xs text-emerald-600 uppercase tracking-wider mb-1">Recommended Frequency</p>
          <p className="text-2xl font-bold text-slate-800">{g.frequency}</p>
        </div>

        {/* Detail */}
        <section className="mb-10">
          <div className="space-y-3">
            {g.detail.split('\n\n').map((para, i) => (
              <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* Factors */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What Affects the Schedule</h2>
          <div className="space-y-3">
            {g.factors.map((f, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-medium text-slate-800 mb-1">{f.factor}</h3>
                <p className="text-sm text-slate-500">{f.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Signs you're overdue */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Signs You&apos;re Overdue</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <ul className="space-y-3">
              {g.signs.map((sign, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="text-amber-500 mt-0.5 shrink-0">⚠️</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Products */}
        {g.recommendedProducts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">What You&apos;ll Need</h2>
            <div className="space-y-3">
              {g.recommendedProducts.map((prod, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-slate-800">{prod.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{prod.description}</p>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600 shrink-0">{prod.priceRange}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3">Prices are approximate. We may earn a commission on purchases at no cost to you.</p>
          </section>
        )}

        {/* Related replacement guide */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link
            href={`/${g.relatedProduct.category}/${g.relatedProduct.slug}`}
            className="block border border-slate-200 rounded-xl p-5 hover:border-slate-400 transition-colors group"
          >
            <p className="text-xs text-slate-400 mb-1">Related Guide</p>
            <p className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">{g.relatedProduct.name} Replacement Guide</p>
            <p className="text-sm text-slate-500 mt-1">Lifespan, cost, warning signs, and repair vs replace →</p>
          </Link>
        </div>
      </div>
    </>
  )
}
