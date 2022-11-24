import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MovieModule } from './app/movies/movies.module';

@Module({
  imports: [MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
