import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { UserModule } from "./user/user.module";
import { ArticleModule } from "./article/article.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: false,
    }),
    UserModule,
    ArticleModule,
  ],
})
export class AppModule {}