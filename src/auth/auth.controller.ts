import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidationPipe } from '@nestjs/common/pipes';
import { Body, Post } from '@nestjs/common/decorators';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authcredentialsDto);
  }
  @Post('signin')
  signIn(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authcredentialsDto);
  }
}
