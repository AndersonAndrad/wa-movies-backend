import { Injectable } from "@nestjs/common"
import { MovieApiService } from "src/infra/api/movie.api"

@Injectable()
export class MovieService {
  constructor ( private movieApi: MovieApiService ) {}

  public async getMovies () {
    const {movies} = await this.movieApi.getMovies()

    return movies
  }

  public async getMovie ( movieId: string ) {
    throw new Error( "Method not implemented" )
  }
}
