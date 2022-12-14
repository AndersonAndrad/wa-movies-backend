import { Global, Module } from '@nestjs/common'

import { HttpModule } from '@nestjs/axios'
import { MovieApiService } from '../../infra/api/movie.api'
import { MovieService } from './movies.service'
import { MoviesController } from './movies.controller'
import { RepositoryModule } from '../../infra/data/repository.module'

Global()
@Module({
  imports: [HttpModule, RepositoryModule],
  controllers: [MoviesController],
  exports: [MovieService],
  providers: [MovieService, MovieApiService]
})
export class MovieModule {}
