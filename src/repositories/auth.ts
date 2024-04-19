import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { AuthDto } from '~models/domain/auth/authDto';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectConnection()
    private readonly db: Knex,
  ) {}

  async createUser(user: AuthDto): Promise<void> {
    await this.db('users').insert({
      user,
    });
  }
}
