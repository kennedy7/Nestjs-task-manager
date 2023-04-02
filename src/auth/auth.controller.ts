import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidationPipe } from '@nestjs/common/pipes';
import {
  Body,
  Param,
  Post,
  Delete,
  Query,
  UsePipes,
} from '@nestjs/common/decorators';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signUp(
    @Body(ValidationPipe) authcredentialDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signup(authcredentialDto);
  }
}
