import { ApiProperty } from '@nestjs/swagger';
import { Pet } from 'src/users/entities/pet.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name?: string;

  @OneToMany((type) => Pet, (pet) => pet.owner)
  @JoinColumn()
  pets?: Pet[];
}
