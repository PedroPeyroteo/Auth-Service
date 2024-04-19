import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import * as dotenv from 'dotenv';
import { AuthModule } from '~modules/auth';

dotenv.config();

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'mysql',
        version: '5.7',
        useNullAsDefault: true,
        connection: {
          database: process.env.DB_NAME,
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT || '3306'),
          ssl: false,
        },
      },
    }),
    AuthModule,
  ],
})
export class AppModule {}
