import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AuthEntity } from '../../databases/postgres/entities/auth.entity'
import { AuthRegisterArgs } from './auth.dto'

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(AuthEntity)
    private authEntity: Repository<AuthEntity>,
  ) {}

  async create(authRegisterArgs: AuthRegisterArgs): Promise<AuthEntity> {
    const date = new Date()
    const user = this.authEntity.create({
      ...authRegisterArgs,
      createdAt: date,
      updatedAt: date,
    })
    return user.save()
  }

  findOneById(id: string): Promise<AuthEntity> {
    return this.authEntity.findOne({ where: { id } })
  }

  findOneByUsername(username: string): Promise<AuthEntity> {
    return this.authEntity.findOne({ where: { username } })
  }
}