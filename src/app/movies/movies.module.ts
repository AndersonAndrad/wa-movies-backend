import { Global, Module } from '@nestjs/common'

import { HttpModule } from '@nestjs/axios'
import { MovieApiService } from 'src/infra/api/movie.api'
import { MovieService } from './movies.service'
import { MoviesController } from './movies.controller'

Global()
@Module({
  imports: [HttpModule],
  controllers: [MoviesController],
  exports: [MovieService],
  providers: [MovieService, MovieApiService]
})
export class MovieModule {}
