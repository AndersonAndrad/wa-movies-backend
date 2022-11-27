export interface IMovie {
  _id: string
  title: string
  description: string
  director: string
  producer: string
  image: string
  movie_banner: string
}

export interface IFilterMovie {
  title: string
  director: string
  producer: string
}

export type ICreateMovie = Omit<IMovie, '_id'>

export type IMovieSchema = ICreateMovie
