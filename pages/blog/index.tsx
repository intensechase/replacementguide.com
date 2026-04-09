import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getAllArticles, type BlogArticle } from '@/data/blog'

interface Props {
  articles: BlogArticle[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = getAllArticles()
  return { props: { articles } }
}

const CATEGORY_LABELS: Record<string, string> = {
  bills: 'Bills & Costs',
  emergency: 'Emergency',
  maintenance: 'Maintenance',
  selling: 'Selling Your Home',
  money: 'Saving Money',
  'how-to': 'How To',
}

export default function BlogIndex({ articles }: Props) {
  return (
    <>
      <Head>
        <title>Guides & Articles — ReplacementGuide.com</title>
        <meta name="description" content="Helpful guides about home maintenance, reducing bills, emergency situations, and making smart repair-or-replace decisions." />
        <link rel="canonical" href="https://replacementguide.com/blog" />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-3">Guides & Articles</h1>
        <p className="text-slate-500 mb-10">Practical answers to the questions homeowners actually ask.</p>

        {articles.length === 0 ? (
          <p className="text-slate-400 text-center py-12">Articles coming soon.</p>
        ) : (
          <div className="space-y-3">
            {articles.map(a => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="block border border-slate-200 rounded-xl p-5 hover:border-slate-400 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">{a.title}</p>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">{a.intro.slice(0, 160)}...</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500">{CATEGORY_LABELS[a.category] || a.category}</span>
                    <p className="text-xs text-slate-400 mt-1">{new Date(a.publishDate + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
