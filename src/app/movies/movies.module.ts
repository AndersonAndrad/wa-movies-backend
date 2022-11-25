import { Global, Module } from '@nestjs/common'

import { MovieService } from './movies.service'
import { MoviesController } from './movies.controller'

Global()
@Module( {
  controllers: [MoviesController],
  exports: [MovieService]
} )
export class MovieModule {}
