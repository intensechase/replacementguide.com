import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { checklists, getChecklist, type SeasonalChecklist } from '@/data/checklists'

interface Props {
  checklist: SeasonalChecklist
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: checklists.map(c => ({ params: { slug: c.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const checklist = getChecklist(params?.slug as string)
  if (!checklist) return { notFound: true }
  return { props: { checklist } }
}

export default function ChecklistPage({ checklist }: Props) {
  const c = checklist
  const totalItems = c.sections.reduce((sum, sec) => sum + sec.items.length, 0)

  const seasonColors: Record<string, { bg: string; border: string; badge: string }> = {
    spring: { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
    summer: { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700' },
    fall: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' },
    winter: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  }
  const sc = seasonColors[c.slug] || seasonColors.spring

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <link rel="canonical" href={`https://replacementguide.com/checklist/${c.slug}`} />
        <meta property="og:title" content={c.title} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:url" content={`https://replacementguide.com/checklist/${c.slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: c.title,
          description: c.intro,
          step: c.sections.flatMap((sec, si) =>
            sec.items.map((item, ii) => ({
              '@type': 'HowToStep',
              position: si * 100 + ii + 1,
              name: item.task,
              text: item.detail,
            }))
          ),
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://replacementguide.com' },
            { '@type': 'ListItem', position: 2, name: 'Checklists', item: 'https://replacementguide.com/checklist' },
            { '@type': 'ListItem', position: 3, name: c.title },
          ],
        }) }} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/checklist" className="hover:text-slate-800 transition-colors">Checklists</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-slate-800">{c.season}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="mr-2">{c.icon}</span>{c.title}
        </h1>

        {/* Intro */}
        <div className={`${sc.bg} ${sc.border} border rounded-xl p-5 mb-4`}>
          <p className="text-slate-700 leading-relaxed">{c.intro}</p>
        </div>

        <p className="text-sm text-slate-400 mb-8">{totalItems} tasks across {c.sections.length} categories</p>

        {/* Sections */}
        {c.sections.map((section, si) => (
          <section key={si} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{section.name}</h2>
            <div className="space-y-3">
              {section.items.map((item, ii) => (
                <div key={ii} className="border border-slate-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className={`shrink-0 mt-0.5 w-6 h-6 rounded ${sc.badge} flex items-center justify-center text-xs font-bold`}>
                      {si * 100 + ii + 1 > 99 ? '✓' : (c.sections.slice(0, si).reduce((sum, s) => sum + s.items.length, 0) + ii + 1)}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1">{item.task}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                      {item.link && (
                        <Link
                          href={item.link.href}
                          className="inline-block mt-2 text-sm font-medium text-emerald-600 hover:text-emerald-800 transition-colors"
                        >
                          {item.link.label} &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Other seasons */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-xl font-bold mb-4">Other Seasons</h2>
          <div className="grid grid-cols-3 gap-3">
            {checklists.filter(other => other.slug !== c.slug).map(other => (
              <Link
                key={other.slug}
                href={`/checklist/${other.slug}`}
                className="border border-slate-200 rounded-lg p-4 hover:border-slate-400 transition-colors group text-center"
              >
                <span className="text-2xl block mb-1">{other.icon}</span>
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{other.season}</span>
              </Link>
            ))}
          </div>
        </section>

        <p className="text-xs text-slate-400 mt-10 text-center">
          Adjust this checklist for your climate and home type. Not every task applies to every home.
        </p>
      </div>
    </>
  )
}
