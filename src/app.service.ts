import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  isStarted(): string {
    return 'API Running';
  }
}
