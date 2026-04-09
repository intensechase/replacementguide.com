import type { GetServerSideProps } from 'next'
import { products } from '@/data/products'
import { guides } from '@/data/troubleshoot'
import { maintenanceGuides } from '@/data/maintenance'
import { guides as insuranceGuides } from '@/data/insurance'
import { getAllArticles } from '@/data/blog'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const base = 'https://replacementguide.com'
  const categories = ['home', 'auto', 'personal', 'outdoor']

  const urls = [
    `<url><loc>${base}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
    ...categories.map(c => `<url><loc>${base}/${c}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`),
    ...products.map(p => `<url><loc>${base}/${p.category}/${p.slug}</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>`),
    `<url><loc>${base}/troubleshoot</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
    ...guides.map(g => `<url><loc>${base}/troubleshoot/${g.slug}</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>`),
    `<url><loc>${base}/maintenance</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
    ...maintenanceGuides.map(g => `<url><loc>${base}/maintenance/${g.slug}</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>`),
    `<url><loc>${base}/insurance</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
    ...insuranceGuides.map(g => `<url><loc>${base}/insurance/${g.slug}</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>`),
    `<url><loc>${base}/blog</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
    ...getAllArticles().map(a => `<url><loc>${base}/blog/${a.slug}</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>`),
    `<url><loc>${base}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`,
    `<url><loc>${base}/privacy-policy</loc><changefreq>monthly</changefreq><priority>0.3</priority></url>`,
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default function Sitemap() { return null }
