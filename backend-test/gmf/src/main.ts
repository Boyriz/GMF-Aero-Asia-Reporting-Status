import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { clientUrl } from './utils/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:8081'
  });

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe());

  app.use(helmet());

  app.use(cookieParser());

  await app.listen(5000);
}
bootstrap();
