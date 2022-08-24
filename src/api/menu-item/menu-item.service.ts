import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuItemDto } from './menu-item.dto';
import { MenuItem } from './menu-item.entity';

@Injectable()
export class MenuItemService {
  @InjectRepository(MenuItem)
  private readonly repository: Repository<MenuItem>;

  public getMenuItem(id: number): Promise<MenuItem> {
    return this.repository.findOne({ where: { id } });
  }

  public getMenuItemsByRestaurant(restaurantId: string): Promise<MenuItem[]> {
    return this.repository.find({ where: { restaurantId } });
  }

  public createMenuItem(body: CreateMenuItemDto): Promise<MenuItem> {
    const menuItem: MenuItem = new MenuItem();

    menuItem.restaurantId = body.restaurantId;
    menuItem.itemName = body.itemName;
    menuItem.description = body.description || '';
    menuItem.category = body.category || '';

    return this.repository.save(menuItem);
  }
}
