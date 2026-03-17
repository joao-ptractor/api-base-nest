import { ApplicationService } from '@/modules/application/application.service';
import { RequestApplication } from '@/modules/application/types/request-application';
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

declare module 'express' {
  interface Request {
    headers: {
      key: string;
      nameapplication: string;
    };
    application: RequestApplication;
  }
}

@Injectable()
export class ValidateApplicationGuard implements CanActivate {
  constructor(private readonly applicationService: ApplicationService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const key = request.headers.key;
    const nameapplication = request.headers.nameapplication;

    if (!key || !nameapplication) {
      throw new UnauthorizedException('Missing required headers: key and nameapplication');
    }

    const application = await this.applicationService.findByKeyAndApplicationName(
      key,
      nameapplication
    );

    if (!application) {
      throw new UnauthorizedException('Invalid key or nameapplication');
    }

    request.application = application;
    return true;
  }
}
