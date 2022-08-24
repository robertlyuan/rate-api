import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { MenuItemReview } from '../menu-item-review/menu-item-review.entity';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  @OneToMany(
    () => MenuItemReview,
    (menuItemReview) => menuItemReview.menuItemId,
  )
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public restaurantId: string;

  @Column({ type: 'varchar', length: 120 })
  public itemName: string;

  @Column({ type: 'varchar', length: 250 })
  public description?: string;

  @Column({ type: 'varchar', length: 25 })
  public category?: string;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
