import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';

import { PlanetsService } from './service/planets.service';
import { closeInMongodConnection, rootMongooseTestModule } from '../testingHelper';
import { PlanetSchema } from './repository/mongo/planet.schema';

describe('PlanetsService', () => {
  let service: PlanetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Planet', schema: PlanetSchema }]),
      ],
      providers: [PlanetsService],
    }).compile();

    service = module.get<PlanetsService>(PlanetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /**
    Write meaningful test
  **/

  afterAll(async () => {
    await closeInMongodConnection();
  });
});