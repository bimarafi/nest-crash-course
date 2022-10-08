import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'library',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  dropSchema: true,
};

export default config;
