import { ApiProperty } from '@nestjs/swagger';
import { IFilterMovie } from 'src/infra/data/interfaces/movie.interface';

export class SearchMovieDTO implements IFilterMovie {
  @ApiProperty()
  title: string;

  @ApiProperty()
  director: string;

  @ApiProperty()
  producer: string;
}
