import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Planet, PlanetDocument } from './mongo/planet.schema';
import { IPlanetsRepository } from "./iplanets.repo";

@Injectable()
export class PlanetsRepository implements IPlanetsRepository {

    constructor(@InjectModel(Planet.name) private planetModel: Model<PlanetDocument>) {}
    
    async findAll(): Promise<Planet[]> {
        return this.planetModel.find({}).exec();
    }
}