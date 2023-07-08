import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(@Body() userDto: UserDto) {
      const user = await this.userService.register(userDto);
      console.log("user", user)
      return { apiKey: user.apiKey };
    }
}
