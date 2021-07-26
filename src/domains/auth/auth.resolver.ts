import { Mutation, Query, Resolver } from '@nestjs/graphql'

import { AuthService } from './auth.service'
import { AuthModel } from './auth.model'

const mockAuth = {
  id: '123',
  username: 'username',
  password: 'password',
  role: 'Customer',
  createdAt: new Date(),
  updatedAt: new Date(),
}

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService
  ) {}


  @Query(returns => AuthModel)
  getUser(): AuthModel {
    return mockAuth
  }

  @Mutation(returns => AuthModel)
  async register(): Promise<AuthModel> {
    const createdUser = await this.authService.register({ username: `${Math.random()}`, password: 'password' })
    console.log(createdUser)
    return mockAuth
  }
}
