import { Module } from '@nestjs/common';
import { TcService } from './tc.service';
import { TcController } from './tc.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TcService],
  controllers: [TcController]
})
export class TcModule {}
