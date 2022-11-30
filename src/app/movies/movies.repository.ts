import {
  ICreateMovie,
  IFilterMovie
} from 'src/infra/data/interfaces/movie.interface'

import { IPaginatedResponse } from 'src/infra/data/interfaces/pagination.interface'
import { Movie } from 'src/infra/data/schemas/movie.schema'

export interface IMoviesRepository {
  /**
   * Get all movies with pagination
   * @return Promise<any>
   */
  search(filterMovie: IFilterMovie): Promise<IPaginatedResponse<Movie>>

  /**
   * Create a movie
   * @param movie
   */
  create(movie: ICreateMovie): Promise<void>

  /**
   * Return only one movie
   * @param movieId
   */
  getMovie(movieId: string): Promise<Movie>
}
