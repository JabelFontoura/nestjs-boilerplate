import { NestFactory } from '@nestjs/core';
import { AppModule } from '@modules/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  await app.listen(process.env.APP_PORT || 4000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
