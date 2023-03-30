import { Module } from '@nestjs/common';
import { InstallDatesService } from './install-dates.service';
import { InstallDatesController } from './install-dates.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [InstallDatesService],
  controllers: [InstallDatesController]
})
export class InstallDatesModule {}
