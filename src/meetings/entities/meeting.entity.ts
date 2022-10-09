import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('meetings')
export class Meeting {
  @PrimaryGeneratedColumn({ name: 'pk_meeting_id' })
  id: number;

  @Column()
  zoomUrl: string;

  @ManyToMany(() => Employee, (employee) => employee.meetings)
  attendees: Employee[];
}
