import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AuthEntity } from '../../databases/postgres/entities/auth.entity'
import { AuthArgs } from './auth.dto'

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(AuthEntity)
    private authenticationEntity: Repository<AuthEntity>,
  ) {}

  async create(authArgs: AuthArgs): Promise<AuthEntity> {
    const date = new Date()
    const user = this.authenticationEntity.create({
      ...authArgs,
      createdAt: date,
      updatedAt: date,
    })
    await user.save()
    return user
  }

  findOneById(id: string): Promise<AuthEntity> {
    return this.authenticationEntity.findOne({ where: { id } })
  }

  findOneByUsername(username: string): Promise<AuthEntity> {
    return this.authenticationEntity.findOne({ where: { username } })
  }
}