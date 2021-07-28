import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'

import { AuthResolver } from './auth.resolver'
import { AuthRepository } from './auth.repository'
import { AuthService } from './auth.service'
import { AuthEntity } from '../../databases/postgres/entities/auth.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthEntity,
    ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [
    AuthResolver,
    AuthRepository,
    AuthService,
  ],
})
export class AuthModule {}


