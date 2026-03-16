import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ApplicationService } from 'src/modules/application/application.service';

interface ApplicationHeaders {
  headers: {
    key: string | undefined;
    nameapplication: string | undefined;
  };
}

@Injectable()
export class ValidateApplicationGuard implements CanActivate {
  constructor(private readonly applicationService: ApplicationService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<ApplicationHeaders>();

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

    return true;
  }
}
