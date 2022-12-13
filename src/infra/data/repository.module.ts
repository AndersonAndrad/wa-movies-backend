import { Movie, MovieSchema } from './schemas/movie.schema'

import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MoviesRepository } from './repositories/movies.repository'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])
  ],
  providers: [MoviesRepository],
  exports: [MoviesRepository]
})
export class RepositoryModule {}
