import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { PlanetsModule } from './planets/planets.module';
import { GalaxiesModule } from "./galaxies/galaxies.module" 
import { MainController } from "./main.controller"
import 'dotenv/config'
@Module({
  controllers: [MainController],
  imports: [
    PlanetsModule,
    GalaxiesModule,
    MongooseModule.forRoot(process.env.DB_CONNECTION_STRING),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
      playground: true,
      introspection: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
  ],
})
export class AppModule {}
