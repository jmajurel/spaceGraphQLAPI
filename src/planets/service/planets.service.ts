import { Injectable } from '@nestjs/common';
import { Planet } from '../models/planet.model';
import { IPlanetsService } from './iplanets.service';
import { PlanetsRepository } from '../repository/planets.repo';
import { PlanetDTO } from '../models/dtos/planet.dto';
@Injectable()
export class PlanetsService implements IPlanetsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */
  /**
   *
   */
  constructor(private planetsRepository: PlanetsRepository) {}

  async findAll(): Promise<Planet[]> {
    return this.planetsRepository.findAll();
  }

  async insert(newPlanet: PlanetDTO): Promise<Planet> {
    return this.planetsRepository.insert(newPlanet);
  }
}
