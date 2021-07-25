import { Field, ID, ObjectType, GraphQLISODateTime } from '@nestjs/graphql'

@ObjectType()
export class UserModel {
  @Field(type => ID)
  id: string

  @Field(type => String)
  username: string

  @Field(type => String)
  password: string

  @Field(type => String)
  role: string

  @Field(type => String, { nullable: true })
  firstName?: string

  @Field(type => String, { nullable: true })
  lastName?: string

  @Field(type => GraphQLISODateTime)
  createdAt: Date

  @Field(type => GraphQLISODateTime)
  updatedAt: Date
}