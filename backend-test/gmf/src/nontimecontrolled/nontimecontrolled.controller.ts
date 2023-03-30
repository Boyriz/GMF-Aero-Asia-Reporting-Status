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
    UseGuards,
  } from '@nestjs/common';
import { NontimecontrolledService } from './nontimecontrolled.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { FileNonTimeDto } from './nontimecontrolled.dto';

// @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('nontimecontrolled')
export class NontimecontrolledController {
    constructor(private nontimeService: NontimecontrolledService) {}

    @Roles(Role.ADMIN, Role.USER)
    @Get()
    getAllNonTime() {
        return this.nontimeService.findAll();
    }

    @Roles(Role.ADMIN, Role.USER)
    @Get(':id')
    async getNonTimes(@Param('id', ParseIntPipe) id: number) {
        const nontime = await this.nontimeService.findOne(+id);
        if(!nontime) {
            throw new NotFoundException(
                'NON TIME CONTROLLED DOCUMENT NOT FOUND',
            );
        }
        return this.nontimeService.findOne(+id);
    }

    @Roles(Role.ADMIN)
    @Post()
    async addNonTimes(
        @Body() body: FileNonTimeDto,
    ) {
        return await this.nontimeService.create(body);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    async removeNonTimes(@Param('id') id: number) {
        const nontime = await this.nontimeService.findOne(+id);
        if(!nontime) {
            throw new NotFoundException(
                'NON TIME CONTROLLED RECORD NOT FOUND',
            );
        }

        return await this.nontimeService.remove(+id);
    }

    @Roles(Role.ADMIN)
    @Patch(':id')
    async updateNonTimes(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: FileNonTimeDto,
    ) {
        const nontime = await this.nontimeService.get(+id);
        if(!nontime) {
            throw new NotFoundException(
                'NON TIME CONTROLLED RECORD NOT FOUND',
            );
        }
        return await this.nontimeService.update(+id, body);
    }

    @Roles(Role.ADMIN)
    @Patch('update/non-time-controlled-mpnumbers')
    async assignNonTimeMPNumbers(@Body() body: { id: number, mpNumberId: number }) {
        return await this.nontimeService.assignNonTimeMPNumbers(body.id, body.mpNumberId);
    }

    @Roles(Role.ADMIN)
    @Patch('update/non-time-controlled-aircrafts')
    async assignNonTimeAircrafts(@Body() Body: { id: number, aircraftDocId: number }) {
        return await this.nontimeService.assignNonTimeAircrafts(Body.id, Body.aircraftDocId);
    }
}
