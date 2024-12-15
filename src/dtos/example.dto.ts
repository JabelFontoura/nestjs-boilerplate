import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExampleDto {
  @IsNotEmpty()
  @IsString()
  value: string;
}
