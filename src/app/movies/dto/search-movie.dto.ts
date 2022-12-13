import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

import { IFilterMovie } from 'src/infra/data/interfaces/movie.interface'

export class SearchMovieDTO implements IFilterMovie {
  @ApiProperty({ example: 1 })
  pageIndex: number

  @ApiProperty({ example: 10 })
  pageSize: number

  @ApiPropertyOptional()
  title?: string

  @ApiPropertyOptional()
  director?: string

  @ApiPropertyOptional()
  producer?: string
}
