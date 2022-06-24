import { Injectable } from '@nestjs/common';
import { Planet } from '../models/planet.model';
import { IPlanetsService } from './iplanets.service';
import { PlanetsRepository } from '../repository/planets.repo';
import { PlanetDTO } from '../models/dtos/planet.dto';
import { ExistingPlanetException } from './exceptions/ExistingPlanetException';
@Injectable()
export class PlanetsService implements IPlanetsService {

  constructor(private planetsRepository: PlanetsRepository) {}

  async findAll(): Promise<Planet[]> {
    return this.planetsRepository.findAll();
  }

  async insert(newPlanet: PlanetDTO): Promise<Planet> {

    //business logic
    const foundExistingPlanet = await this.planetsRepository.findByName(newPlanet.name);
    if(foundExistingPlanet) throw new ExistingPlanetException();
    return this.planetsRepository.insert(newPlanet);
  }
}
