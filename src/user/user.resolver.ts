import {
  Resolver,
  Query,
} from '@nestjs/graphql';

import { User } from "./model/user.model";

@Resolver()
export class UserResolver {
  @Query(returns => User)
  getUser(): User {
    return {
      id: '123',
      name: 'Name',
    }
  }
}
