import { ContactInfo } from 'src/contact-infos/entities/contact-info.entity';
import { Meeting } from 'src/meetings/entities/meeting.entity';
import { Task } from 'src/taks/entities/taks.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn({ name: 'pk_employee_id' })
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, (employee) => employee.directRepors, {
    onDelete: 'SET NULL',
  })
  manager: Employee;

  @OneToMany(() => Employee, (employee) => employee.manager)
  directRepors: Employee[];

  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.employee)
  contactInfo: ContactInfo;

  @OneToMany(() => Task, (task) => task.employee)
  task: Task[];

  @ManyToMany(() => Meeting, (meetings) => meetings.attendees)
  @JoinTable()
  meetings: Meeting[];
}
