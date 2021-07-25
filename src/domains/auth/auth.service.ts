import { Injectable } from '@nestjs/common'

import { UserRepository } from '../user/user.repository'
import { UserEntity } from '../../databases/postgres/entities/user.entity'
import { DuplicationErrorException } from '../../errors/duplicationError.exception'
import { AuthArgs } from './auth.dto'

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async register(userArgs: AuthArgs): Promise<UserEntity> {
    const { username } = userArgs
    const createdUser = await this.userRepository.findOneByUsername(username)

    if (createdUser) {
      throw new DuplicationErrorException('Username', username)
    }

    return this.userRepository.create(userArgs)
  }

  async validateUser(userArgs: AuthArgs): Promise<any> {
    return null
  }
}