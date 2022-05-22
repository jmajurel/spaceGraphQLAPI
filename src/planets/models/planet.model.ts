import {Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'planet' })
export class Planet {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;
}