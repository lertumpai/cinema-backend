import {
  Field,
  ArgsType,
  ObjectType,
  ID,
  GraphQLISODateTime,
} from '@nestjs/graphql'


@ObjectType()
export class UserModel {
  @Field(type => ID)
  id: string

  @Field(type => String, { nullable: true })
  firstName?: string

  @Field(type => String, { nullable: true })
  lastName?: string

  @Field(type => GraphQLISODateTime)
  createdAt: Date

  @Field(type => GraphQLISODateTime)
  updatedAt: Date
}

@ArgsType()
export class UserArgs {
  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string
}