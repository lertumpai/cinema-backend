import { Mutation, Query, Resolver } from '@nestjs/graphql'

import { UserService } from './user.service'
import { UserModel } from './user.model'

const mockUser = {
  id: '123',
  username: 'username',
  password: 'password',
  role: 'Customer',
  createdAt: new Date(),
  updatedAt: new Date(),
}

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService
  ) {}


  @Query(returns => UserModel)
  getUser(): UserModel {
    return mockUser
  }

  @Mutation(returns => UserModel)
  async register(): Promise<UserModel> {
    const createdUser = await this.userService.create({ username: `${Math.random()}`, password: 'password' })
    console.log(createdUser)
    return mockUser
  }
}
