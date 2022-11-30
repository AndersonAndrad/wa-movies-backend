import {
  ICreateMovie,
  IFilterMovie,
  IMovie
} from '../interfaces/movie.interface'

import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { IMoviesRepository } from 'src/app/movies/movies.repository'
import { IPaginatedResponse } from '../interfaces/pagination.interface'
import { Movie, MovieDocument } from '../schemas/movie.schema'

export class MoviesRepository implements IMoviesRepository {
  constructor(@InjectModel(Movie.name) private movie: Model<MovieDocument>) {}

  search(filter: IFilterMovie): Promise<IPaginatedResponse<IMovie>> {
    throw new Error('Method not implemented.')
  }

  create(movie: ICreateMovie): Promise<void> {
    const createdMovie = new this.movie(movie)
    createdMovie.save()
    return
  }

  getMovie(movieId: string): Promise<Movie> {
    return this.movie.findOne({ _id: movieId }).exec()
  }
}
