import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument } from 'mongoose'
import { IMovieSchema } from '../interfaces/movie.interface'

export type MovieDocument = HydratedDocument<Movie>

@Schema()
export class Movie implements IMovieSchema {
  @Prop()
  title: string

  @Prop()
  description: string

  @Prop()
  director: string

  @Prop()
  producer: string

  @Prop()
  image: string

  @Prop()
  movie_banner: string
}

export const MovieSchema = SchemaFactory.createForClass(Movie)
