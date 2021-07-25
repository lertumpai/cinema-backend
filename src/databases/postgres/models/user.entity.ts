import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from "typeorm";

@Entity({ name: 'User' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  age: number;

}