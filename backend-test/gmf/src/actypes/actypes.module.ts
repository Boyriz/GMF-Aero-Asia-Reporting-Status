import { Module } from '@nestjs/common';
import { ActypesService } from './actypes.service';
import { ActypesController } from './actypes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ActypesService],
  controllers: [ActypesController]
})
export class ActypesModule {}
