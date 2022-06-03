import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GalaxiesResolver } from './galaxies.resolver';
import { GalaxiesService } from './service/galaxies.service';
import { GalaxiesRepository } from './repository/galaxies.repo';
import { Galaxy, GalaxySchema } from "./repository/mongo/galaxy.schema"
@Module({
  imports: [MongooseModule.forFeature([{ name: Galaxy.name, schema: GalaxySchema}])],
  providers: [GalaxiesResolver, GalaxiesService, GalaxiesRepository],
})
export class GalaxiesModule {}
