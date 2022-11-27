import { Global, Module } from '@nestjs/common'

import { MovieApiService } from 'src/infra/api/movie.api'
import { MovieService } from './movies.service'
import { MoviesController } from './movies.controller'

Global()
@Module( {
  controllers: [MoviesController],
  exports: [MovieService],
  providers: [MovieService, MovieApiService],
} )
export class MovieModule {}
