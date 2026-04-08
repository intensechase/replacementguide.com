import Link from 'next/link'

const CATEGORIES = [
  { name: 'Home', href: '/home' },
  { name: 'Auto', href: '/auto' },
  { name: 'Personal', href: '/personal' },
  { name: 'Outdoor', href: '/outdoor' },
]

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-slate-800">Replacement<span className="text-emerald-600">Guide</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {CATEGORIES.map(c => (
            <Link key={c.href} href={c.href} className="text-slate-500 hover:text-slate-800 transition-colors">
              {c.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
