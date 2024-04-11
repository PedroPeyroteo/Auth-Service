import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ReleaseNoteController } from '~controllers/releaseNote';
import { ReleaseNoteRepository } from '~repositories/releaseNote';
import { ReleaseNoteService } from '~services/releaseNote';

@Module({
  controllers: [ReleaseNoteController],
  providers: [ReleaseNoteService, ReleaseNoteRepository],
  imports: [HttpModule],
})
export class ReleaseNotesModule {}
