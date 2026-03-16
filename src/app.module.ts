import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env.validations';
import { ApplicationModule } from './modules/application/application.module';
import { APP_GUARD } from '@nestjs/core';
import { ValidateApplicationGuard } from './common/guards/validateApplication.guard';

@Module({
  imports: [
    ApplicationModule,
    ConfigModule.forRoot({
      validate: validate
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ValidateApplicationGuard
    }
  ]
})
export class AppModule {}
