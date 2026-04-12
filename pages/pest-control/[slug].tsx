import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { guides, getGuide, type PestGuide } from '@/data/pest-control'

interface Props {
  guide: PestGuide
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

export default function PestControlPage({ guide }: Props) {
  const g = guide

  return (
    <>
      <Head>
        <title>{g.metaTitle}</title>
        <meta name="description" content={g.metaDescription} />
        <link rel="canonical" href={`https://replacementguide.com/pest-control/${g.slug}`} />
        <meta property="og:title" content={g.title} />
        <meta property="og:description" content={g.metaDescription} />
        <meta property="og:url" content={`https://replacementguide.com/pest-control/${g.slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: g.title,
          description: g.intro,
          step: g.diyTreatments.map((t, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: t.method,
            text: t.detail,
          })),
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'USD',
            minValue: g.proCost.low,
            maxValue: g.proCost.high,
          },
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://replacementguide.com' },
            { '@type': 'ListItem', position: 2, name: 'Pest Control', item: 'https://replacementguide.com/pest-control' },
            { '@type': 'ListItem', position: 3, name: g.title },
          ],
        }) }} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/pest-control" className="hover:text-slate-800 transition-colors">Pest Control</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">{g.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{g.title}</h1>

        {/* Intro */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
          <p className="text-slate-700 leading-relaxed">{g.intro}</p>
        </div>

        {/* Signs of Infestation */}
        <h2 className="text-2xl font-bold mb-6">Signs of Infestation</h2>
        <div className="space-y-4 mb-10">
          {g.signs.map((s, i) => (
            <div key={i} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-semibold text-amber-800 mb-1">{s.sign}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>

        {/* DIY Treatment Methods */}
        <h2 className="text-2xl font-bold mb-6">DIY Treatment Methods</h2>
        <div className="space-y-6 mb-10">
          {g.diyTreatments.map((t, i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-slate-800 mb-2">{t.method}</h3>
                    <span className="shrink-0 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">{t.cost}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prevention Tips */}
        <h2 className="text-2xl font-bold mb-6">Prevention Tips</h2>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-10">
          <ul className="space-y-3">
            {g.preventionTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 text-emerald-600 mt-0.5">&#10003;</span>
                <span className="text-slate-700 text-sm leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* When to Call a Professional */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">When to Call a Professional</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-slate-700 leading-relaxed">{g.whenToCallPro}</p>
          </div>
        </section>

        {/* Exterminator Cost */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Exterminator Cost</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center">
            <p className="text-sm text-slate-500 mb-1">Average professional treatment cost</p>
            <p className="text-3xl font-bold text-slate-800">${g.proCost.low} to ${g.proCost.high}</p>
            <p className="text-xs text-slate-400 mt-2">Varies by severity, home size, and region</p>
          </div>
        </section>

        {/* Recommended Products */}
        <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
        <div className="space-y-4 mb-10">
          {g.recommendedProducts.map((p, i) => (
            <a
              key={i}
              href={p.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block border border-slate-200 rounded-xl p-5 hover:border-amber-300 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-800 group-hover:text-amber-700 transition-colors">{p.name}</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{p.description}</p>
                </div>
                <span className="shrink-0 text-sm font-medium text-slate-500">{p.priceRange}</span>
              </div>
              <p className="text-xs text-amber-600 mt-3">View on Amazon →</p>
            </a>
          ))}
        </div>

        {/* Related Pests */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-bold mb-4">Related Pest Guides</h2>
          <div className="grid gap-3">
            {g.relatedPests.map(rp => (
              <Link
                key={rp.slug}
                href={`/pest-control/${rp.slug}`}
                className="block border border-slate-200 rounded-xl p-4 hover:border-emerald-300 transition-colors group"
              >
                <p className="font-medium text-slate-800 group-hover:text-emerald-600 transition-colors">How to Get Rid of {rp.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">Signs, treatments, and prevention →</p>
              </Link>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-10 text-center">
          This guide is for informational purposes. For severe infestations or health concerns, consult a licensed pest control professional.
        </p>
      </div>
    </>
  )
}
