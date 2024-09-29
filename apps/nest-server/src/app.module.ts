import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entities/user.entity';
import { EmailModule } from './email/email.module';
import { UploadsModule } from './uploads/uploads.module';
import * as process from 'node:process';
import { Subscriptions } from './subscriptions/subscriptions.entity';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    EmailModule,
    UploadsModule,
    ConfigModule.forRoot({
      isGlobal: true, // allows the configuration to be available globally
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', // Adjust to your database type
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: [User, Subscriptions],
      synchronize: true, // only in dev mode
      // logging: true, // Enable logging for debugging
    }),
    SubscriptionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
