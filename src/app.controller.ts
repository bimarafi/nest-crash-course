import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  async getHello(): Promise<any> {
    // await this.appService.seed();
    return this.appService.deleteEmployee(2);
  }
}
