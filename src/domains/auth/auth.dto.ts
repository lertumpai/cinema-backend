import {
  Field,
  ArgsType,
  ObjectType,
  ID,
  GraphQLISODateTime,
  registerEnumType,
} from '@nestjs/graphql'
import { IsEnum } from 'class-validator'

import { Roles } from '../../databases/postgres/entities/enum/index.enum'

registerEnumType(Roles, { name: 'Roles' })

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

  @Field(type => Roles, { defaultValue: Roles.Customer, nullable: true })
  @IsEnum(Roles)
  role?: Roles
}