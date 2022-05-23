import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanetsResolver } from './planets.resolver';
import { PlanetsService } from './service/planets.service';
import { Planet, PlanetSchema } from "./repository/mongo/planet.schema"
@Module({
  imports: [MongooseModule.forFeature([{ name: Planet.name, schema: PlanetSchema}])],
  providers: [PlanetsResolver, PlanetsService],
})
export class PlanetsModule {}
