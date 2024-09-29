import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriptions } from './subscriptions.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriptions]), UsersModule],
  providers: [SubscriptionsService], // Move SubscriptionsService to providers
  controllers: [SubscriptionsController],
})
export class SubscriptionsModule {}
