import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
  // TODO find to migrate
  // migrations: ['dist/db/migrations/*{.ts,.js}'],
  // cli: {
  //   migrationsDir: 'db/migrations',
  // },
};

export default config;
