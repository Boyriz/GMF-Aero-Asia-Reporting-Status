import { Module } from '@nestjs/common';
import { TslaService } from './tsla.service';
import { TslaController } from './tsla.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TslaService],
  controllers: [TslaController]
})
export class TslaModule {}
