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
  @ApiOperation({ summary: 'Search all movies according to the filter' })
  search(@Query() filterMovie: SearchMovieDTO) {
    return this.movieService.getMovies(filterMovie)
  }

  @Get('/verify-new-movies')
  @ApiOperation({ summary: 'Verify in base api if has some new movie' })
  veriryNewMovies(@Query() { totalCount }: VerifyNewMoviesDTO) {
    return this.movieService.createMultipleMovies(totalCount)
  }

  @Get('/:movieId')
  @ApiOperation({ summary: 'Search movie with ID movie' })
  getMovie(@Param('movieId') movieId: string) {
    return this.movieService.getMovie(movieId)
  }

  @Post()
  @ApiOperation({ summary: 'Create a movie' })
  create(@Body() movie: MovieDTO) {
    return this.movieService.create(movie)
  }
}
