import { Module } from '@nestjs/common';
import { TimecontrolledService } from './timecontrolled.service';
import { TimecontrolledController } from './timecontrolled.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TimecontrolledService],
  controllers: [TimecontrolledController]
})
export class TimecontrolledModule {}
