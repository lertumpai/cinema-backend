import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Reflector } from '@nestjs/core'

import { Role } from '../../databases/postgres/entities/enum/role.enum'
import { ROLES_KEY } from './role.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (!requiredRoles) {
      return true
    }

    const ctx = GqlExecutionContext.create(context)
    const { user } = ctx.getContext().req
    return requiredRoles.includes(user.role)
  }
}