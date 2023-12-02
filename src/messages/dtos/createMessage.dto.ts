import { IsString } from 'class-validator';

export class messageBodyDto {
  @IsString()
  content: string;
}
