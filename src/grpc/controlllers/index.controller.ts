import { Controller, Get } from '@nestjs/common';

@Controller()
export class GrpcController {
  constructor() {}

  @Get()
  helloGrpc(): string {
    return 'Hello Grpc';
  }
}
