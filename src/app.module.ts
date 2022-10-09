import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactInfo } from './contact-infos/entities/contact-info.entity';
import { Employee } from './employees/entities/employee.entity';
import { Meeting } from './meetings/entities/meeting.entity';
import config from './orm.configSqlite';
import { Task } from './taks/entities/taks.entity';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Employee, ContactInfo, Meeting, Task]),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
