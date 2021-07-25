import { Module } from '@nestjs/common'
import { UserResolver } from './user.resolver'
import { UserRepository } from './user.repository'

@Module({
  providers: [
    UserResolver,
    UserRepository,
  ],
})

export class UserModule {}
