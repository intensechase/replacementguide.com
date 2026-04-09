import Head from 'next/head'
import Link from 'next/link'

const CATEGORIES = [
  { name: 'Home', slug: 'home', description: 'Appliances, systems, and materials in your home', count: '56', icon: '🏠' },
  { name: 'Auto', slug: 'auto', description: 'Car parts, tires, and vehicle components', count: '21', icon: '🚗' },
  { name: 'Personal', slug: 'personal', description: 'Everyday items and personal products', count: '15', icon: '🪥' },
  { name: 'Outdoor', slug: 'outdoor', description: 'Yard, deck, driveway, and exterior products', count: '16', icon: '🏡' },
]

const POPULAR = [
  { name: 'Roof', slug: 'home/roof', lifespan: '20-30 years' },
  { name: 'Water Heater', slug: 'home/water-heater', lifespan: '8-12 years' },
  { name: 'Furnace', slug: 'home/furnace', lifespan: '15-20 years' },
  { name: 'Car Battery', slug: 'auto/battery', lifespan: '3-5 years' },
  { name: 'Tires', slug: 'auto/tires', lifespan: '3-5 years' },
  { name: 'Mattress', slug: 'personal/mattress', lifespan: '7-10 years' },
  { name: 'Windows', slug: 'home/windows', lifespan: '15-30 years' },
  { name: 'Carpet', slug: 'home/carpet', lifespan: '8-15 years' },
  { name: 'Air Conditioner', slug: 'home/air-conditioner', lifespan: '15-20 years' },
  { name: 'Dishwasher', slug: 'home/dishwasher', lifespan: '9-12 years' },
  { name: 'Brake Pads', slug: 'auto/brake-pads', lifespan: '25-65K miles' },
  { name: 'Deck', slug: 'outdoor/deck', lifespan: '10-30 years' },
]

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ReplacementGuide.com — Know When to Replace Everything in Your Home, Car, and Life</title>
        <meta name="description" content="How long does it last? When should you replace it? Repair or replace? Straight answers for every product in your home, car, and life." />
        <link rel="canonical" href="https://replacementguide.com" />
        <meta property="og:title" content="ReplacementGuide.com — Know When to Replace It" />
        <meta property="og:description" content="How long does it last? When should you replace it? Repair or replace? Straight answers for every product in your home, car, and life." />
        <meta property="og:url" content="https://replacementguide.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'ReplacementGuide.com',
          url: 'https://replacementguide.com',
          description: 'How long does it last? When should you replace it? Repair or replace? Straight answers for every product in your home, car, and life.',
        }) }} />
      </Head>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Know When to Replace It
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            How long does it last? What are the warning signs? Should you repair or replace?
            Straight answers... no sales pitch.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Categories */}
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="border border-slate-200 rounded-xl p-5 hover:border-slate-400 hover:shadow-sm transition-all group"
            >
              <span className="text-3xl mb-3 block">{cat.icon}</span>
              <h3 className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">{cat.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{cat.description}</p>
              <p className="text-xs text-emerald-600 mt-2">{cat.count} guides</p>
            </Link>
          ))}
        </div>

        {/* Popular */}
        <h2 className="text-2xl font-bold mb-6">Most Searched</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
          {POPULAR.map(item => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="flex items-center justify-between border border-slate-200 rounded-lg px-4 py-3 hover:border-slate-400 transition-colors group"
            >
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{item.name}</span>
              <span className="text-xs text-slate-400">{item.lifespan}</span>
            </Link>
          ))}
        </div>

        {/* Resources */}
        <h2 className="text-2xl font-bold mb-6">Helpful Resources</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <Link href="/troubleshoot" className="border border-slate-200 rounded-xl p-5 hover:border-slate-400 hover:shadow-sm transition-all group">
            <h3 className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors mb-1">Troubleshooting Guides</h3>
            <p className="text-xs text-slate-500">Something not working? Step-by-step diagnosis before you call someone.</p>
          </Link>
          <Link href="/maintenance" className="border border-slate-200 rounded-xl p-5 hover:border-slate-400 hover:shadow-sm transition-all group">
            <h3 className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors mb-1">Maintenance Schedules</h3>
            <p className="text-xs text-slate-500">How often to change, clean, and service the things that keep your home running.</p>
          </Link>
          <Link href="/insurance" className="border border-slate-200 rounded-xl p-5 hover:border-slate-400 hover:shadow-sm transition-all group">
            <h3 className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors mb-1">Insurance Coverage Guides</h3>
            <p className="text-xs text-slate-500">Does your homeowners insurance actually cover it? Clear answers before you need them.</p>
          </Link>
        </div>

        {/* What we cover */}
        <div className="bg-slate-50 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Every page answers three questions</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6 text-left">
            <div>
              <p className="text-2xl mb-2">⏱️</p>
              <h3 className="font-semibold mb-1">How long does it last?</h3>
              <p className="text-sm text-slate-500">Average lifespan, what affects it, and what to expect from yours.</p>
            </div>
            <div>
              <p className="text-2xl mb-2">⚠️</p>
              <h3 className="font-semibold mb-1">When to replace it</h3>
              <p className="text-sm text-slate-500">The warning signs that mean it&apos;s time... before something breaks.</p>
            </div>
            <div>
              <p className="text-2xl mb-2">🔧</p>
              <h3 className="font-semibold mb-1">Repair or replace?</h3>
              <p className="text-sm text-slate-500">When fixing it makes sense and when you&apos;re throwing money away.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
