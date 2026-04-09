import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllSlugs, getArticle, type BlogArticle } from '@/data/blog'

interface Props {
  article: BlogArticle
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllSlugs().map(slug => ({ params: { slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const article = getArticle(params?.slug as string)
  if (!article) return { notFound: true }
  return { props: { article } }
}

export default function BlogArticlePage({ article: a }: Props) {
  return (
    <>
      <Head>
        <title>{a.metaTitle}</title>
        <meta name="description" content={a.metaDescription} />
        <link rel="canonical" href={`https://replacementguide.com/blog/${a.slug}`} />
        <meta property="og:title" content={a.title} />
        <meta property="og:description" content={a.metaDescription} />
        <meta property="og:url" content={`https://replacementguide.com/blog/${a.slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: a.title,
          description: a.metaDescription,
          datePublished: a.publishDate,
          url: `https://replacementguide.com/blog/${a.slug}`,
          publisher: { '@type': 'Organization', name: 'ReplacementGuide.com' },
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://replacementguide.com' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://replacementguide.com/blog' },
            { '@type': 'ListItem', position: 3, name: a.title },
          ],
        }) }} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/blog" className="hover:text-slate-800 transition-colors">Blog</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">{a.title}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">{a.title}</h1>
        <p className="text-sm text-slate-400 mb-8">
          {new Date(a.publishDate + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        {/* Intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-slate-700 leading-relaxed">{a.intro}</p>
        </div>

        {/* Sections */}
        {a.sections.map((section, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
            <div className="space-y-3">
              {section.content.split('\n\n').map((para, j) => (
                <p key={j} className="text-slate-600 leading-relaxed">{para}</p>
              ))}
            </div>
          </section>
        ))}

        {/* Related Product Guides */}
        {a.relatedProducts.length > 0 && (
          <section className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold mb-4">Related Replacement Guides</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {a.relatedProducts.map((p, i) => (
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
        )}

        {/* Related Guides */}
        {a.relatedGuides && a.relatedGuides.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {a.relatedGuides.map((g, i) => (
                <Link
                  key={i}
                  href={`/${g.type}/${g.slug}`}
                  className="block border border-slate-200 rounded-xl p-4 hover:border-slate-400 transition-colors group"
                >
                  <p className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors text-sm">{g.name}</p>
                  <p className="text-xs text-slate-400 mt-1">View guide →</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
