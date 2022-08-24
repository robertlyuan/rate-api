import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateMenuItemReviewDto } from './menu-item-review.dto';
import { MenuItemReview } from './menu-item-review.entity';
import { MenuItemReviewService } from './menu-item-review.service';

@Controller('menu-item-review')
export class MenuItemReviewsController {
  @Inject(MenuItemReviewService)
  private readonly service: MenuItemReviewService;

  @Get(':id')
  public getMenuItemReivew(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<MenuItemReview> {
    try {
      return this.service.getMenuItemReview(id);
    } catch (e) {
      throw new Error(e);
    }
  }

  @Get('menu-item/:menuItemId')
  public getMenuItemReviewsByMenuItem(
    @Param('menuItemId', ParseIntPipe) menuItemId: number,
  ): Promise<MenuItemReview[]> {
    try {
      return this.service.getMenuItemReviewsByMenuItem(menuItemId);
    } catch (e) {
      throw new Error(e);
    }
  }

  @Post()
  public createMenuItemReview(
    @Body() body: CreateMenuItemReviewDto,
  ): Promise<MenuItemReview> {
    try {
      return this.service.createMenuItemReview(body);
    } catch (e) {
      throw new Error(e);
    }
  }
}
