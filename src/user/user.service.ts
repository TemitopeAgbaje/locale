import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(userDto: UserDto): Promise<User> {
    const apiKey = uuidv4();
    const createdUser = this.userRepository.create({
      ...userDto,
      apiKey,
    });

    console.log({ ...userDto }, apiKey);
    return this.userRepository.save(createdUser);
  }
}
