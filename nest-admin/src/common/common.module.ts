import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1day' },
    }),
  ],
  exports: [JwtModule],
})
export class CommonModule {}
