import { Injectable } from '@nestjs/common';
import { AuthRepository } from '~repositories/auth';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  signupLocal() {}

  siginLocal() {}

  logout() {}

  refreshTokens() {}
}
