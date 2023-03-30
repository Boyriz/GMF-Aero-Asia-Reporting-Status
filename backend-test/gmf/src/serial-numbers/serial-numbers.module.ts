import { Module } from '@nestjs/common';
import { SerialNumbersService } from './serial-numbers.service';
import { SerialNumbersController } from './serial-numbers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SerialNumbersService],
  controllers: [SerialNumbersController]
})
export class SerialNumbersModule {}
