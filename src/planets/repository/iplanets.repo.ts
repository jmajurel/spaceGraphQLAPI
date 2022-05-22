import { Planet } from "../models/planet.model"

export interface IPlanetsRepository {
    findAll(): Promise<Planet[]>
}