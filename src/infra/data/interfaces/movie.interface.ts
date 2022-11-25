export interface IMovie {
  id: string
  title: string
  original_title: string
  original_title_romanised: string
  description: string
  director: string
  producer: string
  release_date: string
  running_time: string
  rt_score: string
}

export interface IFilterMovie {
  title: string
  director: string
  producer: string
}

export interface ICreateMovie {}
