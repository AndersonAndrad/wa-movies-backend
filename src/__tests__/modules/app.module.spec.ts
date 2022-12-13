import { AppModule } from '../../app.module'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { Test } from '@nestjs/testing'

describe('App module', () => {
  it('Check module is defined', async () => {
    const module = await Test.createTestingModule({
      imports: [
        AppModule,
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
