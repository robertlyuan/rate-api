import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { MenuItem } from '../menu-item/menu-item.entity';
import { User } from '../user/user.entity';

@Entity()
export class MenuItemReview {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  @ManyToOne(() => MenuItem, (menuItem) => menuItem.id)
  public menuItemId: number;

  @Column({ type: 'decimal' })
  public rating: number;

  @Column({ type: 'varchar', length: 500 })
  public review: string;

  @Column()
  @ManyToOne(() => User, (user) => user.id)
  public userId: number;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
