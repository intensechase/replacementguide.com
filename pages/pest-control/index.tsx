import Head from 'next/head'
import Link from 'next/link'
import { guides } from '@/data/pest-control'

export default function PestControlIndex() {
  return (
    <>
      <Head>
        <title>Pest Control Guides — Get Rid of Common Household Pests | ReplacementGuide</title>
        <meta name="description" content="Practical pest control guides for homeowners. DIY treatments, prevention tips, cost estimates, and honest advice on when to call a professional." />
        <link rel="canonical" href="https://replacementguide.com/pest-control" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Pest Control Guides</h1>
        <p className="text-slate-500 mb-8">Get rid of common household pests. DIY methods, costs, and when to call a pro.</p>

        <div className="grid gap-3">
          {guides.map(g => (
            <Link
              key={g.slug}
              href={`/pest-control/${g.slug}`}
              className="flex items-center justify-between border border-slate-200 rounded-lg px-5 py-4 hover:border-amber-300 hover:shadow-sm transition-all group"
            >
              <div>
                <h2 className="font-medium text-slate-800 group-hover:text-amber-700 transition-colors">{g.title}</h2>
                <p className="text-xs text-slate-400 mt-0.5">Pro cost: ${g.proCost.low} to ${g.proCost.high}</p>
              </div>
              <span className="text-xs text-emerald-600 shrink-0 ml-4">Read guide →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
