import {
  MigrationInterface,
  QueryRunner,
  Table,
} from 'typeorm';

export class createUser1627198796290 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Users',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          default: 'uuid_generate_v4()',
        },
        {
          name: 'firstName',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'lastName',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'age',
          type: 'int',
          isNullable: true,
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
    await queryRunner.dropTable('Users');
  }

}
