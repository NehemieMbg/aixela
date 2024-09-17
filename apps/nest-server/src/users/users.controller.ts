import { Body, Controller, Put, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put('/me/update-info')
  @UseGuards(JwtAuthGuard)
  @Serialize(UserDto)
  async updateInfo(@Request() request, @Body() body: UpdateUserInfoDto) {
    return this.usersService.updateInfo(request.user.username, body);
  }
}
