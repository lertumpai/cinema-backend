import { Mutation, Resolver, Args } from '@nestjs/graphql'

import { AuthRegisterArgs } from './auth.dto'
import { AuthService } from './auth.service'
import { AuthModel } from './auth.dto'

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService
  ) {}

  @Mutation(returns => AuthModel)
  register(@Args() authArgs: AuthRegisterArgs): Promise<AuthModel> {
    return this.authService.register(authArgs)
  }
}
