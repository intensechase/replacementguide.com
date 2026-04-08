import Head from 'next/head'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | ReplacementGuide.com</title>
        <link rel="canonical" href="https://replacementguide.com/privacy-policy" />
      </Head>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">1. Information We Collect</h2>
            <p>ReplacementGuide.com does not require user accounts or collect personal information. We use standard analytics to understand how visitors use the site.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">2. Analytics</h2>
            <p>We use Google Analytics to track page views and user behavior in aggregate. This data is anonymized and used to improve the site. No personally identifiable information is collected.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">3. Advertising</h2>
            <p>We may display advertisements through Google AdSense. Google AdSense uses cookies to serve ads based on your prior visits to this and other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Ads Settings</a>.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">4. Affiliate Links</h2>
            <p>Some links on this site are affiliate links. When you purchase a product through an affiliate link, we may earn a small commission at no additional cost to you. This helps keep the site free. We only recommend products we believe are relevant to the content.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">5. Cookies</h2>
            <p>This site uses cookies for analytics and advertising purposes. By using this site, you consent to the use of cookies in accordance with this privacy policy.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">6. Third-Party Services</h2>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>Hetzner</strong> — web hosting. <a href="https://www.hetzner.com/legal/privacy-policy" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><strong>Cloudflare</strong> — DNS and CDN. <a href="https://www.cloudflare.com/privacypolicy/" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><strong>Google Analytics</strong> — analytics. <a href="https://policies.google.com/privacy" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><strong>Google AdSense</strong> — advertising. <a href="https://policies.google.com/privacy" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><strong>Amazon Associates</strong> — affiliate links. <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">7. Contact</h2>
            <p>Questions about this privacy policy? Contact us at info@replacementguide.com.</p>
          </section>
          <p className="text-xs text-slate-400 mt-8">Last updated: April 2026</p>
        </div>
      </div>
    </>
  )
}
