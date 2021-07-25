module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 8000,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [`${__dirname}/**/databases/postgres/entities/*.entity.js`],
  migrations: [`${__dirname}/**/databases/postgres/migrations/*.js`],
  cli: {
    migrationsDir: `${__dirname}/src/databases/postgres/migrations`,
    entitiesDir: `${__dirname}/src/databases/postgres/entities`,
  },
}
