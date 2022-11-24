import { IFilterMovie, IMovie } from '../interfaces/movie.interface';

import { IMoviesRepository } from 'src/app/movies/movies.repository';
import { IPaginatedResponse } from '../interfaces/pagination.interface';

export class MoviesRepository implements IMoviesRepository {
  search(filter: IFilterMovie): Promise<IPaginatedResponse<IMovie>> {
    throw new Error('Method not implemented.');
  }

  create(movie: IMovie): Promise<void> {
    throw new Error('Method not implemented.');
  }

  getMovie(movieId: string): Promise<IMovie> {
    throw new Error('Method not implemented.');
  }
}
