import { GalaxyDTO } from "../models/dtos/galaxy.dto"
import { Galaxy } from "../models/galaxy.model"

export interface IGalaxiesRepository {
    findAll(): Promise<Galaxy[]>
    insert(newGalaxy: GalaxyDTO): Promise<Galaxy>
}