import { IsString, MaxLength, MinLength, minLength } from 'class-validator';
import { Unique } from 'typeorm';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(6)
  @MaxLength(15)
  username: string;

  @MinLength(7)
  @MaxLength(30)
  password: string;
}
