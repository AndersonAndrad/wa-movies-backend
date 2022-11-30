import { ICreateMovie, IMovie } from 'src/infra/data/interfaces/movie.interface'

import { AxiosResponse } from 'axios'
import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { MoviesRepository } from 'src/infra/data/repositories/movies.repository'
import { Observable } from 'rxjs'

@Injectable()
export class MovieService {
  constructor(
    private httpService: HttpService,
    private movieRepository: MoviesRepository
  ) {}

  public async getMovies() {
    const observableMovie = this.httpService.get<
      Observable<AxiosResponse<IMovie[]>>
    >('https://ghibliapi.herokuapp.com/films')

    // observableMovie.subscribe(async ({ data }) => {})
  }

  public async getMovie(movieId: string) {
    return await this.movieRepository.getMovie(movieId)
  }

  public async create(movie: ICreateMovie) {
    await this.movieRepository.create(movie)
  }
}
