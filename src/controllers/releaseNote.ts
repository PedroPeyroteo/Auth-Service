import { Controller, Get } from '@nestjs/common';
import { ReleaseNoteService } from '~services/releaseNote';

@Controller('api/releaseNotes')
export class ReleaseNoteController {
  constructor(private readonly releaseNoteService: ReleaseNoteService) {}

  @Get('')
  async get(): Promise<any> {
    return await this.releaseNoteService.get();
  }
}
