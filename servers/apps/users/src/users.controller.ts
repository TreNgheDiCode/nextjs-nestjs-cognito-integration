import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { AuthService } from 'apps/auth/src/auth.service';
import {
  AuthLoginUserDto,
  AuthRegisterUserDto,
} from 'apps/auth/src/dto/auth.dto';

@Controller('api/users')
export class UsersController {
  constructor(
    private awsCognitoService: AuthService,
    private userService: UsersService,
  ) {}

  @Post('/register')
  async register(@Body() authRegisterDto: AuthRegisterUserDto) {
    return this.awsCognitoService.registerUser(authRegisterDto);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  async login(@Body() authLoginDto: AuthLoginUserDto) {
    return this.awsCognitoService.authenticateUser(authLoginDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  async getUsers() {
    return this.userService.getUsers();
  }
}
