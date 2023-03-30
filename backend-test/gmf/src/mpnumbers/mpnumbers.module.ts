import { Module } from '@nestjs/common';
import { MpnumbersService } from './mpnumbers.service';
import { MpnumbersController } from './mpnumbers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MpnumbersService],
  controllers: [MpnumbersController]
})
export class MpnumbersModule {}
