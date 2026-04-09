export interface BlogArticle {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  publishDate: string // YYYY-MM-DD
  category: 'bills' | 'emergency' | 'maintenance' | 'selling' | 'money' | 'how-to'
  intro: string
  sections: { heading: string; content: string }[]
  relatedProducts: { category: string; slug: string; name: string }[]
  relatedGuides?: { type: 'troubleshoot' | 'insurance' | 'maintenance'; slug: string; name: string }[]
}

// Dynamic imports — only published articles
const modules: Record<string, () => Promise<{ article: BlogArticle }>> = {
  'why-is-my-electric-bill-so-high': () => import('./why-is-my-electric-bill-so-high'),
  'why-is-my-gas-bill-so-high': () => import('./why-is-my-gas-bill-so-high'),
  'why-is-my-water-bill-so-high': () => import('./why-is-my-water-bill-so-high'),
}

// For static generation — load all at build time
import { article as electricBill } from './why-is-my-electric-bill-so-high'
import { article as gasBill } from './why-is-my-gas-bill-so-high'
import { article as waterBill } from './why-is-my-water-bill-so-high'

const allArticles: BlogArticle[] = [
  electricBill,
  gasBill,
  waterBill,
]

export function getAllArticles(): BlogArticle[] {
  const today = new Date().toISOString().slice(0, 10)
  return allArticles
    .filter(a => a.publishDate <= today)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
}

export function getAllSlugs(): string[] {
  return allArticles.map(a => a.slug)
}

export function getArticle(slug: string): BlogArticle | null {
  return allArticles.find(a => a.slug === slug) || null
}
