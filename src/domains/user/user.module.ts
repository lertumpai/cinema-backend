import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserResolver } from './user.resolver'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'
import { UserEntity } from '../../databases/postgres/entities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
    ]),
  ],
  providers: [
    UserResolver,
    UserRepository,
    UserService,
  ],
})
export class UserModule {}
