import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CreateMenuItemDto } from './menu-item.dto';
import { MenuItem } from './menu-item.entity';
import { MenuItemService } from './menu-item.service';

@Controller('menu-item')
export class MenuItemController {
  @Inject(MenuItemService)
  private readonly service: MenuItemService;

  @Get(':id')
  public getMenuItem(@Param('id', ParseIntPipe) id: number): Promise<MenuItem> {
    try {
      return this.service.getMenuItem(id);
    } catch (e) {
      throw new Error(e);
    }
  }

  @Post()
  public createUser(@Body() body: CreateMenuItemDto): Promise<MenuItem> {
    try {
      return this.service.createMenuItem(body);
    } catch (e) {
      throw new Error(e);
    }
  }

  @Get('restaurant/:restaurantId')
  public getMenuItemsByRestaurant(
    @Param('restaurantId', ParseUUIDPipe) restaurantId: string,
  ): Promise<MenuItem[]> {
    try {
      return this.service.getMenuItemsByRestaurant(restaurantId);
    } catch (e) {
      throw new Error(e);
    }
  }
}
