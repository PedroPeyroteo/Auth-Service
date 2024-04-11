import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class ReleaseNoteRepository {
  constructor(@InjectConnection() private readonly db: Knex) {}

  async get() {
    //const result = await this.knex('people').select('*');
    const product = await this.db('people').select('*');

    return product;
  }
}
