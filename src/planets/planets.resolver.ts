import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { PlanetDTO } from './models/dtos/planet.dto';
import { Planet } from './models/planet.model';
import { PlanetsService } from './service/planets.service';

@Resolver(of => Planet)
export class PlanetsResolver {
  constructor(private readonly planetsService: PlanetsService) {}

  @Query(returns => [Planet])
  planets(): Promise<Planet[]> {
    return this.planetsService.findAll();
  }

  @Mutation(returns => Planet)
  async planet(@Args({ name: 'planetName', type: () => String }) name: string) {
    const planetToCreate = new PlanetDTO();
    planetToCreate.name = name;
    return this.planetsService.insert(planetToCreate);
  }
}