import { Injectable } from "@nestjs/common";
import { Planet } from "../models/planet.model";
import { IPlanetsRepository } from "./iplanets.repo";

@Injectable()
export class PlanetsRepository implements IPlanetsRepository {
    findAll(): Promise<Planet[]> {
        throw new Error("Method not implemented.");
    }
}