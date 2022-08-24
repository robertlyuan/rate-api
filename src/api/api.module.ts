import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MenuItemModule } from './menu-item/menu-item.module';
import { MenuItemReviewsModule } from './menu-item-review/menu-item-review.module';

@Module({
  imports: [UserModule, MenuItemModule, MenuItemReviewsModule],
})
export class ApiModule {}
