
import { Test } from '@nestjs/testing';
import { getModelToken } from "@nestjs/mongoose"
import { Planet } from "./repository/mongo/planet.schema"
import { PlanetsResolver } from './planets.resolver';
import { PlanetsService } from './service/planets.service';
import { PlanetsRepository } from "./repository/planets.repo";

describe('PlanetsResolver', () => {
  let planetsResolver: PlanetsResolver;
  let planetsService: PlanetsService;
  let planetsRepository: PlanetsRepository;

  const mockPlanet = {
    name: 'Mock Earth',
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [PlanetsResolver],
        providers: [PlanetsService, PlanetsRepository,     
            {
            provide: getModelToken(Planet.name),
            useValue: {
                new: jest.fn().mockResolvedValue(mockPlanet),
                constructor: jest.fn().mockResolvedValue(mockPlanet),
                find: jest.fn(),
                create: jest.fn(),
                exec: jest.fn(),
              },
            },
        ],
      }).compile();

      planetsRepository = moduleRef.get<PlanetsRepository>(PlanetsRepository);
      planetsResolver = moduleRef.get<PlanetsResolver>(PlanetsResolver);
  });

  describe('findAll', () => {
    it('should return an array of planets', async () => {
      const result = [mockPlanet];
      expect(await planetsResolver.planets()).toBe(result);
    });
  });
});