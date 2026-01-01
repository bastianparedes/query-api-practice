import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: path.join(
        process.cwd(),
        '/src/submodules/grpc/proto/hero.proto',
      ),
      url: 'localhost:50051',
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
