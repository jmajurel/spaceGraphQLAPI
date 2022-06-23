import { PlanetDTO } from "../models/dtos/planet.dto"
import { Planet } from "../models/planet.model"

export interface IPlanetsRepository {
    findAll(): Promise<Planet[]>
    findByName(name: string): Promise<Planet>
    insert(newPlanet: PlanetDTO): Promise<Planet>
}