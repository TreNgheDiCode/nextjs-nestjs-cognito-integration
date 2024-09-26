import { Controller, Get } from '@nestjs/common';
import { HealthzService } from './healthz.service';

@Controller('healthz')
export class HealthzController {
  constructor(private readonly healthzService: HealthzService) {}

  @Get()
  checkHealth(): string {
    return this.healthzService.checkHealth();
  }
}
