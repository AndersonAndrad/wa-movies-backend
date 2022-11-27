import { AxiosBuild } from "../helpers/axios.helper"
import { AxiosInstance } from "axios"
import { IMovie } from "../data/interfaces/movie.interface"

export class MovieApiService {
  private axios: AxiosInstance
  private axiosBuild = new AxiosBuild()

 public async getMovies ( ) {
  this.axios =  this.axiosBuild.request( 'http://localhost:3004/' )

  const { data } = await this.axios.get( 'movies' )

  return { movies: data } as {movies: IMovie[]}
}
}