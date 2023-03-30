import { Module } from '@nestjs/common';
import { NontimecontrolledService } from './nontimecontrolled.service';
import { NontimecontrolledController } from './nontimecontrolled.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [NontimecontrolledService],
  controllers: [NontimecontrolledController]
})
export class NontimecontrolledModule {}
