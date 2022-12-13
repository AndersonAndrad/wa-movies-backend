import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Cats Example')
    .setDescription('This is my description')
    .setVersion('1.0')
    .addTag('cats')
    .build()

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)

  SwaggerModule.setup('api', app, swaggerDocument)

  app.enableCors()
  await app.listen(3000)
}
bootstrap()
