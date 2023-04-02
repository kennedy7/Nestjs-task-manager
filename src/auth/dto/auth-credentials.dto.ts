import {
  IsString,
  Matches,
  MaxLength,
  MinLength,
  minLength,
} from 'class-validator';
import { Unique } from 'typeorm';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(6)
  @MaxLength(15)
  username: string;

  @IsString()
  @MinLength(7)
  @MaxLength(30)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'password must contain an UpperCase, Lowercase, Number and/or a Special character',
  })
  //   (/((?=.*\d) | (?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  password: string;
}
