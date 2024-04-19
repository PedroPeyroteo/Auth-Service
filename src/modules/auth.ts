import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from '~/stratagies/accessTokenStrategy';
import { RefreshTokenStrategy } from '~/stratagies/refreshTokenStrategy';
import { AuthController } from '~controllers/auth';
import { AuthRepository } from '~repositories/auth';
import { AuthService } from '~services/auth';

@Module({
  imports: [HttpModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class AuthModule {}
