import { ICreateMovie } from 'src/infra/data/interfaces/movie.interface'

export class MovieDTO implements ICreateMovie {
  title: string
  description: string
  director: string
  producer: string
  image: string
  movie_banner: string
}
