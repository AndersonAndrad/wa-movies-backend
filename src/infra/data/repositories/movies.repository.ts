import { ICreateMovie, IFilterMovie } from '../interfaces/movie.interface'

import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { IMoviesRepository } from 'src/app/movies/movies.repository'
import { IPaginatedResponse } from '../interfaces/pagination.interface'
import { Movie, MovieDocument } from '../schemas/movie.schema'

export class MoviesRepository implements IMoviesRepository {
  constructor(@InjectModel(Movie.name) private movie: Model<MovieDocument>) {}

  async search(filterMovie: IFilterMovie): Promise<IPaginatedResponse<Movie>> {
    const filter = {}
    const projection = {
      _id: true,
      title: true,
      description: true,
      director: true,
      producer: true,
      image: true,
      movie_banner: true
    }

    if (filterMovie.title && filterMovie.title.length) {
      filter['title'] = { $regex: `.*${filterMovie.title}.*`, $options: 'i' }
    }

    if (filterMovie.producer && filterMovie.producer.length) {
      filter['producer'] = {
        $regex: `.*${filterMovie.producer}.*`,
        $options: 'i'
      }
    }

    if (filterMovie.director && filterMovie.director.length) {
      filter['director'] = {
        $regex: `.*${filterMovie.director}.*`,
        $options: 'i'
      }
    }

    /* Calculate offset */
    const offset = (filterMovie.pageIndex - 1) * filterMovie.pageSize

    const items = await this.movie
      .find(filter, projection)
      .skip(offset)
      .limit(filterMovie.pageSize)
      .sort('-createdAt')

    const totalCount = await this.movie.countDocuments().where(filterMovie)

    return {
      items,
      totalCount
    }
  }

  async create(movie: ICreateMovie): Promise<Movie> {
    const createdMovie = new this.movie(movie)
    return createdMovie.save()
  }

  async createMultipleMovies(movies: ICreateMovie[]): Promise<Movie[]> {
    for (const { title, ...movie } of movies) {
      await this.movie.updateOne(
        { title: title.toLocaleLowerCase().trim() },
        { title: title.toLocaleLowerCase().trim(), ...movie },
        { upsert: true, setDefaultsOnInsert: true }
      )
    }

    return this.movie.find()
  }

  getMovie(movieId: string): Promise<Movie> {
    return this.movie.findOne({ _id: movieId }).exec()
  }

  async getQuantityMovies(): Promise<number> {
    return await this.movie.countDocuments().where()
  }
}
