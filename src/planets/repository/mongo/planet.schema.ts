import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";

export type PlanetDocument = Planet & Document;

@Schema()
export class Planet {
    @Prop()
    name: string;
}

export const PlanetSchema = SchemaFactory.createForClass(Planet)