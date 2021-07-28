import { Mutation, Query, Resolver, Context } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { UserService } from './user.service'
import { UserModel } from './user.dto'
import { GqlAuthGuard } from '../auth/auth.guard'

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

  @Query(returns => UserModel)
  getUser(@Context() context): UserModel {
    console.log(context.req.user)
    return mockUser
  }

  @Query(returns => UserModel)
  getUsers(@Context() context): UserModel {
    console.log(context.req.user)
    return mockUser
  }
}
