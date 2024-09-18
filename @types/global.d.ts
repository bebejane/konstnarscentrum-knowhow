type Pagination = {
  count: number
  page: number
  size: number
}

type PageProps = {
  noBottom?: boolean
  regional?: boolean
  title?: string
  crumbs: {
    slug?: string,
    title: string,
    regional: boolean
  }[]
  lexicons?: LexiconRecord[]
}