import {
  ICreateMovie,
  IFilterMovie
} from 'src/infra/data/interfaces/movie.interface'

import { IPaginatedResponse } from 'src/infra/data/interfaces/pagination.interface'
import { Movie } from 'src/infra/data/schemas/movie.schema'

export interface IMoviesRepository {
  /**
   * Get movies with pagination
   * @return Promise<any>
   */
  search(filterMovie: IFilterMovie): Promise<IPaginatedResponse<Movie>>

  /**
   * Create only one movie
   * @param movie
   */
  create(movie: ICreateMovie): Promise<void>

  /**
   * Create multiple movies at the same time
   * @param movies
   */
  createMultipleMovies(movies: ICreateMovie[]): Promise<void>

  /**
   * Return only one movie
   * @param movieId
   */
  getMovie(movieId: string): Promise<Movie>

  /**
   * Get number of movies that are in the DB
   */
  getQuantityMovies(): Promise<number>
}
