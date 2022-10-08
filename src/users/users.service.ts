import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Bima' },
    { id: 2, name: 'Bima' },
    { id: 3, name: 'Faisal' },
  ];
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll(name?: string): Promise<User[]> {
    // if (name) {
    //   return this.users.filter((user) => user.name === name);
    // }
    // return this.users;
    return this.usersRepository.find(); // SELECT * FROM users
  }

  async findById(userId: number): Promise<User> {
    // return this.users.find((user) => user.id === userId);
    try {
      const user = await this.usersRepository.findOneOrFail({
        where: { id: userId },
      }); // SELECT * FROM users WHERE users.id = userId
      return user;
    } catch (error) {
      // handle error
      throw error;
    }
  }

  // createUser(createUserDto: CreateUserDto): User {
  //   const newUser = { id: Date.now(), ...createUserDto };

  //   this.users.push(newUser);

  //   return newUser;
  // }
  createUser(name: string): Promise<User> {
    const newUser = this.usersRepository.create({ name });

    return this.usersRepository.save(newUser); // INSERT
  }

  async updateUser(id: number, name: string): Promise<User> {
    const user = await this.findById(id);

    user.name = name;

    return this.usersRepository.save(user); // UPDATE
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.findById(id);

    return this.usersRepository.remove(user); // DELETE
  }

  customQuery(): any {
    return this.usersRepository.createQueryBuilder('users').select('*');
  }
}
