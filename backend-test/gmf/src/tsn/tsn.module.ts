import { Module } from '@nestjs/common';
import { TsnService } from './tsn.service';
import { TsnController } from './tsn.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TsnService],
  controllers: [TsnController]
})
export class TsnModule {}
