import { Test, TestingModule } from '@nestjs/testing'

import { HttpModule } from '@nestjs/axios'
import { IMovie } from 'src/infra/data/interfaces/movie.interface'
import { MongoInMemory } from '../helpers/mongo-in-memory'
import { MongooseModule } from '@nestjs/mongoose'
import { MovieApiService } from '../../infra/api/movie.api'
import { MovieService } from '../../app/movies/movies.service'
import { MoviesController } from '../../app/movies/movies.controller'
import { RepositoryModule } from '../../infra/data/repository.module'
import mongoose from 'mongoose'

describe('Movies end to end', () => {
  const mockMovie = {
    title: 'the movie',
    description: 'The description',
    director: 'the director',
    producer: 'the producer',
    image: 'the image',
    movie_banner: 'the banner'
  }

  let movieController: MoviesController
  let mongoInMemory: MongoInMemory

  beforeEach(async () => {
    mongoInMemory = await MongoInMemory.startServer()

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        RepositoryModule,
        MongooseModule.forRoot(process.env.MONGODB_URI)
      ],
      controllers: [MoviesController],
      exports: [MovieService],
      providers: [MovieService, MovieApiService]
    }).compile()

    movieController = module.get<MoviesController>(MoviesController)
  })

  afterAll(async () => {
    await mongoInMemory.clearCollections()
    await mongoInMemory.shutdown()
  })

  it('Check if controller has been defined', () => {
    expect(movieController).toBeDefined()
  })

  it('Check is possible create a movie', async () => {
    const movieCreated = await movieController.create(mockMovie)

    expect(mockMovie.title).toBe(movieCreated.title)
  })

  it('Check if return pagined movies', async () => {
    const response = await movieController.search({
      pageIndex: 1,
      pageSize: 10,
      title: '',
      director: '',
      producer: ''
    })

    expect(response).toMatchObject({ items: [], totalCount: 0 })
  })

  it('Check if return movie', async () => {
    const createdMovie = (await movieController.create(mockMovie)) as IMovie

    const getMovie = (await movieController.getMovie(
      createdMovie._id
    )) as IMovie

    /**
     * Is necessary to convert to objectId and after to string
     * because when create return with objectId
     */
    const getMovieId = new mongoose.Types.ObjectId(getMovie._id).toString()
    const createdMovieId = createdMovie._id.toString()

    expect(getMovieId).toBe(createdMovieId)
  })

  it('Receive the amount of new movies', async () => {
    const quantityNewMovies = await movieController.veriryNewMovies({
      totalCount: 2
    })

    expect(quantityNewMovies).toMatchObject({
      quantityNewMovies: 0,
      newQuantity: -2
    })
  })
})
