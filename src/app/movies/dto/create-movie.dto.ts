import { ApiProperty } from '@nestjs/swagger'
import { ICreateMovie } from 'src/infra/data/interfaces/movie.interface'

export class MovieDTO implements ICreateMovie {
  @ApiProperty({ example: 'The movie' })
  title: string

  @ApiProperty({ example: 'The description' })
  description: string

  @ApiProperty({ example: 'the director' })
  director: string

  @ApiProperty({ example: 'the producer' })
  producer: string

  @ApiProperty({ example: 'the image' })
  image: string

  @ApiProperty({ example: 'the banner' })
  movie_banner: string
}
