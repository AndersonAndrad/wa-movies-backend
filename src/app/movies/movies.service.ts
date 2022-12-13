import {
  ICreateMovie,
  IFilterMovie
} from 'src/infra/data/interfaces/movie.interface'

import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { MoviesRepository } from '../../infra/data/repositories/movies.repository'

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

  public async create({ title, ...movie }: ICreateMovie) {
    /* format name to remove white spaces to use the name so as not to duplicate movies */
    const formattedMovie: ICreateMovie = {
      title: title.toLowerCase().trim(),
      ...movie
    }

    return await this.movieRepository.create(formattedMovie)
  }

  public async createMultipleMovies(totalCount: number) {
    const registred = await this.getMovies({ pageIndex: 1, pageSize: 1 })

    this.httpService
      .get('http://localhost:3001/movies')
      .subscribe(async (movies) => {
        await this.movieRepository.createMultipleMovies(movies.data)
      })

    const newRegisters = await this.getMovies({ pageIndex: 1, pageSize: 1 })

    const quantityNewMovies = registred.totalCount - newRegisters.totalCount

    return {
      quantityNewMovies,
      newQuantity: quantityNewMovies - totalCount
    }
  }
}
