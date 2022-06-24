import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Planet, PlanetDocument } from './mongo/planet.schema';
import { Planet as PlanetModel} from "../models/planet.model"
import { IPlanetsRepository } from "./iplanets.repo";
import { PlanetDTO } from '../models/dtos/planet.dto';

@Injectable()
export class PlanetsRepository implements IPlanetsRepository {

    constructor(@InjectModel(Planet.name) private planetDBModel: Model<PlanetDocument>) {}
    
    async findAll(): Promise<PlanetModel[]> {
        const planets = await this.planetDBModel.find({}).exec();
        const planetsDTO = planets.map(x => {
            var plt = new PlanetModel();
            plt.id = x._id;
            plt.name = x.name;
            return plt;
        });
        return planetsDTO;
    }

    async findByName(name: string): Promise<PlanetModel> {
        const foundPlanet = await this.planetDBModel.findOne({ "name" : { $regex : new RegExp(name, "i") } } );
        if(!foundPlanet) return;

        const planetDTO = new PlanetModel();
        planetDTO.id = foundPlanet.id;
        planetDTO.name = foundPlanet.name;
        return planetDTO;
    }

    async insert(newPlanet: PlanetDTO): Promise<PlanetModel> {
        const newlyCreatedPlanet = await this.planetDBModel.create(newPlanet)
        const newlyCreatedPlanetDTO = new PlanetModel();
        newlyCreatedPlanetDTO.id = newlyCreatedPlanet._id;
        newlyCreatedPlanetDTO.name = newlyCreatedPlanet.name
        return newlyCreatedPlanetDTO;
    }
}