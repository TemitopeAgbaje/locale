import { IsString } from 'class-validator';

export class StateDto {
  @IsString()
  public state: string;

  @IsString()
  public capital: string;
}
