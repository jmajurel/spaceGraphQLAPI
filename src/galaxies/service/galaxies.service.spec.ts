import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { GalaxiesService } from './galaxies.service';
import { Galaxy } from '../repository/mongo/galaxy.schema';
import { GalaxiesRepository } from '../repository/galaxies.repo';
import { Model } from 'mongoose';
import { Exclude } from 'class-transformer';

const mockGalaxy = {
  name: 'Milky Way',
};

describe('GalaxiesService', () => {
  let service: GalaxiesService;
  let model: Model<Galaxy>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GalaxiesRepository, 
        {
          provide: getModelToken("Galaxy"),
          useValue: {
            new: jest.fn().mockResolvedValue(mockGalaxy),
            constructor: jest.fn().mockResolvedValue(mockGalaxy),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),            
          }
      }, GalaxiesService],
    }).compile();

    service = module.get<GalaxiesService>(GalaxiesService);
    model = module.get<Model<Galaxy>>(getModelToken('Galaxy'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should return a list of galaxy", async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce([mockGalaxy]),
    } as any);

    const galaxies = await service.findAll();
    expect(galaxies).toBeDefined();
    expect(galaxies.map(x => x.name)).toContainEqual(mockGalaxy.name);
  });

  it("should create a new galaxy", async () => {

    const andromedaGalaxy = {
        name: "Andromeda Galaxy"
    };

    jest.spyOn(model, 'create').mockImplementationOnce(() =>
    Promise.resolve({
      name: andromedaGalaxy.name
    })
  );

    const createdGalaxy = await service.insert(andromedaGalaxy);
    expect(createdGalaxy).toBeDefined();
    expect(createdGalaxy.name).toBe(andromedaGalaxy.name);
  });
  
})