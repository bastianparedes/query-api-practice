import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class HeroController {
  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: { id: number }): any {
    return [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Batman' },
    ][data.id];
  }
}
