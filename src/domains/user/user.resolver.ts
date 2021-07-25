import {
  Resolver,
  Query,
  Mutation,
} from '@nestjs/graphql';

import { UserEntity } from "../../databases/postgres/entities/user.entity";
import { User } from "./user.model";

@Resolver()
export class UserResolver {
  @Query(returns => User)
  getUser(): User {
    return {
      id: '123',
      name: 'Name',
    }
  }

  @Mutation(returns => User)
  async createUser(): Promise<User> {
    const user = UserEntity.create({
      firstName: 'firstName',
      lastName: 'lastName',
    })
    await user.save()
    console.log(user)

    return {
      id: '123',
      name: 'Name',
    }
  }
}
