import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PlanetsService } from './planets.service';
import { Planet } from '../repository/mongo/planet.schema';
import { PlanetsRepository } from '../repository/planets.repo';
import { ExistingPlanetException } from "./exceptions/ExistingPlanetException";

const mockPlanet = {
  name: 'Earth',
};

describe('PlanetsService', () => {
  let service: PlanetsService;
  let model: Model<Planet>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlanetsRepository, 
        {
          provide: getModelToken("Planet"),
          useValue: {
            new: jest.fn().mockResolvedValue(mockPlanet),
            constructor: jest.fn().mockResolvedValue(mockPlanet),
            find: jest.fn().mockResolvedValue([mockPlanet]),
            findOne: jest.fn().mockResolvedValue(mockPlanet),
            create: jest.fn(),
            exec: jest.fn()
          }
      }, PlanetsService],
    }).compile();

    service = module.get<PlanetsService>(PlanetsService);
    model = module.get<Model<Planet>>(getModelToken('Planet'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a planet list', async () => {

    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce([mockPlanet]),
    } as any);

    const results = await service.findAll();
    expect(results).toBeDefined();
    expect(results.map(x => x.name)).toContain(mockPlanet.name);
  });

  it('should create a new jupyter planet', async () => {

    const newJupyterPlanet = {
        name: "Jupyter"
    };

    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        name: newJupyterPlanet.name
      })
    );

    const createdPlanet = await service.insert(newJupyterPlanet);
    expect(createdPlanet).toBeDefined();
    expect(createdPlanet.name).toBe(newJupyterPlanet.name)
  });

  it('should throw exception when trying to create an existing planet', async () => {

    const existingPlanet = { name: "Earth" };

    expect(await service.insert(existingPlanet))
      .toThrow(ExistingPlanetException);
  });

});