import { ApiProperty } from '@nestjs/swagger'

export class VerifyNewMoviesDTO {
  @ApiProperty({ example: 1 })
  totalCount: number
}
