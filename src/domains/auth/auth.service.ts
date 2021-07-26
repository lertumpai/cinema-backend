import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

import { AuthEntity } from '../../databases/postgres/entities/auth.entity'
import { AuthRepository } from './auth.repository'
import { DuplicationErrorException } from '../../errors/duplicationError.exception'
import { AuthArgs } from './auth.dto'

@Injectable()
export class AuthService {
  constructor(
    private authenticationRepository: AuthRepository
  ) {}

  async register(authArgs: AuthArgs): Promise<AuthEntity> {
    const { username, password, role } = authArgs
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

  async validateUser(userArgs: AuthArgs): Promise<any> {
    return null
  }
}