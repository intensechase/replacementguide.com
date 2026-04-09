import Head from 'next/head'
import Link from 'next/link'
import { guides } from '@/data/insurance'

export default function InsuranceIndex() {
  return (
    <>
      <Head>
        <title>Does Homeowners Insurance Cover It? — ReplacementGuide.com</title>
        <meta name="description" content="Find out what homeowners insurance actually covers and what it doesn't. Clear, honest answers about coverage for plumbing, roofs, HVAC, water damage, and more." />
        <link rel="canonical" href="https://replacementguide.com/insurance" />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">Insurance Guides</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">Does Homeowners Insurance Cover It?</h1>
        <p className="text-slate-500 leading-relaxed mb-10">
          When something breaks in your home, the first question is usually &ldquo;does my insurance cover this?&rdquo;
          These guides explain what&apos;s typically covered and what isn&apos;t... so you know before you need to make the call.
        </p>

        <div className="space-y-3">
          {guides.map(g => (
            <Link
              key={g.slug}
              href={`/insurance/${g.slug}`}
              className="block border border-slate-200 rounded-xl p-5 hover:border-slate-400 transition-colors group"
            >
              <p className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">{g.title}</p>
              <p className="text-sm text-slate-500 mt-1 line-clamp-2">{g.quickAnswer.slice(0, 150)}...</p>
            </Link>
          ))}
        </div>

        {guides.length === 0 && (
          <p className="text-slate-400 text-center py-12">Insurance guides coming soon.</p>
        )}
      </div>
    </>
  )
}
