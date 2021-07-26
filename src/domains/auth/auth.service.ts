import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

import { AuthEntity } from '../../databases/postgres/entities/auth.entity'
import { AuthRepository } from './auth.repository'
import { DuplicationErrorException } from '../../errors/duplicationError.exception'
import { AuthRegisterArgs, AuthArgs } from './auth.dto'

@Injectable()
export class AuthService {
  constructor(
    private authenticationRepository: AuthRepository
  ) {}

  async register(authRegisterArgs: AuthRegisterArgs): Promise<AuthEntity> {
    const { username, password, role } = authRegisterArgs
    const createdUser = await this.authenticationRepository.findOneByUsername(username)

    if (createdUser) {
      throw new DuplicationErrorException('Username', username)
    }

    const hashPassword = bcrypt.hashSync(password, 10)
    return this.authenticationRepository.create({
      username,
      password: hashPassword,
      role,
    })
  }

  async login(authArgs: AuthArgs): Promise<any> {
    const { username, password } = authArgs
    return null
  }
}