import { Module } from '@nestjs/common';
import { GrpcController } from './controlllers/index.controller';

@Module({
  controllers: [GrpcController],
})
export class GrpcModule {}
