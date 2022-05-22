import { Injectable } from '@nestjs/common';
import { Planet } from '../models/planet.model';
import { IPlanetsService } from './iplanets.service';
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
  constructor() {
  }

  async findAll(): Promise<Planet[]> {
    const p1 = new Planet();
    p1.name = "Earth"
    const p2 = new Planet();
    p1.name = "mercury"

    var mockList: Planet[] = [p1, p2]
    return mockList;
  }
}
