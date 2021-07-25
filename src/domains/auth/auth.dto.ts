import { Field, ArgsType } from '@nestjs/graphql'

@ArgsType()
export class AuthArgs {
  @Field()
  username: string

  @Field()
  password: string
}