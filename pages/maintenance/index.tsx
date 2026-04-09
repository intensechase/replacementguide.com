import Head from 'next/head'
import Link from 'next/link'
import { maintenanceGuides } from '@/data/maintenance'

export default function MaintenanceIndex() {
  return (
    <>
      <Head>
        <title>Maintenance Guides — How Often to Replace, Change &amp; Service | ReplacementGuide</title>
        <meta name="description" content="How often should you change your oil? Replace your furnace filter? Clean your dryer vent? Maintenance schedules with real timelines." />
        <link rel="canonical" href="https://replacementguide.com/maintenance" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Maintenance Guides</h1>
        <p className="text-slate-500 mb-8">How often to replace, change, and service the things that keep your home and car running.</p>

        <div className="grid gap-3">
          {maintenanceGuides.map(g => (
            <Link
              key={g.slug}
              href={`/maintenance/${g.slug}`}
              className="flex items-center justify-between border border-slate-200 rounded-lg px-5 py-4 hover:border-emerald-300 hover:shadow-sm transition-all group"
            >
              <div>
                <h2 className="font-medium text-slate-800 group-hover:text-emerald-600 transition-colors">{g.title}</h2>
                <p className="text-xs text-slate-400 mt-0.5">Related: {g.relatedProduct.name}</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className="text-sm font-semibold text-emerald-600">{g.frequency}</span>
                <p className="text-xs text-slate-400">recommended</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
