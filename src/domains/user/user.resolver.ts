import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { Roles } from '../../databases/postgres/entities/enum/index.enum';
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
      username: `${Math.random()}`,
      password: 'password',
      firstName: 'firstName',
      lastName: 'lastName',
      role: Roles.Customer,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    await user.save()
    console.log(user)

    return {
      id: '123',
      name: 'Name',
    }
  }
}
