import { Controller, Get } from '@nestjs/common';

@Controller()
export class IndexController {
  constructor() {}

  @Get()
  helloWorld(): string {
    return 'Hello world';
  }
}
