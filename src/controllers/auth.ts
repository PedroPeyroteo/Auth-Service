import { Controller, Post } from '@nestjs/common';
import { AuthService } from '~services/auth';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/local/signup')
  signupLocal() {
    this.authService.signupLocal();
  }

  @Post('/local/signin')
  siginLocal() {
    this.authService.siginLocal();
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
