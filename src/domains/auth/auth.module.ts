import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthResolver } from './auth.resolver'
import { AuthRepository } from './auth.repository'
import { AuthService } from './auth.service'
import { AuthEntity } from '../../databases/postgres/entities/auth.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthEntity,
    ]),
  ],
  providers: [
    AuthResolver,
    AuthRepository,
    AuthService,
  ],
})
export class AuthModule {}
