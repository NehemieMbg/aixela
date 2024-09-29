import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SubscriptionsService } from './subscriptions.service';
import { OptionalAuth } from '../auth/decorators/optional-auth.decorator';

interface authUser {
  userId: number;
  username: string;
  fullName: string;
}

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get('/:username')
  subscriptions(@Param('username') username: string) {
    return this.subscriptionsService.getSubscriptions(username);
  }

  @Get('/:username/followers')
  getFollowers(
    @Param('username') username: string,
    @OptionalAuth()
    user?: authUser, // to be use later to tailor the response
  ) {
    return this.subscriptionsService.getFollowers(username);
  }

  @Get('/:username/followings')
  getFollowing(
    @Param('username') username: string,
    @OptionalAuth()
    user?: authUser, // to be use later to tailor the response
  ) {
    return this.subscriptionsService.getFollowing(username);
  }

  @Post('/:username')
  @UseGuards(JwtAuthGuard)
  subscribe(@Request() request, @Param('username') username: string) {
    return this.subscriptionsService.subscribe(request.user.userId, username);
  }
}
