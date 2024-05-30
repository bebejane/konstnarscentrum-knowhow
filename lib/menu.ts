import { apiQuery } from 'dato-nextjs-utils/api';
import { LatestNewsDocument, AllAboutsMenuDocument, AllForArtistDocument, AllProjectsDocument, AllKnowledgeCategoriesDocument } from "/graphql";

export type Menu = MenuItem[]

export type MenuItem = {
  type: string
  index?: boolean
  label: string
  slug?: string
  external?: boolean
  sub?: MenuItem[]
}

const base: Menu = [
  { type: 'about', label: 'Om', slug: '/om' },
  { type: 'activity', label: 'Aktiviteter', slug: '/aktiviteter', index: true, sub: [] },
  { type: 'knowledge', label: 'Kunskapsbank', slug: '/kunskapsbank', sub: [] },
  { type: 'lexicon', label: 'Lexicon', slug: '/lexicon', index: true, sub: [] },
  //{ type: 'news', label: 'Nyheter', slug: '/nyheter', index: true, sub: [] },
  {
    type: 'contact', label: 'Kontakt', slug: '/kontakt', sub: [
      { type: 'contact', label: 'Konstkonsulter', slug: '/kontakt/konstkonsulter' },
      { type: 'contact', label: 'Personal', slug: '/kontakt/personal' },
      { type: 'contact', label: 'Styrelse', slug: '/kontakt/styrelse' },
    ]
  },
]

export const buildMenu = async () => {

  const {
    news,
    abouts,
    projects,
    forArtists,
    knowledgeCategories
  }: {
    news: NewsRecord[],
    abouts: AboutRecord[],
    projects: ProjectRecord[],
    forArtists: ForArtistRecord[],
    knowledgeCategories: KnowledgeCategoryRecord[]
  } = await apiQuery([
    LatestNewsDocument,
    AllProjectsDocument,
    AllAboutsMenuDocument,
    AllForArtistDocument,
    AllKnowledgeCategoriesDocument
  ], { variables: [{ first: 5 }, { first: 5 }] });

  const menu = base.map(item => {
    let sub: MenuItem[];
    switch (item.type) {
      case 'news':
        sub = news.slice(0, 5).map(el => ({ type: 'news', label: el.title, slug: `/nyheter/${el.slug}` }))
        break;
      case 'about':
        sub = abouts.map(el => ({ type: 'about', label: el.title, slug: `/om/${el.slug}` }))
        break;
      case 'projects':
        sub = [...item.sub, ...projects.map(el => ({ type: 'projects', label: el.title, slug: el.url }))]
        break;
      case 'knowledge':
        sub = item.sub.concat(knowledgeCategories.map(el => ({ type: 'knowledge', label: el.category, slug: `/kunskapsbank?category=${el.category}` })))
        break;
      default:
        break;
    }
    return { ...item, sub: sub ? sub : item.sub }
  })

  return menu
}