import { Module } from '@nestjs/common';
import { MenuItemReviewService } from './menu-item-review.service';
import { MenuItemReviewsController } from './menu-item-review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItemReview } from './menu-item-review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItemReview])],
  providers: [MenuItemReviewService],
  controllers: [MenuItemReviewsController],
})
export class MenuItemReviewsModule {}
