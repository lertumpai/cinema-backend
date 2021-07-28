import { Mutation, Resolver, Args, Context } from '@nestjs/graphql'

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

  @Mutation(returns => Boolean)
  async login(@Args() authArgs: AuthRegisterArgs, @Context() context): Promise<boolean> {
    const token = await this.authService.login(authArgs)
    const { res } = context
    res.cookie('token', token, { maxAge: 3600, httpOnly: true });
    return true
  }
}
