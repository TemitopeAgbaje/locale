import { IsString, IsEmail, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEmail()
  email: string;
}