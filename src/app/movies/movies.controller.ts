import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MovieDTO } from './dto/create-movie.dto';
import { SearchMovieDTO } from './dto/search-movie.dto';

@ApiTags('Movies')
@Controller('Movies')
export class MoviesController {
  constructor() {}

  @Get()
  @ApiOperation({ summary: 'endpoint description' })
  search(@Query() filter: SearchMovieDTO) {}

  @Get('/:movieId')
  @ApiOperation({ summary: 'endpoint description' })
  getMovie(@Param('movieId') movieId: string) {}

  @Post()
  @ApiOperation({ summary: 'endpoint description' })
  create(@Body() movie: MovieDTO) {}
}
