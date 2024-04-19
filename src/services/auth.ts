import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthDto } from '~models/domain/auth/authDto';
import { Tokens } from '~models/domain/types';
import { AuthRepository } from '~repositories/auth';
import * as dotenv from 'dotenv';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {
    dotenv.config();
  }

  #hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: number, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, email },
        { secret: process.env.ACCESS_TOKEN_KEY, expiresIn: 60 * 15 },
      ),
      this.jwtService.signAsync(
        { sub: userId, email },
        {
          secret: process.env.REFRESH_TOKEN_KEY,
          expiresIn: 60 * 60 * 24 * 7,
        }, // 60 sec * 60 min * 24hours * 7 days
      ),
    ]);

    return { access_token: at, refresh_token: rt };
  }

  async signupLocal(dto: AuthDto): Promise<Tokens> {
    const hash = await this.#hashData(dto.password);

    this.authRepository.createUser({
      username: dto.username,
      password: hash,
    });

    return null;
  }

  async siginLocal() {}

  async logout() {}

  async refreshTokens() {}
}
