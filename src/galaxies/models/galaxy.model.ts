import {Field, ID, ObjectType } from '@nestjs/graphql';
import { Planet } from "../../planets/models/planet.model"
@ObjectType({ description: 'galaxy' })
export class Galaxy {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => [Planet])
  planets: Planet[];
}