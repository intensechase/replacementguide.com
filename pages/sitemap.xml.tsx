import type { GetServerSideProps } from 'next'
import { products } from '@/data/products'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const base = 'https://replacementguide.com'
  const categories = ['home', 'auto', 'personal', 'outdoor']

  const urls = [
    `<url><loc>${base}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
    ...categories.map(c => `<url><loc>${base}/${c}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`),
    ...products.map(p => `<url><loc>${base}/${p.category}/${p.slug}</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>`),
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
