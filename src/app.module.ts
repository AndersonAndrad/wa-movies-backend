import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { MovieModule } from './app/movies/movies.module'

@Module( {
  imports: [
    MovieModule,
    ConfigModule.forRoot( {
    isGlobal: true,
    envFilePath: ['.env', 'variaveis.ini'],
  } ),],
  controllers: [AppController],
  providers: [AppService]
} )
export class AppModule {}
