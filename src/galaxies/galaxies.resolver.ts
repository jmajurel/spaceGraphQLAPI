import { Query, Mutation, Resolver, Args, ID } from '@nestjs/graphql';
import { GalaxyDTO } from './models/dtos/galaxy.dto';
import { Galaxy } from './models/galaxy.model';
import { GalaxiesService } from './service/galaxies.service';

@Resolver(of => Galaxy)
export class GalaxiesResolver {
  constructor(private readonly galaxiesService: GalaxiesService) {}

  @Query(returns => [Galaxy])
  galaxies(): Promise<Galaxy[]> {
    return this.galaxiesService.findAll();
  }

  @Mutation(returns => Galaxy)
  async galaxy(@Args({ name: 'galaxyName', type: () => String }) name: string, @Args({ name: 'planetIds', type: () => [ID] }) planetIds: string[]) {
    const galaxyToCreate = new GalaxyDTO();
    galaxyToCreate.name = name;
    galaxyToCreate.planets = planetIds;
    return this.galaxiesService.insert(galaxyToCreate);
  }
}