import { Injectable } from '@nestjs/common'
import { UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

import { AuthEntity } from '../../databases/postgres/entities/auth.entity'
import { AuthRepository } from './auth.repository'
import { AuthRegisterArgs, AuthArgs } from './auth.dto'

import {
  DuplicationErrorException,
  NotFoundErrorException,
} from '../../errors'

@Injectable()
export class AuthService {
  private readonly secret = 'secret'

  constructor(
    private authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async register(authRegisterArgs: AuthRegisterArgs): Promise<AuthEntity> {
    const { username, password, role } = authRegisterArgs
    const user = await this.authRepository.findOneByUsername(username)

    if (user) {
      throw new DuplicationErrorException('Username', username)
    }

    const hashPassword = bcrypt.hashSync(password, 10)
    return this.authRepository.create({
      username,
      password: hashPassword,
      role,
    })
  }

  async validateUser(authArgs: AuthArgs): Promise<AuthEntity> {
    const { username, password } = authArgs
    const user = await this.authRepository.findOneByUsername(username)

    if (!user) {
      throw new NotFoundErrorException('Username', username)
    }

    if(!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Password invalid')
    }

    return user
  }

  getToken(user: AuthEntity): string {
    const payload = {
      id: user.id,
      username: user.username,
      role: user.role,
    }

    return this.jwtService.sign(payload)
  }

  async login(authArgs: AuthArgs): Promise<string> {
    const user = await this.validateUser(authArgs)
    return this.getToken(user)
  }
}