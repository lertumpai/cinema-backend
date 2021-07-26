import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
} from 'typeorm'

import { Roles } from './enum/index.enum'

@Entity({ name: 'Auths' })
export class AuthEntity extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column()
  username: string

  @Column()
  password: string

  @Column('text')
  role: Roles

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date
}