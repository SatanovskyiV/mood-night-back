import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  console.log('Starting up...........');

  if (!process.env.POSTGRES_PASSWORD) {
    throw new Error('POSTGRES_PASSWORD must be defined');
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
