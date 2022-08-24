import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMenuItemReviewDto {
  @IsNumber()
  public menuItemId: number;

  @IsNumber()
  public rating: number;

  @IsString()
  @IsOptional()
  public review?: string;

  @IsNumber()
  public userId: number;
}
