import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import UserModule from "./domains/user/user.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: false,
    }),
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 8000,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      autoLoadEntities: true,
      entities: ['./dist/databases/postgres/models/*.entity{ .ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}