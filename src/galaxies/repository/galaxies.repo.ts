import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Galaxy, GalaxyDocument } from './mongo/galaxy.schema';
import { Galaxy as GalaxyModel} from "../models/galaxy.model"
import { IGalaxiesRepository } from "./igalaxies.repo";
import { GalaxyDTO } from '../models/dtos/galaxy.dto';

@Injectable()
export class GalaxiesRepository implements IGalaxiesRepository {

    constructor(@InjectModel(Galaxy.name) private galaxyDBModel: Model<GalaxyDocument>) {}

    
    async findAll(): Promise<GalaxyModel[]> {
        const galaxies = await this.galaxyDBModel.find({}).exec();
        const galaxiesDTO = galaxies.map(x => {
            var glx = new GalaxyModel();
            glx.id = x._id;
            glx.name = x.name;
            return glx;
        });
        return galaxiesDTO;
    }

    async insert(newGalaxy: GalaxyDTO): Promise<GalaxyModel> {
        const newlyCreatedGalaxy = await this.galaxyDBModel.create(newGalaxy)
        const newlyCreatedGalaxyDTO = new GalaxyModel();
        newlyCreatedGalaxyDTO.id = newlyCreatedGalaxy._id;
        newlyCreatedGalaxyDTO.name = newlyCreatedGalaxy.name
        return newlyCreatedGalaxyDTO;
    }
}