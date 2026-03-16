import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { DatabaseModule } from 'src/database/database.module';
import { ApplicationRepository } from './application.repository';

@Module({
  imports: [DatabaseModule],
  providers: [ApplicationService, ApplicationRepository],
  exports: [ApplicationService]
})
export class ApplicationModule {}
