import { IMovie } from '../../infra/data/interfaces/movie.interface'
import { IPaginatedResponse } from 'src/infra/data/interfaces/pagination.interface'
import { Mocked } from '../helpers/mock.helper'
import { MovieService } from '../../app/movies/movies.service'
import { MoviesController } from '../../app/movies/movies.controller'

describe('Movies controller', () => {
  let moviesServiceMock: Mocked<MovieService>
  let controller: MoviesController

  beforeEach(() => {
    moviesServiceMock = {
      getMovie: jest.fn().mockReturnValue(movieMock),
      create: jest.fn().mockReturnValue(movieMock),
      getMovies: jest.fn().mockReturnValue(paginatedMock),
      createMultipleMovies: jest.fn().mockReturnValue(createMultipleMock)
    }

    controller = new MoviesController(moviesServiceMock as any)
  })

  it('should be verify if controller is defined', () => {
    expect(controller).toBeDefined()
  })

  it('Should be get movie', async () => {
    const movie = await controller.getMovie('1')

    expect(movie).toMatchObject(movieMock)
  })

  it('should be verify if has ben created movie', async () => {
    const movie = await controller.create(movieMock)

    expect(movie).toMatchObject(movieMock)
  })

  it('should be verify if return paginated movies', async () => {
    const movies = await controller.search({ pageIndex: 1, pageSize: 10 })

    expect(movies).toMatchObject(paginatedMock)
  })

  it('should be verify if has ben created multiple movies', async () => {
    const multipleMovies = await controller.veriryNewMovies({ totalCount: 10 })

    expect(multipleMovies).toMatchObject(createMultipleMock)
  })
})

/* TODO: Move all mocks to unique file  */
const movieMock: IMovie = {
  _id: '1',
  title: 'this is title',
  description: 'this is description',
  director: 'this is director',
  producer: 'this is producer',
  image: 'this is image',
  movie_banner: 'this is banner'
}

const paginatedMock: IPaginatedResponse<IMovie> = {
  items: [movieMock],
  totalCount: 1
}

const createMultipleMock: { quantityNewMovies: number; newQuantity: number } = {
  quantityNewMovies: 0,
  newQuantity: 0
}
