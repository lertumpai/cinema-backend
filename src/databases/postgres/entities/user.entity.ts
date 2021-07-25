import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
} from 'typeorm';

import { Roles } from './enum/index.enum';

@Entity({ name: 'Users' })
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column('text')
  role: Roles;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}