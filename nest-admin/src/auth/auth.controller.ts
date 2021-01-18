import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterDTO } from './models/register.dto';

@Controller()
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() body: RegisterDTO) {
    const hashed = await bcrypt.hash(body.password, 12);

    if (body.password !== body.password_confirm) {
      throw new BadRequestException('Passwords do not match!');
    }

    return this.userService.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: hashed,
    });
  }
}
