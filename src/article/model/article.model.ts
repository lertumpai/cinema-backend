import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Article {
  @Field(type => ID)
  id: string

  @Field(type => String, { nullable: true })
  content?: string
}