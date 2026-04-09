import Head from 'next/head'
import Link from 'next/link'
import { guides } from '@/data/troubleshoot'

export default function TroubleshootIndex() {
  return (
    <>
      <Head>
        <title>Troubleshooting Guides — Fix It or Replace It | ReplacementGuide</title>
        <meta name="description" content="Something broken? Check these troubleshooting guides before you call a repair person. DIY fixes, when to call a pro, and when it's time to replace." />
        <link rel="canonical" href="https://replacementguide.com/troubleshoot" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Troubleshooting Guides</h1>
        <p className="text-slate-500 mb-8">Something not working? Check here before you call someone.</p>

        <div className="grid gap-3">
          {guides.map(g => (
            <Link
              key={g.slug}
              href={`/troubleshoot/${g.slug}`}
              className="flex items-center justify-between border border-slate-200 rounded-lg px-5 py-4 hover:border-red-300 hover:shadow-sm transition-all group"
            >
              <div>
                <h2 className="font-medium text-slate-800 group-hover:text-red-600 transition-colors">{g.title}</h2>
                <p className="text-xs text-slate-400 mt-0.5">Related: {g.relatedProduct.name}</p>
              </div>
              <span className="text-xs text-red-500 shrink-0 ml-4">Troubleshoot →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
