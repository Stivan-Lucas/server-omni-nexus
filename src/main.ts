// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupDocs } from './docs/docs';
import { createAppLogger } from './logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  setupDocs(app);

  const port = Number(process.env.PORT);
  app.useLogger(createAppLogger());

  await app.listen(port);
  const LINK = `http://localhost:${port}`;
  console.info(`App running on ${LINK}`);
  console.info(`Docs running on ${LINK}/docs`);
}

bootstrap();
