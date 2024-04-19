import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthDto } from '~models/domain/auth/authDto';
import { Tokens } from '~models/domain/types';
import { AuthService } from '~services/auth';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/local/signup')
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @Get('/local/signin')
  siginLocal() {
    return this.authService.siginLocal();
  }

  @Post('/logout')
  logout() {
    this.authService.logout();
  }

  @Post('/refresh')
  refreshTokens() {
    this.authService.refreshTokens();
  }
}
