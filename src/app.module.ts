import { Module } from '@nestjs/common';
import { IndexController } from './controlllers/index.controller';
import { GraphqlModule } from './submodules/graphql/graphql.module';
import { GrpcModule } from './submodules/grpc/grpc.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    GraphqlModule,
    GrpcModule,
    RouterModule.register([{ path: 'graphql', module: GraphqlModule }]),
  ],
  controllers: [IndexController],
  providers: [],
})
export class AppModule {}
