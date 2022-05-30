import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { PlanetsService } from './service/planets.service';
import { closeInMongodConnection, rootMongooseTestModule } from '../testingHelper';
import { PlanetSchema } from './repository/mongo/planet.schema';
import { Planet } from './models/planet.model';
import { PlanetsRepository } from './repository/planets.repo';

const mockPlanet = {
  name: 'Earth',
};

describe('PlanetsService', () => {
  let service: PlanetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlanetsRepository, 
        {
          provide: getModelToken("Planet"),
          useValue: {
            new: jest.fn().mockResolvedValue(mockPlanet),
            constructor: jest.fn().mockResolvedValue(mockPlanet),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),            
          }
      }, PlanetsService],
    }).compile();

    service = module.get<PlanetsService>(PlanetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});