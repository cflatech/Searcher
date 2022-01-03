export type SearchResult = {
  title: string
  link: string
  description: string
}

export default interface SiteRepository {
  search(query: string): Promise<Array<SearchResult>>
}
