import { Module } from '@nestjs/common';
import { HeroController } from './controllers/hero.controller';

@Module({
  imports: [],
  controllers: [HeroController],
})
export class GrpcModule {}
