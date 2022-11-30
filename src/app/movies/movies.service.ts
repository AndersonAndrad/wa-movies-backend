import {
  ICreateMovie,
  IFilterMovie
} from 'src/infra/data/interfaces/movie.interface'

import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { MoviesRepository } from 'src/infra/data/repositories/movies.repository'

@Injectable()
export class MovieService {
  constructor(
    private httpService: HttpService,
    private movieRepository: MoviesRepository
  ) {}

  public async getMovies(filterMovie: IFilterMovie) {
    return await this.movieRepository.search(filterMovie)
  }

  public async getMovie(movieId: string) {
    return await this.movieRepository.getMovie(movieId)
  }

  public async create(movie: ICreateMovie) {
    await this.movieRepository.create(movie)
  }
}
