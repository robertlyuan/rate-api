import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get(':id')
  public getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    try {
      return this.service.getUser(id);
    } catch (e) {
      throw new Error(e);
    }
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    try {
      return this.service.createUser(body);
    } catch (e) {
      throw new Error(e);
    }
  }
}
