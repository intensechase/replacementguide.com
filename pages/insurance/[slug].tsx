import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { guides, getGuide, type InsuranceGuide } from '@/data/insurance'

interface Props {
  guide: InsuranceGuide
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: guides.map(g => ({ params: { slug: g.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const guide = getGuide(params?.slug as string)
  if (!guide) return { notFound: true }
  return { props: { guide } }
}

export default function InsurancePage({ guide }: Props) {
  const g = guide

  return (
    <>
      <Head>
        <title>{g.metaTitle}</title>
        <meta name="description" content={g.metaDescription} />
        <link rel="canonical" href={`https://replacementguide.com/insurance/${g.slug}`} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/insurance" className="hover:text-slate-800 transition-colors">Insurance Guides</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">{g.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{g.title}</h1>

        {/* Quick Answer */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">The Short Answer</p>
          <p className="text-slate-700 leading-relaxed">{g.quickAnswer}</p>
        </div>

        {/* What IS Covered */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What Your Insurance Typically Covers</h2>
          <div className="space-y-4">
            {g.coveredScenarios.map((item, i) => (
              <div key={i} className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 text-emerald-600 text-lg">✓</span>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{item.scenario}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What is NOT Covered */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What Your Insurance Typically Does NOT Cover</h2>
          <div className="space-y-4">
            {g.notCoveredScenarios.map((item, i) => (
              <div key={i} className="border border-red-200 bg-red-50 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 text-red-500 text-lg">✗</span>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{item.scenario}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real World Examples */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Real-World Examples</h2>
          <p className="text-slate-500 text-sm mb-4">Every policy is different, but here&apos;s how these situations typically play out:</p>
          <div className="space-y-3">
            {g.realWorldExamples.map((ex, i) => (
              <div key={i} className={`border rounded-xl p-4 ${ex.covered ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`}>
                <div className="flex items-start gap-3">
                  <span className={`shrink-0 mt-0.5 text-sm font-bold px-2 py-0.5 rounded ${ex.covered ? 'bg-emerald-200 text-emerald-800' : 'bg-red-200 text-red-800'}`}>
                    {ex.covered ? 'Likely Covered' : 'Likely NOT Covered'}
                  </span>
                </div>
                <p className="font-medium text-slate-800 mt-2">&ldquo;{ex.situation}&rdquo;</p>
                <p className="text-slate-600 text-sm mt-1">{ex.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Home Warranty */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What About a Home Warranty?</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">{g.homeWarrantyNote}</p>
          </div>
        </section>

        {/* How to File */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How to File a Claim (If You Need To)</h2>
          <div className="space-y-3">
            {g.howToFileClaim.map((step, i) => (
              <div key={i} className="flex items-start gap-4 border border-slate-200 rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <p className="text-slate-700 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Things Worth Knowing Before You Need This</h2>
          <ul className="space-y-3">
            {g.tipsBeforeYouNeedIt.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-slate-400" />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Related Guides */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-bold mb-4">Related Replacement Guides</h2>
          <p className="text-sm text-slate-500 mb-4">If you do end up needing to pay out of pocket, these guides break down the real costs:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {g.relatedProducts.map((p, i) => (
              <Link
                key={i}
                href={`/${p.category}/${p.slug}`}
                className="block border border-slate-200 rounded-xl p-4 hover:border-slate-400 transition-colors group"
              >
                <p className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors text-sm">{p.name} Replacement Guide</p>
                <p className="text-xs text-slate-400 mt-1">Lifespan, cost, warning signs →</p>
              </Link>
            ))}
          </div>
        </section>

        <p className="text-xs text-slate-400 mt-10 text-center">
          This guide is for general information only. Insurance coverage varies by policy, provider, and state. Always read your specific policy or call your agent for definitive answers about your coverage.
        </p>
      </div>
    </>
  )
}
