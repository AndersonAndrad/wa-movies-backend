import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MovieModule } from './app/movies/movies.module'

@Module({
  imports: [
    MovieModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', 'variaveis.ini']
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI)
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
