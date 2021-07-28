import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from 'typeorm'

import { Role } from './enum/role.enum'

@Entity({ name: 'Auths' })
export class AuthEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  username: string

  @Column()
  password: string

  @Column('text')
  role: Role

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date
}