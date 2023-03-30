import { Module } from '@nestjs/common';
import { LifeRemainingsService } from './life-remainings.service';
import { LifeRemainingsController } from './life-remainings.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LifeRemainingsService],
  controllers: [LifeRemainingsController]
})
export class LifeRemainingsModule {}
