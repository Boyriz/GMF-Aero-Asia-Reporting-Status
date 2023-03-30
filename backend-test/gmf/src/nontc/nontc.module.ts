import { Module } from '@nestjs/common';
import { NontcService } from './nontc.service';
import { NontcController } from './nontc.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [NontcService],
  controllers: [NontcController]
})
export class NontcModule {}
