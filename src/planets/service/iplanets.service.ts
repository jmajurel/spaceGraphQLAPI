import { Planet } from "../models/planet.model";

export interface IPlanetsService {
    findAll(): Promise<Planet[]>
}