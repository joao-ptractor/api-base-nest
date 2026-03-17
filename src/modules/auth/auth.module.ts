import { DatabaseModule } from '@/modules/database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [],
  exports: []
})
export class AuthModule {}
