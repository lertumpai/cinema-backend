import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';

import { AuthResolver } from './auth.resolver'
import { AuthRepository } from './auth.repository'
import { AuthService } from './auth.service'
import { AuthEntity } from '../../databases/postgres/entities/auth.entity'
import { AuthStrategy } from './auth.strategy'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthEntity,
    ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule,
  ],
  providers: [
    AuthResolver,
    AuthRepository,
    AuthService,
    AuthStrategy,
  ],
})
export class AuthModule {}


