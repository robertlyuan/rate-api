import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMenuItemDto {
  @IsString()
  @IsNotEmpty()
  public itemName: string;

  @IsString()
  @IsNotEmpty()
  public restaurantId: string;

  @IsString()
  @IsOptional()
  public description?: string = '';

  @IsString()
  @IsOptional()
  public category?: string = '';
}
