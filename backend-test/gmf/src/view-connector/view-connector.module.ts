import { Module } from '@nestjs/common';
import { ViewConnectorService } from './view-connector.service';
import { ViewConnectorController } from './view-connector.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ViewConnectorService],
  controllers: [ViewConnectorController]
})
export class ViewConnectorModule {}
