import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from "./databases/postgres/models/user.entity";
import UserModule from "./domains/user/user.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: false,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 8000,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      autoLoadEntities: true,
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}