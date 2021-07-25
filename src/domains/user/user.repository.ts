import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserEntity } from '../../databases/postgres/entities/user.entity'
import { AuthArgs } from '../auth/auth.dto'

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(authArgs: AuthArgs): Promise<UserEntity> {
    const date = new Date()
    const user = this.usersRepository.create({
      ...authArgs,
      createdAt: date,
      updatedAt: date,
    })
    await user.save()
    return user
  }

  findOneById(id: string): Promise<UserEntity> {
    return this.usersRepository.findOne({ where: { id } })
  }

  findOneByUsername(username: string): Promise<UserEntity> {
    return this.usersRepository.findOne({ where: { username } })
  }
}