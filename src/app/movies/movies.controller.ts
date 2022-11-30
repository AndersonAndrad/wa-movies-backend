import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { MovieDTO } from './dto/create-movie.dto'
import { MovieService } from './movies.service'

@ApiTags('Movies')
@Controller('Movies')
export class MoviesController {
  constructor(private movieService: MovieService) {}

  @Get()
  @ApiOperation({ summary: 'endpoint description' })
  // search ( @Query() filter: SearchMovieDTO ) {
  search() {
    return this.movieService.getMovies()
  }

  @Get('/:movieId')
  @ApiOperation({ summary: 'endpoint description' })
  getMovie(@Param('movieId') movieId: string) {
    return this.movieService.getMovie(movieId)
  }

  @Post()
  @ApiOperation({ summary: 'endpoint description' })
  create(@Body() movie: MovieDTO) {
    this.movieService.create(movie)
  }
}
