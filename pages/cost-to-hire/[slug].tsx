import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { guides, getGuide, type CostToHireGuide } from '@/data/cost-to-hire'
import { getCrossLinks, getCrossLinkUrl, type CrossLink } from '@/data/cross-links'

interface Props {
  guide: CostToHireGuide
  crossLinks: CrossLink[]
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: guides.map(g => ({ params: { slug: g.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const guide = getGuide(params?.slug as string)
  if (!guide) return { notFound: true }
  const crossLinks = getCrossLinks('cost-to-hire', params?.slug as string)
  return { props: { guide, crossLinks } }
}

export default function CostToHirePage({ guide, crossLinks }: Props) {
  const g = guide

  return (
    <>
      <Head>
        <title>{g.metaTitle}</title>
        <meta name="description" content={g.metaDescription} />
        <link rel="canonical" href={`https://replacementguide.com/cost-to-hire/${g.slug}`} />
        <meta property="og:title" content={g.title} />
        <meta property="og:description" content={g.metaDescription} />
        <meta property="og:url" content={`https://replacementguide.com/cost-to-hire/${g.slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: g.commonJobs.map(job => ({
            '@type': 'Question',
            name: `How much does ${job.job.toLowerCase()} cost?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${job.job} typically costs ${job.costRange} and takes approximately ${job.timeEstimate}.`,
            },
          })),
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://replacementguide.com' },
            { '@type': 'ListItem', position: 2, name: 'Cost to Hire', item: 'https://replacementguide.com/cost-to-hire' },
            { '@type': 'ListItem', position: 3, name: g.title },
          ],
        }) }} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/cost-to-hire" className="hover:text-slate-800 transition-colors">Cost to Hire</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">{g.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{g.title}</h1>

        {/* Intro */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-8">
          <p className="text-slate-700 leading-relaxed">{g.intro}</p>
        </div>

        {/* Average Cost */}
        <section className="mb-10">
          <div className="border-2 border-purple-200 rounded-xl p-6 text-center">
            <p className="text-sm text-slate-500 mb-1">Average Cost</p>
            <p className="text-3xl font-bold text-purple-700">
              ${g.averageCost.low.toLocaleString()}–${g.averageCost.high.toLocaleString()}
            </p>
            <p className="text-sm text-slate-500 mt-1">{g.averageCost.unit}</p>
          </div>
        </section>

        {/* What Affects the Price */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">What Affects the Price</h2>
          <div className="grid gap-3">
            {g.costFactors.map((cf, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-800 mb-1">{cf.factor}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cf.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Jobs & Costs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Common Jobs &amp; Costs</h2>
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-50 px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
              <span>Job</span>
              <span>Cost Range</span>
              <span>Time Estimate</span>
            </div>
            {g.commonJobs.map((job, i) => (
              <div key={i} className={`grid grid-cols-3 px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                <span className="font-medium text-slate-800">{job.job}</span>
                <span className="text-slate-600">{job.costRange}</span>
                <span className="text-slate-500">{job.timeEstimate}</span>
              </div>
            ))}
          </div>
        </section>

        {/* When to Hire a Pro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">When to Hire a Pro</h2>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <p className="text-slate-700 leading-relaxed">{g.whenToHire}</p>
          </div>
        </section>

        {/* When to DIY Instead */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">When to DIY Instead</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-slate-700 leading-relaxed">{g.whenToDIY}</p>
          </div>
        </section>

        {/* How to Save Money */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How to Save Money</h2>
          <ul className="space-y-2">
            {g.howToSave.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Red Flags to Watch For */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Red Flags to Watch For</h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <ul className="space-y-2">
              {g.redFlags.map((flag, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="shrink-0 mt-0.5 text-red-500 font-bold">⚠</span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related Replacement Guides */}
        {g.relatedProducts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">Related Replacement Guides</h2>
            <div className="grid gap-3">
              {g.relatedProducts.map((rp, i) => (
                <Link
                  key={i}
                  href={`/${rp.category}/${rp.slug}`}
                  className="block border border-slate-200 rounded-xl p-5 hover:border-slate-400 transition-colors group"
                >
                  <p className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">{rp.name} Replacement Guide</p>
                  <p className="text-sm text-slate-500 mt-1">Lifespan, cost, warning signs, and repair vs replace →</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Cross-Section Links */}
        {crossLinks.length > 0 && (
          <section className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-xl font-bold mb-4">Related Guides</h2>
            <div className="grid gap-3">
              {crossLinks.map(link => {
                const styles = {
                  product: { border: 'border-emerald-200', bg: 'bg-emerald-50', badge: 'bg-emerald-100 text-emerald-700', hoverBorder: 'hover:border-emerald-400' },
                  insurance: { border: 'border-blue-200', bg: 'bg-blue-50', badge: 'bg-blue-100 text-blue-700', hoverBorder: 'hover:border-blue-400' },
                  maintenance: { border: 'border-emerald-200', bg: 'bg-emerald-50', badge: 'bg-emerald-100 text-emerald-700', hoverBorder: 'hover:border-emerald-400' },
                  troubleshoot: { border: 'border-red-200', bg: 'bg-red-50', badge: 'bg-red-100 text-red-700', hoverBorder: 'hover:border-red-400' },
                  'pest-control': { border: 'border-amber-200', bg: 'bg-amber-50', badge: 'bg-amber-100 text-amber-700', hoverBorder: 'hover:border-amber-400' },
                  'cost-to-hire': { border: 'border-purple-200', bg: 'bg-purple-50', badge: 'bg-purple-100 text-purple-700', hoverBorder: 'hover:border-purple-400' },
                }
                const s = styles[link.section as keyof typeof styles] || styles.product
                const badgeLabel: Record<string, string> = { product: 'Replacement Guide', insurance: 'Insurance', maintenance: 'Maintenance', troubleshoot: 'Troubleshoot', 'pest-control': 'Pest Control', 'cost-to-hire': 'Cost to Hire' }
                return (
                  <Link
                    key={`${link.section}/${link.slug}`}
                    href={getCrossLinkUrl(link)}
                    className={`${s.border} ${s.bg} rounded-lg px-4 py-3 ${s.hoverBorder} transition-colors group flex items-center justify-between gap-3`}
                  >
                    <div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 block">{link.name}</span>
                    </div>
                    <span className={`shrink-0 text-xs font-medium ${s.badge} rounded-full px-2.5 py-0.5`}>
                      {badgeLabel[link.section] || link.section}
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-slate-400 mt-10 text-center">
          Costs vary by location, complexity, and market conditions. Get at least 3 quotes before hiring.
        </p>
      </div>
    </>
  )
}
