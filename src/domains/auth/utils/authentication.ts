import { Injectable, ExecutionContext } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { GqlExecutionContext } from '@nestjs/graphql'

import { AuthService } from '../auth.service'

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  private authService: AuthService

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    console.log(ctx.getContext().req.cookies)
    return ctx.getContext().req;
  }
}