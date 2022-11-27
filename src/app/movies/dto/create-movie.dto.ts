import { ICreateMovie } from 'src/infra/data/interfaces/movie.interface'

export class MovieDTO implements ICreateMovie {
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
