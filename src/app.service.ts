import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactInfo } from './contact-infos/entities/contact-info.entity';
import { Employee } from './employees/entities/employee.entity';
import { Meeting } from './meetings/entities/meeting.entity';
import { Task } from './taks/entities/taks.entity';
import { User } from './users/entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(ContactInfo)
    private contactInfoRepo: Repository<ContactInfo>,
    @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
  ) {}

  async seed() {
    const ceo = this.employeeRepo.create({ name: 'Bima' });
    await this.employeeRepo.save(ceo);

    const ceoContactInfo = this.contactInfoRepo.create({
      email: 'email@email.com',
    });
    ceoContactInfo.employee = ceo;
    await this.contactInfoRepo.save(ceoContactInfo);

    const manager = this.employeeRepo.create({
      name: 'Jhon',
      manager: ceo,
    });

    const task1 = this.taskRepo.create({ name: 'Hire people' });
    await this.taskRepo.save(task1);
    const task2 = this.taskRepo.create({ name: 'Present to CEO' });
    await this.taskRepo.save(task2);

    manager.task = [task1, task2];

    const meeting1 = this.meetingRepo.create({ zoomUrl: 'meeting.com' });
    meeting1.attendees = [ceo];
    await this.meetingRepo.save(meeting1);

    manager.meetings = [meeting1];
    await this.employeeRepo.save(manager);
  }

  getEmployeeById(id: number) {
    // return this.employeeRepo.findOne({
    //   where: { id },
    //   relations: {
    //     manager: true,
    //     directRepors: true,
    //     task: true,
    //     contactInfo: true,
    //     meetings: true,
    //   },
    // });
    return this.employeeRepo
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.directRepors', 'directRepors')
      .leftJoinAndSelect('employee.meetings', 'meetings')
      .leftJoinAndSelect('employee.task', 'task')
      .where('employee.id = :employeeId', { employeeId: id })
      .getOne();
  }

  deleteEmployee(id: number) {
    return this.employeeRepo.delete(id);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
