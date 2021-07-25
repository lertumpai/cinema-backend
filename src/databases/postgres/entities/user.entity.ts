import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
} from "typeorm";

@Entity({ name: 'Users' })
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}