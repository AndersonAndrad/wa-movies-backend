import * as mongoose from 'mongoose'

import { IMovieSchema } from '../interfaces/movie.interface'

export const MovieSchema = new mongoose.Schema<IMovieSchema>(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    director: {
      type: String
    },
    producer: {
      type: String
    },
    image: {
      type: String
    },
    movie_banner: {
      type: String
    }
  },
  { timestamps: true }
)

const Movie: mongoose.Model<IMovieSchema> = mongoose.model('movie', MovieSchema)

export default Movie
