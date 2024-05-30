type Region = {
  id: string,
  roleId: string,
  tokenId: string,
  name: string,
  slug: string,
  global: boolean
}

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
}