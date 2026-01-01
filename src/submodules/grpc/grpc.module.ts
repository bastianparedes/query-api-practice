import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SUBMODULE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'submodule',
          protoPath:
            '/Users/bastian/Documents/Github/query-api-practice/src/grpc/proto/submodule.proto', //join(__dirname, '../../proto/submodule.proto'),
        },
      },
    ]),
  ],
  providers: [],
  controllers: [],
})
export class GrpcModule {}
