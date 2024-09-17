import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Put,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
}
