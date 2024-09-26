import { BadRequestException } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RegisterDto } from './dto/user.dto';
import { RegisterResponse } from './types/user.types';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Response } from 'express';

@Resolver('User')
// @UseFilters
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please provide all required fields');
    }

    const user = await this.usersService.register(registerDto, context.res);

    return { user };
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}
