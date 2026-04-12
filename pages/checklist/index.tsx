import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { checklists, type SeasonalChecklist } from '@/data/checklists'

interface Props {
  checklists: SeasonalChecklist[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { checklists } }
}

export default function ChecklistIndex({ checklists }: Props) {
  const colors: Record<string, { border: string; hover: string; text: string }> = {
    spring: { border: 'border-emerald-200', hover: 'hover:border-emerald-400', text: 'text-emerald-600' },
    summer: { border: 'border-amber-200', hover: 'hover:border-amber-400', text: 'text-amber-600' },
    fall: { border: 'border-orange-200', hover: 'hover:border-orange-400', text: 'text-orange-600' },
    winter: { border: 'border-blue-200', hover: 'hover:border-blue-400', text: 'text-blue-600' },
  }

  return (
    <>
      <Head>
        <title>Seasonal Home Maintenance Checklists — Spring, Summer, Fall, Winter | ReplacementGuide</title>
        <meta name="description" content="Seasonal home maintenance checklists. What to inspect, service, and replace every spring, summer, fall, and winter to keep your home in shape." />
        <link rel="canonical" href="https://replacementguide.com/checklist" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">Seasonal Checklists</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Seasonal Home Maintenance Checklists</h1>
        <p className="text-slate-500 mb-8">What to inspect, service, and replace every season. A couple hours of prevention saves thousands in repairs.</p>

        <div className="grid md:grid-cols-2 gap-4">
          {checklists.map(c => {
            const s = colors[c.slug] || colors.spring
            const itemCount = c.sections.reduce((sum, sec) => sum + sec.items.length, 0)
            return (
              <Link
                key={c.slug}
                href={`/checklist/${c.slug}`}
                className={`border ${s.border} rounded-xl p-6 ${s.hover} hover:shadow-sm transition-all group`}
              >
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h2 className="text-xl font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">{c.season}</h2>
                <p className="text-sm text-slate-500 mt-1">{c.sections.length} categories, {itemCount} tasks</p>
                <span className={`inline-block mt-3 text-sm font-medium ${s.text}`}>View checklist &rarr;</span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
