import Link from 'next/link'

const CATEGORIES = [
  { name: 'Home', href: '/home' },
  { name: 'Auto', href: '/auto' },
  { name: 'Personal', href: '/personal' },
  { name: 'Outdoor', href: '/outdoor' },
  { name: 'Maintenance', href: '/maintenance' },
  { name: 'Troubleshoot', href: '/troubleshoot' },
  { name: 'Insurance', href: '/insurance' },
]

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 64 64" className="shrink-0">
            <rect x="4" y="4" width="56" height="56" rx="14" fill="#059669"/>
            <text x="32" y="44" textAnchor="middle" fontFamily="-apple-system, system-ui, sans-serif" fontSize="32" fontWeight="800" fill="white">RG</text>
          </svg>
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
