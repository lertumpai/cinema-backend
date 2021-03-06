import { MigrationInterface, QueryRunner, Table } from 'typeorm'

import { Role } from '../entities/enum/role.enum'

export class createAuth1627198796289 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Auths',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          default: 'uuid_generate_v4()',
        },
        {
          name: 'username',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'role',
          type: 'enum',
          enum: [
            Role.Admin,
            Role.Customer,
          ],
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Auths')
  }

}
