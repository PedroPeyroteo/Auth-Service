import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthController } from '~controllers/auth';
import { AuthService } from '~services/auth';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [HttpModule],
})
export class ReleaseNotesModule {}
