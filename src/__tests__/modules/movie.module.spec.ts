import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { MovieModule } from '../../app/movies/movies.module'
import { Test } from '@nestjs/testing'

describe('Movie module', () => {
  it('Check module is defined', async () => {
    const module = await Test.createTestingModule({
      imports: [
        MovieModule,
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ['.env', 'variaveis.ini']
        }),
        MongooseModule.forRoot(process.env.MONGODB_URI)
      ]
    }).compile()

    expect(module).toBeDefined()
  })
})
