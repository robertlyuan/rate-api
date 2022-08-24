import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuItemReviewDto } from './menu-item-review.dto';
import { MenuItemReview } from './menu-item-review.entity';

@Injectable()
export class MenuItemReviewService {
  @InjectRepository(MenuItemReview)
  private readonly repository: Repository<MenuItemReview>;

  public getMenuItemReview(id: number): Promise<MenuItemReview> {
    return this.repository.findOne({ where: { id } });
  }

  public getMenuItemReviewsByMenuItem(
    menuItemId: number,
  ): Promise<MenuItemReview[]> {
    return this.repository.find({ where: { menuItemId } });
  }

  public createMenuItemReview(
    body: CreateMenuItemReviewDto,
  ): Promise<MenuItemReview> {
    const menuItemReview = new MenuItemReview();

    menuItemReview.menuItemId = body.menuItemId;
    menuItemReview.rating = body.rating;
    menuItemReview.review = body.review;
    menuItemReview.userId = body.userId;

    return this.repository.save(menuItemReview);
  }
}
