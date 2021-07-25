import { Injectable } from '@nestjs/common'

import { AuthService } from '../auth/auth.service'
import { UserRepository } from './user.repository'
import { AuthArgs } from '../auth/auth.dto'
import { UserEntity } from '../../databases/postgres/entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private authService: AuthService,
  ) {}

  create(userArgs: AuthArgs): Promise<UserEntity> {
    return this.authService.register(userArgs)
  }
}