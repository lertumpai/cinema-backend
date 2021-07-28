import { applyDecorators } from '@nestjs/common'
import { SetMetadata } from '@nestjs/common'
import { UseGuards } from '@nestjs/common'

import { Role } from '../../databases/postgres/entities/enum/role.enum'
import { RolesGuard } from './role.guard'

export const ROLES_KEY = 'roles'

export function AuthRole(roles: Role[]) {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(RolesGuard),
  )
}