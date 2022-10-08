import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'Creed123!@#',
  port: 5432,
  host: '127.0.0.1',
  database: 'fullstack_db',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};

export default config;
