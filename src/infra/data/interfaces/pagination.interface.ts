export interface IPaginatedResponse<item> {
  items: item[]
  totalCount: number
}

export interface IPaginateFilter {
  pageIndex: number
  pageSize: number
}
