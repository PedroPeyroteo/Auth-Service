import { Injectable } from '@nestjs/common';
import { ReleaseNoteRepository } from '~repositories/releaseNote';

@Injectable()
export class ReleaseNoteService {
  constructor(private readonly releaseNoteRespository: ReleaseNoteRepository) {}

  async get() {
    const result = await this.releaseNoteRespository.get();

    return result;
  }
}
