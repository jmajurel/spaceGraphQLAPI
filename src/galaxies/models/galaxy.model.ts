import {Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'galaxy' })
export class Galaxy {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;
}