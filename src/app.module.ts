import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { context } from './context'
import { UserModule } from './domains/users/user.module'
import { AuthModule } from './domains/auth/auth.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: false,
      cors: {
        credentials: true,
        origin: true,
      },
      context,
    }),
    TypeOrmModule.forRoot(),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}