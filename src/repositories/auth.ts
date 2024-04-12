import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class AuthRepository {
  constructor(@InjectConnection() private readonly db: Knex) {}
}
