import { Planet } from "../models/planet.model";
import { PlanetDTO} from "../models/dtos/planet.dto";
export interface IPlanetsService {
    findAll(): Promise<Planet[]>
    insert(newPlanet: PlanetDTO): Promise<Planet>
}
