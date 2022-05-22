import { Injectable } from '@nestjs/common';
import { Planet } from './models/planet.model';

@Injectable()
export class PlanetsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findAll(): Promise<Planet[]> {
    return [] as Planet[];
  }
}
