import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PasswordService } from './password.service';
import { UsersController } from './users.controller';
import { UploadsService } from '../uploads/uploads.service';
import { EmailModule } from '../email/email.module';
import { JwtService } from '@nestjs/jwt';
import { Subscriptions } from '../subscriptions/subscriptions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Subscriptions]), EmailModule],
  providers: [UsersService, PasswordService, UploadsService, JwtService],
  exports: [PasswordService, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
