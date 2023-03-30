import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperatorsModule } from './operators/operators.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { ActypesModule } from './actypes/actypes.module';
import { ComponentsModule } from './components/components.module';
import { AircraftsModule } from './aircrafts/aircrafts.module';
import { TimecontrolledModule } from './timecontrolled/timecontrolled.module';
import { NontimecontrolledModule } from './nontimecontrolled/nontimecontrolled.module';
import { MpnumbersModule } from './mpnumbers/mpnumbers.module';
import { PartNumbersModule } from './part-numbers/part-numbers.module';
import { SerialNumbersModule } from './serial-numbers/serial-numbers.module';
import { DescriptionsModule } from './descriptions/descriptions.module';
import { TasksModule } from './tasks/tasks.module';
import { InstallDatesModule } from './install-dates/install-dates.module';
import { TsnModule } from './tsn/tsn.module';
import { IntervalsModule } from './intervals/intervals.module';
import { TslaModule } from './tsla/tsla.module';
import { LifeRemainingsModule } from './life-remainings/life-remainings.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LocationModule } from './location/location.module';
import { TcModule } from './tc/tc.module';
import { NontcModule } from './nontc/nontc.module';
import { ConnectorsModule } from './connectors/connectors.module';
import { ViewConnectorModule } from './view-connector/view-connector.module';

@Module({
  imports: [AuthModule, 
            PrismaModule, 
            UsersModule, 
            OperatorsModule,
            RegistrationsModule, 
            ActypesModule, 
            ComponentsModule, 
            AircraftsModule, 
            TimecontrolledModule, 
            NontimecontrolledModule, 
            MpnumbersModule, 
            LocationModule, 
            PartNumbersModule, 
            SerialNumbersModule, 
            DescriptionsModule, 
            TasksModule, 
            InstallDatesModule, 
            TsnModule, 
            IntervalsModule, 
            TslaModule, 
            LifeRemainingsModule,
            LocationModule,
            TcModule,
            NontcModule,
            ConnectorsModule,
            ViewConnectorModule,
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
