import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, this is the sports api please refere to the documentation for more info on how to use it';
  }
}
