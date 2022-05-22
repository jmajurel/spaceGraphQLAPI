import { Query, Resolver } from '@nestjs/graphql';
import { Planet } from './models/planet.model';
import { PlanetsService } from './planets.service';

@Resolver(of => Planet)
export class PlanetsResolver {
  constructor(private readonly planetsService: PlanetsService) {}

  @Query(returns => [Planet])
  planets(): Promise<Planet[]> {
    return this.planetsService.findAll();
  }
}