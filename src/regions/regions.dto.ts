import { IsNumber, IsString } from 'class-validator';

export class RegionsDto {
  @IsNumber()
   id: number;

  @IsString()
   name: string;

   @IsString()
   code: string;

   @IsString()
   link: string;
}
