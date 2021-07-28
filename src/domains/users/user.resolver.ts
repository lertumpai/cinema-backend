import { Mutation, Query, Resolver, Context } from '@nestjs/graphql'

import { UserService } from './user.service'
import { UserModel } from './user.dto'
import { AuthRole } from '../roles/role.decorator'
import { Role } from '../../databases/postgres/entities/enum/role.enum'

const mockUser = {
  id: '123',
  username: 'username',
  password: 'password',
  role: 'Customer',
  createdAt: new Date(),
  updatedAt: new Date(),
}

@AuthRole([Role.Customer, Role.Admin])
@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService
  ) {}

  @Query(returns => UserModel)
  getUser(@Context() context): UserModel {
    return mockUser
  }
}
