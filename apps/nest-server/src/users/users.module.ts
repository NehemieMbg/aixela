import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { PasswordService } from './password.service';
import { UsersController } from './users.controller';
import { UploadsService } from '../uploads/uploads.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, PasswordService, UploadsService],
  exports: [PasswordService, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
