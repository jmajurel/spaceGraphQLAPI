import { Planet } from "../repository/mongo/planet.schema"

export interface IPlanetsRepository {
    findAll(): Promise<Planet[]>
}