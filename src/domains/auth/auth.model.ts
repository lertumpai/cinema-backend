import { Field, ID, ObjectType, GraphQLISODateTime } from '@nestjs/graphql'

@ObjectType()
export class AuthModel {
  @Field(type => ID)
  id: string

  @Field(type => String)
  username: string

  @Field(type => String)
  password: string

  @Field(type => String)
  role: string

  @Field(type => GraphQLISODateTime)
  createdAt: Date

  @Field(type => GraphQLISODateTime)
  updatedAt: Date
}