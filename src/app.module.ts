import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env.validations';
import { ApplicationModule } from './modules/application/application.module';
import { APP_GUARD } from '@nestjs/core';
import { ValidateApplicationGuard } from './common/guards/validateApplication.guard';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validate
    }),
    ApplicationModule,
    AuthModule
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
