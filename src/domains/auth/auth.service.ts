import { Injectable } from '@nestjs/common'

import { AuthEntity } from '../../databases/postgres/entities/auth.entity'
import { AuthRepository } from './auth.repository'
import { DuplicationErrorException } from '../../errors/duplicationError.exception'
import { AuthArgs } from './auth.dto'

@Injectable()
export class AuthService {
  constructor(private authenticationRepository: AuthRepository) {}

  async register(userArgs: AuthArgs): Promise<AuthEntity> {
    const { username } = userArgs
    const createdUser = await this.authenticationRepository.findOneByUsername(username)

    if (createdUser) {
      throw new DuplicationErrorException('Username', username)
    }

    return this.authenticationRepository.create(userArgs)
  }

  async validateUser(userArgs: AuthArgs): Promise<any> {
    return null
  }
}