import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Categories</h3>
            <div className="space-y-2">
              <Link href="/home" className="block text-slate-500 hover:text-slate-800">Home</Link>
              <Link href="/auto" className="block text-slate-500 hover:text-slate-800">Auto</Link>
              <Link href="/personal" className="block text-slate-500 hover:text-slate-800">Personal</Link>
              <Link href="/outdoor" className="block text-slate-500 hover:text-slate-800">Outdoor</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Popular</h3>
            <div className="space-y-2">
              <Link href="/home/roof" className="block text-slate-500 hover:text-slate-800">Roof</Link>
              <Link href="/home/water-heater" className="block text-slate-500 hover:text-slate-800">Water Heater</Link>
              <Link href="/home/furnace" className="block text-slate-500 hover:text-slate-800">Furnace</Link>
              <Link href="/auto/tires" className="block text-slate-500 hover:text-slate-800">Tires</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Resources</h3>
            <div className="space-y-2">
              <Link href="/maintenance" className="block text-slate-500 hover:text-slate-800">Maintenance</Link>
              <Link href="/troubleshoot" className="block text-slate-500 hover:text-slate-800">Troubleshoot</Link>
              <Link href="/insurance" className="block text-slate-500 hover:text-slate-800">Insurance Guides</Link>
              <Link href="/blog" className="block text-slate-500 hover:text-slate-800">Blog</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-slate-500 hover:text-slate-800">About</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Legal</h3>
            <div className="space-y-2">
              <Link href="/privacy-policy" className="block text-slate-500 hover:text-slate-800">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-400 space-y-2">
          <p>As an Amazon Associate I earn from qualifying purchases. ReplacementGuide.com is a participant in the Amazon Services LLC Associates Program.</p>
          <p>&copy; {new Date().getFullYear()} ReplacementGuide.com. Information is for reference only. Consult a professional for specific advice.</p>
        </div>
      </div>
    </footer>
  )
}
