import { Module } from '@nestjs/common';
import { IntervalsService } from './intervals.service';
import { IntervalsController } from './intervals.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [IntervalsService],
  controllers: [IntervalsController]
})
export class IntervalsModule {}
