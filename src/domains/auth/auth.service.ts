import { Injectable } from '@nestjs/common'
import { UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

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
    private authRepository: AuthRepository
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

    return jwt.sign(payload, this.secret, { expiresIn: 3600 })
  }

  async login(authArgs: AuthArgs): Promise<string> {
    const user = await this.validateUser(authArgs)
    return this.getToken(user)
  }

  validateToken(token: string): any {
    try {
      if (!token || token.search('CINEMA')) {
        return null
      }

      return jwt.verify(token.replace('CINEMA ', ''), this.secret)
    } catch (e) {
      return null
    }
  }
}