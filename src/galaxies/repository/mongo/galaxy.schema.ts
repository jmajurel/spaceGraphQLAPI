import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type GalaxyDocument = Galaxy & Document;

@Schema()
export class Galaxy {
    @Prop()
    name: string;
}

export const GalaxySchema = SchemaFactory.createForClass(Galaxy)