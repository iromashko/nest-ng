import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CommonModule } from 'src/common/common.module';
import { User } from './models/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User]), CommonModule, AuthModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
