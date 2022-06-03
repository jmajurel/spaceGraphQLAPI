import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Planet } from "src/planets/repository/mongo/planet.schema";

export type GalaxyDocument = Galaxy & Document;

@Schema()
export class Galaxy {
    @Prop()
    name: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Planet"}]})
    planets: Planet[]
}

export const GalaxySchema = SchemaFactory.createForClass(Galaxy)