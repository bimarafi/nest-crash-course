import { Employee } from 'src/employees/entities/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn({ name: 'pk_employee_id' })
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, (employee) => employee.task, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'fk_employee_id' })
  employee: Employee;
}
