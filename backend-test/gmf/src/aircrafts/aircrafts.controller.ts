import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Res,
    UseGuards,
  } from '@nestjs/common';
import { AircraftsService } from './aircrafts.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileAircraftDto } from './aircrafts.dto';
import { AircraftDoc } from '@prisma/client';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('aircrafts')
export class AircraftsController {
    constructor(private readonly aircraftsService: AircraftsService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllAircraft() {
        return this.aircraftsService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getAircrafts(@Param('id', ParseIntPipe) id: number) {
        const aircraft = await this.aircraftsService.findOne(+id);
        if(!aircraft) {
            throw new NotFoundException(
                'AIRCRAFT DOCUMENT NOT FOUND',
            );
        }
        return this.aircraftsService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addAircrafts(@Res() res: Response, @Body() data: FileAircraftDto): Promise<AircraftDoc> {
        return await this.aircraftsService.create({});
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeAircrafts(@Param('id') id: number) {
        const aircraft = await this.aircraftsService.findOne(+id);
        if (!aircraft) {
            throw new NotFoundException(
                'AIRCRAFT DOCS RECORD NOT FOUND',
            );
        }
        return await this.aircraftsService.remove(+id);
    }

    // @Roles(Role.ADMIN)
    // @Patch(':id')
    // async updateAircrafts(
    //     @Param('id', ParseIntPipe) id: number,
    //     @Body() body: FileAircraftDto,
    // ) {
    //     const aircraft = await this.aircraftsService.get(+id);
    //     if(!aircraft) {
    //         throw new NotFoundException(
    //             'AIRCRAFT DOCUMENT RECORD NOT FOUND',
    //         );
    //     }
    //     return await this.aircraftsService.update(+id, body);
    // }

    @Roles(Role.ADMIN)
    @Patch('update/aircraft-operators')
    async assignAircraftOperators(@Body() body: { id: number, operatorId: number}) {
        return await this.aircraftsService.assignAircraftOperators(body.id, body.operatorId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/aircraft-registrations')
    async assignAircraftRegistartions(@Body() body: { id: number, registrationId: number}) {
        return await this.aircraftsService.assignAircraftRegistrations(body.id, body.registrationId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/aircraft-actypes')
    async assignAircraftACTypes(@Body() body: { id: number, acTypeId: number}) {
        return await this.aircraftsService.assignAircraftACTypes(body.id, body.acTypeId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/aircraft-components')
    async assignAircraftComponentStatus(@Body() body: { id: number, statusId: number}) {
        return await this.aircraftsService.assignAircraftComponentStatus(body.id, body.statusId);
    }
}
