import { Employee } from 'src/employees/entities/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('contact_info')
export class ContactInfo {
  @PrimaryGeneratedColumn({ name: 'pk_contact_info_id' })
  id: number;

  @Column({ nullable: true })
  phone: string;

  @Column()
  email: string;

  // @Column()
  // employeeId: number;

  @OneToOne(() => Employee, (employee) => employee.contactInfo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'fk_employee_id' })
  employee: Employee;
}
