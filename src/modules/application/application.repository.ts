import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByKeyAndApplicationName(key: string, nameApplication: string) {
    return this.prisma.application.findUnique({
      where: {
        key,
        appName: nameApplication,
        revoked: false
      }
    });
  }
}
