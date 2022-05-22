import { Module } from '@nestjs/common';
import { PlanetsResolver } from './planets.resolver';
import { PlanetsService } from './service/planets.service';

@Module({
  providers: [PlanetsResolver, PlanetsService],
})
export class PlanetsModule {}
