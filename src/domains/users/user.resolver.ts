import { Mutation, Query, Resolver, Context } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { UserService } from './user.service'
import { UserModel } from './user.dto'
import { GqlAuthGuard } from '../auth/auth.guard'
import { Roles } from '../roles/role.decorator'
import { Role } from '../../databases/postgres/entities/enum/role.enum'
import { RolesGuard } from '../roles/role.guard'

const mockUser = {
  id: '123',
  username: 'username',
  password: 'password',
  role: 'Customer',
  createdAt: new Date(),
  updatedAt: new Date(),
}

@Resolver()
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(
    private userService: UserService
  ) {}

  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @Query(returns => UserModel)
  getUser(@Context() context): UserModel {
    return mockUser
  }
}