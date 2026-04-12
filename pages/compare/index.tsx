import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { comparisonGuides, type ComparisonGuide } from '@/data/compare'

interface Props {
  guides: ComparisonGuide[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { guides: comparisonGuides } }
}

export default function CompareIndex({ guides }: Props) {
  return (
    <>
      <Head>
        <title>Product Comparisons — Side-by-Side Guides | ReplacementGuide</title>
        <meta name="description" content="Tankless vs tank water heater? Gas vs electric dryer? Hardwood vs laminate? Side-by-side comparisons to help you decide." />
        <link rel="canonical" href="https://replacementguide.com/compare" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">Compare</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Product Comparisons</h1>
        <p className="text-slate-500 mb-8">Side-by-side breakdowns to help you pick the right option. No spin... just the tradeoffs.</p>

        <div className="grid gap-3">
          {guides.map(g => (
            <Link
              key={g.slug}
              href={`/compare/${g.slug}`}
              className="flex items-center justify-between border border-slate-200 rounded-lg px-5 py-4 hover:border-indigo-300 hover:shadow-sm transition-all group"
            >
              <div>
                <h2 className="font-medium text-slate-800 group-hover:text-indigo-600 transition-colors">{g.title}</h2>
                <p className="text-xs text-slate-400 mt-0.5">{g.optionA.name} vs {g.optionB.name}</p>
              </div>
              <span className="text-xs text-indigo-500 shrink-0 ml-4">Compare &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
