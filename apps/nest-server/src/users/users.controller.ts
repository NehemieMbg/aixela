import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Request,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  Get,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateUserEmailDto } from './dto/update-user-email.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { EmailConfirmationCodeDto } from './dto/email-confirmation-code.dto';
import { ProfileDto } from './dto/profile.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:username')
  @Serialize(ProfileDto)
  async getProfile(@Param('username') username: string) {
    return this.usersService.getProfile(username);
  }

  @Put('/me/update-info')
  @UseGuards(JwtAuthGuard)
  @Serialize(UserDto)
  async updateInfo(@Request() request, @Body() body: UpdateUserInfoDto) {
    return this.usersService.updateInfo(request.user.username, body);
  }

  @Put('/me/avatar')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('avatar'))
  async updateAvatar(
    @Request() request,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: /image\/(png|jpeg)/ }),
          new MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024 }), // 10MB
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.usersService.updateAvatar(request.user.username, file);
  }

  @Delete('/me/avatar')
  @UseGuards(JwtAuthGuard)
  async deleteAvatar(@Request() request) {
    return this.usersService.deleteAvatar(request.user.username);
  }

  @Put('/me/email')
  @UseGuards(JwtAuthGuard)
  async updateEmail(@Request() request, @Body() body: UpdateUserEmailDto) {
    return this.usersService.updateEmail(request.user.username, body);
  }

  @Post('/me/email/confirm')
  @UseGuards(JwtAuthGuard)
  async confirmEmail(
    @Request() request,
    @Body() body: EmailConfirmationCodeDto,
  ) {
    return this.usersService.confirmEmail(request.user.username, body.code);
  }

  @Put('/me/password')
  @UseGuards(JwtAuthGuard)
  async updatePassword(
    @Request() request,
    @Body() body: UpdateUserPasswordDto,
  ) {
    return this.usersService.updatePassword(request.user.username, body);
  }
}
