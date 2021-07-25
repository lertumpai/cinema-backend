import { IsEnum } from 'class-validator'
import { Field, ArgsType, registerEnumType } from '@nestjs/graphql'

import { Roles } from '../../databases/postgres/entities/enum/index.enum'

registerEnumType(Roles, { name: 'Roles' })

@ArgsType()
export class UserArgs {
  @Field(type => Roles)
  @IsEnum(Roles)
  role: Roles

  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string
}