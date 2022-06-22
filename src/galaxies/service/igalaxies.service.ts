import { Galaxy } from "../models/galaxy.model";
import { GalaxyDTO} from "../models/dtos/galaxy.dto";

export interface IGalaxiesService {
    findAll(): Promise<Galaxy[]>
    insert(newGalaxy: GalaxyDTO): Promise<Galaxy>
}
