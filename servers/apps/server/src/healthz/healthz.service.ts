import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthzService {
  checkHealth(): string {
    return 'OK';
  }
}
