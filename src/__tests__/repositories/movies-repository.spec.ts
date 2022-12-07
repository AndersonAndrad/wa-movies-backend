import { Test, TestingModule } from '@nestjs/testing'

import { HttpModule } from '@nestjs/axios'
import { IMovie } from 'src/infra/data/interfaces/movie.interface'
import { MongoInMemory } from '../helpers/mongo-in-memory'
import { MongooseModule } from '@nestjs/mongoose'
import { MovieApiService } from '../../infra/api/movie.api'
import { MovieService } from '../../app/movies/movies.service'
import { MoviesController } from '../../app/movies/movies.controller'
import { RepositoryModule } from '../..//infra/data/repository.module'
import mongoose from 'mongoose'

describe('Movies repository', () => {
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
    // jest.setTimeout(100000)

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

  it('Movie Controller', () => {
    expect(movieController).toBeDefined()
  })

  it('Create', async () => {
    const movieCreated = await movieController.create(mockMovie)

    expect(mockMovie.title).toBe(movieCreated.title)
  })

  it('Search', async () => {
    const response = await movieController.search({
      pageIndex: 1,
      pageSize: 10,
      title: '',
      director: '',
      producer: ''
    })

    expect(response).toMatchObject({ items: [], totalCount: 0 })
  })

  it('Get movie', async () => {
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
})
