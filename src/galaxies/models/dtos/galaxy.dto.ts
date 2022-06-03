import { ObjectId  } from "mongoose";
export class GalaxyDTO {
    name: string;
    planetIds: ObjectId[];
}