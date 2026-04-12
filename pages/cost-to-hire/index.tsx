import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { guides, type CostToHireGuide } from '@/data/cost-to-hire'

interface Props {
  guides: CostToHireGuide[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { guides } }
}

export default function CostToHireIndex({ guides }: Props) {
  return (
    <>
      <Head>
        <title>How Much Does It Cost to Hire a Pro? — Service Cost Guides | ReplacementGuide</title>
        <meta name="description" content="Find real costs for common home services. What to expect, when to DIY, and how to avoid overpaying for plumbers, electricians, HVAC techs, and more." />
        <link rel="canonical" href="https://replacementguide.com/cost-to-hire" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">Cost to Hire</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">
          <span className="mr-2">💰</span>How Much Does It Cost to Hire...
        </h1>
        <p className="text-slate-500 mb-8">Real costs for common home services. What to expect, when to DIY, and how to avoid overpaying.</p>

        <div className="grid gap-3">
          {guides.map(g => (
            <Link
              key={g.slug}
              href={`/cost-to-hire/${g.slug}`}
              className="flex items-center justify-between border border-slate-200 rounded-lg px-5 py-4 hover:border-purple-300 hover:shadow-sm transition-all group"
            >
              <div>
                <h2 className="font-medium text-slate-800 group-hover:text-purple-600 transition-colors">{g.professional}</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Average: ${g.averageCost.low.toLocaleString()}–${g.averageCost.high.toLocaleString()} {g.averageCost.unit}
                </p>
              </div>
              <span className="text-xs text-purple-500 shrink-0 ml-4">View Costs →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
