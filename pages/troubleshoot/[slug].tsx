import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { guides, getGuide, type TroubleshootGuide } from '@/data/troubleshoot'

interface Props {
  guide: TroubleshootGuide
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

export default function TroubleshootPage({ guide }: Props) {
  const g = guide

  return (
    <>
      <Head>
        <title>{g.metaTitle}</title>
        <meta name="description" content={g.metaDescription} />
        <link rel="canonical" href={`https://replacementguide.com/troubleshoot/${g.slug}`} />
        <meta property="og:title" content={g.title} />
        <meta property="og:description" content={g.metaDescription} />
        <meta property="og:url" content={`https://replacementguide.com/troubleshoot/${g.slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: g.title,
          description: g.intro,
          step: g.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.detail + ' Fix: ' + s.fix })),
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://replacementguide.com' },
            { '@type': 'ListItem', position: 2, name: 'Troubleshoot', item: 'https://replacementguide.com/troubleshoot' },
            { '@type': 'ListItem', position: 3, name: g.title },
          ],
        }) }} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/troubleshoot" className="hover:text-slate-800 transition-colors">Troubleshoot</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">{g.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{g.title}</h1>

        {/* Intro */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
          <p className="text-slate-700 leading-relaxed">{g.intro}</p>
        </div>

        {/* Steps */}
        <h2 className="text-2xl font-bold mb-6">What to Check Before You Call Someone</h2>
        <div className="space-y-6 mb-10">
          {g.steps.map((step, i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-2">{step.detail}</p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                    <p className="text-sm text-emerald-800"><strong>Fix:</strong> {step.fix}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* When to replace */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">When It&apos;s Time to Replace</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-slate-700 leading-relaxed">{g.whenToReplace}</p>
            <Link
              href={`/${g.relatedProduct.category}/${g.relatedProduct.slug}`}
              className="inline-block mt-4 text-sm font-medium text-amber-700 hover:text-amber-900 transition-colors"
            >
              Read our full {g.relatedProduct.name} replacement guide →
            </Link>
          </div>
        </section>

        {/* When to call a pro */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">When to Call a Professional</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-slate-700 leading-relaxed">{g.whenToCallPro}</p>
          </div>
        </section>

        {/* Related */}
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

        <p className="text-xs text-slate-400 mt-10 text-center">
          This guide is for informational purposes. For gas leaks, electrical issues, or emergencies, call a licensed professional immediately.
        </p>
      </div>
    </>
  )
}
