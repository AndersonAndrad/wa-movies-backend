import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { MovieDTO } from './dto/create-movie.dto'
import { SearchMovieDTO } from './dto/search-movie.dto'
import { VerifyNewMoviesDTO } from './dto/verifyNewMovies.dto'
import { MovieService } from './movies.service'

@ApiTags('Movies')
@Controller('Movies')
export class MoviesController {
  constructor(private movieService: MovieService) {}

  @Get()
  @ApiOperation({ summary: 'endpoint description' })
  search(@Query() filterMovie: SearchMovieDTO) {
    return this.movieService.getMovies(filterMovie)
  }

  @Get('/verify-new-movies')
  @ApiOperation({ summary: 'Verify in base api if has some new movie' })
  veriryNewMovies(@Query() { totalCount }: VerifyNewMoviesDTO) {
    return this.movieService.createMultipleMovies(totalCount)
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
