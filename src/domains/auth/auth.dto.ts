import {
  Field,
  ArgsType,
  ObjectType,
  ID,
  GraphQLISODateTime,
  registerEnumType,
} from '@nestjs/graphql'
import { IsEnum } from 'class-validator'

import { Role } from '../../databases/postgres/entities/enum/role.enum'

registerEnumType(Role, { name: 'Roles' })

@ObjectType()
export class AuthModel {
  @Field(type => ID)
  id: string

  @Field(type => String)
  username: string

  @Field(type => String)
  role: string

  @Field(type => GraphQLISODateTime)
  createdAt: Date

  @Field(type => GraphQLISODateTime)
  updatedAt: Date
}

@ArgsType()
export class AuthArgs {
  @Field()
  username: string

  @Field()
  password: string
}

@ArgsType()
export class AuthRegisterArgs extends AuthArgs{
  @Field(type => Role, { defaultValue: Role.Customer, nullable: true })
  @IsEnum(Role)
  role?: Role
}