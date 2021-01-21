import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionController } from './permission.controller';
import { Permission } from './permission.entity';
import { PermissionService } from './permission.service';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService],
  imports: [TypeOrmModule.forFeature([Permission])]
})
export class PermissionModule {}
