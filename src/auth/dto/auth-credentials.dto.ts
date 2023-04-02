import { IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

export class AuthCredentialsDto {
  @Unique()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
