import { Module } from '@nestjs/common';
import { PartNumbersService } from './part-numbers.service';
import { PartNumbersController } from './part-numbers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PartNumbersService],
  controllers: [PartNumbersController]
})
export class PartNumbersModule {}
