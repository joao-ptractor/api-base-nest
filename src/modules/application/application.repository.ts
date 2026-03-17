import { PrismaService } from '@/modules/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByKeyAndApplicationName(key: string, nameApplication: string) {
    return await this.prisma.application.findUnique({
      where: {
        key,
        appName: nameApplication,
        revoked: false
      }
    });
  }
}
