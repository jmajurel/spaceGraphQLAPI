import { Injectable } from '@nestjs/common';
import { Galaxy } from '../models/galaxy.model';
import { IGalaxiesService } from './igalaxies.service';
import { GalaxiesRepository } from '../repository/galaxies.repo';
import { GalaxyDTO } from '../models/dtos/galaxy.dto';
@Injectable()
export class GalaxiesService implements IGalaxiesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */
  /**
   *
   */
  constructor(private galaxiesRepository: GalaxiesRepository) {}

  async findAll(): Promise<Galaxy[]> {
    return this.galaxiesRepository.findAll();
  }

  async insert(newGalaxy: GalaxyDTO): Promise<Galaxy> {
    return this.galaxiesRepository.insert(newGalaxy);
  }
}
